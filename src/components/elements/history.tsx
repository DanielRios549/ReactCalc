import React from 'react'


interface Props {
    item: string | undefined
}

interface State {
    items: string[]
}


export default class History extends React.Component<Props, State> {
    state = {
        items: [] as string[]
    }
    static getDerivedStateFromProps = (props: Props, state: State) => {
        if (props.item !== undefined) {
            return {
                items: [...state.items, props.item]
            }
        }
        return {}
    }
    shouldComponentUpdate = () => {
        if (this.props.item !== undefined) {
            return true
        }
        return false
    }
    render() {
        return(
            <aside id="history">
                <ul id="operations">{
                    this.state.items.map((item, index) => (
                        <li key={index} id={`${index}`} className="item">{
                            item
                        }
                        </li>
                    ))
                }
                </ul>
            </aside>
        )
    }
}