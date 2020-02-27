import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { OverheardesSharedModule } from 'app/shared/shared.module';
import { OverheardesCoreModule } from 'app/core/core.module';
import { OverheardesAppRoutingModule } from './app-routing.module';
import { OverheardesHomeModule } from './home/home.module';
import { OverheardesEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    OverheardesSharedModule,
    OverheardesCoreModule,
    OverheardesHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    OverheardesEntityModule,
    OverheardesAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class OverheardesAppModule {}
