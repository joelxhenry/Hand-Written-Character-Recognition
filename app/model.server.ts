import * as tf from "@tensorflow/tfjs";
import * as tfn from "@tensorflow/tfjs-node";
import * as path from "path";

export const getModel = async () => {
  const handler = tfn.io.fileSystem(
    path.resolve("./app/tf/a_zjsmodel/model.json")
  );
  return await tf.loadLayersModel(handler);
};
