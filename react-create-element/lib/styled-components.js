import { createElement } from './react'

function buildStyles(strings, dynamicValues, props) {
    let style = strings.slice()

    dynamicValues.forEach((value, index) =>{
        style[index] += value(props)
    })

    return style.join('')
}

let styled = {
    tags: ['p', 'h1', 'h2', 'h3', 'div', 'span', 'button', 'img'],
}

styled.tags.forEach((tag) => {
    styled[tag] = (strings, ...dynamicValues) => {
        return (props, content) => {
            const style = buildStyles(strings, dynamicValues, props)

            return createElement(tag, {
                ...props,
                style,
            }, content)
        }
    }
})

export {
    styled
}
