//begin data
//begin TestRegionedLookup
export class TestRegionedLookup {
    public static names(): string[] {
        return ["first", "second"];
    }
}
//end TestRegionedLookup
//begin TestRegionedRows
export class TestRegionedData extends Array<any> {
    public constructor() {
        super();
        for (const name of TestRegionedLookup.names()) {
            this.push({ Name: name });
        }
    }
}
//end TestRegionedRows
//end data
