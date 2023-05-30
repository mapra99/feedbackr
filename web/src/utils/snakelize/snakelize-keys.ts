import snakelize from './snakelize'

interface ObjectStrKeys {
  [key: string]: unknown
}

const { isArray } = Array;
const isObject = (x: unknown): boolean => x === Object(x) && !isArray(x) && typeof x !== 'function';

export default function snakelizeKeys(x: ObjectStrKeys | ObjectStrKeys[]): object | Array<object> {
  if (isArray(x)) return x.map(elem => snakelizeKeys(elem))
  if (!isObject(x)) return x

  const newX: ObjectStrKeys = {}
  Object.keys(x).forEach((key: string) => {
    newX[snakelize(key)] = snakelizeKeys(x[key] as ObjectStrKeys);
  })
  return newX
};
