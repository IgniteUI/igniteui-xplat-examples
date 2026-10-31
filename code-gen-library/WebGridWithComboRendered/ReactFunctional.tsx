//begin imports
import { IgrCombo, IgrComponentBoolValueChangedEventArgs } from 'igniteui-react';
import { IgrGrid } from 'igniteui-react-grids';
//end imports

// The body of a React function component: the class version keeps the combos it is handed in a field
// and checks it is running as a method before using it, neither of which a function component has.
export function WebGridWithComboRendered() {
    //begin eventHandler
    const gridData = useMemo(() => [
        { ID: 1, Country: '', Region: '', City: '' },
        { ID: 2, Country: '', Region: '', City: '' },
        { ID: 3, Country: '', Region: '', City: '' }
    ], []);
    const countryNames = [
        'United States',
        'Japan',
        'United Kingdom'
    ];
    const countries = useMemo(() => [...CodeGenHelper.findByName<any[]>("worldCitiesAbove500K")].filter(x => countryNames.indexOf(x.Country) !== -1).filter((value, index, array) => array.findIndex(x => x.Country === value.Country) === index), []);
    const regions = useMemo(() => [...CodeGenHelper.findByName<any[]>("worldCitiesAbove500K")].filter((value, index, array) => array.findIndex(x => x.Region === value.Region) === index), []);
    const cities = useMemo(() => [...CodeGenHelper.findByName<any[]>("worldCitiesAbove500K")].filter((value, index, array) => array.findIndex(x => x.Name === value.Name) === index), []);
    const comboRefCollection = useRef<IgrCombo[]>([]);
    function comboRefs(r: IgrCombo) {
        if (r && !comboRefCollection.current.includes(r)) {
            comboRefCollection.current.push(r);
        }
    }

    function webGridWithComboRendered(args: IgrComponentBoolValueChangedEventArgs): void {
        const grid = args.target as IgrGrid;
        grid.data = gridData;
    }

    function onCountryChange(rowId: string, args: CustomEvent<any>) {
        // find next combo
        const regionCombo = comboRefCollection.current.find(c => c.name === "region_" + rowId);
        const cityCombo = comboRefCollection.current.find(c => c.name === "city_" + rowId);
        const newValue = args.detail.newValue[0];
        if (newValue === undefined) {
            regionCombo.deselect(regionCombo.value);
            regionCombo.disabled = true;
            regionCombo.data = [];

            cityCombo.deselect(regionCombo.value);
            cityCombo.disabled = true;
            cityCombo.data = [];
        } else {
            regionCombo.disabled = false;
            regionCombo.data = regions.filter(x => x.Country === newValue);

            cityCombo.deselect(cityCombo.value);
            cityCombo.disabled = true;
            cityCombo.data = [];
        }
    }

    function onRegionChange(rowId: string, args: CustomEvent<any>) {
        // find next combo
        const cityCombo = comboRefCollection.current.find(c => c.name === "city_" + rowId);
        const newValue = args.detail.newValue[0];
        if (newValue === undefined) {
            cityCombo.deselect(cityCombo.value);
            cityCombo.disabled = true;
            cityCombo.data = [];
        } else {
            cityCombo.disabled = false;
            cityCombo.data = cities.filter(x => x.Region === newValue);
        }
    }
    //end eventHandler
}
