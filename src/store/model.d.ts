type ModelType = "left" | "right";
export declare const useModel: import("pinia").StoreDefinition<"Model", {
    model: string;
}, {
    getIconsAttr(): any;
}, {
    /** 设置图标信息 */
    editModel(model: ModelType): void;
}>;
export {};
