import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ShowcaseComponent } from "src/app/showcase/showcase.component";
import { PrimengModule } from "./components/primeng.module";
import { ComponentsModule } from "./components/components.module";

@NgModule({
  imports: [
    PrimengModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ComponentsModule,
    RouterModule.forRoot([{ path: "", component: ShowcaseComponent }]),
  ],
  declarations: [ShowcaseComponent],
  bootstrap: [ShowcaseComponent],
  providers: [],
})
export class AppModule {}
