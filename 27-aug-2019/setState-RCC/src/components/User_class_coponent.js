import React, { Component } from 'react'
import UserPerticular from './User_perticular';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users :[
                { id:1, name : "name 1" , age : 10 },
                { id:2, name : "name 2" , age : 20 },
                { id:3, name : "name 3" , age : 30 },
            ],
            anotherUsers :[
                { id:1, name : "name 1" , age : 10 },
                { id:2, name : "name 2" , age : 20 },
                { id:3, name : "name 3" , age : 30 },
            ],
            title : this.props.children
        }
    }
    /*
        array.map is not mutable , if eact component of that array is number or string
        but if the components are objects , then the MAP method may mutate the object.

        so make clone of that object inside MAP method using {...object}.
    */
    
    add_age_by_5_anotherUsers = ()=>{
        let new_users_state = this.state.users.map((u)=>{
            const clone = {...u}
            clone.age += 5;
            return clone;
        })
        
        this.setState({
            anotherUsers:new_users_state
        },()=>{
            console.log(this.state.anotherUsers);
            console.log(this.state.users)
        });
    }

    add_age_by_5_users= ()=>{
        let new_users_state = this.state.users.map((u)=>{
            u.age += 5;
            return u;
        })
        
        this.setState({
            new_users_state
        },()=>{
            console.log(this.state.anotherUsers);
            console.log(this.state.users)
        });
    }
    
    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
               
                <button onClick={this.add_age_by_5_users}>Add Age 5 years to <b>user</b> state property</button>
                <br/><br/>
                state.users --- components
                <br/><br/>
                {
                    this.state.users.map( (u) => {
                        return <UserPerticular id={u.id} name={u.name} age={u.age}></UserPerticular>
                    })
                }
                
                <br/>
                <button onClick={this.add_age_by_5_anotherUsers}>Add Age 5 years to <b>anotherUser</b> state property</button>
                <br/>
                <br/>
                state.anotherUsers --- components
                <br/><br/>
                {
                    this.state.anotherUsers.map( (u) => {
                        return <UserPerticular id={u.id} name={u.name} age={u.age}></UserPerticular>
                    })
                }
            </div>
        )
    }
}
