import React,{useState} from 'react';
import './App.css';
import AdduserFrom from './forms/AdduserFrom';
import EditUserForm from './forms/EditUserForm';
import UserTable from './tables/UserTable';


function App() {
 

  const usersData = [
    { id:1, name: 'Harish', username: 'harish7' },
    { id:2, name: 'abc', username: 'abc123' },
    { id:3, name: 'xyz', username: 'xyz143' },
  ]
  const [users, setUsers] = useState(usersData)
  const [ editing, setEditing ] = useState(false)

  const [currentUser,setCurrentUser]=useState( { id: null, name: '', username: ''})
  
 

  const editRow = user => {
		setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}
  const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

  console.log(users)
  return (
    <div>
     
      <div className="container">
      <h1 className="my-4">CRUD App </h1>
        <div className="row">
          <div className="col-md-6">
          <h2>Add user</h2>
          {
            editing? <>
            <EditUserForm 
             currentUser={currentUser}
             setEditing={setEditing} 
             updateUser={updateUser} />
            
            </>:<AdduserFrom users={users}  setUsers={setUsers}/>
          }
          </div>
          <div className="col-md-6">
          <h2>View users</h2>
           <UserTable editRow={editRow} users={users} setUsers={setUsers}/>
          </div>
        </div>
      </div>
     </div>
  );
}

export default App;
