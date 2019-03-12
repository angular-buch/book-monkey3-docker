import { Component } from "@angular/core";
import { Settings } from "../../models/settings";
import { SettingsService } from "../../services/settings.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    title = "dockerized-app";
    settings: Settings;

    constructor(private settingsService: SettingsService) {
        this.settings = settingsService.settings;
    }
}
