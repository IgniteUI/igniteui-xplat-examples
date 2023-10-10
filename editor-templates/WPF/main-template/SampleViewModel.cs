using System;
using System.Collections.Generic;
using System.ComponentModel;
//insert descriptionImports
//end descriptionImports
//insert vmImports

//end vmImports


namespace Sample
{

    public class SampleViewModel
        : INotifyPropertyChanged
    {
        public event PropertyChangedEventHandler PropertyChanged;
        protected void OnPropertyChanged(string propertyName)
        {
            PropertyChangedEventHandler handler = PropertyChanged;
            if (handler != null)
            {
                handler(this, new PropertyChangedEventArgs(propertyName));
            }
        }

        //insert vmProperties

        //end vmProperties
        //insert descriptionRegister

        //end descriptionRegister
    }

    //insert vmData

    //end vmData
}