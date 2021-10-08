import React from 'react'


interface Props {
    list: string[]
}


export default class History extends React.Component<Props> {
    render() {
        return(
            <aside id="history">
                <ul id="operations">{
                    this.props.list.map((item, index) => (
                        <li id={`${index}`} className="item">{
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