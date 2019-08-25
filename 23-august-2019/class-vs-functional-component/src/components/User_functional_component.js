import React from 'react'

export default function User_functional_component(props) {
    return (
        <div>
            children Property: {props.children ? props.children : 'not available' }
            name : {props.name ? props.name : 'not available'}
        </div>
    )
}
