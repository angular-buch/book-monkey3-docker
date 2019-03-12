import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OneComponent } from "./components/one/one.component";
import { TwoComponent } from "./components/two/two.component";

const routes: Routes = [
    { path: "one", component: OneComponent },
    { path: "two", component: TwoComponent },
    { path: "", redirectTo: "one", pathMatch: "full" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
