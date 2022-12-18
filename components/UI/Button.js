import './css/Button.css'

const Button = (props) => {
    return (
        <button onClick={props.onClick} type={props.type}  className='button'>
        </button>
    )
}

export default Button