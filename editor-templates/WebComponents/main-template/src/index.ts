//insert vmImports
//end vmImports
//insert modulesImports
//end modulesImports
//insert descriptionImports
//end descriptionImports
//insert bindingImports
//end bindingImports
//insert vmLibraryImports
//end vmLibraryImports
//insert handlersImports
//end handlersImports
//insert templateImports
//end templateImports

//ifdef webgrids
import "igniteui-webcomponents-grids/grids/themes/light/bootstrap.css";
//endifdef webgrids
//ifdef editor, webinputs
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import { defineAllComponents } from 'igniteui-webcomponents';
//endifdef editor, webinputs
//ifdef modulesRegister
import { ModuleManager } from 'igniteui-webcomponents-core';
//endifdef modulesRegister
//ifdef editor, webinputs
defineAllComponents();
//endifdef editor, webinputs

import "./index.css";

//ifdef modulesRegister
ModuleManager.register(
    //insert modulesRegister
    //end modulesRegister
);
//endifdef modulesRegister

export class Sample {

    //insert bindingFields
    //end bindingFields
//ifdef bindingCode
    private _bind: () => void;
//endifdef bindingCode

    constructor() {
        //insert onInit
        //end onInit
        //insert bindingInit
        //end bindingInit

//ifdef bindingCode
        this._bind = () => {
            //insert bindingCode
            //end bindingCode
        }
        this._bind();
//endifdef bindingCode

        //insert onViewInit
        //end onViewInit
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

new Sample();
