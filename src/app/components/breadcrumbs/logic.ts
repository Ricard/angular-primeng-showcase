
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'breadcrumb-basic-demo',
    templateUrl: './template.html'
})
export class BreadcrumbBasicDemo implements OnInit {
    items: MenuItem[];

    home: MenuItem;

    ngOnInit() {
        this.items = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];

        this.home = { icon: 'pi pi-home', routerLink: '/' };
    }
}