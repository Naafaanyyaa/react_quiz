import React from 'react';
import AuthorizationWrap from "./components/Autorization/AuthorizationWrap";
import {BrowserRouter, Route, Routes} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/signin" element={<AuthorizationWrap page="SignIn"/>} />
                    <Route path="/signup" element={<AuthorizationWrap page="SignUp"/>} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App;