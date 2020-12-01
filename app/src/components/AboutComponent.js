import React, { Component } from 'react';

export default class About extends Component {
    componentWillMount() {
        document.title = 'About | Phi12ip'
    }
    render() {
        return (
            <div>
                <h2>About</h2>
                <p>
                    Test
                </p>
            </div>
        );

    }
}
