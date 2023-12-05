//begin imports
using Infragistics.Controls.Description;
using Infragistics.Controls.Layouts;
using Infragistics.Controls.Charts;
using System.Windows.Media;
//end imports

//TODO: unfinished

public class ToolbarThemeChanged
{
	//begin eventHandler
	//WPF: Infragistics.Controls.Layouts.PropertyEditorPropertyDescriptionChangedEventHandler
	private void ToolbarThemeChanged(object sender, PropertyEditorPropertyDescriptionChangedEventArgs e)
	{
		var target = CodeGenHelper.GetDescription<XamDataChart>("content");
		
		 

		switch (e.Command.CommandId)
		{
			case "Default":
			case "DenaliLight":
			case "MaterialLight":
			case "SlinsghotLight":
			case "SlingshotDark":
			case "RevealLight":
			case "RevealDark":
		}
	}
	//end eventHandler
}