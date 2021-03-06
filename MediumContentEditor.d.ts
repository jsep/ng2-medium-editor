// Imports
import {
    ElementRef,
    EventEmitter
} from 'angular2/core';
import {NgControl, ControlValueAccessor} from 'angular2/common';

/**
 * MediumEditor component
 */
export declare class MediumContentEditor implements ControlValueAccessor {

    value:any;
    instance:any;
    change:EventEmitter;

    constructor(elementRef:ElementRef, ngControl:NgControl);
    editorInit(config:any):void;
    hackUpdate():void;

    // ControlValueAccessor
    writeValue(value:any):void;
    onChange(_:any):void;
    registerOnChange(fn:Function):void;
    registerOnTouched(fn:Function):void;
    
}
