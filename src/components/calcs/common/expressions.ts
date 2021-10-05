export default class Expression {
    changeDisplay(display: string, remove: boolean, event: React.MouseEvent): object {
        let data = event.currentTarget.getAttribute('data-display')
        let newState = {}
        let current = ''
        let result = false

        // Erase button

        if (data === 'C') {
            if ((display.length === 1) || (remove !== false)) {
                current = '0'
            }
            else {
                current = display.slice(0, -1)
            }
        }

        // Equal button

        else if (data === '=') {
            current = eval(display).toString()
            result = true
        }

        // Expression buttons

        else {
            if (display === '0') {
                current = `${data}`
            }
            else {
                current = `${display}${data}`
            }
        }
        

        newState = {
            current: current,
            result: result
        }

        return newState
    }
}