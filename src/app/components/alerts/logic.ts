import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
    selector: 'messages-closable-demo',
    templateUrl: './template.html'
})
export class MessagesClosableDemo implements OnInit {
    messages1: Message[];

    messages2: Message[];

    ngOnInit() {
        this.messages1 = [
            { severity: 'success', summary: 'Success', detail: 'Message Content' },
            { severity: 'info', summary: 'Info', detail: 'Message Content' },
        ];

        this.messages2 = [
            { severity: 'warn', summary: 'Waning', detail: 'Closable Message Content' },
            { severity: 'error', summary: 'Error', detail: 'Closable Message Content' },
        ];
    }
}