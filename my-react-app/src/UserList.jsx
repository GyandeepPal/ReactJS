import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserList = () => {
  const list = ["Gyan", "Gyan Deep"]
  const navigate = useNavigate()

  function fun1(id) {
    navigate(`/profile/${id}`)
  }

  return (
    <div>
      {list.map((data, id) => (
        <div key={id}>
          <h2>{data}</h2>
          <button onClick={() => fun1(id)}>
            Show
          </button>
        </div>
      ))}
    </div>
  )
}

export default UserList