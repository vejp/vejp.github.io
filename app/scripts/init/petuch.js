'use strict';

import _ from 'lodash';
import $ from 'jquery';

export default function () {
    let img = $(`
        <img src = './app/img/vyta.jpg' style = 'width: 300px;'/>
        <img src = './app/img/petuh.jpg' style = 'width: 300px;'/>
    `);

    $('.main').append(img);
};
