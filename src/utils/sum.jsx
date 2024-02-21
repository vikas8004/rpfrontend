export const sum = (arr) => {
  let res = 0;
  const add = arr.map((num) => {
    res += num;
  });
  //   console.log(res);
  return res;
};

export function spreadSum(...arr) {
  return arr.reduce((acc, next) => acc + next);
}
