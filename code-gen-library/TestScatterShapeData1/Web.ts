//begin imports
//end imports

//begin data
export class TestScatterShapeData1 extends Array<object>
{
   
   public constructor(){
	   const newItems = [
					[{" x":10,"y":10}, {" x":10,"y":40},  {" x":40,"y":40},  {" x":40,"y":10}],  
					[{" x":60,"y":10},  {" x":60,"y":40},  {" x":90,"y":40},  {" x":90,"y":10}],
					[{" x":10,"y":60},  {" x":10,"y":90},  {" x":40,"y":90},  {" x":40,"y":60}],
					[{" x":60,"y":60},  {" x":60,"y":90},  {" x":90,"y":90},  {" x":90,"y":60}]];					 
                     
                 
            super(...newItems.slice(0));
        }
   
   }
   

//end data