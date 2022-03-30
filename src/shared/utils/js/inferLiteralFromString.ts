export function inferLiteralFromString<T extends string>(arg: T): T {
  return arg;
}