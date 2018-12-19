

export function genKey(len: number) {
  const Key = [];
  for (let i = 0; i < len; i += 1) {
    Key.push(Math.round(Math.random() * 10));
  }
  return Key;
}

export function crypto(M: string, Key: number[], len: number) {
  const arr_M = M.split('').map((m) => parseInt(m , 10));
  const arr_C = [];
  for (let i = 0; i < len; i += 1) {
    const j = i % Key.length;
    const C_value = (arr_M[i] ^ Key[j]) % 10;
    arr_C.push(C_value);
  }
  return arr_C.join('');
}
