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
                <article id="numbers">{
                    this.dial.map((row, number) => (
                        <section key={number} className="line">{
                            row.map((button, index) => (
                                <Button name={`number${index}`} text={button} info={`Number ${index}`}/>
                            ))
                        }
                        </section>
                    ))
                }
                </article>
            </main>
        )
    }
}