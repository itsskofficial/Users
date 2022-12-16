const Users = (props) => {
    return (
        <Card className='user-container'>
            <h1>
                {props.user.name}
            </h1>
            <h2>
                {props.user.age}
            </h2>
        </Card>
    )
}

export default Users