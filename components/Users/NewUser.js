import { useState } from 'react'
import './css/NewUser.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const NewUser = (props) => {
    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('')
    const [error,setError] = useState('')

    const nameChangeHandler = (event) => {
        setUserName(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setUserAge(event.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title:'Invalid Input',
                message:'Please enter valid name and age'
            })
        }
        props.onAddUser({
            name: userName,
            age:userAge
        })
        setUserName('')
        setUserAge('')

    }

    return (
        <div>
            <form className='new-user-form' onSubmit={formSubmitHandler}>
                <div className='new-user-forn-label-container'>
                    <h2 className='new-user-form-label'>
                        Enter details
                    </h2>
                </div>
                <div className='new-user-form-input-container'>
                    <input type='text' className='new-user-form-input-name' placeholder='Enter name' onChange={nameChangeHandler} value={userName}>
                    </input>
                    <input type= 'number' className='new-user-form-input-age' onChange={ageChangeHandler} value={userAge}>
                    </input>
                </div>
                <div className = 'new-user-form-actions'>
                    <Button type='submit' onClick={formSubmitHandler}>
                        Add User
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default NewUser