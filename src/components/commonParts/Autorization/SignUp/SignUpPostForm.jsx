import React from "react";
import InputData from "../../InputData/InputData";
import MainButton from "../../MainButton/MainButton";

class SignUpPostFotm extends React.Component {
    render() {
        return (<form className="login100-form validate-form" method="post">
                <InputData dataValidate="Enter login" type="text" dataPlaceholder="Login" />
                <InputData dataValidate="Enter password" type="password" dataPlaceholder="Password" iconClass="fa-solid fa-eye text-color-grey" />
                <InputData dataValidate="Repeat password" type="password" dataPlaceholder="Repeat password" iconClass="fa-solid fa-eye text-color-grey" />
                <InputData dataValidate="Enter email" type="email" dataPlaceholder="Email" />
                <MainButton name="Sign In" color="blue"/>
            </form>
        )
    }
}

export default SignUpPostFotm;