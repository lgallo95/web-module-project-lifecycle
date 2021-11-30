import React from 'react';

class Follower extends React.Component{


    render(){
        // console.log(this.props.user['avatar_url'])
        return(
            <div>
                <img src={this.props.user['avatar_url']} />
                <h3>{this.props.user.login}</h3>
            </div>
        )
    }
}

export default Follower;