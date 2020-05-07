import React from 'react';

class NumberSubmitter extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <input  
                        value={this.props.textBoxValue}
                        className="form-control input-lg"
                        onChange={this.props.onNumberChange}
                        type="text" />
                </div>
                <div className="col-md-3">
                    <button
                        className="btn btn-primary btn-lg btn-block"
                        onClick={this.props.onAddClick}
                    >Add Number</button>
                </div>
            </div>
        );
    }
}

export default NumberSubmitter;