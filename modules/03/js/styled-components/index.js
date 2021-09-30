let styled = {
    tags: ['p', 'h1', 'h2', 'h3', 'div', 'span', 'button'],
}

styled.tags.forEach((tag) => {
    styled[tag] = function (styles) {
        return function (content) {
            return `
                <${tag} style="${styles}">
                    ${content}
                </${tag}>
            `
        }
    }
})

export {
    styled,
}
