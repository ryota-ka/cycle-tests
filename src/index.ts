import { makeDOMDriver } from '@cycle/dom';
import { run } from '@cycle/run';

import { main } from './main';

const drivers = {
    DOM: makeDOMDriver('#app'),
};

run(main, drivers);