//begin imports
import { IgrGrid } from 'igniteui-react-grids';
//end imports

export class webGridExportingToggle {
    //begin eventHandler
    public webGridExportingToggle = () => {
        const toolbars = document.querySelectorAll("igc-grid-toolbar");
      
        toolbars.forEach((toolbar) => {
          const exporting = toolbar.querySelector(
            "igc-grid-toolbar-exporter"
          );
      
          if (exporting) {
            exporting.style.display === "none" ? "" : "none";
          }
      
        });
      };
    }