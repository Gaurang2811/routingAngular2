import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Home } from './home.component';
import { About } from './about.component';
import { Banner } from './banner.component';
import { NotFound } from './notfound.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  // use 'export default class AboutModule' or use './app/about.module.ts#AboutModule'
  { path: 'about', loadChildren: './app/about.module.ts' }, 
  { path: 'banner', component: Banner, outlet: 'bottom' },
  { path: '**', component: NotFound }, //always last
];

export const AppRouting = RouterModule.forRoot(appRoutes, { 
  useHash: true,
  preloadingStrategy: PreloadAllModules
});