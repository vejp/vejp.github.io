'use strict';

import _ from 'lodash';
import $ from 'jquery';
import text from 'scripts/constants/text';

export default function () {
    _.forEach(text, (phrase, sel) => {
        $(sel).text(phrase);
    });
};
