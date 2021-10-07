export default class Expression {
    constructor(
        public display: string,
        public remove: boolean
    ){}
    handleButton = (event: React.MouseEvent):object => {
        let data = event.currentTarget.getAttribute('data-display')
        let newState = {}
        let current = ''
        let result = false

        // Back button

        if (data === '←') {
            current = this.backSpace()
        }

        // Clear button

        else if (data == 'C') {
            current = '0'
        }

        // Equal button

        else if (data === '=') {
            current = this.resolve()
            result = true
        }

        // Expression buttons

        else {
            current = this.show(data)
        }
        

        newState = {
            current: current,
            result: result
        }

        return newState
    }
    backSpace = () => {
        if ((this.display.length === 1) || (this.remove !== false)) {
            return '0'
        }
        else {
            return this.display.slice(0, -1)
        }
    }
    show = (text: string | null) => {
        if (this.display === '0') {
            return `${text}`
        }
        else {
            return `${this.display}${text}`
        }
    }
    resolve = () => {
        return eval(this.display).toString()
    }
}