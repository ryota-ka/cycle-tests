import { DOMSource, VNode } from '@cycle/dom';
import { Stream } from 'xstream';

export type SoDOM = { DOM: DOMSource };
export type SiDOM = { DOM: Stream<VNode> };

export type SoMain = SoDOM;
export type SiMain = SiDOM;