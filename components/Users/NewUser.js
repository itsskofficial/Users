import Card from '../UI/Card'

const NewUser = (props) => {
    return (
        <Card className='new-user-form-container'>
            <form className='new-user-form'>
                <div className='new-user-forn-label-container'>
                    <h2 className='new-user-form-label'>
                        Enter details
                    </h2>
                </div>
                <div className='new-user-form-input-container'>
                    <input className='new-user-forn-input-name' placeholder='Enter name'>
                    </input>
                    <input className='new-user-forn-input-age' placeholder='Enter age'
                </div>
            </form>
        </Card>
    )
}

export default NewUser