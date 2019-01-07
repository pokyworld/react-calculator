import React from 'react';
import { Button } from 'reactstrap';

export const ButtonItem = (props) => {
    const { largeButton, color, value, clickHandler } = props;
    return (
        <div
            onClick={clickHandler}
            className={`${color} button`}
            style={(largeButton) ? { ...styles.button, ...styles.largeButton } : styles.button}
        >
            {value}
        </div>


    )
};

const styles = {
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2.3em",
        fontWeight: "700",
        minHeight: "15vh",
        minWidth: "15vw",
        cursor: "pointer",
    },
    largeButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        fontSize: "2.3em",
        fontWeight: "700",
        minHeight: "15vh",
        minWidth: "15vw",
        cursor: "pointer",
        paddingLeft: "23%"
    },
};

export default ButtonItem;
