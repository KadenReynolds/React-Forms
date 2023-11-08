import { useState } from "react"

export default function SignUpForm({setToken}){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  async function handleSubmit(event){
    event.preventDefault()
    try {
      let response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: 'POST',
        message: {"Content-Type":"application/json"},
        body: JSON.stringify({
          username,
          password,
        }),
      })
      let data = await response.json()

      setToken(data.token)
    } catch (error) {
      setError(error.message)
    }
  } 

  return (
  <div className="signUpDiv">
    <h2>Sign Up!</h2>
    {error && <p>{error}</p>}
    <form action="" onSubmit={handleSubmit}>
      <label>
        Username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password: <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  </div>
  )
}