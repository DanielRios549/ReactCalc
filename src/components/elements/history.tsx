import React from 'react'


interface Props {
    item: string | undefined
}

interface List {
    items: string[]
}


export default class History extends React.Component<Props, List> {
    state = {
        items: []
    }
    static getDerivedStateFromProps = (props: Props, state: List) => {
        if (props.item !== undefined) {
            return {
                items: [...state.items, props.item]
            }
        }
        return null
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