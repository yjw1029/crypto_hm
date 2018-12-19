import {KEYS} from './keys';

class Password {
  id: number;
  len: number;
  password: string;
}
export const mypswd = '0123456789';
export const PASSWORDS: Password[] = [
];

export function setPswd (id: number, pswd: string) {
  console.log('password:', {id: id, len: pswd.length, password: pswd});
  PASSWORDS.push({id: id, len: pswd.length, password: pswd});
}

export function getPswd (id: number, pswd: string) {
  for (const i of PASSWORDS) {
    if (i.id === id) {
      return i.password;
    }
  }
  return -1;
}
