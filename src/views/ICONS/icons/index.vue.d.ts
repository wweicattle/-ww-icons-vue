declare const _default: import("vue").DefineComponent<{
    visble: {
        type: BooleanConstructor;
        default: boolean;
    };
    testNum: {
        type: NumberConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visble" | "selecIcon")[], "update:visble" | "selecIcon", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visble: {
        type: BooleanConstructor;
        default: boolean;
    };
    testNum: {
        type: NumberConstructor;
    };
}>> & {
    "onUpdate:visble"?: ((...args: any[]) => any) | undefined;
    onSelecIcon?: ((...args: any[]) => any) | undefined;
}, {
    visble: boolean;
}>;
export default _default;
