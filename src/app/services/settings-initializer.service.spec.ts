import { TestBed } from "@angular/core/testing";

import { SettingsInitializerService } from "./settings-initializer.service";

describe("SettingsInitializerService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: SettingsInitializerService = TestBed.get(SettingsInitializerService);
    expect(service).toBeTruthy();
  });
});
