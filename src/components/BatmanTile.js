import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        const { imageUrl, name, premiered, readMoreUrl, rating } = this.props

        return (
            <div className="col-12 col-md-4 col-lg-3 mb-4">
                <div className="d-flex flex-column border border-dark h-100">
                    <div className="text-center bg-dark">
                        <img alt={name} className="img-fluid" src={imageUrl} />
                    </div>
                    <h2 className="mx-3 mt-2">{name}</h2>
                    <div className="mx-3">Premiered: {premiered}</div>
                    <div className="mx-3 pb-3">Rating: {rating}</div>
                    <a href={readMoreUrl} className="btn btn-outline-primary mt-auto m-3">Read More</a>
                </div>
            </div>
        )
    }
}