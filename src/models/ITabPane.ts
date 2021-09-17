export class ITabPane {
    children!: JSX.Element | null;
    iSetTab!: (tab: number) => void;
}