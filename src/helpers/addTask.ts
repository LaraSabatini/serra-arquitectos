import { generateId } from "./generateId"

const addTask = (
  tasks: { id: number; text: string }[],
  currentTask: string,
) => {
  const randomId = generateId()

  const checkDuplicatedId = tasks.filter(task => task.id === randomId)

  return [
    ...tasks,
    {
      id: checkDuplicatedId.length > 0 ? randomId * 37 : randomId,
      text: currentTask,
    },
  ]
}

export { addTask }
