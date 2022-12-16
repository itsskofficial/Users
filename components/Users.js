const Users = (props) => {
    return (
        <Card className='user-container'>
            <h1>
                {props.user.userName}
            </h1>
            <h2>
                {props.user.userAge}
            </h2>
        </Card>
    )
}

export default Users