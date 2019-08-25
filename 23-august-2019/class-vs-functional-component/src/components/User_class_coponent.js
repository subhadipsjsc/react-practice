import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div>
                children Property: {this.props.children ? this.props.children : 'not available' }
                name : {this.props.name ? this.props.name : 'not available'} 
            </div>
        )
    }
}
