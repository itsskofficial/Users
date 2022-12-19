import { useState } from 'react'
import './css/NewUser.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helpers/Wrapper'

const NewUser = (props) => {
    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('')
    const [error,setError] = useState(null)

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
            return
        }

        if (userAge === 0) {
            setError({
                title:'Invalid Age',
                message:'Please enter age greater than 0'
            })
            return
        }
        props.onAddUser({
            key:Math.random(),
            name: userName,
            age: userAge,
        })

        setUserName('')
        setUserAge('')
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
            <form className='new-user-form' onSubmit={formSubmitHandler}>
                <div className='new-user-forn-label-container'>
                    <h2 className='new-user-form-label'>
                        Enter details
                    </h2>
                </div>
                <div className='new-user-form-input-container'>
                    <input type='text' className='new-user-form-input-name' placeholder='Enter name' onChange={nameChangeHandler} value={userName}>
                    </input>
                    <input type= 'number' className='new-user-form-input-age' placeholder='Enter age' onChange={ageChangeHandler} value={userAge}>
                    </input>
                </div>
                <div className = 'new-user-form-actions'>
                    <Button type='submit' onClick={formSubmitHandler}>
                        Add User
                    </Button>
                </div>
            </form>
        </Wrapper>
    )
}

export default NewUser