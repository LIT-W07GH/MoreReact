import React from 'react';

class NumberListDisplay extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.numbers.map((number, i) => <li key={i}>{number}</li>)}
                </ul>
            </div>);

    }
}

export default NumberListDisplay;