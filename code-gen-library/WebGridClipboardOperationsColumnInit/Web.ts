﻿//begin imports
import { IgcGridComponent, IgcColumnComponentEventArgs } from 'igniteui-webcomponents-grids/grids';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class WebGridClipboardOperationsColumnInit {
    //begin eventHandler
    public webGridClipboardOperationsColumnInit(args: CustomEvent<IgcColumnComponentEventArgs>): void {
        let column = args.detail;
        column.formatter = (e: any) => { return "** " + e + " **" };
        column.header = "🎉" + column.field;
    }
    //end eventHandler
}