import React from 'react';

class ReverseDemo extends React.Component {

    state = {
        reversedText: ''
    }

    onTextChanged = e => {
        const reversedText = e.target.value.split('').reverse().join('');
        this.setState({ reversedText });
    }

    render() {
        const h2Styles = {
            color: 'red',
            fontSize: 50,
            textAlign: 'center'
        };

        return (
            <div className="container">
                <div className="row">
                    <h2 style={h2Styles}>{this.state.reversedText}</h2>
                    <input className="form-control input-lg" type="text" onChange={this.onTextChanged} />
                </div>
            </div>
        );
    }
}

export default ReverseDemo;