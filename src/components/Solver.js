import React, { Component } from 'react';
import mathsteps from 'mathsteps';
import '../styles/steps.css';
import ChangeMap from '../ChangeMap'

export default class Math extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listStep: [],
            mathString: this.props.mathExpression
        };

        this.displayData = [];
    };

    checkEquation = (mathString) => {
        if (this.state.mathString.contains("="))
            return true;
    }

    solveEquation = (equation) => {
        const steps = mathsteps.solveEquation(equation)
        steps.forEach((step, index) => {
            this.displayData.push(<p key={index + '0'}>{step.changeType}</p>)
            this.displayData.push(<p key={index + '1'}>=> {step.newEquation.ascii()}</p>)
            this.displayData.push(<br key={index + '2'} />)
        });
        this.setState({
            listStep: this.displayData
        });
    }

    componentWillMount() {
        this.solveEquation(this.state.mathString);
    }

    componentWillUpdate(){
        this.solveEquation(this.state.mathString);
    }

    render() {

        return (
            <div className="step">
                {this.state.listStep}
            </div>
        )
    }
}