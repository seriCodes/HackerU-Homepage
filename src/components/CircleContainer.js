import React from 'react'

export const CircleContainer = (props) => {
    return (
        <div class={"shape "+props.class1+ " "+ props.class2}>
            {props.children}
        </div>
    )
}
