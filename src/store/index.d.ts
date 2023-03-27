import { iconAttr } from "@/types/storeIcon";
interface UserState {
    iconAttr: iconAttr;
}
export declare const useUserStore: import("pinia").StoreDefinition<"user", UserState, {
    getIconsAttr(): any;
}, {
    /** 设置图标信息 */
    editIcons(params: iconAttr): void;
    resetIcon(): void;
}>;
export {};
