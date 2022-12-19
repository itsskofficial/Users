import './css/ErrorModal.css'
import Card from './Card'
import Button from './Button'
import ReactDom from 'react-dom'
import { Fragment } from 'react'

const Backdrop = (props) => {
    return (
        <div className='error-backdrop' onClick={props.onConfirm}>
        </div>
    )
}

const ModalOverlay = (props) => {
    return (
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
    )
}

const ErrorModal = (props) => {
    return (
        <Fragment>
            
            
        </Fragment>
        
    )
}

export default ErrorModal