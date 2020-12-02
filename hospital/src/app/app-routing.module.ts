import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsComponent} from './components/views/details/details.component';
import {HomeComponent} from './components/views/home/home.component';
import {NewTestComponent} from './components/views/new-test/new-test.component';
import {NotFoundComponent} from './components/views/not-found/not-found.component';
import {RedoTestComponent} from './components/views/redo-test/redo-test.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "details/:dnaTestId",
        component: DetailsComponent
    },
    {
        path: "new-test",
        component: NewTestComponent
    },
    {
        path: "redo-test/:dnaTestId",
        component: RedoTestComponent
    },
    {
        path: "**",
        component: NotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
