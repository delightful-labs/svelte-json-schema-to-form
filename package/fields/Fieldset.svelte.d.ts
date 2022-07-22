/** @typedef {typeof __propDef.props}  FieldsetProps */
/** @typedef {typeof __propDef.events}  FieldsetEvents */
/** @typedef {typeof __propDef.slots}  FieldsetSlots */
export default class Fieldset extends SvelteComponentTyped<{
    properties: any;
    changeHandler: any;
    data: any;
    title: any;
    path: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FieldsetProps = typeof __propDef.props;
export type FieldsetEvents = typeof __propDef.events;
export type FieldsetSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        properties: any;
        changeHandler: any;
        data: any;
        title: any;
        path: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
