import Papaparse from "papaparse";

export const parseCsvData = (
  url: string,
  callBack: (data: any) => void
): void => {
  Papaparse.parse(url, {
    download: true,
    dynamicTyping: true,
    complete: (results: any) => {
      callBack(results.data);
    },
  });
};
