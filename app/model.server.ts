import { loadLayersModel } from "@tensorflow/tfjs";
import { io } from "@tensorflow/tfjs-node";
import { resolve } from "path";

export const getModel = async () => {
  const handler = io.fileSystem(resolve("./app/tf/a_zjsmodel/model.json"));
  return await loadLayersModel(handler);
};
