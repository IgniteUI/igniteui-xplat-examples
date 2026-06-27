import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//insert vmImports
//end vmImports
//insert modulesImports
//end modulesImports
//insert bindingImports
//end bindingImports
//insert descriptionImports
//end descriptionImports
//insert vmLibraryImports
//end vmLibraryImports
//insert handlersImports
//end handlersImports
//insert templateImports
//end templateImports

// RN-native styling is handled per-component via StyleSheet; no global
// theme CSS imports here (React's igniteui-react-grids/.../bootstrap.css
// is web-only). The 'webgrids' / 'editor' branches are intentionally
// dropped for the ReactNative scaffold.

//ifdef modulesRegister
const mods: any[] = [
    //insert modulesRegister
    //end modulesRegister
];
mods.forEach((m) => m.register());
//endifdef modulesRegister

export default class Sample extends React.Component<any, any> {
    //insert bindingFields
    //end bindingFields

    constructor(props: any) {
        super(props);
        
        //insert onInit
        //end onInit
        //insert bindingInit
        //end bindingInit
        //insert bindingCode
        //end bindingCode
    }
//ifdef onViewInit
    public componentDidMount() {
        //insert onViewInit
        //end onViewInit
    }
//endifdef onViewInit

    public render(): JSX.Element {
        return (
//ifdef webgrids
        <div className="container sample ig-typography">
//endifdef webgrids
//ifdef not webgrids
        <div className="container sample">
//endifdef not webgrids
//ifdef editor
            <div className="options vertical">
                //insert editor
                //end editor
            </div>
//endifdef editor

//ifdef legendTitle
            <div className="legend-title">
                $$legendTitle
            </div>
//endifdef legendTitle

//ifdef legend
            <div className="legend">
                //insert legend
                //end legend
            </div>
//endifdef legend
//ifdef aboveContent
            <div className="aboveContent">
                //insert aboveContent
                //end aboveContent
            </div>
//endifdef aboveContent
//ifdef aboveContentLeft, aboveContentRight
            <div className="aboveContentSplit">
//endifdef aboveContentLeft, aboveContentRight
//ifdef aboveContentLeft
                <div className="aboveContentLeftContainer">
                    <div>
                        //insert aboveContentLeft
                        //end aboveContentLeft
                    </div>
                </div>
//endifdef aboveContentLeft
//ifdef aboveContentRight
                <div className="aboveContentRightContainer">
                    <div>
                        //insert aboveContentRight
                        //end aboveContentRight
                    </div>
                </div>
//endifdef aboveContentRight
//ifdef aboveContentLeft, aboveContentRight
            </div>
//endifdef aboveContentLeft, aboveContentRight

//ifdef leftContent, rightContent
            <div className="contentSplit">
//endifdef leftContent, rightContent
//ifdef leftContent
                <div className="leftContentContainer">
                    //insert leftContent
                    //end leftContent
                </div>
//endifdef leftContent
            <div className="container fill">
                //insert content
                //end content
            </div>
//ifdef rightContent
                <div className="rightContentContainer">
                    //insert rightContent
                    //end rightContent
                </div>
//endifdef rightContent
//ifdef leftContent, rightContent
            </div>
//endifdef leftContent, rightContent
//ifdef belowContent
            <div className="belowContent">
                //insert belowContent
                //end belowContent
            </div>
//endifdef belowContent
        </div>
        );
    }

    //insert vmProperties
    //end vmProperties

    //insert descriptionRegister
    //end descriptionRegister

    //insert eventHandlers
    //end eventHandlers
    //insert templateContents
    //end templateContents
    //insert templateSupportingMethods
    //end templateSupportingMethods
}


// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);