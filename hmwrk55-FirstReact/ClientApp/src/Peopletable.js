import React from 'react';
import Personform from './Personform';
import Personrow from './Personrow';

class Peopletable extends React.Component {
    state = {
        people: [],
        firstName: '',
        lastName: '',
        age:''
    }
    onChangeFirstName = e => {
        console.log("infistnale");
        this.setState({ firstName: e.target.value });
      
    }
    onChangeLastName = e => {
        console.log('lastname');
        this.setState({ lastName: e.target.value });
        
    }
    onChangeAge = e => {
        console.log('age');
        this.setState({ age: e.target.value });
        
    }
    onAddClick = () => {
        console.log('add');
        const { firstName, lastName, age, people } = this.state;
        const person = {
            firstName,
            lastName,
            age
        }
        const copy = [...people, person];
        this.setState({ people: copy, firstName: '', lastName: '', age: '' });
    }
    onClearClick = () => {
        console.log('clear');
        this.setState({ people: '' });
    }

    generateTable =() => {
        if (this.state.people.length === 0){
            return <h1>No People Added Yet!!!!</h1>
        }
        else{
            return(
                <table className='table table-hover table-striped table-bordered mt-3'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.people.map((p, i) => <Personrow key={i} person={p} />)}
                    </tbody>
                </table>
            )
        }
        
    }

    render() {
        return (
            <div className='container mt-5'>
                <Personform 
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    age={this.state.age}
                    onAddClick={this.state.onAddClick}
                    onClearClick={this.state.onClearClick}
                    onChangeFirstName={this.state.onChangeFirstName}
                    onChangeLastName={this.state.onChangeLastName}
                    onChangeAge={this.state.onChangeAge}
                />
                {this.generateTable()}
            </div>    
        )
    }
}
export default Peopletable;