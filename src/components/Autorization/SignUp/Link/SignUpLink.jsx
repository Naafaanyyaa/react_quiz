import React from "react";
import './SignUpLink.css'

class SignUpLink extends React.Component {
    render() {
        return (
            <div className="text-center p-t-115">
                            <span className="txt1">
                                Don’t have an account?
                            </span>

                <a className="txt2" href="src/components/Autorization/SignUp/Link/SignUpLink#">
                    Sign Up
                </a>
            </div>
        )
    }
}

export default SignUpLink;