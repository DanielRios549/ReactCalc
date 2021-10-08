import React from 'react'
import Button from '../elements/button'
import Display from '../elements/display'
import History from '../elements/history'
import State from './common/state'
import Expression from './common/expressions'
import '../../styles/components/calcs/basic.scss'


export default class Basic extends React.Component<{}, State> {
    dial = [
        ['(', ')', '←', 'C'],
        ['1', '2', '3', '*'],
        ['4', '5', '6', '/'],
        ['7', '8', '9', '+'],
        ['.', '0', '=', '-']
    ]
    state = {
        current: '',
        result: false,
        history: []
    }
    update = (event: React.MouseEvent) => {
        let expression = new Expression(
            this.state.current,
            this.state.result,
            this.state.history
        )

        this.setState(
            expression.handleButton(event)
        )
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
                <History list={this.state.history}/>
            </main>
        )
    }
}