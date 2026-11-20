//begin imports
import { IgcGeographicMapComponent, IgcGeographicHighDensityScatterSeriesComponent } from 'igniteui-webcomponents-maps';
import { GlobalQueuedWorkState } from 'igniteui-webcomponents-core';
//end imports

//begin supportingTypes
export class MapDensityCsvData {
    public async load(map: IgcGeographicMapComponent, url: string,
        latitudeColumn: number, longitudeColumn: number,
        bounds: { left: number; top: number; width: number; height: number },
        workChannel: string, populationColumn?: number): Promise<void> {
        const work = GlobalQueuedWorkState.instance;
        work.notifyWorkQueued(workChannel);
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('CSV request failed: ' + response.status);
            const csv = await response.text();
            const locations: any[] = [];
            const lastColumn = Math.max(latitudeColumn, longitudeColumn, populationColumn ?? 0);
            for (const line of csv.split(/\r?\n/).slice(1)) {
                const columns = line.split(',');
                if (columns.length <= lastColumn) continue;
                const latitude = Number(columns[latitudeColumn]);
                const longitude = Number(columns[longitudeColumn]);
                if (!Number.isFinite(latitude) || !Number.isFinite(longitude) ||
                    columns[latitudeColumn].trim() === '' || columns[longitudeColumn].trim() === '') {
                    throw new Error('The CSV contains an invalid geographic location.');
                }
                const location: any = { name: columns[0], latitude, longitude };
                if (populationColumn != null) {
                    location.population = Number(columns[populationColumn]);
                    if (!Number.isFinite(location.population)) throw new Error('Invalid CSV population.');
                }
                locations.push(location);
            }
            if (locations.length === 0) throw new Error('The CSV contained no geographic locations.');
            const series = new IgcGeographicHighDensityScatterSeriesComponent();
            series.name = 'hdSeries';
            series.dataSource = locations;
            series.latitudeMemberPath = 'latitude';
            series.longitudeMemberPath = 'longitude';
            series.heatMinimumColor = 'Black';
            series.heatMaximumColor = 'Red';
            series.heatMinimum = 0;
            series.heatMaximum = 5;
            series.pointExtent = 1;
            series.mouseOverEnabled = true;
            const rendered = new Promise<void>(resolve => {
                series.progressiveLoadStatusChanged = (sender, args) => {
                    if (args.currentStatus === 100) resolve();
                };
            });
            try {
                map.series.add(series);
                map.zoomToGeographic(bounds);
                await rendered;
            } finally {
                series.progressiveLoadStatusChanged = null;
            }
        } finally {
            work.notifyWorkCompleted(workChannel);
        }
    }
}
//end supportingTypes
