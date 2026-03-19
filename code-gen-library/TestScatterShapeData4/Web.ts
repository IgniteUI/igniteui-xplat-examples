//begin imports
//end imports

//begin data
export class TestScatterShapeData4 extends Array<object>
{
   public constructor(){
	    const newItems = [{ "Value": 5,"Points":[
                     {"X":40,"Y":40},
					 {"X":40,"Y":60},
					 {"X":60,"Y":60},
					 {"X":60,"Y":40}]},              
                     {"Value": 10,"Points": [
					 {"X":50,"Y":50},
					 {"X":50,"Y":70},
					 {"X":70,"Y":70},
					 {"X":70,"Y":50}]}];
                 
            super(...newItems.slice(0));
        }

}
//end data