import { getStorage } from "firebase-admin/storage";
import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import * as _ from "radash";
import { installFirebaseApp } from "../../firebase";

const storage = multer.memoryStorage();

export const config = {
  api: {
    bodyParser: false,
  },
};

async function uploadStorage(
  file: Express.Multer.File
): Promise<{ url: string }> {
  return new Promise((resolve) => {
    const storage = getStorage();
    const key = _.uid(10);

    const ext = file.mimetype.split("/")[1];

    const f = storage
      .bucket(process.env.FIREBASE_STORAGE)
      .file(`${key}.${ext}`);

    const stream = f.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });
    stream.end(file.buffer, "base64", async () => {
      await f.makePublic();
      resolve({
        url: f.publicUrl(),
      });
    });
  });
}

const handler = nc<
  NextApiRequest & {
    file: File;
  },
  NextApiResponse
>();

handler.post(multer({ storage }).single("file"), async (req, res) => {
  try {
    installFirebaseApp();
    const resolveUrl = await uploadStorage(req.file);

    return res.send({
      resolveUrl: resolveUrl.url,
    });
  } catch (e) {
    return res.status(500).send({
      message: "upload failed",
    });
  }
});

export default handler;
