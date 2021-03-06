import { assoc } from '../js/assoc';

export function generateRandomString() {
  return Math.random().toString(36).substring(2, 15);
}

export const assignId = assoc('id', generateRandomString());

export const generateId = <O extends object>(obj: O) => assignId(obj);