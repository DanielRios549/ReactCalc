import React from 'react'
import '../../styles/components/parts/header.scss'


export default class Header extends React.Component {
  render () {
        return (
            <header id="header">
                <section id="container">
                    <h1 id="title">Calculator</h1>
                    <a id="github" href="https://github.com/DanielRios549/ReactCalc">Fork Me</a>
                </section>
            </header>
        )
  }
}