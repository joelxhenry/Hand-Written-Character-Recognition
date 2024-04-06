import { createContext, useContext } from "react";

export interface DataInterface {
  handler: (image: ImageData, dataUrl: string) => void;
  image: string | undefined;
  response: { ch: string; val: number }[] | undefined;
  loading: boolean;
}

export const DataContext = createContext<DataInterface | undefined>(undefined);

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("Not within context scope");

  return context;
};
