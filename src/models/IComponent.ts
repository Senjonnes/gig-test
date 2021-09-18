export class IMenu {
    name!: string;
    logo: any;
    link!: string;
}

export class ITopNav {
    handleClick!: () => void;
}

export class IButton {
    onClick!: () => void;
    type?: any;
    name!: string;
}