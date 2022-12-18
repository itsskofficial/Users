import { useState } from 'react'
import './css/NewUser.css'

const NewUser = (props) => {
    const [userName, setUserName] = useState('')
    const [userAge,setUserAge] = useState()

    const formSubmitHandler = (event) => {
        event.preventDefault()
        props.onAddUser({
            name: userName,
            age:userAge
        })
        
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