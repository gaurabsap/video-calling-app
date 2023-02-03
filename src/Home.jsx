import React, { useState } from 'react'
import "./style.scss"
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const [roomid, setRoomID] = useState('')
    const navigate = useNavigate()
    const Handlesubmit = (e) => {
        e.preventDefault()
        navigate(`/room/${roomid}`)
    }
  return (
    <>
    <form>
        <label htmlFor="code">Enter your id</label>
        <input value={roomid} type="text" required placeholder='Enter id number'onChange={(e)=>setRoomID(e.target.value)}/>
        <button onClick={Handlesubmit} type='submit'>Enter</button>
    </form>
    </>
  )
}

export default Home