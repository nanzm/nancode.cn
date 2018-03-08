import React, {Component} from 'react';
import {Form, Icon, Button, Notify} from 'zent';
import api from "@/api/user";

import "./index.less";

const {FormInputField, createForm} = Form;

class FieldForm extends Component {
    submit = (values, zentForm) => {
        api.login(values).then((res) => {
            if (res.data.code === 0) {
                this.props.history.push("/home");
                Notify.success('登录成功')
            } else {
                Notify.error('账号或密码错误，请重试')
            }
        });
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="login-container">
                <div className="header">
                    <a href="/"><Icon type="summary" className="icon"/>Nan</a>
                    <p>开发平台</p>
                </div>
                <div className="main">
                    <Form horizontal onSubmit={handleSubmit(this.submit)}>
                        <FormInputField
                            name="account"
                            type="text"
                            label="账号"
                            placeholder="请输入账号"
                            validations={{required: true}}
                            validationErrors={{required: '请输入账号'}}
                        />
                        <FormInputField
                            name="password"
                            type="password"
                            label="密码"
                            placeholder="请输入密码"
                            validations={{required: true}}
                            validationErrors={{required: '请输入密码'}}
                        />
                        <div className="btn-login">
                            <Button type="primary" size="large" htmlType="submit">登录</Button>
                        </div>
                    </Form>
                </div>
                <div className="footer">
                    <p className="copyright">@nancode.cn</p>
                </div>
            </div>
        );
    }
}

const WrappedForm = createForm()(FieldForm);

export default WrappedForm;
