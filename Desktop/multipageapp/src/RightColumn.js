import React, { Component } from 'react';

class RightColumn extends Component {
    render() {
        return (
            <React.Fragment>
                <p>Homework</p>
                <div>
                    {this.props.hw.map((name, index) => (<div>
                        <h5>{index + 1}. {name.text}</h5>
                        <textarea></textarea>
                    </div>))}

                </div>
            </React.Fragment>
        );
    }
}

export default RightColumn;
