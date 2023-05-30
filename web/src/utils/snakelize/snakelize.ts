export default function snakelize(str: string) {
  return str.replace(/([A-Z])/g, (a) => {
    return `_${a.toLowerCase()}`
  });
};
