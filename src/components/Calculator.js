import React, { Component } from 'react'
import { Container } from 'reactstrap';

import Display from './Display';
import ButtonTray from './ButtonTray';

import calculate from '../logic/calculate';

export class Calculator extends Component {
    state = {
        total: null,
        next: null,
        operation: null
    };

    handleClick = (buttonName) => {
        console.log(buttonName);
        this.setState(calculate(this.state, buttonName));
    };

    componentWillMount = () => {
        const total = "0";
        this.setState({ total })
    };

    componentDidUpdate = () => console.log(this.state);

    render() {
        const { total, next } = this.state;
        return (
            <Container className="dark-grey" style={styles.containerStyle}>
                <Display displayValue={next || total || "0"} />
                <ButtonTray
                    clickHandler={this.handleClick}
                />
            </Container>
        )
    }
};

const styles = {
    containerStyle: {
        border: "solid 8px #777",
        borderRadius: "10px"
    }
};

export default Calculator;
