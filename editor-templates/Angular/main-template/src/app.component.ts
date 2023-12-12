import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
//insert vmImports
//end vmImports
//insert descriptionImports
//end descriptionImports
//insert vmLibraryImports
//end vmLibraryImports
//insert handlersImports
//end handlersImports
//insert bindingImports
//end bindingImports

//ifdef editor
import { defineAllComponents } from 'igniteui-webcomponents';
//endifdef editor

//ifdef editor
defineAllComponents();
//endifdef editor

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})


export class AppComponent implements AfterViewInit
{	
    //insert bindingFields
    //end bindingFields
    //insert vmProperties
    //end vmProperties
    //insert descriptionRegister
    //end descriptionRegister
    	
	public constructor(private _detector: ChangeDetectorRef) 
	{
		//insert onInit
		//end onInit
	}
	
	public ngAfterViewInit(): void 
	{	
		//insert onViewInit
		//end onViewInit
	}
	
	//insert eventHandlers
    //end eventHandlers
}

