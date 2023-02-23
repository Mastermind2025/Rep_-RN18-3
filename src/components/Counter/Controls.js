import React from "react";

//компонент Controls принимает два propsa onIncreament, onDecreament
const Controls = ({onIncreament, onDecreament}) => (
    <div className="Counter__controls">
        <button type="button" onClick={onIncreament}>Увеличить на 1</button>
        <button type="button" onClick={onDecreament}>Уменьшить на 1</button>
    </div>
);
export default Controls;