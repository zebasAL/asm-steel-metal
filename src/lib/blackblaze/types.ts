export type UploadFileResponse = {
  accountId: string;
  action: string;
  bucketId: string;
  contentLength: number;
  contentMd5: string;
  contentSha1: string;
  contentType: string;
  fileId: string;
  fileInfo: Record<string, any>;
  fileName: string;
  fileRetention: {
    isClientAuthorizedToRead: boolean;
    value: Record<string, any>;
  };
  legalHold: {
    isClientAuthorizedToRead: boolean;
    value: any;
  };
  serverSideEncryption: {
    algorithm: string | null;
    mode: string | null;
  };
  uploadTimestamp: number;
};


export type FileItem = {
  accountId: string;
  action: string;
  bucketId: string;
  contentLength: number;
  contentMd5: string;
  contentSha1: string;
  contentType: string;
  fileId: string;
  fileInfo: Record<string, any>; // Esto puede ser más específico según la estructura real de fileInfo
  fileName: string;
  fileRetention: Record<string, any>; // Esto puede ser más específico según la estructura real de fileRetention
  legalHold: Record<string, any>; // Esto puede ser más específico según la estructura real de legalHold
  serverSideEncryption: Record<string, any>; // Esto puede ser más específico según la estructura real de serverSideEncryption
  uploadTimestamp: number;
};


export type Bucket = {
  accountId: string;
  bucketId: string;
  bucketInfo: Record<string, any>; // Esto puede ser más específico según la estructura real de bucketInfo
  bucketName: string;
  bucketType: string;
  corsRules: any[]; // Esto puede ser más específico según la estructura real de corsRules
  defaultServerSideEncryption: Record<string, any>; // Esto puede ser más específico según la estructura real de defaultServerSideEncryption
  fileLockConfiguration: Record<string, any>; // Esto puede ser más específico según la estructura real de fileLockConfiguration
  lifecycleRules: any[]; // Esto puede ser más específico según la estructura real de lifecycleRules
  options: any[]; // Esto puede ser más específico según la estructura real de options
  replicationConfiguration: Record<string, any>; // Esto puede ser más específico según la estructura real de replicationConfiguration
  revision: number;
};
