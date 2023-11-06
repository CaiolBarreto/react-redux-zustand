import { FormEvent, useState } from "react"
import { add } from "../store"
import { useDispatch } from "react-redux"

export function AddToDo() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  function handleNewToDo(event: FormEvent) {
    event.preventDefault()

    dispatch(add(value))

    setValue('')
  }

  return (
    <form onSubmit={handleNewToDo}>
      <input
        type="text"
        placeholder="New to do"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}