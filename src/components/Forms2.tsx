import React from "react"
import { Tform, defaultForm } from "../interfaces"


const Form = () => {
  const [form, setForm] = React.useState<Tform>(defaultForm)
  const [counter, setCounter] = React.useState<number>(0)
  const [counter1, setCounter1] = React.useState<number>(1)

  //@ts-ignore
  const handleFormInput = (e: React.FormEvent) => {
    const target = e.target as HTMLFormElement
    setForm({ ...form, [target.name]: target.value })
  }

  const handleFormSubmit = () => {
    fetch("http://localhost:4000", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(form),
    })
  }

  return (
    <>
      <form >

        <label htmlFor="">First Name</label>
        <input type="text" name="firstName" id="" onChange={handleFormInput} />
        <br />
        <label htmlFor="">Last Name</label>
        <input type="text" name="lastName" id="" onChange={handleFormInput} />
        <br />
        <label htmlFor="">Email</label>
        <input type="email" name="email" id="" onChange={handleFormInput} />
        <br />
        <label htmlFor="">Password</label>
        <input type="password" name="password" id="" onChange={handleFormInput} />
      </form>
      <button onClick={handleFormSubmit}>Submit</button>
    </>
  )
}

export default Form