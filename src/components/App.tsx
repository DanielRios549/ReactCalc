import React from 'react'
import Header from './parts/header'
import Footer from './parts/footer'
import '../styles/App.css'


export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Footer />
            </div>
        );
    }
}
