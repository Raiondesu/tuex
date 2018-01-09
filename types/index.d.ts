import { VueConstructor } from "vue/types/vue";
export declare type EventType = 'value' | 'getter' | 'setter' | 'action' | 'global';
/**
 *
 *
 * @class Tuex
 * @template T
 */
export default class Tuex<T extends {
    [key: string]: any;
}> {
    private _vue;
    private _eventPool;
    private _storeEvent(type, store, key, ...args);
    private _strict;
    /**
     * Creates an instance of Tuex.
     * @param {(T | (new () => T) | (() => T))} target - can be a plain object, function that returns an object or a constructor function (class)
     * @param {{
     *       strict?: boolean, // - whether to disallow state modifications
     *       plugins?: ((this: Tuex<T>) => any)[], // - optional plugins to install
     *     }} options
     * @memberof Tuex
     */
    constructor(target: T | (new () => T) | (() => T), options?: {
        strict?: boolean;
        plugins?: ((this: Tuex<T>) => any)[];
    });
    store: T;
    /**
     *
     *
     * @param {'value' | 'getter' | 'setter' | 'action' | 'global'} type
     * @param {(store: T, key: keyof T) => any} callback
     * @returns a funciton to unsubscribe from event
     * @memberof Tuex
     */
    subscribe(type: EventType, callback: (store: T, key: keyof T, ...args) => any): () => void;
    /** replaceStore
     *
     * A function that replaces the current store with the other one,
     * converting it from a target object/function/constructor
     *
     * @param {(T | (new () => T) | (() => T))} target
     * @memberof Tuex
     */
    replaceStore(target: T | (new () => T) | (() => T)): void;
    /** objectToStore
     *
     * Converts a plain js object into a valid Tuex-store
     *
     * @param {T} plain - object to convert
     * @param {new () => T} [constructor] - constructor (if any)
     * @returns {T} - converted store
     * @memberof Tuex
     */
    objectToStore(plain: T, constructor?: new () => T): T;
    install(Vue: VueConstructor): void;
}
