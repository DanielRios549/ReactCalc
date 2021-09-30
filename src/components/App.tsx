import React from 'react'
import Header from './parts/header'
import Footer from './parts/footer'
import Calc from './parts/calc'
import '../styles/App.css'


export default class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Calc />
                <Footer />
            </>
        );
    }
}
