import './css/ErrorModal.css'
import Card from './Card'
import Button from './Button'

const ErrorModal = (props) => {
    return (
        <Card className='error-modal'>
            <header>
                <h2>
                    {props.title}
                </h2>
            </header>
            <div>
                <p>
                    {props.message}
                </p>
            </div>
            <footer className='error'>
                <Button>
                    Okay
                </Button>
            </footer>
        </Card>
    )
}

export default ErrorModal