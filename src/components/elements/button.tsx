import React from 'react'

interface Props {
    name: string
    text: string
    info: string
}

export default class Button extends React.Component<Props> {
    render() {
        return(
            <button className="number" data-info={this.props.info}>
                <span>{this.props.text}</span>
            </button>
        )
    }
}