import * as tf from '@tensorflow/tfjs'
import * as tfn from '@tensorflow/tfjs-node'



export const getModel = async () => {
  const handler = tfn.io.fileSystem('C:/Projects/AI/Letters/letters/app/tf/a_zjsmodel/model.json')
  return await tf.loadLayersModel(handler)
}