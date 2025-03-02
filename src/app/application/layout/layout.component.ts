'use strict';

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-layout',
	standalone: true,
    imports: [
        RouterModule,
        CommonModule,
        HeaderComponent,
        AsideComponent,
        FooterComponent
    ],
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

};
