import Papa from "papaparse";

const parseCSV = (url) => {
    console.log(url, "url")
  return new Promise((resolve, reject) => {
    Papa.parse(url, {
      download: true,
      header: true,
      complete: (results) => {
        resolve(results);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

export default parseCSV;
