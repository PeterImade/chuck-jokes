import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    { path: 'categories', component: CategoryComponent },
    { path: 'search', component: SearchComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {path: '**', component: PagenotfoundComponent}
];
