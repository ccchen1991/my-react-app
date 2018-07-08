import React from 'react';

export default class Counter extends React.Component {
    render() {
        const { count, onIncreaseClick, onDecreaseClick } = this.props;
        return (
            <div>
                <button onClick = { onDecreaseClick }>-</button>
                <span>{ count }</span>
                <button onClick =  { onIncreaseClick }>+</button>
            </div>
        );
    }
}