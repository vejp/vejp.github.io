'use strict';

import sel from 'scripts/constants/selectors';
import lorem from 'lorem-ipsum';

export default {
    [sel.TITLE]: 'VEJP NATION',
    [sel.NAME]: 'V E J P   N A T I O N',
    [sel.MAIN]: lorem({ units: 'paragraphs', count: 6, paragraphLowerBound: 7, paragraphUpperBound: 17}),
    [sel.FOOTER]: 'Copyright © All Rights Reserved'
}
