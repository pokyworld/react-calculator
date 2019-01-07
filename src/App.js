import React, { Component, Fragment } from 'react';

import Calculator from './components/Calculator';

export class App extends Component {
    render() {
        return (
            <div className="container">
                <p style={{ marginTop: 10, marginBottom: 0 }}>React Calculator</p>
                <Calculator />
            </div>
        )
    }
};

export default App;
