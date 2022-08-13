import React from "react";
import './MainButton.css';

class MainButton extends React.Component {
    render() {
        return (
            <div className="btn-container">
                <i className={this.props.icon}></i>
                <button
                    className={this.identifyColor(this.props.color)}>
                    {this.props.name}
                </button>
            </div>

        )
    }
    // "fa-solid fa-door-open"
    identifyColor(color) {
        switch (color) {
            case "blue": return "confirm-btn text-size-20 text-color-blue border-color-blue confirm-btn-blue";
            case "green": return "confirm-btn text-size-20 text-color-green border-color-green play-btn-green";
            case "red": return "confirm-btn text-size-20 text-color-red border-color-red back-btn-red";
            case "grey": return "confirm-btn text-size-20 text-color-grey border-color-grey action-btn-grey";
            default : return "confirm-btn text-size-20 text-color-blue border-color-blue confirm-btn-blue";
        }
    }
}

export default MainButton;