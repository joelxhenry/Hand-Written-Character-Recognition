// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getModel } from "../../app/model.server";
import * as tf from "@tensorflow/tfjs";

type Data = {
  error?: any;
  res?: { ch: string; val: number }[];
};

const alph = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = JSON.parse(req.body);

  try {
    const model = await getModel();
    const tensor = tf.tensor(data, [1, 28, 28, 1]);

    const tensorR = model.predict(tensor) as tf.Tensor;
    const dt = (await tensorR.array()) as number[][];
    const response = dt[0].map((val, i) => ({ ch: alph[i], val }));

    res.status(200).json({ res: response });
  } catch (error) {
    console.log(error);

    res.status(200).json({ error: "Something went wrong" });
  }
}
