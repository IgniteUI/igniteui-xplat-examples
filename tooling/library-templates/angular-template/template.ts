import { CodeGenHelper } from './libraryManager';
import { Component, ViewChild, NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//insert templateImports
//end templateImports

@Component({
    imports: [
        //insert templateModules
        //end templateModules
    ],
    template: `
//insert templateContents
//end templateContents
    `,
    styles: [`
// insert templateStyles
// end templateStyles
    `]
})
export class PlaceholderHolder {
    // Only where there is markup to reference. A template item may contribute a member instead -- a
    // marker is drawn into a canvas rather than laid out, so it arrives as a supporting method named
    // after the item -- and the field below would be a second declaration of that same name.
//ifdef templateContents
    @ViewChild("template", { static: true })
    public placeholderMember: TemplateRef<any>;
//endifdef templateContents

    //insert templateSupportingMethods
    //end templateSupportingMethods
}

// The types a handler needs beside it, at the scope the component is declared at: a supporting item
// is not nested, because not every platform has nested types.
//insert supportingTypes
//end supportingTypes
