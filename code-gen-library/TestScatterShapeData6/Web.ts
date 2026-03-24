//begin imports
//end imports

//begin data
export class TestScatterShapeData6 extends Array<object>
{
   public constructor(){
	   const newItems = [{ "Value": 50,"Locations":[[
                     {"X":40,"Y":40},
					 {"X":40,"Y":80},
					 {"X":90,"Y":80},
					 {"X":90,"Y":40}]]},  
					{ "Value": 50,"Locations":[[
                     {"X":40,"Y":-80},
					 {"X":40,"Y":-40},
					 {"X":90,"Y":-40},
					 {"X":90,"Y":-80} ]]},
					{ "Value": 10,"Locations":[[
                     {"X":-90,"Y":40},
					 {"X":-90,"Y":80},
					 {"X":-40,"Y":80},
					 {"X":-40,"Y":40} ]]},					 
                     {"Value": 10,"Locations": [[
					 {"X":-90,"Y":-80},
					 {"X":-90,"Y":-40},
					 {"X":-40,"Y":-40},
					 {"X":-40,"Y":-80}]]}];
                 
            super(...newItems.slice(0));
        }
}
//end data