const Users = (props) => {
    return (
        <Card className='user-container'>
            <h1>
                {props.userName}
            </h1>
            <h2>
                {props.user}
            </h2>
        </Card>
    )
}

export default Users