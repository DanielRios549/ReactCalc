import React from 'react'
import Button from '../elements/button'


export default class Basic extends React.Component {
    render() {
        return(
            <main id="basic" className="calc">
                <article id="numbers">
                    <section className="line">
                        <Button name="number1" text="1" info="Number 1"/>
                        <Button name="number2" text="2" info="Number 2"/>
                        <Button name="number3" text="3" info="Number 3"/>
                    </section>
                    <section className="line">
                        <Button name="number4" text="4" info="Number 4"/>
                        <Button name="number5" text="5" info="Number 5"/>
                        <Button name="number6" text="6" info="Number 6"/>
                    </section>
                    <section className="line">
                        <Button name="number7" text="7" info="Number 7"/>
                        <Button name="number8" text="8" info="Number 8"/>
                        <Button name="number9" text="9" info="Number 9" />
                    </section>
                </article>
            </main>
        )
    }
}