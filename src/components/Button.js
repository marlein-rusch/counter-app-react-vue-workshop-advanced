import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        const { title, task } = this.props
        return (
            <button
                className="btn btn-success mr-3 custom-button"
                onClick={task}>{title}
            </button>
        )
    }
}