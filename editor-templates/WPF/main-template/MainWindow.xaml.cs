using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

//insert handlersImports

//end handlersImports

namespace Sample
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();

            DataContext = new SampleViewModel();					

			this.Loaded += (s,e) => {
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
		
        //insert eventHandlers

        //end eventHandlers
		
    }

    
}
