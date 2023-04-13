import { NgModule } from "@angular/core";
import { AccordionBasicDemo } from "./accordion/logic";
import { PrimengModule } from "./primeng.module";
import { MessagesClosableDemo } from "./alerts/logic";
import { BreadcrumbBasicDemo } from "./breadcrumbs/logic";
import { CarouselBasicDemo } from "./carrousel/logic";
import { ProductService } from "./carrousel/service";
import { InputTextIconsDemo } from "./forms/logic";
import { DropdownFilterDemo } from "./dropdown/logic";

const components = [
  AccordionBasicDemo,
  MessagesClosableDemo,
  BreadcrumbBasicDemo,
  CarouselBasicDemo,
  DropdownFilterDemo,
  InputTextIconsDemo
];

@NgModule({
  imports: [PrimengModule],
  exports: components,
  declarations: components,
  providers: [ProductService]
})

export class ComponentsModule {}