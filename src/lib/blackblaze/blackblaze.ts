import B2 from "backblaze-b2";
import { UploadFileResponse, FileItem, Bucket } from "./types"

class BackBlaze {
  private static instance: BackBlaze | null = null;
  private instanceB2: B2 | null = null; // Cambiado el nombre para evitar confusión
  private hostUrl = ""
  private baseUrl = "/" + "file" + "/" + process.env.BACKBLAZE_NAME
  
  private constructor() {
    const b2 = new B2({
      applicationKeyId: process.env.BACKBLAZE_KEY_ID ?? "",
      applicationKey: process.env.BACKBLAZE_APPLICATION_KEY ?? "",
    });
    this.instanceB2 = b2;
  }

  static async getInstance(): Promise<BackBlaze> {
    if (!BackBlaze.instance) {
      const b2 = new B2({
        applicationKeyId: process.env.BACKBLAZE_KEY_ID ?? "",
        applicationKey: process.env.BACKBLAZE_APPLICATION_KEY ?? "",
      });

      BackBlaze.instance = new BackBlaze();
    }

    return BackBlaze.instance;
  }

  async getBuckets(): Promise<Bucket[]> {
    await this.instanceB2?.authorize()
    const res = (await this.instanceB2?.getBucket({ bucketName: "" }))?.data as { buckets: Bucket[] }
    return res.buckets
  }

  async listItems(): Promise<{ url: string, type: string }[]> {
    const auth = await this.instanceB2?.authorize()
    this.hostUrl = auth?.data.downloadUrl

    const response = (await this.instanceB2?.listFileNames({
      bucketId: process.env.BACKBLAZE_BUCKET_ID ?? "",
      startFileName: "",
      maxFileCount: 1000, 
      delimiter: "",
      prefix: "",
    }))?.data as { files: FileItem[], nextFileName: null | unknown };

    const files = response.files.map((file) => ({
      url: this.hostUrl + this.baseUrl + "/" + file.fileName,
      type: file.contentType,
    }))

    return files
  }

  async downloadFileById(fileId: string): Promise<Buffer> {
    await this.instanceB2?.authorize()
    const response = await this.instanceB2?.downloadFileById({ fileId, responseType: "blob" })
    return response?.data
  }

  async getFileInfo(fileId: string): Promise<FileItem> {
    await this.instanceB2?.authorize()
    const response = (await this.instanceB2?.getFileInfo({ fileId }))?.data as FileItem
    return response
  }

  async uploadFile({ fileName, data }: { fileName: string, data: Buffer }): Promise<UploadFileResponse> {
    await this.instanceB2?.authorize()

    const part = await this.instanceB2?.getUploadUrl({
      bucketId: process.env.BACKBLAZE_BUCKET_ID ?? "",
    })
    const res = part?.data as { authorizationToken: string, bucketId: string, uploadUrl: string }

    const fileInfo = await this.instanceB2?.uploadFile({
      uploadUrl: res.uploadUrl,
      fileName,
      data,
      uploadAuthToken: res.authorizationToken,
      onUploadProgress: null,
    })

    return fileInfo?.data
  }
}

export default BackBlaze;