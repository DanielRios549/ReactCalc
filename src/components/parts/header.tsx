import React from 'react'
import '../../styles/components/parts/header.scss'


export default class Header extends React.Component {
  render () {
        return (
            <header id="header">
                <h1 className="title">Calculator</h1>
            </header>
        )
  }
}