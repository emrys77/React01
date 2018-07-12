import React from 'react'

export var Header = ( {QType},{section}) => {
    if ({QType} !== 'Intro'){
        Header = <header>Survive Armed Robbery | {section}</header>
    } else {
       Header = null
    }
}
