//begin imports
import { IgrCellTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebHierarchicalGridArtistPhotoTemplate {
    //begin template
    //begin content
    public WebHierarchicalGridArtistPhotoTemplate = (e: {dataContext: IgrCellTemplateContext}) => {
        let photo: string = e.dataContext.cell.value;
        if (photo) {
            return <img src={photo} />;
        }
        }
    //end content
    //end template
}