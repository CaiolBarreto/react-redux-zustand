import { useSelector } from "react-redux"

export function ToDoList() {
  const toDos = useSelector(store => store.toDo)

  console.log(toDos)

  return (
    <ul>
      {toDos.map((toDo: string) =>
        <li key={toDo}>{toDo}</li>
      )}
    </ul>
  )
}