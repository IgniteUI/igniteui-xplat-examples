//begin imports
import { IgrRowSelectorTemplateContext } from 'igniteui-react-grids';
import { IgrCheckbox } from 'igniteui-react';
//end imports

export class WebGridRowSelectorTemplate {
//begin template
//begin content


public webGridRowSelectorTemplate = (e: {dataContext: IgrRowSelectorTemplateContext}) => {
    const contextDetail = e.dataContext.implicit;
    const containerStyle = {
        justifyContent: 'space-evenly',
        display: 'flex',
        width: '70px'
    };

    return (
        <div style={containerStyle}>
            <span>{contextDetail.index}</span>
            <IgrCheckbox checked={contextDetail.selected} key={`${contextDetail.selected}`}></IgrCheckbox>
        </div>
    );
}
//end content
//end template
}