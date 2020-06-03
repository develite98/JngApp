// tslint:disable-next-line:no-empty-interface
export interface Lession {
    lessionName: string;
    lessionWhat: string;
    lessionImage: string;
}
export interface Tutorial {
    id: number;
    title: string;
    image: string;
    lession: Lession[];
}
