import React from 'react'
import Button from './Button.js'

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <nav>
                    <Button direction="backward" />
                    <Button direction="forward" />
                </nav>
            </footer>
        )
    }
}