//begin eventHandler
igRegisterScript("WebGridWithComboRendered", (event) => {
        const grid = document.getElementsByTagName("igc-grid")[0];
        var worldCitiesAbove500K = grid.data;
        countries = worldCitiesAbove500K.filter(x => this.countryNames.indexOf(x.Country) !== -1).filter((value, index, array) => array.findIndex(x => x.Country === value.Country) === index);
        regions = worldCitiesAbove500K.filter((value, index, array) => array.findIndex(x => x.Region === value.Region) === index);
        cities = worldCitiesAbove500K.filter((value, index, array) => array.findIndex(x => x.Name === value.Name) === index);
        grid.data = [
                {
                        ID: 1,
                        Country: '',
                        Region: '',
                        City: ''
                },
                {
                        ID: 2,
                        Country: '',
                        Region: '',
                        City: ''
                },
                {
                        ID: 3,
                        Country: '',
                        Region: '',
                        City: ''
                }
        ];

        setTimeout(() => {
                for (let index = 0; index < grid.data.length; index++) {
                        const rowId = grid.data[index].ID;
                        this.bindEventsCountryCombo(rowId, grid.getCellByKey(rowId, "Country"));
                        this.bindEventsRegionCombo(rowId, grid.getCellByKey(rowId, "Region"));
                        this.bindEventsCityCombo(rowId, grid.getCellByKey(rowId, "City"));
                }
        }, 100);

}, false);
var countryNames = [
        'United States',
        'Japan',
        'United Kingdom'
];
var countries;
var regions;
var cities;

function bindEventsCountryCombo(rowId, cell) {
        const comboId = "country_" + rowId;
        var combo = document.getElementById(comboId);
        combo?.addEventListener("igcChange", (e) => {
                const value = e.detail.newValue[0];
                cell.update(value);
                const nextCombo = document.getElementById("region_" + cell.id.rowID);
                const nextProgress = document.getElementById("progress_region_" + cell.id.rowID);
                if (value === "") {
                        nextCombo.deselect(nextCombo.value);
                        nextCombo.disabled = true;
                        nextCombo.data = [];
                } else {
                        nextProgress.style.display = "block";
                        setTimeout(() => {
                                nextProgress.style.display = "none";
                                nextCombo.disabled = false;
                                nextCombo.data = this.regions.filter(x => x.Country === value);
                        }, 2000);

                }
        });
        combo?.addEventListener("igcOpening", (e) => {
                var currCombo = e.target;
                if (currCombo.data.length === 0) {
                        combo.data = countries;
                };
        });
}

function bindEventsRegionCombo(rowId, cell) {
        const comboId = "region_" + rowId;
        var combo = document.getElementById(comboId);
        combo?.addEventListener("igcChange", (e) => {
                const value = e.detail.newValue[0];
                cell.update(value);
                const nextCombo = document.getElementById("city_" + cell.id.rowID);
                const nextProgress = document.getElementById("progress_city_" + cell.id.rowID);
                if (value === "") {
                        nextCombo.deselect(nextCombo.value);
                        nextCombo.disabled = true;
                        nextCombo.data = [];
                } else {
                        nextProgress.style.display = "block";
                        setTimeout(() => {
                                nextProgress.style.display = "none";
                                nextCombo.disabled = false;
                                nextCombo.data = this.cities.filter(x => x.Region === value);
                        }, 2000);
                }
        });
}

function bindEventsCityCombo(rowId, cell) {
        const comboId = "city_" + rowId;
        var combo = document.getElementById(comboId);
        combo?.addEventListener("igcChange", (e) => {
                const value = e.detail.newValue[0];
                cell.update(value);
        });
}

//end eventHandler