export default class Expression {
    changeDisplay(display: string, event: React.MouseEvent): object {
        let data = event.currentTarget.getAttribute('data-display')
        let newState = {}
        let current = ''

        // Erase button

        if (data === 'C') {
            if (display.length === 1) {
                current = '0'
            }
            else {
                current = display.slice(0, -1)
            }
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
            current: current
        }

        return newState
    }
}