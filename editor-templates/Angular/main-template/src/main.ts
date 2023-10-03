// tslint:disable:no-string-literal
import "./polyfills";
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // ensure Angular destroys itself on hot reloads.
  if (window["ngRef"]) {
    window["ngRef"].destroy();
  }
  window["ngRef"] = ref;

  // otherwise, log the boot error
}).catch(err => console.error(err));
