import React from 'react'
import Button from '../elements/button'
import '../../styles/calcs/_basic.scss'


export default class Basic extends React.Component {
    dial = [
        ['1', '2', '3', '*'],
        ['4', '5', '6', '/'],
        ['7', '8', '9', '+'],
        ['.', '0', '=', '-']
    ]
    render() {
        return(
            <main id="basic" className="calc">
                <article id="display">
                    <section id="operation"></section>
                </article>
                <article id="numbers">{
                    this.dial.map((row, number) => (
                        <section key={number} id={`line${number + 1}`} className="line">{
                            row.map((button, index) => (
                                <Button key={`${number + 1}${index + 1}`} name={`number${index}`} text={button} info={`Button ${index + 1}`}/>
                            ))
                        }
                        </section>
                    ))
                }
                </article>
                <article id="history">
                    <section id="operations"></section>
                </article>
            </main>
        )
    }
}