/** @typedef {typeof __propDef.props}  RadioProps */
/** @typedef {typeof __propDef.events}  RadioEvents */
/** @typedef {typeof __propDef.slots}  RadioSlots */
export default class Radio extends SvelteComponentTyped<{
    key: any;
    description: any;
    data: any;
    path: any;
    title: any;
    changeHandler: any;
    enum: any;
    required?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type RadioProps = typeof __propDef.props;
export type RadioEvents = typeof __propDef.events;
export type RadioSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        key: any;
        description: any;
        data: any;
        path: any;
        title: any;
        changeHandler: any;
        enum: any;
        required?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
