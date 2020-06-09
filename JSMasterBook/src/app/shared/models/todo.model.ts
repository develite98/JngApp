export class Todo {
    constructor(
        public id: number,
        public content: string,
        public startDate?: Date,
        public isCompleted: boolean = false
    ) {}
}
