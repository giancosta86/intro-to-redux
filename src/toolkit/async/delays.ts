export function delay(milliseconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

export async function getAfterDelay<T>(
  value: T,
  delayInMilliseconds: number
): Promise<T> {
  await delay(delayInMilliseconds / 2)
  await delay(delayInMilliseconds / 2)
  return value
}
