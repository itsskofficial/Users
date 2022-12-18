import { useState } from 'react'
import './css/NewUser.css'

const NewUser = (props) => {
    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState()
    const [newUserForm,setNewUserForm] = useState(<form className='new-user-form' onSubmit={formSubmitHandler}>
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
</form>)

    const formSubmitHandler = (event) => {
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
    }

    const ageChangeHandler = (event) => {
        setUserAge(event.target.value)
    }

    return (
        <div>
                
        </div>
    )
}

export default NewUser