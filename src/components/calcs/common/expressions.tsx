/* This file is not intended to be a React Component, only a file to make math operations */

import React from "react"

export default class Expression {
    changeDisplay(display: string, event: React.MouseEvent): object {
        let data = event.currentTarget.getAttribute('data-display')
        var newState = {}

        if (data === 'C') {
            if (display.length === 1) {
                newState = {current: "0"}
            }
            
            let remove = display.trim().split(' ').pop()

            if (remove !== undefined) {
                newState = {current: display.replace(remove, ' ').trim()}
            }
        }
        else {
            newState = {current: `${display} ${data}`}
        }

        return newState
    }
}