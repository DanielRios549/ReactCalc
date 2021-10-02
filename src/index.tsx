import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/parts/header'
import Footer from './components/parts/footer'
import App from './components/app'
import './styles/app.scss'


ReactDOM.render(
    <React.StrictMode>
        <Header />
        <App />
        <Footer />
    </React.StrictMode>,
    document.getElementById('root')
);
