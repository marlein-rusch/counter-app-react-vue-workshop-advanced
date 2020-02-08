import React, { Component } from 'react';
import Button from './components/Button';
import BatmanTile from './components/BatmanTile';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            batmanShows: []
        }
    }

    componentDidMount = () => {
        fetch('https://api.tvmaze.com/search/shows?q=batman')
            .then(response => response.json())
            .then(batmanShows => {
                // Assignment 1
                // In the ES6 Syntax, the line below can be written shorter by using Object Property Value Shorthand. Try it.
                this.setState({ batmanShows: batmanShows });
            });
    }

    incrementCount = () => {
        // Assignment 2
        // In React, state cannot be mutated directly by doing this.state.count++
        // Instead, we need to use a React method called setState(): https://reactjs.org/docs/react-component.html#setstate
        // Rewrite this function by using the setState() method
        this.state.count++
    }

    decrementCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    resetCount = () => {
        this.setState({
            count: 0
        })
    }

    render() {
        // Assignment 3
        // 2 lines below can be rewritten to 1 by using Object Descructering 
        // Try and rewrite it by using the documentation (see https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Operatoren/Destructuring_assignment)
        const batmanShows = this.state.batmanShows;
        const count = this.state.count;

        // Question 1
        // Why do we need to filter the array we receive from the API?
        // Try to see what happens if you directly pass on batmanShows (instead of batmanShowsToRender) to the map method a little further down below

        // Question 2
        // What does the underscore represent, and why isn't it used?
        // Tip: Because the first argument of the 'filter' method is not used, one convention is to use an underscore
        // Tip: Find more info on https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
        const batmanShowsToRender = batmanShows.filter((_, index) => index < count);

        return (
            <div className="container py-3">
                <div className="bg-light border border-dark rounded p-3 mb-3">
                    {/* Assignment 4
                      // Replace the static value xxx with the count
                      // Tip: You already declared a value 'count' at the top of this render method
                    */}
                    <h2 className="mb-4 display-4">Count: xxx</h2>
                    {/* FYI: this is a React Element.
                        It references a customized component that you as developer make in your code.
                        Along with it you pass props (properties), to customize the button
                        Learn more here: https://reactjs.org/docs/components-and-props.html
                    */}
                    <Button
                        title={"-"}
                        task={this.decrementCount}
                    />
                    <Button
                        title={"+"}
                        task={this.incrementCount}
                    />
                    <Button
                        title={"Reset"}
                        task={this.resetCount}
                    />
                </div>
                {/*
                    Question 3
                    The JavaScript ternary operator is used below (combined with JSX).
                    Can you explain what that is and why it is used here?
                */}
                <div className="bg-light border border-dark rounded p-3">
                    <div className="row">
                        {/* Question 4: why do we check if the length is more than zero?  */}
                        {(batmanShowsToRender.length > 0) ?
                            batmanShowsToRender.map(
                                batmanShow => <BatmanTile
                                    imageUrl={batmanShow.show.image.medium}
                                    name={batmanShow.show.name}
                                    premiered={batmanShow.show.premiered}
                                    rating={batmanShow.show.rating.average}
                                    readMoreUrl={batmanShow.show.url}
                                />
                            )
                            :
                            <div className="col">
                                Wups, your count is {count}. Increase it to see what happens!
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}