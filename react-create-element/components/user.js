import { Component, createElement } from '../lib/react'

class User extends Component {
    displayName = 'User'
    state = {
        age: this.props.age
    }

    componentDidMount() {
        console.log('el comp renderizo in display')
    }

    componentWillMount() {
        console.log('el comp se va a renderizar')
    }

    componentDidUpdate() {
        console.log('comp update')
    }

    // constructor(props) {
    //     super(props)
    //     this.handleClick = this.handleClick.bind(this)
    // }

    // handleClick(event) {
    //     console.log(this.state.age)
    //     this.setState({
    //         age: this.state.age + 1
    //     })
    // }

    handleClick = (event) => {
        console.log(this.state.age)
        this.setState({
            age: this.state.age + 1
        })
    }

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
