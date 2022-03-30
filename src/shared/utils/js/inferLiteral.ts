export function inferLiteral<U, T extends U>(arg: T): T {
  return arg;
}