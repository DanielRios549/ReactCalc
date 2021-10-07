import React from 'react'
import State from '../calcs/common/state'

interface Props {
    name: string
    text: string
    info: string
    onClick: any
}

export default class Button extends React.Component<Props, State> {
    render() {
        return(
            <button onClick={this.props.onClick} className={this.props.name} data-info={this.props.info} data-display={this.props.text}>
                <span>{this.props.text}</span>
            </button>
        )
    }
}