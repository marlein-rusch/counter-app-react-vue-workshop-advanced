import React, { Component } from 'react'

// This function-based component is the asnwer to bonus assignment 6:
function Button(props) {
    const { title, task } = props;
    return (
        <button
            className="btn btn-success mr-3 custom-button"
            onClick={task}
        >
            {title}
        </button>
    );
}

export default Button;

// When your component only renders something to the sreen and doesn't use any other lifecycle methods,
// then it is recommended to use a function based component (like above), and not a class based component (like below).

// Note that not much changes, except for how you get hold of your props: 'this.props' in the Class and 'props' in the function
// The idea remains the same: in both cases you pass along the props with the Button element (in App.js), and they are then magically made available in this component by React (which you import in the first line).

// Below Class-based Component isn't used right now, it's meant to compare with the function-based component at the top
class ClassBasedButton extends Component {
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