import { useState } from 'react'
import './css/NewUser.css'

const NewUser = (props) => {
    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState(0)

    const formSubmitHandler = (event) => {
        console.log(userName,userAge)
        event.preventDefault()
        props.onAddUser({
            name: userName,
            age:userAge
        })

        setNewUserForm(
            <form className='new-user-form' onSubmit={formSubmitHandler}>
                    <div className='new-user-forn-label-container'>
                        <h2 className='new-user-form-label'>
                            Enter details
                        </h2>
                    </div>
                    <div className='new-user-form-input-container'>
                        <input className='new-user-form-input-name' placeholder='Enter name' onChange={nameChangeHandler}>
                        </input>
                        <input className='new-user-form-input-age' placeholder='Enter age' onChange={ageChangeHandler}>
                        </input>
                    </div>
                    <div className = 'new-user-form-actions'>
                        <button className='new-user-form-button' type='submit'>
                            Add User
                        </button>
                    </div>
                </form>
        )
    }

    const nameChangeHandler = (event) => {
        setUserName(event.target.value)
        console.log(userName)
    }

    const ageChangeHandler = (event) => {
        setUserAge(event.target.value)
        console.log(userAge)
    }


    const [newUserForm, setNewUserForm] = useState(
        <form className='new-user-form' onSubmit={formSubmitHandler}>
                    <div className='new-user-forn-label-container'>
                        <h2 className='new-user-form-label'>
                            Enter details
                        </h2>
                    </div>
                    <div className='new-user-form-input-container'>
                        <input type='text' className='new-user-form-input-name' placeholder='Enter name' onChange={nameChangeHandler} value={userName}>
                        </input>
                        <input type='number' className='new-user-form-input-age' placeholder='Enter age' onChange={ageChangeHandler} value={userAge}>
                        </input>
                    </div>
                    <div className = 'new-user-form-actions'>
                        <button className='new-user-form-button' type='submit'>
                            Add User
                        </button>
                    </div>
                </form>
    )


    return (
        <div>
               {newUserForm} 
        </div>
    )
}

export default NewUser