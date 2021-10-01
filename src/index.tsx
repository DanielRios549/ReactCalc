import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/parts/header'
import Footer from './components/parts/footer'
import Body from './components/parts/body'
import './styles/app.scss'


ReactDOM.render(
    <React.StrictMode>
        <Header />
        <Body />
        <Footer />
    </React.StrictMode>,
    document.getElementById('root')
);
