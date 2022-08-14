import React from 'react';
import AutorizationWrap from "./components/Autorization/AutorizationWrap";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignInPostForm from "./components/Autorization/signIn/SignInPostForm";
import SignUpPostForm from "./components/Autorization/SignUp/SignUpPostForm";


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/signin" element={<AutorizationWrap page="SignIn"/>} />
                    <Route path="/signup" element={<AutorizationWrap page="SignUp"/>} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App;