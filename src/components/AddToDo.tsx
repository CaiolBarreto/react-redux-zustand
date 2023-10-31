import { FormEvent, useState } from "react"

export function AddToDo() {
  const [value, setValue] = useState('')

  function handleNewToDo(event: FormEvent) {
    event.preventDefault()

    console.log(event)
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