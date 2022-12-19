import './css/ErrorModal.css'
import Card from './Card'
import Button from './Button'

const Backdrop = (props) => {
    return (
        <div className='error-backdrop' onClick={props.onConfirm}>
        </div>
    )
}

const ErrorModal = (props) => {
    return (
        <div>
            
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
                    <Button onClick={props.onConfirm}>
                        Okay
                    </Button>
                </footer>
            </Card>
        </div>
        
    )
}

export default ErrorModal