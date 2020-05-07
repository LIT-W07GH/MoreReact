import React from 'react';
import MySecondComponent from './MySecondComponent';

class MyFirstComponent extends React.Component {

    state = {
        number: 0,
        text: ''
    }

    getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    onButtonClick = () => {
        const randomNumber = this.getRandomNumber(50, 140);
        this.setState({ number: randomNumber });
    }

    onTextChange = e => {
        const value = e.target.value;
        this.setState({ text: value });
    }

    render() {
        return (
            <div>
                <h2 style={{ border: "1px solid red" }}>
                    The value of state number is {this.state.number}
                </h2>

                <input type="text" onChange={this.onTextChange} />
                <h2>{this.state.text}</h2>

                <button onClick={this.onButtonClick}>Click me</button>

                {/*<MySecondComponent number={this.state.number} /> */}
            </div>
        );
    }
}

export default MyFirstComponent;

//create a React application that has a textbox and an H2 underneath. As the
//user types into the textbox, the value of the H2 should be equal to the
//value in the textbox but in reverse. So if someone types "hello" into the
//textbox, the H2 should say "olleh". 