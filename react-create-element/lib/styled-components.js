let styled = {
    tags: ['p', 'h1', 'h2', 'h3', 'div', 'span', 'button', 'img'],
}

styled.tags.forEach((tag) => {
    styled[tag] = (styles) => {
        return (content) => {
            if (tag === 'img') {
                return `
                    <${tag} style="${styles}" ${content} />
                `
            }

            return `
                <${tag} style="${styles}">
                    ${content}
                </${tag}>
            `
        }
    }
})

export {
    styled
}
