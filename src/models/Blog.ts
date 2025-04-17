import dayjs from 'dayjs';

export default class Blog {
    public id: number;
    public title: string;
    public type: string;
    public date: Date;
    public contentType: string;
    public contentImg: string;
    public remoteURL: string;
    public description: string;

    constructor(
        id: number,
        title: string,
        type: string,
        date: Date,
        contentType: string,
        contentImg: string,
        remoteURL: string,
        description: string
    ) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.date = date;
        this.contentType = contentType;
        this.contentImg = contentImg;
        this.remoteURL = remoteURL;
        this.description = description;
    }

    public parseDate(): string {
        return dayjs(this.date).format('DD-MM-YYYY');
    }
}

