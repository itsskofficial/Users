import './css/ErrorModal.css'
import Card from './Card'
import Button from './Button'

const ErrorModal = (props) => {
    return (
        <div>
            
        </div>
        <div className='error-backdrop'>
        </div>
        <Card className='error-modal'>
            <header className='error-header'>
                <h2>
                    {props.title}
                </h2>
            </header>
            <div className='error-content'>
                <p>
                    {props.message}
                </p>
            </div>
            <footer className='error-actions'>
                <Button>
                    Okay
                </Button>
            </footer>
        </Card>
    )
}

export default ErrorModal