//begin imports
//end imports

export class ColorEditorValueChanged {

    //begin eventHandler
    /** The colour the editor now holds, as the reader's own code would take it. */
    public colorEditorValueChanged(s: any, args: any): void {
        console.log("selected color: " + args.newValue);
    }
    //end eventHandler
}
