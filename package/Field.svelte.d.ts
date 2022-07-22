/** @typedef {typeof __propDef.props}  FieldProps */
/** @typedef {typeof __propDef.events}  FieldEvents */
/** @typedef {typeof __propDef.slots}  FieldSlots */
export default class Field extends SvelteComponentTyped<{
    key: any;
    description: any;
    required: any;
    data: any;
    path: any;
    title: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        descriptionKey: string | undefined;
        value: any;
    };
}> {
}
export type FieldProps = typeof __propDef.props;
export type FieldEvents = typeof __propDef.events;
export type FieldSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        key: any;
        description: any;
        required: any;
        data: any;
        path: any;
        title: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            descriptionKey: string | undefined;
            value: any;
        };
    };
};
export {};
