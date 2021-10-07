class Component {
    constructor(props = {}, state = {}) {
        this.props = props
        this.state = state
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentDidUpdate() {}

    update() {}
    #updater() {
        this.update(this.render())
        this.componentDidUpdate()
    }

    setState(newState) {
        this.state = {
            ...this.state,
            ...newState
        }

        this.#updater()
    }

    build() {
        this.componentWillMount()

        return this.render()
    }
}

export {
    Component
}
