import React from 'react';
import './signIn/SignInStyle.css';
import './signIn/logIn'
import '../MainButton/MainButton'
import SignInPostFotm from "./signIn/SignInPostForm";
import SignInLink from "./signIn/Link/SignInLink";
import SignUpPostFotm from "./SignUp/SignUpPostForm";

class AutorizationWrap extends React.Component {
    render() {
        return (
            <main className="main">
                <div className="limiter">
                    <div className="wrap-login100">
                        <span className="login100-form-title p-b-74">
                            Welcome
                        </span>
                        <SignInPostFotm />
                        <SignInLink />
                    </div>
                </div>
            </main>
        )
    }
}

export default AutorizationWrap;