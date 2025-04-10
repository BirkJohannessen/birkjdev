import dayjs from 'dayjs'

export default class Blog {
  constructor(
    public id: number,
    public title: string,
    public type: string,
    public date: Date,
    public contentType: string,
    public contentImg: string,
    public remoteURL: string,
    public description: string
  ) {}

  public parseDate(): string {
    return dayjs(this.date).format('DD-MM-YYYY')
  }
}
