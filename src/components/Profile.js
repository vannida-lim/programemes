import React from 'react'

export default class Profile extends React.Component {
    render(){
        console.log(this.props)
        return(
            <div>
                <h2>Welcome to {this.props.current_user.username}'s Profile</h2>
            </div>
        )
    }
}