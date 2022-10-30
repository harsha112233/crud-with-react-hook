import React,{useState} from 'react';

const AdduserFrom = ({users,setUsers}) => {
    
    const initialFormState = { id:'',name: '', username: '' }
    const [newuser, setNewUser] = useState(initialFormState)

    const handlerInputChange=(event)=>{
        const { name, value } = event.target
          
      
        setNewUser({...newuser,[name]:value,id:users.length+1})
       
    
    }

    const handlerSubmit=(event)=>{
          event.preventDefault()
          if(newuser.name && newuser.username){
            var index=users.findIndex(object => object.name ===newuser.name )
            if(index==-1){
              
              setUsers([...users,newuser])
            }
            else{
              alert("alredy exits")
            }
          }

   
    }
    return (
        <div>
            <form onSubmit={(event)=>handlerSubmit(event)}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" value={newuser.name} name="name" onChange={handlerInputChange} />

                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Username</label>
                    <input type="text" class="form-control" value={newuser.username} name="username" onChange={handlerInputChange} />
                </div>

                <button  class="btn btn-primary">Add new user</button>
            </form>
        </div>
    );
}

export default AdduserFrom;
