import React from 'react';

const Select = (props) => {
    const renderOptions = props.userList.map(user =>
        <option value={user.id} key={`user-${user.id}`}>{user.name}</option>
    )
    
    return (
        <select onChange={props.onChange} defaultValue="">
            <option value="">Select an avatar</option>
            {renderOptions}
        </select>
    );
}

const CurrentUser = (props) => {
    return (
        <div>
            <p>{props.currentUser && JSON.stringify(props.currentUser)}</p>
        </div>
    )
}


export default class User extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    handleChange = (event) => {
        this.props.selectUser(event.target.value);
    }

    render() {
        if (this.props.loading) {
            return (
                <div>Loading...</div>
            )
        } else if (this.props.error) {
            return (
                <div>{this.props.error.message}</div>
            )
        }

        return (
            <div>
                <Select onChange={this.handleChange} userList={this.props.userList} />
                <CurrentUser currentUser={this.props.currentUser} />
            </div>
        );
    }
}