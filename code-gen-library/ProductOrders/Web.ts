//begin imports
//end imports

//begin async data
export class ProductOrders extends Array<ProductOrdersItem> {

    public constructor(count?: number) {
        super();
        if (count === undefined) count = 100;

        const names = [
            "Intel CPU", "AMD CPU",
            "Intel Motherboard", "AMD Motherboard", "NVIDIA Motherboard",
            "NVIDIA GPU", "GIGABYTE GPU", "Asus GPU", "AMD GPU", "MSI GPU",
            "Corsair Memory", "Patriot Memory", "Skill Memory",
            "Samsung HDD", "WD HDD", "Seagate HDD", "Intel HDD",
            "Samsung SSD", "WD SSD", "Seagate SSD", "Intel SSD",
            "Samsung Monitor", "Asus Monitor", "LG Monitor", "HP Monitor"];
        const countries = ["USA", "UK", "France", "Canada", "Poland", "Japan", "Germany"];
        const status = ["Packing", "Shipped", "Delivered"];

        for (let i = 0; i < count; i++) {
            const price = ProductOrdersGenerator.getNumber(100, 900);
            const items = ProductOrdersGenerator.getNumber(10, 80);
            const value = price * items;
            const margin = ProductOrdersGenerator.getNumber(3, 10);
            const profit = Math.round((price * margin / 100) * items);
            const country = ProductOrdersGenerator.getItem(countries);
            const city = ProductOrdersGenerator.getCity(country);

            this.push(new ProductOrdersItem({
                ID: ProductOrdersGenerator.pad(1001 + i, 4),
                ProductID: 1001 + i,
                BundlePrice: price,
                ProductPrice: price,
                Margin: margin,
                OrderDate: ProductOrdersGenerator.getDate(),
                OrderItems: items,
                OrderValue: value,
                ProductName: ProductOrdersGenerator.getItem(names),
                Profit: profit,
                City: city,
                Country: country,
                CountryFlag: ProductOrdersGenerator.getCountryFlag(country),
                Status: ProductOrdersGenerator.getItem(status)
            }));
        }
    }
}

export class ProductOrdersItem {
    public constructor(init: Partial<ProductOrdersItem>) {
        Object.assign(this, init);
    }

    public OrderDate: Date;
    public ID: string;
    public ProductID: number;
    public ProductName: string;
    public ProductPrice: number;
    public BundlePrice: number;
    public Margin: number;
    public OrderItems: number;
    public OrderValue: number;
    public Profit: number;
    public Country: string;
    public CountryFlag: string;
    public City: string;
    public Status: string;
}

class ProductOrdersGenerator {
    static readonly citiesUS = ["New York", "Los Angeles", "Miami", "San Francisco", "San Diego", "Las Vegas"];
    static readonly citiesUK = ["London", "Liverpool", "Manchester"];
    static readonly citiesFR = ["Paris", "Marseille", "Lyon"];
    static readonly citiesCA = ["Toronto", "Vancouver", "Montreal"];
    static readonly citiesPL = ["Krakow", "Warsaw", "Wroclaw", "Gdansk"];
    static readonly citiesJP = ["Tokyo", "Osaka", "Kyoto", "Yokohama"];
    static readonly citiesGR = ["Berlin", "Bonn", "Cologne", "Munich", "Hamburg"];

    public static getNumber(min: number, max: number): number { return Math.round(min + Math.random() * (max - min)); }
    public static getInteger(min: number, max: number): number { return Math.round(this.getNumber(min, max)); }

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
