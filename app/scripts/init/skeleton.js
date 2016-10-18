'use strict';

import $ from 'jquery';
import sel from 'scripts/constants/selectors';

export default function () {
    let body = $(sel.BODY);

    let container = $(
        `<div class = 'container'>
            <header class = 'header'>
                <h1></h1>
            </header>
            <main class = 'main'>
            </main>
        </div>`
    );

    let footer = $(`
        <footer class = 'footer'></footer>`
    );

    body.append(container, footer);
};
