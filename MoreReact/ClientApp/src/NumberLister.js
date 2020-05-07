import React from 'react';
import NumberSubmitter from './NumberSubmitter';
import NumberListDisplay from './NumberListDisplay';

class NumberLister extends React.Component {

    state = {
        numbers: [],
        currentNumber: ''
    }

    onNumberChange = e => {
        this.setState({ currentNumber: e.target.value });
    }

    onAddClick = () => {
        const numbersCopy = [...this.state.numbers];
        numbersCopy.push(this.state.currentNumber);
        this.setState({ numbers: numbersCopy, currentNumber: '' });
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 60 }}>
                <NumberSubmitter
                    onNumberChange={this.onNumberChange}
                    textBoxValue={this.state.currentNumber}
                    onAddClick={this.onAddClick}
                />
                <NumberListDisplay numbers={this.state.numbers} />
            </div>);
    }
}



export default NumberLister;

//Create a React application that has the following functionality:

//On top, there should be three textboxes (firstname, lastname, age), and a button. 
//When the button is clicked, the person should get added to a table underneath
//the buttons, and the textboxes should get cleared out. One additional twist we'll
//add is that for each row on the table where the person is older than 65, 
//that row should be highlighted in red. Finally, on top of the page, there
//should also be a Clear People button that when clicked, should clear out the 
//the people in the table.

//This application should have three components: PeopleTable, PersonForm and PersonRow
//PeopleTable should be the top level component that has the array of persons, 
//and renders a <table>. Within the table body, you should render a PersonRow component
//for each person in the array, and pass in that person as a prop. 
//PersonRow should display a single row of a single person.
//PersonForm should have the textboxes as well as the Add and Clear People buttons. 

//<table>
//<thead>
    //<tr>
        //<th>....
    //</tr>
//</thead>
//<tbody>
//all of your <tr>s....
//</tbody>
//</table>