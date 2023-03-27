interface ThemeSetting {
    status?: number;
    theme?: string;
}
export declare const useTheme: import("pinia").StoreDefinition<"theme", ThemeSetting, {}, {
    editTheme(): void;
}>;
export {};
