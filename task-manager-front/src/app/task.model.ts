export interface ITask {
    id?: number;
    name?: string;
    description?: string;
    createdDate?: Date;
    state?: string;
    responsableId?: number;
    responsableName?: string;
}

export class Task implements ITask {
    constructor (
        public id?: number,
        public name?: string,
        public description?: string,
        public createdDate?: Date,
        public state?: string,
        public responsableId?: number,
        public responsableName?: string
    ) {}
}
