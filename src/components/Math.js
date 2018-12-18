import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Solver from './Solver'
import '../styles/demo.css';

export default class Math extends Component {
    state = {
        mathString: 'x^2 -3*x = 0'
    };

    onMathStringChange = (_, newValue) => {
        this.setState({
            mathString: newValue
        });
    }

    render() {
        return (
            <div className='demo'>
                <div className='input'>
                    <span className='yourInput'>Input</span>
                    <TextField
                        name='mathString'
                        value={this.state.mathString}
                        onChange={this.onMathStringChange}
                        underlineFocusStyle={{ borderColor: '#1d84ff' }}
                    />
                </div>
                <div className="stepsTitle">Đáp án</div>
                <Solver mathExpression={this.state.mathString} />
            </div>
        )
    }
}