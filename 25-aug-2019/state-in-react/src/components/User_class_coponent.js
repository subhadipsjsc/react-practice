import React, { Component } from 'react'
import UserPerticular from './User_perticular';

export default class User extends Component {
    state = {
        users :[
            { name : "name 1" , age : 10 },
            { name : "name 2" , age : 20 },
            { name : "name 3" , age : 30 },
        ],
        title : this.props.children
    }
    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
                {
                    this.state.users.map( (u) => {
                        return <UserPerticular name={u.name} age={u.age}></UserPerticular>
                    })
                }
            </div>
        )
    }
}
