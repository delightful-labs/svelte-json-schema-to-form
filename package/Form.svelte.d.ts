/** @typedef {typeof __propDef.props}  FormProps */
/** @typedef {typeof __propDef.events}  FormEvents */
/** @typedef {typeof __propDef.slots}  FormSlots */
export default class Form extends SvelteComponentTyped<{
    data: any;
    path: any;
    changeHandler: any;
    schema: any;
    customFields?: {} | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FormProps = typeof __propDef.props;
export type FormEvents = typeof __propDef.events;
export type FormSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        data: any;
        path: any;
        changeHandler: any;
        schema: any;
        customFields?: {} | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
