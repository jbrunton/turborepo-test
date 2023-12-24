export const greet = (whom?: string): string => {
  return `Hello, ${whom ?? 'World'}!`;
}
