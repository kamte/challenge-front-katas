export function kata2 (obj, def, path) {
  const args = [...arguments];
  // if we're missing arguments, curry the function
  if (args.length < kata2.length) return (...newArgs) => kata2(...[...args, ...newArgs]);

  const parts = path.split('.');
  try {
    return parts.reduce((o, prop) => o[prop], obj) || def;
  } catch(e) {
    return def;
  }
}