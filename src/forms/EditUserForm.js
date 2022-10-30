import React, { useState, useEffect } from 'react';

const EditUserForm = (props) => {

    const [user, setUser] = useState(props.currentUser)

    useEffect(
        () => {
            setUser(props.currentUser)
        },
        [props]
    )
    // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }
   

    return (
        <form
            onSubmit={event => {
                event.preventDefault()

                props.updateUser(user.id, user)
            }}
        >
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text"  class="form-control" value={user.name}  name="name"  onChange={handleInputChange}  />

            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Username</label>
                <input type="text" class="form-control"value={user.username} name="username" onChange={handleInputChange}  />
            </div>

          
            <button className='btn btn-outline-success me-2'>Update user</button>
            <button className="btn btn-outline-danger" onClick={() => props.setEditing(false)} >
                Cancel
            </button>
        </form>
    )

}

export default EditUserForm;
