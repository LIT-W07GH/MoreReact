import React from 'react';

class MySecondComponent extends React.Component {
    render() {
        return (
            <div style={{border: '1px solid green'}}>
                <h3>The number that was passed in was {this.props.number}</h3>
            </div>
        );
    }
}

export default MySecondComponent;
