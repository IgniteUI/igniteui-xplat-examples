//begin imports
import { IgrHeadSelectorTemplateContext } from 'igniteui-react-grids';
//end imports

export class WebGridHeaderRowSelectorTemplate {
    //begin template
    //begin content
    public webGridHeaderRowSelectorTemplate = (e: {dataContext: IgrHeadSelectorTemplateContext }) => {
        return (
            <div style={{width: '70px', height: '60px', display: 'flex'}}>
                <img src="https://www.infragistics.com/angular-demos-lob/assets/images/card/avatars/igLogo.png" className="header-image"/>
            </div>
        );
    }
    //end content
    //end template
}