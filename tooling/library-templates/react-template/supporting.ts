import { CodeGenHelper } from './libraryManager';
//insert supportingImports
//end supportingImports

// A supporting item is a type of its own, so this is the whole of it: no holder, the same way a code
// based data item is its own class. An item that needs one asks CodeGenHelper for it by name rather
// than constructing it, and in a generated sample the same declarations are written beside the
// component instead — which is why nothing here may assume a component around it.
//insert supportingTypes
//end supportingTypes
