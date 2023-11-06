import { useAppSelector } from "../store"

export function ToDoList() {
  const toDos = useAppSelector(store => store.toDo)

  console.log(toDos)

  return (
    <ul>
      {toDos.map((toDo: string) =>
        <li key={toDo}>{toDo}</li>
      )}
    </ul>
  )
}