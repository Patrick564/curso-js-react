import { Component, createElement } from '../lib/react'

class User extends Component {
    state = {
        age: this.props.age
    }

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        console.log(this.state.age)
        this.setState({
            age: this.state.age + 1
        })
    }

    // handleClick = (event) => { log(this.props.name) }

    render() {
        const { name, avatar } = this.props
        const { age } = this.state

        return createElement('div', {
            onclick: this.handleClick,
            class: 'user',
            children: [
                createElement('div', {
                    class: 'avatar',
                    children: createElement('img', {
                        src: `${avatar}`
                    })
                }),
                createElement('h2', {}, `Hola soy ${name} y tengo ${age}`)
            ]
        })
    }
}

export {
    User
}
