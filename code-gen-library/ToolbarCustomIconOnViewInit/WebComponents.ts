//begin imports
import { IgcToolbarComponent, IgcToolActionLabelComponent, IgcToolActionComponent, IgcToolCommandEventArgs } from 'igniteui-webcomponents-layouts';
//end imports

import { CodeGenHelper } from 'igniteui-webcomponents-core';

export class ToolbarCustomIconOnViewInit {

    //begin eventHandler
    public toolbarCustomIconOnViewInit(): void {
        
	const toolbar = CodeGenHelper.GetDescription<IgcToolbar>("content");
        const icon = '<svg width="28px" height="28px" stroke="none" viewBox="0 0 3.5 3.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--gis" preserveAspectRatio="xMidYMid meet"><path d="M0.436 0.178a0.073 0.073 0 0 0 -0.062 0.036L0.01 0.846a0.073 0.073 0 0 0 0.063 0.109h0.729a0.073 0.073 0 0 0 0.063 -0.109L0.501 0.214a0.073 0.073 0 0 0 -0.064 -0.036zm0.001 0.219 0.238 0.413H0.199zM1.4 0.507v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245zM0.073 1.388A0.073 0.073 0 0 0 0 1.461v0.583a0.073 0.073 0 0 0 0.073 0.073h0.729A0.073 0.073 0 0 0 0.875 2.045V1.461a0.073 0.073 0 0 0 -0.073 -0.073zm0.073 0.146h0.583v0.438H0.146zM1.4 1.674v0.245h0.945v-0.245zm1.19 0v0.245h0.91v-0.245zM0.438 2.447c-0.241 0 -0.438 0.197 -0.438 0.438 0 0.241 0.197 0.438 0.438 0.438s0.438 -0.197 0.438 -0.438c0 -0.241 -0.197 -0.438 -0.438 -0.438zm0 0.146a0.291 0.291 0 0 1 0.292 0.292 0.291 0.291 0 0 1 -0.292 0.292 0.291 0.291 0 0 1 -0.292 -0.292A0.291 0.291 0 0 1 0.438 2.593zM1.4 2.842v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245z" fill="#000000" fill-rule="evenodd"/></svg>';
        this.toolbar.registerIconFromText("CustomCollection", "CustomIcon", icon);
		
    }
    //end eventHandler

}