//begin imports
//end imports

//begin data
export class TestScatterShapeData3 extends Array<object>
{
   public constructor(){
	    const newItems = [{ "Value": 10,"Points":[[
                     {"X":10,"Y":10},
					 {"X":10,"Y":40},
					 {"X":40,"Y":40},
					 {"X":40,"Y":10},  
					 {"X":60,"Y":10},
					 {"X":60,"Y":40},
					 {"X":90,"Y":40},
					 {"X":90,"Y":10}]]},              
                     {"Value": 20,"Points": [[
					 {"X":10,"Y":60},
					 {"X":10,"Y":90},
					 {"X":40,"Y":90},
					 {"X":40,"Y":60}, 
					 {"X":60,"Y":60},
					 {"X":60,"Y":90},
					 {"X":90,"Y":90},
					 {"X":90,"Y":60}]]}];
                 
            super(...newItems.slice(0));
        }
   

}
//end data