import {genKey} from './crypto';

export class Key {
  id: number;
  len: number;
  key: number[];
}

export const KEYS: Key[] = [
];

export function setKey(id: number, len: number) {
  const key = genKey(len);
  KEYS.push({id: id, len: len, key: key});
  return key;
}

export function consultKey(id: number, keys = KEYS) {
  for (const i of KEYS) {
    if (i.id === id) {
      return i.key;
    }
  }
  return -1;
}
