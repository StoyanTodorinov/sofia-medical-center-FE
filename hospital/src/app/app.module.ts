import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FooterComponent} from './components/shared/footer/footer.component';
import {HeaderComponent} from './components/shared/header/header.component';
import {DetailsComponent} from './components/views/details/details.component';
import {DnaTestDetailsComponent} from './components/views/details/dna-test-details/dna-test-details.component';
import {DnaTestListComponent} from './components/views/home/dna-test-list/dna-test-list.component';
import {HomeComponent} from './components/views/home/home.component';
import {NewTestComponent} from './components/views/new-test/new-test.component';
import {NotFoundComponent} from './components/views/not-found/not-found.component';
import {RedoTestComponent} from './components/views/redo-test/redo-test.component';


@NgModule({
    declarations: [
        AppComponent,
        DnaTestListComponent,
        NewTestComponent,
        FooterComponent,
        HeaderComponent,
        NotFoundComponent,
        DetailsComponent,
        HomeComponent,
        RedoTestComponent,
        DnaTestDetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
