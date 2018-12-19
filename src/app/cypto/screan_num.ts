export function gen_screen(len = 10) {
  const temp_num = [];
  for (let i = 0; i < len; i += 1) {
   temp_num.push({index: i, value: Math.random()});
  }
  return temp_num.sort((x, y) => {
    return x.value - y.value;
  }).map( (x) => {
    return x.index;
  });
}
