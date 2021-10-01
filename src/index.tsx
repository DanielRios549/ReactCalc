import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import Header from './components/parts/header'
import Footer from './components/parts/footer'
import Body from './components/parts/body'
import './styles/App.css'


ReactDOM.render(
    <React.StrictMode>
        <Header />
        <Body />
        <Footer />
    </React.StrictMode>,
    document.getElementById('root')
);
