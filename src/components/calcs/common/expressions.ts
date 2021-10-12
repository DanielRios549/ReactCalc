import State from './state'

export default class Expression {
    constructor(
        private state: State
    ){}
    handleButton = (event: React.MouseEvent):object => {
        let data = event.currentTarget.getAttribute('data-display')
        let newState = {}
        let current = ''
        let result = false
        this.state.history = undefined

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
            this.state.history = this.history()
        }

        // Expression buttons

        else {
            current = this.show(data)
        }
        

        newState = {
            current: current,
            result: result,
            history: this.state.history
        }

        return newState
    }
    backSpace = () => {
        if ((this.state.current.length === 1) || (this.state.result !== false)) {
            return '0'
        }
        else {
            return this.state.current.slice(0, -1)
        }
    }
    show = (text: string | null) => {
        if (this.state.current === '0') {
            return `${text}`
        }
        else {
            return `${this.state.current}${text}`
        }
    }
    history = () => {
        return this.state.history = this.state.current
    }
    resolve = () => {
        let run = eval
        return run(this.state.current).toString()
    }
}