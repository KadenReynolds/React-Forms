import { useState } from "react"


export default function Authenticate({token}){
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const [username, setUsername] = useState("")

  async function handleClick(){
    try {
      let response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
        method: "GET",
        headers:{
          "Content-Type":"application/json",
          Authorization: `Bearer ${token}`
        }
      })
      let data = await response.json()
      console.log(data)
      setMessage(data.message)
      setUsername(data.data.iat)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <h2>Authentication</h2>
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
      {message && <p>{message}</p>}
      {username && <h3>{username}</h3>}
    </>
  )
}