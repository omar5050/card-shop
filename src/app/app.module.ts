import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CartDetailsComponent } from "./component/cart-details/cart-details.component";
import { HeaderComponent } from "./component/header/header.component";
import { FooterComponent } from "./component/footer/footer.component";
import { NgxPaginationModule } from "ngx-pagination";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SafePipe } from "./shared/safe.pipe";
import { YouTubePlayerModule } from "@angular/youtube-player";

@NgModule({
  declarations: [
    AppComponent,
    CartDetailsComponent,
    HeaderComponent,
    FooterComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgbModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
