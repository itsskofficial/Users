import Card

const User = (props) => {
    return (
        <Card className='user-container'>
            <h1 className='user-name'>
                {props.user.name}
            </h1>
            <h2 className='user-age'>
                {props.user.age}
            </h2>
        </Card>
    )
}

export default User