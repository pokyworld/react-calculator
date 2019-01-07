import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';

import { ButtonItem as Button } from './ButtonItem';

export class ButtonTray extends Component {
    handleClick = buttonName => {
        this.props.clickHandler(buttonName);
    };

    render() {
        return (
            <Fragment>
                <Row className="mid-grey">
                    <Col className="p-0"><Button clickHandler={() => this.handleClick("AC")} color="mid-grey" value="AC" /></Col>
                    <Col className="p-0"><Button clickHandler={() => this.handleClick("NEG")} color="mid-grey" value="+/-" /></Col>
                    <Col className="p-0"><Button clickHandler={() => this.handleClick("Percent")} color="mid-grey" value="%" /></Col>
                    <Col className="p-0"><Button clickHandler={() => this.handleClick("Divide")} color="orange" value="&#247;" /></Col>
                </Row>
                <Row className="mid-grey">
                    <Col className="p-0"><Button clickHandler={() => this.handleClick("7")} color="light-grey" value="7" /></Col>
                    <Col className="p-0"><Button clickHandler={() => this.handleClick("8")} color="light-grey" value="8" /></Col>
                    <Col className="p-0"><Button clickHandler={() => this.handleClick("9")} color="light-grey" value="9" /></Col>
                    <Col className="p-0"><Button clickHandler={() => this.handleClick("Multiply")} color="orange" value="x" /></Col>
                </Row>
                <Row className="mid-grey">
                    <Col className="p-0"><Button clickHandler={() => this.handleClick("4")} color="light-grey" value="4" /></Col>
                    <Col className="p-0"><Button clickHandler={() => this.handleClick("5")} color="light-grey" value="5" /></Col>
                    <Col className="p-0"><Button clickHandler={() => this.handleClick("6")} color="light-grey" value="6" /></Col>
                    <Col className="p-0"><Button clickHandler={() => this.handleClick("Subtract")} color="orange" value="-" /></Col>
                </Row>
                <Row className="mid-grey">
                    <Col className="p-0"><Button clickHandler={() => this.handleClick("1")} color="light-grey" value="1" /></Col>
                    <Col className="p-0"><Button clickHandler={() => this.handleClick("2")} color="light-grey" value="2" /></Col>
                    <Col className="p-0"><Button clickHandler={() => this.handleClick("3")} color="light-grey" value="3" /></Col>
                    <Col className="p-0"><Button clickHandler={() => this.handleClick("Plus")} color="orange" value="+" /></Col>
                </Row>
                <Row className="mid-grey">
                    <Col xs={6} className="p-0"><Button largeButton={true} clickHandler={() => this.handleClick("0")} color="light-grey" value="0" /></Col>
                    <Col className="p-0"><Button clickHandler={() => this.handleClick(".")} color="light-grey" value="." /></Col>
                    <Col className="p-0"><Button clickHandler={() => this.handleClick("Equals")} color="orange" value="=" /></Col>
                </Row>
            </Fragment>
        );
    }
};

export default ButtonTray;
