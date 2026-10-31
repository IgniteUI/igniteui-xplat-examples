//ifdef reactHooks
import React, { $$reactHooks } from 'react';
//endifdef reactHooks
//ifdef not reactHooks
import React from 'react';
//endifdef not reactHooks
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
//insert supportingImports
//end supportingImports

//ifdef webgrids
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
//endifdef webgrids
//ifdef editor
import 'igniteui-webcomponents/themes/light/bootstrap.css';
//endifdef editor

//ifdef modulesRegister
const mods: any[] = [
    //insert modulesRegister
    //end modulesRegister
];
mods.forEach((m) => m.register());
//endifdef modulesRegister

//insert supportingTypes
//end supportingTypes

export default function Sample() {
//ifdef vmProperties, descriptionRegister
    //insert vmProperties
    //end vmProperties
    //insert descriptionRegister
    //end descriptionRegister

//endifdef vmProperties, descriptionRegister
//ifdef eventHandlers
    //insert eventHandlers
    //end eventHandlers

//endifdef eventHandlers
//ifdef templateContents, templateSupportingMethods
    //insert templateContents
    //end templateContents
    //insert templateSupportingMethods
    //end templateSupportingMethods

//endifdef templateContents, templateSupportingMethods
//ifdef bindingFields
    //insert bindingFields
    //end bindingFields

//endifdef bindingFields
//ifdef bindingInit, onInit, contentCode, bindingCode, onViewInit
    useEffect(() => {
        //insert bindingInit
        //end bindingInit
        //insert onInit
        //end onInit
//ifdef contentCode
        //insert contentCode
        //end contentCode
//endifdef contentCode
        //insert bindingCode
        //end bindingCode
        //insert onViewInit
        //end onViewInit
    }, []);

//endifdef bindingInit, onInit, contentCode, bindingCode, onViewInit
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
//ifdef contentBottom
            <div className="container fill">
                //insert contentBottom
                //end contentBottom
            </div>
//endifdef contentBottom
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


// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);