import camelize from './camelize'

interface ObjectStrKeys {
  [key: string]: unknown
}

const { isArray } = Array;
const isObject = (x: any): boolean => x === Object(x) && !isArray(x) && typeof x !== 'function';

export default function camelizeKeys(x: ObjectStrKeys | ObjectStrKeys[]): object | Array<object> {
  if (isArray(x)) return x.map(elem => camelizeKeys(elem))
  if (!isObject(x)) return x

  const newX: ObjectStrKeys = {}
  Object.keys(x).forEach(key => {
    newX[camelize(key)] = camelizeKeys(x[key] as ObjectStrKeys);
  })
  return newX
};
