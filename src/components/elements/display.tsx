import React from 'react'


interface Props {
    show: string
}


export default class Display extends React.Component<Props> {
    current = () => {
        if (this.props.show !== '') {
            return this.props.show
        }
        else {
            return '0'
        }
    }
    
    render() {
        return(
            <section id="display">
                <div id="operation">{this.current()}</div>
            </section>
        )
    }
}