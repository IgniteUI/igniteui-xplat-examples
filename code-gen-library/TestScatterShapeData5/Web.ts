//begin imports
//end imports

//begin data
export class TestScatterShapeData5 extends Array<object>
{
   public constructor(){
	   const newItems = [{ "Value": 5,"Points":[[
                     {"X":10,"Y":10},
					 {"X":10,"Y":20},
					 {"X":20,"Y":20},
					 {"X":20,"Y":10}]]},              
                     {"Value": 10,"Points": [[
					 {"X":-10,"Y":-10},
					 {"X":-10,"Y":-20},
					 {"X":-20,"Y":-20},
					 {"X":-20,"Y":-10}]]}];
                 
            super(...newItems.slice(0));
        }

}
//end data