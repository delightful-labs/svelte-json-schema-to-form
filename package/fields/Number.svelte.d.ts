/** @typedef {typeof __propDef.props}  NumberProps */
/** @typedef {typeof __propDef.events}  NumberEvents */
/** @typedef {typeof __propDef.slots}  NumberSlots */
export default class Number extends SvelteComponentTyped<{
    key: any;
    description: any;
    data: any;
    path: any;
    title: any;
    changeHandler: any;
    required?: boolean | undefined;
    minimum?: any;
    maximum?: any;
    multipleOf?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type NumberProps = typeof __propDef.props;
export type NumberEvents = typeof __propDef.events;
export type NumberSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        key: any;
        description: any;
        data: any;
        path: any;
        title: any;
        changeHandler: any;
        required?: boolean | undefined;
        minimum?: any;
        maximum?: any;
        multipleOf?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
