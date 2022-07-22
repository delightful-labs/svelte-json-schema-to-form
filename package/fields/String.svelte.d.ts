/** @typedef {typeof __propDef.props}  StringProps */
/** @typedef {typeof __propDef.events}  StringEvents */
/** @typedef {typeof __propDef.slots}  StringSlots */
export default class String extends SvelteComponentTyped<{
    key: any;
    description: any;
    data: any;
    path: any;
    title: any;
    format: any;
    changeHandler: any;
    required?: boolean | undefined;
    minLength?: any;
    maxLength?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type StringProps = typeof __propDef.props;
export type StringEvents = typeof __propDef.events;
export type StringSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        key: any;
        description: any;
        data: any;
        path: any;
        title: any;
        format: any;
        changeHandler: any;
        required?: boolean | undefined;
        minLength?: any;
        maxLength?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
