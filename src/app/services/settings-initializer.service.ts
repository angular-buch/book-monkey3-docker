import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Settings } from "../models/settings";
import { SettingsService } from "./settings.service";

@Injectable({
    providedIn: "root",
})
export class SettingsInitializerService {
    constructor(private http: HttpClient, private settings: SettingsService) {}

    initializeSettings(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http
                .get("assets/settings.json")
                .toPromise()
                .then((response) => {
                    this.settings.settings = response as Settings;
                    resolve();
                })
                .catch((error) => reject(error));
        });
    }
}
