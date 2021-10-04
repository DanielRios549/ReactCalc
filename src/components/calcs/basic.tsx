import React from 'react'
import Button from '../elements/button'
import Display from '../elements/display'
import History from './common/history'
import '../../styles/calcs/_basic.scss'


export default class Basic extends React.Component<{}, History> {
    dial = [
        ['(', ')', '%', 'C'],
        ['1', '2', '3', '*'],
        ['4', '5', '6', '/'],
        ['7', '8', '9', '+'],
        ['.', '0', '=', '-']
    ]
    state = {
        current: ''
    }
    update = (event: any) => {
        this.setState({
            current: `${this.state.current} ${event.currentTarget.getAttribute('data-display')}`,
        })
    }
    render() {
        return(
            <main id="basic" className="calc">
                <Display show={this.state.current} />
                <section id="numbers">{
                    this.dial.map((row, number) => (
                        <div key={number} id={`line${number + 1}`} className="line">{
                            row.map((button, index) => {
                                let btnNumber = `${number + 1}-${index + 1}`
                                return <Button onClick={this.update} key={btnNumber} name={`button${btnNumber}`} text={button} info={`Button ${button}`}/>
                            })
                        }
                        </div>
                    ))
                }
                </section>
                <aside id="history">
                    <div id="operations"></div>
                </aside>
            </main>
        )
    }
}