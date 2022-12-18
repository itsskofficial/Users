import './css/Button.css'

const Button = (props) => {
    return (
        <button onClick={ props.onClick } className='button'>
        </button>
    )
}

export default Button