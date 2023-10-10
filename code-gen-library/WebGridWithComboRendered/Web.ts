//begin imports
import { IgcGridComponent } from 'igniteui-webcomponents-grids/grids';
import { IgcComboComponent, IgcLinearProgressComponent } from 'igniteui-webcomponents';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridWithComboRendered {
    //begin eventHandler
    public countryNames = [
        'United States',
        'Japan',
        'United Kingdom'
    ];
    public countries = [...this.worldCitiesAbove500K].filter(x => this.countryNames.indexOf(x.Country) !== -1).filter((value, index, array) => array.findIndex(x => x.Country === value.Country) === index); 
    public regions = [...this.worldCitiesAbove500K].filter((value, index, array) => array.findIndex(x => x.Region === value.Region) === index);
    public cities = [...this.worldCitiesAbove500K].filter((value, index, array) => array.findIndex(x => x.Name === value.Name) === index);
    public webGridWithComboRendered(args:any): void {
        const grid = CodeGenHelper.getDescription<IgcGridComponent>("content");
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
                this.bindEventsCountryCombo(rowId, grid.getCellByKey(rowId , "Country"));
                this.bindEventsRegionCombo(rowId, grid.getCellByKey(rowId , "Region"));
                this.bindEventsCityCombo(rowId, grid.getCellByKey(rowId , "City"));
            }
        }, 100);
    }

    public bindEventsCountryCombo(rowId: any, cell: any) {
        const comboId = "country_" + rowId;
        var combo = document.getElementById(comboId) as IgcComboComponent<any>;
        combo?.addEventListener("igcChange", (e:any) => {
            const value = e.detail.newValue[0];
            cell.update(value);
            const nextCombo = document.getElementById("region_" + cell.id.rowID) as IgcComboComponent<any>;
            const nextProgress = document.getElementById("progress_region_" + cell.id.rowID) as IgcLinearProgressComponent;
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
        combo?.addEventListener("igcOpening", (e:any) => {
            var currCombo = e.target;
            if (currCombo.data.length === 0) {
                combo.data = this.countries;
            };
        });
    }

    public bindEventsRegionCombo(rowId: any, cell: any) {
        const comboId = "region_" + rowId;
        var combo = document.getElementById(comboId) as IgcComboComponent<any>;
        combo?.addEventListener("igcChange", (e:any) => {
            const value = e.detail.newValue[0];
            cell.update(value);
            const nextCombo = document.getElementById("city_" + cell.id.rowID) as IgcComboComponent<any>;
            const nextProgress = document.getElementById("progress_city_" + cell.id.rowID) as IgcLinearProgressComponent;
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

    public bindEventsCityCombo(rowId: any, cell: any) {
        const comboId = "city_" + rowId;
        var combo = document.getElementById(comboId) as IgcComboComponent<any>;
        combo?.addEventListener("igcChange", (e:any) => {
            const value = e.detail.newValue[0];
            cell.update(value);
        });
    }
    //end eventHandler
}