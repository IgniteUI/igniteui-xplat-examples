//begin imports
//end imports

//begin async data
export class EmployeesSalesData extends Array<EmployeesSalesDataItem> {

    public constructor(count?: number, useProductivity?: boolean) {
        super();
        if (count === undefined) count = 100;
        if (useProductivity === undefined) useProductivity = false;

        for (let i = 0; i < count; i++) {
            const age = Math.round(EmployeesSalesDataGenerator.getNumber(20, 40));
            const gender = EmployeesSalesDataGenerator.getGender();
            const firstName = EmployeesSalesDataGenerator.getNameFirst(gender);
            const lastName = EmployeesSalesDataGenerator.getNameLast();
            const street = EmployeesSalesDataGenerator.getStreet();
            const country = EmployeesSalesDataGenerator.getCountry();
            const city = EmployeesSalesDataGenerator.getCity(country);
            const email = firstName.toLowerCase() + "@" + EmployeesSalesDataGenerator.getEmail();
            const photoPath = EmployeesSalesDataGenerator.getPhoto(gender);

            const employee = new EmployeesSalesDataItem({
                Index: i,
                Address: street + ", " + city,
                Age: age,
                Birthday: EmployeesSalesDataGenerator.getBirthday(),
                City: city,
                Email: email,
                Gender: gender,
                ID: EmployeesSalesDataGenerator.pad(1001 + i, 4),
                FirstName: firstName,
                LastName: lastName,
                Name: firstName + " " + lastName,
                Photo: photoPath,
                Phone: EmployeesSalesDataGenerator.getPhone(),
                Street: EmployeesSalesDataGenerator.getStreet(),
                Salary: EmployeesSalesDataGenerator.getNumber(40, 200) * 1000,
                Sales: EmployeesSalesDataGenerator.getNumber(200, 980) * 1000,
                Country: country,
                CountryFlag: EmployeesSalesDataGenerator.getCountryFlag(country)
            });

            employee.Income = EmployeesSalesDataGenerator.getIncomeRange(employee.Salary);

            if (useProductivity) {
                employee.Productivity = EmployeesSalesData.getProductivity(52);
            }
            this.push(employee);
        }
    }

    public static getProductivity(weekCount: number): ProductivityItem[] {
        const productivity: ProductivityItem[] = [];
        for (let w = 1; w <= weekCount; w++) {
            const value = EmployeesSalesDataGenerator.getNumber(-50, 50);
            productivity.push(new ProductivityItem({ Value: value, Week: w }));
        }
        return productivity;
    }
}

export class ProductivityItem {
    public constructor(init: Partial<ProductivityItem>) {
        Object.assign(this, init);
    }
    public Value: number;
    public Week: number;
}

export class EmployeesSalesDataItem {
    public constructor(init: Partial<EmployeesSalesDataItem>) {
        Object.assign(this, init);
    }

    public ID: string;
    public Address: string;
    public Age: number;
    public Gender: string;
    public FirstName: string;
    public LastName: string;
    public Name: string;
    public Street: string;
    public City: string;
    public Email: string;
    public Phone: string;
    public Photo: string;
    public Salary: number;
    public Sales: number;
    public Income: string;
    public Index: number;
    public Birthday: Date;
    public Country: string;
    public CountryFlag: string;
    public Productivity: ProductivityItem[];
}

class EmployeesSalesDataGenerator {
    static readonly websites = [".com", ".gov", ".edu", ".org"];
    static readonly emails = ["gmail.com", "yahoo.com", "twitter.com"];
    static readonly genders = ["male", "female"];
    static readonly maleNames = ["Kyle", "Oscar", "Ralph", "Mike", "Bill", "Frank", "Howard", "Jack", "Larry", "Pete", "Steve", "Vince", "Mark", "Alex", "Max", "Brian", "Chris", "Andrew", "Martin", "Mike", "Steve", "Glenn", "Bruce"];
    static readonly femaleNames = ["Gina", "Irene", "Katie", "Brenda", "Casey", "Fiona", "Holly", "Kate", "Liz", "Pamela", "Nelly", "Marisa", "Monica", "Anna", "Jessica", "Sofia", "Isabella", "Margo", "Jane", "Audrey", "Sally", "Melanie", "Greta", "Aurora", "Sally"];
    static readonly lastNames = ["Adams", "Crowley", "Ellis", "Martinez", "Irvine", "Maxwell", "Clark", "Owens", "Rooney", "Lincoln", "Thomas", "Spacey", "MOrgan", "King", "Newton", "Fitzgerald", "Holmes", "Jefferson", "Landry", "Berry", "Perez", "Spencer", "Starr", "Carter", "Edwards", "Stark", "Johnson", "Fitz", "Chief", "Blanc", "Perry", "Stone", "Williams", "Lane", "Jobs", "Adams", "Power", "Tesla"];
    static readonly countries = ["USA", "UK", "France", "Canada", "Poland"];
    static readonly citiesUS = ["New York", "Los Angeles", "Miami", "San Francisco", "San Diego", "Las Vegas"];
    static readonly citiesUK = ["London", "Liverpool", "Manchester"];
    static readonly citiesFR = ["Paris", "Marseille", "Lyon"];
    static readonly citiesCA = ["Toronto", "Vancouver", "Montreal"];
    static readonly citiesPL = ["Krakow", "Warsaw", "Wroclaw", "Gdansk"];
    static readonly citiesJP = ["Tokyo", "Osaka", "Kyoto", "Yokohama"];
    static readonly citiesGR = ["Berlin", "Bonn", "Cologne", "Munich", "Hamburg"];
    static readonly roadSuffixes = ["Road", "Street", "Way"];
    static readonly roadNames = ["Main", "Garden", "Broad", "Oak", "Cedar", "Park", "Pine", "Elm", "Market", "Hill"];

    public static getWebsite(): string { return this.getItem(this.websites); }
    public static getEmail(): string { return this.getItem(this.emails); }
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

    public static getCountry(): string { return this.getItem(this.countries); }

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

    public static getBirthday(): Date {
        const year = new Date().getFullYear() - this.getInteger(30, 50);
        const month = this.getNumber(10, 12);
        const day = this.getNumber(20, 27);
        return new Date(year, month - 1, day);
    }

    public static pad(num: number, size: number): string {
        let s = num + "";
        while (s.length < size) s = "0" + s;
        return s;
    }

    public static getPhotoMale(id: number): string   { return "https://static.infragistics.com/xplatform/images/people/GUY"  + this.pad(id, 2) + ".png"; }
    public static getPhotoFemale(id: number): string { return "https://static.infragistics.com/xplatform/images/people/GIRL" + this.pad(id, 2) + ".png"; }

    private static maleCount = 0;
    private static femaleCount = 0;
    public static getPhoto(gender: string): string {
        if (gender === "male") {
            this.maleCount++;
            if (this.maleCount > 24) this.maleCount = 1;
            return this.getPhotoMale(this.maleCount);
        } else {
            this.femaleCount++;
            if (this.femaleCount > 24) this.femaleCount = 1;
            return this.getPhotoFemale(this.femaleCount);
        }
    }

    public static getCountryFlag(country: string): string {
        return "https://static.infragistics.com/xplatform/images/flags/" + country + ".png";
    }

    public static getIncomeRange(salary: number): string {
        if (salary < 50000) return "Low";
        if (salary < 100000) return "Average";
        return "High";
    }
}
//end async data
