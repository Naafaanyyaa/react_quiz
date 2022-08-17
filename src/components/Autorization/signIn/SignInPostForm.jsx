import React from "react";
import MainButton from "../../commonParts/MainButton/MainButton";
import InputData from "../../commonParts/InputData/InputData";

class SignInPostForm extends React.Component {
    render() {
        return (
                <form className="login100-form validate-form" method="post">
                    <InputData type="text" dataPlaceholder="Login" name="login"/>
                    <InputData type="password" dataPlaceholder="Password" iconClass="fa-solid fa-eye" name="password"/>
                    <MainButton name="Sign In" color="blue"/>
                </form>
        )
    }
}

export default SignInPostForm;