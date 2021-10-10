import React from 'react'

interface Props {
    name: string
    text: string
    info: string
    onClick: any
}

export default class Button extends React.PureComponent<Props> {
    render() {
        return(
            <button onClick={this.props.onClick} className={this.props.name} data-info={this.props.info} data-display={this.props.text}>
                <span>{this.props.text}</span>
            </button>
        )
    }
}