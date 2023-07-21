import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";


//insert modulesImports
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts';
//end modulesImports

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    //insert modulesRegister
    IgxDataChartCategoryModule
    //end modulesRegister
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
