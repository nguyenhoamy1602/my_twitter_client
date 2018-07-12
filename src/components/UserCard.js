import React, { Component } from 'react';
import { connect } from 'react-redux';

export class UserCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            follow: false
        }
        this.followUser = this.followUser.bind(this);
    }

    followUser(user) {
        console.log(user);
        this.setState({
            follow: !this.state.follow
        })
    }


    render() {
        const r = this.props.user
        if (this.props.user)
            return (
                <div key={r.user} className="card">
                    <div className="card-header">
                        <figure
                            className="avatar avatar-xl tooltip" data-tooltip={r.user}>
                            <img alt={r.user} src={r.userImage} />
                        </figure>
                        <p>{r.user}</p>
                    </div>
                    <button className="btn btn-login" onClick={this.followUser}> {this.state.follow ? "UnFollow" : "Follow"} </button>
                </div>
            );
    };

}


