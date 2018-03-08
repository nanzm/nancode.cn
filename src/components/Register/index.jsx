import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
// import axios from 'axios';

// import {Form, Icon, Button, Pop} from 'zent';

// const {FormInputField, createForm} = Form;

@withRouter
class FieldForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: '',
            repeatpwd: ''
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>Register</div>
        )
    }
}

// const WrappedForm = createForm()(FieldForm);

export default FieldForm;
