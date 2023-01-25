import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {HeaderModule} from "../shared/header/header.module";
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {FooterModule} from "../shared/footer/footer.module";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    RouterOutlet,
    RouterModule.forChild(routes)
  ]
})
export class LayoutsModule { }
