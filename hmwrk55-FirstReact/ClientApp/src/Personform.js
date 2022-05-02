import React from "react";

class Personform extends React.Component {
    render() {
        const { firstName, lastName, age, onChangeFirstName, onChangeLastName, onChangeAge, onAddClick, onClearClick } = this.props;
        ;
        return (
            <div className="row jumbotron">
                <div className="col-md-3">
                    <input type="text" placeholder="First Name" className="form-control" value={firstName} onChange={onChangeFirstName} />
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Last Name" className="form-control" value={lastName} onChange={onChangeLastName} />
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Age" name="age" className="form-control" value={age} onChange={onChangeAge} />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" onClick={onAddClick}>Add</button>
                    <button className="btn btn-warning ml-3" onClick={onClearClick}>Clear All</button>
                </div>
            </div>
        )
    }
}
export default Personform;