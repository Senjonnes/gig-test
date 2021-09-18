export class IAllGigsFilter {
    iHandleFilter!: (tab: string[]) => void;
}

export class ITabPane {
    children!: JSX.Element | null;
    iSetTab!: (tab: number) => void;
}

export class ITag {
    id!: string;
    text!: string;
}

export class INewGigBasicDataForm {
    onClick!: () => void;
}

export class INewGigRenumerationForm {
    onClick!: () => void;
    goBack!: () => void;
}