import React from 'react';
import './AutorizationWrapStyle.css';
import '../commonParts/MainButton/MainButton';
import SignInPostForm from "./signIn/SignInPostForm";
import SignUpPostForm from "./SignUp/SignUpPostForm";
import {NavLink} from "react-router-dom";



class AutorizationWrap extends React.Component {
    render() {
        let data = this.linkSpecification(this.props.page);
        return (
            <main className="main">
                <div className="limiter">
                    <div className="wrap-login100">
                        <span className="login100-form-title p-b-74">
                            Welcome
                        </span>
                        {data.postForm}
                        <div className="text-center p-t-115">
                            <span className="txt1">
                                {data.message}
                            </span>
                            <NavLink className="txt2" to={data.path}>
                                {data.keyword}
                            </NavLink>
                        </div>
                    </div>
                </div>
            </main>
        )
    }


    linkSpecification(registration) {
        let SignIn = {
            message: "Don’t have an account?",
            path: "/signup/",
            keyword: "Sign Up",
            postForm : <SignInPostForm />
        }
        let SignUp = {
            message: "Already have an account?",
            path: "/signin/",
            keyword: "Sign In",
            postForm : <SignUpPostForm />
        }
        if(registration === "SignIn"){
            return SignIn;
        }
        else if(registration === "SignUp"){
            return SignUp;
        }
    }
}


export default AutorizationWrap;