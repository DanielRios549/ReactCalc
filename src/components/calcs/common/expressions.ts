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