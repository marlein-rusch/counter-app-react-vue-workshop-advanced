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
                // setState() is called and the "batmanShows" state property is updated with all fetched shows
                // Note: this.setState({ batmanShows }) is shorthand for this.setState({ batmanShows: batmanShows });
                this.setState({ batmanShows });
            });
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
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
        const { batmanShows, count } = this.state;
        const batmanShowsToRender = batmanShows.filter((_, index) => index < count);

        return (
            <div className="container py-3">
                <div className="bg-light border border-dark rounded p-3 mb-3">
                    <h2 className="mb-4 display-4">Count: {count}</h2>
                    <Button
                        title={"-"}
                        task={this.decrementCount}
                    />
                    <Button
                        title={"+"}
                        task={this.incrementCount}
                    />
                    <Button
                        resetButton
                        title={"Reset"}
                        task={this.resetCount}
                    />
                </div>
                <div className="bg-light border border-dark rounded p-3">
                    <div className="row">
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