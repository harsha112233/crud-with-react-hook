import React from 'react'

const UserTable = ({users,setUsers,editRow}) => {
    
    const deleteUser=(id)=>{
        setUsers(users.filter((user)=>user.id!==id))
    }
    
  return (
 <>
    <table className="table mt-4">
    <thead className="table-warning">
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      {users.length > 0 ? (
        users.map((user,index) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button onClick={()=>editRow(user)}  className="btn btn-outline-warning btn-sm me-2">Edit</button>
              <button onClick={()=>deleteUser(user.id)} className="btn btn-outline-danger btn-sm">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}

    </tbody>
  </table>
 </>

  )
}

export default UserTable