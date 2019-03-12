import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { APP_INITIALIZER, NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./components/app/app.component";
import { OneComponent } from "./components/one/one.component";
import { TwoComponent } from "./components/two/two.component";
import { SettingsInitializerService } from "./services/settings-initializer.service";

export function initSettings(settingsInitializerService: SettingsInitializerService) {
    return () => settingsInitializerService.initializeSettings();
}

@NgModule({
    declarations: [AppComponent, OneComponent, TwoComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [
        { provide: APP_INITIALIZER, useFactory: initSettings, deps: [SettingsInitializerService], multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
