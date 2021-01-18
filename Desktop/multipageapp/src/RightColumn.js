import React, { Component } from 'react';

class RightColumn extends Component {
    render() {

        const questions = this.props.hw;

        return (
            <React.Fragment>
                <p>Homework</p>
                <div>
                    {
                        Object.keys(questions).map((question, index) => (<div>
                            <h5>{questions[question]}</h5>
                            <textarea></textarea>
                        </div>))
                    }
                <iframe src="tools/template.html" height="2000px"></iframe>
                </div>
            </React.Fragment>
        );
    }
}

export default RightColumn;
