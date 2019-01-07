import React from 'react';
import { Row, Col } from 'reactstrap';

export const Display = (props) => {
    const { displayValue } = props;
    return (
        <Row className="dark-grey">
            <Col style={styles.column}>
                <h1 style={styles.display}>{displayValue}</h1>
            </Col>
        </Row>
    )
};

const styles = {
    column: {
        margin: 0,
        padding: 0,
    },
    display: {
        margin: 0,
        padding: '3vh',
        textAlign: 'right',
        fontSize: "3em",
        fontWeight: "600"
    }
}
export default Display;
