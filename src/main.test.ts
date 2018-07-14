import { main } from './main';
import { mockDOMSource } from '@cycle/dom';
import { select } from 'snabbdom-selector';
import { Stream } from 'xstream';

describe('main', () => {
    it('renders an <input/> with the user-provided value', () => {
        expect.assertions(2);

        const expects = ['', 'ryota-ka'];

        const SoDOM = mockDOMSource({
            '.field': {
                input: Stream.of({ target: { value: 'ryota-ka' } }),
            },
        });

        const { DOM: SiDOM } = main({ DOM: SoDOM });

        SiDOM.addListener({
            next(vnode) {
                const input = select('input', vnode)[0];
                expect(input!.data!.props!.value).toBe(expects.shift());
            },
        });
    });
});