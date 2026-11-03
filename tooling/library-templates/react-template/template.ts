import { CodeGenHelper } from './libraryManager';
//insert templateImports
//end templateImports

export class PlaceholderHolder {

    constructor() {

    }

    //insert templateContents
    //end templateContents
    //insert templateSupportingMethods
    //end templateSupportingMethods

// ifdef handlersStyles
    public requiredStyles: string = `
// insert templateStyles

// end templateStyles
    `;
// endifdef handlersStyles

}

// The types a handler needs beside it, at the scope the component is declared at: a supporting item
// is not nested, because not every platform has nested types.
//insert supportingTypes
//end supportingTypes
