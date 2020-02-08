import React, { Component } from 'react'

export default class Button extends Component {
    render() {

        const { title, task } = this.props;

        return (
            <button
                className="btn btn-success mr-3 custom-button"
                // Assignment 5
                // The prop (property) 'title' is assigned a value but never used
                // Replace the static value 'xxx' with the dynamic title from the props
                onClick={task}>xxx
            </button>
        )
    }
}

// Assignment 6
// This entire component (so, this file) can be rewritten by using a Javascript function instead of class. Try it!
// Tip: look at the first 2 'Welcome' codeblocks on https://reactjs.org/docs/components-and-props.html