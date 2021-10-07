export default class Expression {
    constructor(
        public display: string,
        public remove: boolean
    ){}
    changeDisplay = (event: React.MouseEvent):object => {
        let data = event.currentTarget.getAttribute('data-display')
        let newState = {}
        let current = ''
        let result = false

        // Erase button

        if (data === 'C') {
            if ((this.display.length === 1) || (this.remove !== false)) {
                current = '0'
            }
            else {
                current = this.display.slice(0, -1)
            }
        }

        // Equal button

        else if (data === '=') {
            current = eval(this.display).toString()
            result = true
        }

        // Expression buttons

        else {
            if (this.display === '0') {
                current = `${data}`
            }
            else {
                current = `${this.display}${data}`
            }
        }
        

        newState = {
            current: current,
            result: result
        }

        return newState
    }
}