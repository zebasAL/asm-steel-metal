import type { NextApiRequest, NextApiResponse } from "next"
import Blackblaze from "~/lib/blackblaze/blackblaze"

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  try {
    const method = req.method;
    const { id } = req.query;

    const blackblaze = await Blackblaze.getInstance()

    switch (method) {
      case 'GET':

        if (id && typeof id === "string") {
          const item = await blackblaze.getFileInfo(id)
          return res.status(200).json({ success: true, file: item });
        } else {
          const items = await blackblaze.listItems()
          return res.status(200).json({ success: true, files: items });
        }
      case 'POST':
        const fileBuffer = Buffer.from(req.body, "binary");

        if (fileBuffer instanceof Buffer) {
          const bucket = await blackblaze.uploadFile({ fileName: "file.png", data: fileBuffer })
          console.log("bucket", bucket)
        }

        res.status(201).json({ message: 'This is a POST request' });
        break;
      // Add cases for other HTTP methods as needed
      default:
        res.status(405).json({ message: 'Method Not Allowed' });
        break;
    }

  } catch (error) {
    console.log("error", error)
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}