import { styled } from "../styled-components";
import { component as Component } from "../react";

const TitleStyle = styled.h1`
            color: orange;
            font-family: system-ui;
            text-shadow: 2px 2px 0 black;
        `

const props = {
    message: 'No te rindas',
}

let Title = Component`--- ${'message'} ---`(props)

const TitleComponent = TitleStyle(Title)

export {
    TitleComponent,
}
