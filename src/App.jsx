import React from 'react';
import ReactDOM from 'react-dom'
import {Route, Link, BrowserRouter as Router, BrowserRouter} from 'react-router-dom'
import AutorizationWrap from "./components/commonParts/Autorization/AutorizationWrap";



class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <AutorizationWrap />
            </BrowserRouter>
        )
    }
}

export default App;