using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using System.ComponentModel;

//insert vmImports
//end vmImports
//insert modulesImports
//end modulesImports
//insert descriptionImports
//end descriptionImports
//insert bindingImports
//end bindingImports
//insert vmLibraryImports
//end vmLibraryImports
//insert handlersImports
//end handlersImports
//insert templateImports
//end templateImports

namespace Sample;

public sealed partial class Sample : UserControl, INotifyPropertyChanged
{
    //insert bindingFields
    //end bindingFields

    public Sample()
    {
        //insert bindingInit
        //end bindingInit

        this.InitializeComponent();

        DataContext = this;

        this.Loaded += (s, e) => {
//ifdef onInit
            //insert onInit
            //end onInit
//endifdef onInit

//ifdef onViewInit
            //insert onViewInit
            //end onViewInit
//endifdef onViewInit
        };
    }

    //insert vmProperties
    //end vmProperties

    //insert descriptionRegister
    //end descriptionRegister

    //insert eventHandlers
    //end eventHandlers
    //insert templateContents
    //end templateContents
    //insert templateSupportingMethods
    //end templateSupportingMethods

    public event PropertyChangedEventHandler PropertyChanged;
    protected void OnPropertyChanged(string propertyName)
    {
        PropertyChangedEventHandler handler = PropertyChanged;
        if (handler != null)
        {
            handler(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}
