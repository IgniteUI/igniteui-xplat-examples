//begin imports
//end imports

//begin data
export class MyTimelineData extends Array<MyTimelineInfo>
{
    public constructor() {
        super();

        this.push(new MyTimelineInfo({ Index: 0, Label: "0", Value: 10, Date: new Date("2000-01-11")}));
        this.push(new MyTimelineInfo({ Index: 1, Label: "1", Value: 40, Date: new Date("2000-01-12")}));
        this.push(new MyTimelineInfo({ Index: 2, Label: "2", Value: 20, Date: new Date("2000-01-13")}));
        this.push(new MyTimelineInfo({ Index: 3, Label: "3", Value: 30, Date: new Date("2000-01-14")}));
    }
}

export class MyTimelineInfo
{
    public constructor(init: Partial<MyTimelineInfo>) {
        Object.assign(this, init);
    }
    public Index: number;
    public Value: number;
    public Label: string;
    public Details: string;
    public Date: Date;
}
//end data
