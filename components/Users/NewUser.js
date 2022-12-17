import { useState } from 'react'
import './css/NewUser.css'

const NewUser = (props) => {
    const [userName, setUserName] = useState('')
    const [userAge,setUserAge] = useState()

    const formSubmitHandler = (event) => {
        event.preventDefault()
        event.stopPropagation()
        return {
            name:userName,
            age:userAge
        }
    }

    const nameChangeHandler = (event) => {
        setUserNam
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
                        <input className='new-user-forn-input-name' placeholder='Enter name'>
                        </input>
                        <input className='new-user-forn-input-age' placeholder='Enter age'>
                        </input>
                    </div>
                </form>
        </div>
    )
}

export default NewUser