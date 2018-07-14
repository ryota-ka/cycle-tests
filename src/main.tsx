import * as Snabbdom from 'snabbdom-pragma';

import { Stream } from 'xstream';
import { SoMain, SiMain } from './types';

export function main({ DOM }: SoMain): SiMain {
  const input$: Stream<Event> = DOM.select('.field').events('input');
  const name$: Stream<string> = input$.map((e: any) => e.target.value).startWith('');

  const vdom$ = name$.map(name =>
    <div>
        <label>Name:</label>
        <input className="field" type="text" value={ name } />
        <hr/>
        <h1>Hello { name }</h1>
    </div>
  );

    return {
        DOM: vdom$,
    };
}