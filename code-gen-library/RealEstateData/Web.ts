//begin imports
//end imports

//begin async data
export class RealEstateData extends Array<RealEstateDataItem> {

    public constructor(count?: number) {
        super();
        if (count === undefined) count = 100;

        const property = ["Townhouse", "Single", "Condo", "Villa"];
        const emails = ["estates.com", "remax.com", "zillow.com", "realtor.com", "coldwell.com"];
        const countries = ["USA", "UK", "France", "Canada", "Poland", "Japan", "Germany"];

        for (let i = 0; i < count; i++) {
            const year = RealEstateDataGenerator.getNumber(1950, 2015);
            const age = 2020 - year;

            const gender = RealEstateDataGenerator.getGender();
            const firstName = RealEstateDataGenerator.getNameFirst(gender);
            const lastName = RealEstateDataGenerator.getNameLast();
            const initials = firstName.substring(0, 1).toLowerCase();
            const email = initials + firstName.toLowerCase() + "@" + RealEstateDataGenerator.getItem(emails);
            const street = RealEstateDataGenerator.getStreet();
            const country = RealEstateDataGenerator.getItem(countries);
            const city = RealEstateDataGenerator.getCity(country);

            this.push(new RealEstateDataItem({
                Address: street,
                Age: age,
                Agent: firstName + " " + lastName,
                Area: RealEstateDataGenerator.getNumber(50, 300),
                Baths: RealEstateDataGenerator.getNumber(1, 3),
                Built: year,
                City: city,
                Country: country,
                CountryFlag: RealEstateDataGenerator.getCountryFlag(country),
                Email: email,
                ID: RealEstateDataGenerator.pad(i + 1001, 4),
                Phone: RealEstateDataGenerator.getPhone(),
                Price: RealEstateDataGenerator.getNumber(210, 900) * 1000,
                Property: RealEstateDataGenerator.getItem(property),
                Rooms: RealEstateDataGenerator.getNumber(2, 5),
                SaleDate: RealEstateDataGenerator.getDate(),
                Street: street
            }));
        }
    }
}

export class RealEstateDataItem {
    public constructor(init: Partial<RealEstateDataItem>) {
        Object.assign(this, init);
    }

    public ID: string;
    public Address: string;
    public Street: string;
    public Country: string;
    public CountryFlag: string;
    public City: string;
    public Email: string;
    public Phone: string;
    public Age: number;
    public Baths: number;
    public Built: number;
    public Property: string;
    public Rooms: number;
    public Agent: string;
    public Area: number;
    public Price: number;
    public SaleDate: Date;
}

class RealEstateDataGenerator {
    static readonly genders = ["male", "female"];
    static readonly maleNames = ["Kyle", "Oscar", "Ralph", "Mike", "Bill", "Frank", "Howard", "Jack", "Larry", "Pete", "Steve", "Vince", "Mark", "Alex", "Max", "Brian", "Chris", "Andrew", "Martin", "Mike", "Steve", "Glenn", "Bruce"];
    static readonly femaleNames = ["Gina", "Irene", "Katie", "Brenda", "Casey", "Fiona", "Holly", "Kate", "Liz", "Pamela", "Nelly", "Marisa", "Monica", "Anna", "Jessica", "Sofia", "Isabella", "Margo", "Jane", "Audrey", "Sally", "Melanie", "Greta", "Aurora", "Sally"];
    static readonly lastNames = ["Adams", "Crowley", "Ellis", "Martinez", "Irvine", "Maxwell", "Clark", "Owens", "Rooney", "Lincoln", "Thomas", "Spacey", "MOrgan", "King", "Newton", "Fitzgerald", "Holmes", "Jefferson", "Landry", "Berry", "Perez", "Spencer", "Starr", "Carter", "Edwards", "Stark", "Johnson", "Fitz", "Chief", "Blanc", "Perry", "Stone", "Williams", "Lane", "Jobs", "Adams", "Power", "Tesla"];
    static readonly citiesUS = ["New York", "Los Angeles", "Miami", "San Francisco", "San Diego", "Las Vegas"];
    static readonly citiesUK = ["London", "Liverpool", "Manchester"];
    static readonly citiesFR = ["Paris", "Marseille", "Lyon"];
    static readonly citiesCA = ["Toronto", "Vancouver", "Montreal"];
    static readonly citiesPL = ["Krakow", "Warsaw", "Wroclaw", "Gdansk"];
    static readonly citiesJP = ["Tokyo", "Osaka", "Kyoto", "Yokohama"];
    static readonly citiesGR = ["Berlin", "Bonn", "Cologne", "Munich", "Hamburg"];
    static readonly roadSuffixes = ["Road", "Street", "Way"];
    static readonly roadNames = ["Main", "Garden", "Broad", "Oak", "Cedar", "Park", "Pine", "Elm", "Market", "Hill"];

    public static getNumber(min: number, max: number): number { return Math.round(min + Math.random() * (max - min)); }
    public static getInteger(min: number, max: number): number { return Math.round(this.getNumber(min, max)); }

    public static getPhone(): string {
        const phoneCode = this.getNumber(100, 900);
        const phoneNum1 = this.getNumber(100, 900);
        const phoneNum2 = this.getNumber(1000, 9000);
        return phoneCode + "-" + phoneNum1 + "-" + phoneNum2;
    }

    public static getGender(): string { return this.getItem(this.genders); }
    public static getNameFirst(gender: string): string { return gender === "male" ? this.getItem(this.maleNames) : this.getItem(this.femaleNames); }
    public static getNameLast(): string { return this.getItem(this.lastNames); }

    public static getItem(array: string[]): string {
        const index = Math.round(this.getNumber(0, array.length - 1));
        return array[index];
    }

    public static getCity(country: string): string {
        if (country === "Canada") return this.getItem(this.citiesCA);
        if (country === "France") return this.getItem(this.citiesFR);
        if (country === "Poland") return this.getItem(this.citiesPL);
        if (country === "USA")    return this.getItem(this.citiesUS);
        if (country === "Japan")  return this.getItem(this.citiesJP);
        if (country === "Germany")return this.getItem(this.citiesGR);
        return this.getItem(this.citiesUK);
    }

    public static getStreet(): string {
        const num = Math.round(this.getNumber(100, 300)).toString();
        const road = this.getItem(this.roadNames);
        const suffix = this.getItem(this.roadSuffixes);
        return num + " " + road + " " + suffix;
    }

    public static getDate(): Date {
        const year = new Date().getFullYear();
        const month = this.getNumber(10, 12);
        const day = this.getNumber(20, 27);
        return new Date(year, month - 1, day);
    }

    public static pad(num: number, size: number): string {
        let s = num + "";
        while (s.length < size) s = "0" + s;
        return s;
    }

    public static getCountryFlag(country: string): string {
        return "https://static.infragistics.com/xplatform/images/flags/" + country + ".png";
    }
}
//end async data
