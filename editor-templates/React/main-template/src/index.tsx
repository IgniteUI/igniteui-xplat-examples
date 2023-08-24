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

//ifdef editor
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import { defineAllComponents } from 'igniteui-webcomponents';
//endifdef editor

//ifdef editor
defineAllComponents();
//endifdef editor

const mods: any[] = [
    //insert modulesRegister
    //end modulesRegister
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    //insert bindingFields
    //end bindingFields

    constructor(props: any) {
        super(props);

        //insert bindingInit
        //end bindingInit
        //insert bindingCode
        //end bindingCode
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
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
                <div className="aboveContentLeftContainer">
                    <div>
                        //insert aboveContentLeft
                        //end aboveContentLeft
                    </div>
                </div>
                <div className="aboveContentRightContainer">
                    <div>
                        //insert aboveContentRight
                        //end aboveContentRight
                    </div>
                </div>
            </div>
//endifdef aboveContentLeft, aboveContentRight

            <div className="container fill">
                //insert content
                //end content
            </div>
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