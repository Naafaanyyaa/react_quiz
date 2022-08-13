import React from "react";
import './SignInLink.css'

class SignInLink extends React.Component {
    render() {
        return (
            <div className="text-center p-t-115">
                            <span className="txt1">
                                Don’t have an account?
                            </span>

                <a className="txt2" href="src/components/Autorization/signIn/Link/SignInLink#">
                    Sign Up
                </a>
            </div>
        )
    }
}

export default SignInLink;