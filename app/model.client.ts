export const predict = (x_value: number[], onSuccess: (data: any) => void) => {
  // console.log(x_value)/;
  fetch("api/model", {
    method: "POST",
    body: JSON.stringify(x_value),
  })
    .then((res) => res.json())
    .then((data) => {
      if (!data.res) throw new Error(data.error);
      onSuccess(data.res);
    })
    .catch((error) => console.log(error));
};
