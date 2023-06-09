const changeIndexPosition = <T>(
  array: T[],
  oldIndex: number,
  newIndex: number,
): T[] => {
  if (oldIndex < 0 || oldIndex >= array.length) {
    throw new Error("Old index is out of range.")
  }
  if (newIndex < 0 || newIndex >= array.length) {
    throw new Error("New index is out of range.")
  }

  const element = array.splice(oldIndex, 1)[0]
  array.splice(newIndex, 0, element)
  return array
}

export { changeIndexPosition }
