/** @typedef {typeof __propDef.props}  RangeProps */
/** @typedef {typeof __propDef.events}  RangeEvents */
/** @typedef {typeof __propDef.slots}  RangeSlots */
export default class Range extends SvelteComponentTyped<{
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
export type RangeProps = typeof __propDef.props;
export type RangeEvents = typeof __propDef.events;
export type RangeSlots = typeof __propDef.slots;
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
