import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");

  const updatingUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    })
    const data = await response.json();
    console.log(data);
  }


  const webHook = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    })

    console.log(response)
  }

  return (
    <>
      <form className='form_Wrapper' onSubmit={updatingUser}>
      <label htmlFor="name">User Form</label>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={e => setName(e.target.value)} />
        <label htmlFor="name">Email</label>
        <input type="email" id="email" name="email" onChange={e => setEmail(e.target.value)}/>
        <br />
        <label htmlFor="email">Password</label>
        <input type="password" id="email" name="password"  onChange={e => setPassword(e.target.value)}/>
        <button type="submit">Submit</button>

      </form>
      
      <form onSubmit={webHook}>
        <label htmlFor="name">Webhook</label>
        <label htmlFor="name">Text</label>
        <input type="text" id="text" name="text" onChange={e => setText(e.target.value)} />
        <button >Submit</button>

      </form>

    </>
  )
}

export default App
