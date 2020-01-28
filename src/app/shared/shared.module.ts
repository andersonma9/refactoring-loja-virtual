import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CustomCurrencyPipe } from '../customPipes/custom-currency.pipe';

const CONTENTS = [
  CommonModule,
  MaterialModule,
  HttpClientModule,
  ReactiveFormsModule,
  FormsModule
];

@NgModule({
  declarations: [CustomCurrencyPipe],
  imports: [CONTENTS],
  exports: [CONTENTS, CustomCurrencyPipe]
})
export class SharedModule {}
