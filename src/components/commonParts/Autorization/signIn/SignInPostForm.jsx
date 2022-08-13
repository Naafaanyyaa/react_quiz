import React from "react";
import MainButton from "../../MainButton/MainButton";
import InputData from "../../InputData/InputData";
class SignInPostFotm extends React.Component {
    render() {
        return (<form className="login100-form validate-form" method="post">
                    <InputData dataValidate="Enter login" type="text" dataPlaceholder="Login" />
                    <InputData dataValidate="Enter password" type="password" dataPlaceholder="Password" iconClass="fa-solid fa-eye text-color-grey" />
                    <MainButton name="Sign In" color="blue"/>
                </form>
        )
    }
}

export default SignInPostFotm;