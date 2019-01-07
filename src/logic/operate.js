import Big from "big.js";

export default function operate(numberOne, numberTwo, operation) {
    const one = Big(numberOne || "0");
    const two = Big(numberTwo || "0");

    if (operation === "Plus") {
        return one.plus(two).toString();
    }
    if (operation === "Subtract") {
        return one.minus(two).toString();
    }
    if (operation === "Multiply") {
        return one.times(two).toString();
    }
    if (operation === "Divide") {
        return one.div(two).toString();
    }
    throw Error(`Unknown operation '${operation}'`);
}