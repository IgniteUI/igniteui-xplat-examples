//begin imports
//end imports

//begin data
export class TestScatterShapeData2 extends Array<object>
{
   public constructor(){
	   const newItems = [{ "Value": 10,"Points":[[
                     { x: 10, y: 10 },
                     { x: 10, y: 40 },
                     { x: 40, y: 40 },
                     { x: 40, y: 10 }]]},              
                     {"Value": 20,"Points": [[{ x: 60, y: 10 },
                     { x: 60, y: 40 },
                     { x: 90, y: 40 },
                     { x: 90, y: 10 }]]},                
                     {"Value": 30,"Points": [[{ x: 10, y: 60 },
                     { x: 10, y: 90 },
                     { x: 40, y: 90 },
                     { x: 40, y: 60 }]]}
                    ];
                 
            super(...newItems.slice(0));
        }
   
   }

//end data