
export function sleep(msecs: number): Promise<number> {
  return new Promise<number>((resolve) => setTimeout(() => resolve(msecs), msecs));
}