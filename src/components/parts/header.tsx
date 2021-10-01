import React from 'react'
import '../../styles/parts/_header.scss'


export default class Header extends React.Component {
  render () {
        return (
            <header id="header">
                <h1 className="title">Calculator</h1>
            </header>
        )
  }
}