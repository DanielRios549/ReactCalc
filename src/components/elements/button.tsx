import React from 'react'
import History from '../calcs/common/history'

interface Props {
    name: string
    text: string
    info: string
    onClick: any
}

export default class Button extends React.Component<Props, History> {
    render() {
        return(
            <button onClick={this.props.onClick} className={this.props.name} data-info={this.props.info} data-display={this.props.text}>
                <span>{this.props.text}</span>
            </button>
        )
    }
}