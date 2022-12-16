const Users = (props) => {
    return (
        <Card className='user-container'>
            <h1>
                {props.userN}
            </h1>
        </Card>
    )
}

export default Users