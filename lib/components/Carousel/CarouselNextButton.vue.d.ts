import type { ButtonHTMLAttributes } from "vue";
import type { ClassProps } from "./interface";
export interface ButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
    asChild?: boolean;
}
declare var __VLS_inheritedAttrs: {};
declare const __VLS_templateResult: {
    slots: {
        default?(_: {
            autofocus: boolean | "true" | "false";
            disabled: boolean | "true" | "false";
            form: string;
            formaction: string;
            formenctype: string;
            formmethod: string;
            formnovalidate: boolean | "true" | "false";
            formtarget: string;
            name: string;
            type: "submit" | "reset" | "button";
            value: string | ReadonlyArray<string> | number;
            innerHTML: string;
            style: import("vue").StyleValue;
            accesskey: string;
            contenteditable: (boolean | "true" | "false") | "inherit" | "plaintext-only";
            contextmenu: string;
            dir: string;
            draggable: boolean | "true" | "false";
            hidden: (boolean | "true" | "false") | "" | "hidden" | "until-found";
            id: string;
            inert: boolean | "true" | "false";
            lang: string;
            placeholder: string;
            spellcheck: boolean | "true" | "false";
            tabindex: string | number;
            title: string;
            translate: "yes" | "no";
            radiogroup: string;
            role: string;
            about: string;
            datatype: string;
            inlist: any;
            prefix: string;
            property: string;
            resource: string;
            typeof: string;
            vocab: string;
            autocapitalize: string;
            autocorrect: string;
            autosave: string;
            color: string;
            itemprop: string;
            itemscope: boolean | "true" | "false";
            itemtype: string;
            itemid: string;
            itemref: string;
            results: string | number;
            security: string;
            unselectable: "on" | "off";
            inputmode: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
            is: string;
            'aria-activedescendant': string;
            'aria-atomic': boolean | "true" | "false";
            'aria-autocomplete': "none" | "inline" | "list" | "both";
            'aria-busy': boolean | "true" | "false";
            'aria-checked': (boolean | "true" | "false") | "mixed";
            'aria-colcount': string | number;
            'aria-colindex': string | number;
            'aria-colspan': string | number;
            'aria-controls': string;
            'aria-current': (boolean | "true" | "false") | "page" | "step" | "location" | "date" | "time";
            'aria-describedby': string;
            'aria-details': string;
            'aria-disabled': boolean | "true" | "false";
            'aria-dropeffect': "none" | "copy" | "execute" | "link" | "move" | "popup";
            'aria-errormessage': string;
            'aria-expanded': boolean | "true" | "false";
            'aria-flowto': string;
            'aria-grabbed': boolean | "true" | "false";
            'aria-haspopup': (boolean | "true" | "false") | "menu" | "listbox" | "tree" | "grid" | "dialog";
            'aria-hidden': boolean | "true" | "false";
            'aria-invalid': (boolean | "true" | "false") | "grammar" | "spelling";
            'aria-keyshortcuts': string;
            'aria-label': string;
            'aria-labelledby': string;
            'aria-level': string | number;
            'aria-live': "off" | "assertive" | "polite";
            'aria-modal': boolean | "true" | "false";
            'aria-multiline': boolean | "true" | "false";
            'aria-multiselectable': boolean | "true" | "false";
            'aria-orientation': "horizontal" | "vertical";
            'aria-owns': string;
            'aria-placeholder': string;
            'aria-posinset': string | number;
            'aria-pressed': (boolean | "true" | "false") | "mixed";
            'aria-readonly': boolean | "true" | "false";
            'aria-relevant': "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals";
            'aria-required': boolean | "true" | "false";
            'aria-roledescription': string;
            'aria-rowcount': string | number;
            'aria-rowindex': string | number;
            'aria-rowspan': string | number;
            'aria-selected': boolean | "true" | "false";
            'aria-setsize': string | number;
            'aria-sort': "none" | "ascending" | "descending" | "other";
            'aria-valuemax': string | number;
            'aria-valuemin': string | number;
            'aria-valuenow': string | number;
            'aria-valuetext': string;
            onCopy: ((payload: ClipboardEvent) => void) | undefined;
            onCut: ((payload: ClipboardEvent) => void) | undefined;
            onPaste: ((payload: ClipboardEvent) => void) | undefined;
            onCompositionend: ((payload: CompositionEvent) => void) | undefined;
            onCompositionstart: ((payload: CompositionEvent) => void) | undefined;
            onCompositionupdate: ((payload: CompositionEvent) => void) | undefined;
            onDrag: ((payload: DragEvent) => void) | undefined;
            onDragend: ((payload: DragEvent) => void) | undefined;
            onDragenter: ((payload: DragEvent) => void) | undefined;
            onDragexit: ((payload: DragEvent) => void) | undefined;
            onDragleave: ((payload: DragEvent) => void) | undefined;
            onDragover: ((payload: DragEvent) => void) | undefined;
            onDragstart: ((payload: DragEvent) => void) | undefined;
            onDrop: ((payload: DragEvent) => void) | undefined;
            onFocus: ((payload: FocusEvent) => void) | undefined;
            onFocusin: ((payload: FocusEvent) => void) | undefined;
            onFocusout: ((payload: FocusEvent) => void) | undefined;
            onBlur: ((payload: FocusEvent) => void) | undefined;
            onChange: ((payload: Event) => void) | undefined;
            onBeforeinput: ((payload: Event) => void) | undefined;
            onInput: ((payload: Event) => void) | undefined;
            onReset: ((payload: Event) => void) | undefined;
            onSubmit: ((payload: Event) => void) | undefined;
            onInvalid: ((payload: Event) => void) | undefined;
            onLoad: ((payload: Event) => void) | undefined;
            onError: ((payload: Event) => void) | undefined;
            onKeydown: ((payload: KeyboardEvent) => void) | undefined;
            onKeypress: ((payload: KeyboardEvent) => void) | undefined;
            onKeyup: ((payload: KeyboardEvent) => void) | undefined;
            onAuxclick: ((payload: MouseEvent) => void) | undefined;
            onClick: ((payload: MouseEvent) => void) | undefined;
            onContextmenu: ((payload: MouseEvent) => void) | undefined;
            onDblclick: ((payload: MouseEvent) => void) | undefined;
            onMousedown: ((payload: MouseEvent) => void) | undefined;
            onMouseenter: ((payload: MouseEvent) => void) | undefined;
            onMouseleave: ((payload: MouseEvent) => void) | undefined;
            onMousemove: ((payload: MouseEvent) => void) | undefined;
            onMouseout: ((payload: MouseEvent) => void) | undefined;
            onMouseover: ((payload: MouseEvent) => void) | undefined;
            onMouseup: ((payload: MouseEvent) => void) | undefined;
            onAbort: ((payload: Event) => void) | undefined;
            onCanplay: ((payload: Event) => void) | undefined;
            onCanplaythrough: ((payload: Event) => void) | undefined;
            onDurationchange: ((payload: Event) => void) | undefined;
            onEmptied: ((payload: Event) => void) | undefined;
            onEncrypted: ((payload: Event) => void) | undefined;
            onEnded: ((payload: Event) => void) | undefined;
            onLoadeddata: ((payload: Event) => void) | undefined;
            onLoadedmetadata: ((payload: Event) => void) | undefined;
            onLoadstart: ((payload: Event) => void) | undefined;
            onPause: ((payload: Event) => void) | undefined;
            onPlay: ((payload: Event) => void) | undefined;
            onPlaying: ((payload: Event) => void) | undefined;
            onProgress: ((payload: Event) => void) | undefined;
            onRatechange: ((payload: Event) => void) | undefined;
            onSeeked: ((payload: Event) => void) | undefined;
            onSeeking: ((payload: Event) => void) | undefined;
            onStalled: ((payload: Event) => void) | undefined;
            onSuspend: ((payload: Event) => void) | undefined;
            onTimeupdate: ((payload: Event) => void) | undefined;
            onVolumechange: ((payload: Event) => void) | undefined;
            onWaiting: ((payload: Event) => void) | undefined;
            onSelect: ((payload: Event) => void) | undefined;
            onScroll: ((payload: Event) => void) | undefined;
            onScrollend: ((payload: Event) => void) | undefined;
            onTouchcancel: ((payload: TouchEvent) => void) | undefined;
            onTouchend: ((payload: TouchEvent) => void) | undefined;
            onTouchmove: ((payload: TouchEvent) => void) | undefined;
            onTouchstart: ((payload: TouchEvent) => void) | undefined;
            onPointerdown: ((payload: PointerEvent) => void) | undefined;
            onPointermove: ((payload: PointerEvent) => void) | undefined;
            onPointerup: ((payload: PointerEvent) => void) | undefined;
            onPointercancel: ((payload: PointerEvent) => void) | undefined;
            onPointerenter: ((payload: PointerEvent) => void) | undefined;
            onPointerleave: ((payload: PointerEvent) => void) | undefined;
            onPointerover: ((payload: PointerEvent) => void) | undefined;
            onPointerout: ((payload: PointerEvent) => void) | undefined;
            onWheel: ((payload: WheelEvent) => void) | undefined;
            onAnimationstart: ((payload: AnimationEvent) => void) | undefined;
            onAnimationend: ((payload: AnimationEvent) => void) | undefined;
            onAnimationiteration: ((payload: AnimationEvent) => void) | undefined;
            onTransitionend: ((payload: TransitionEvent) => void) | undefined;
            onTransitionstart: ((payload: TransitionEvent) => void) | undefined;
            canScrollNext: boolean;
            scrollNext: () => void;
        }): any;
        default?(_: {}): any;
    };
    refs: {};
    attrs: Partial<typeof __VLS_inheritedAttrs>;
};
type __VLS_Slots = typeof __VLS_templateResult['slots'];
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<ButtonProps & ClassProps>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<ButtonProps & ClassProps>>>, {}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
