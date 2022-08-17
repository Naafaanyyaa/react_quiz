import React from "react";
import InputData from "../../commonParts/InputData/InputData";
import MainButton from "../../commonParts/MainButton/MainButton";

class SignUpPostForm extends React.Component {
    render() {
        return (
                <form className="login100-form validate-form" method="post">
                    <InputData dataValidate="Enter login" type="text" dataPlaceholder="Login" name="login" />
                    <InputData dataValidate="Enter password" type="password" dataPlaceholder="Password" iconClass="fa-solid fa-eye" name="password" />
                    <InputData dataValidate="Repeat password" type="password" dataPlaceholder="Repeat password" iconClass="fa-solid fa-eye" name="repeatPassword"/>
                    <InputData dataValidate="Enter email" type="email" dataPlaceholder="Email" name="email"/>
                    <MainButton name="Sign Up" color="blue"/>
                </form>
        )
    }
}

export default SignUpPostForm;