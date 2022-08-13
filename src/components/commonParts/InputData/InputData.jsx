import React from "react";
import './InputDataStyle.css';

class InputData extends React.Component {
    render() {
        return (
            <div className="wrap-input100 validate-input" data-validate={this.props.dataValidate}>
                    {this.buttonIcon(this.props.iconClass)}
                <input className="input100" type={this.props.type} name="pass" maxLength="25"/>
                <span className="focus-input100" data-placeholder={this.props.dataPlaceholder}></span>
            </div>
        )
    }

    buttonIcon(iconClass){
        if (iconClass != null){
            return <span className="btn-show-pass"> <i className={iconClass}></i> </span>;
        }
        return null;
    }

}



export default InputData;