import State from '../common/state'

export default class Expression implements State {
    constructor(
        public current: string,
        public result: boolean,
        public history: string[],
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

        else if (data === 'C') {
            current = '0'
        }

        // Equal button

        else if (data === '=') {
            current = this.resolve()
            result = true
            this.history.push(this.current)
        }

        // Expression buttons

        else {
            current = this.show(data)
        }
        

        newState = {
            current: current,
            result: result,
            history: this.history
        }

        return newState
    }
    backSpace = () => {
        if ((this.current.length === 1) || (this.result !== false)) {
            return '0'
        }
        else {
            return this.current.slice(0, -1)
        }
    }
    show = (text: string | null) => {
        if (this.current === '0') {
            return `${text}`
        }
        else {
            return `${this.current}${text}`
        }
    }
    resolve = () => {
        let run = eval
        return run(this.current).toString()
    }
}