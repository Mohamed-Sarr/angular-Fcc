import { Component } from "@angular/core";

@Component({
    selector:'app-hello-world',
    template:'<h1>Hello World</h1>',
    styles:[`
        h1{
            color:blue;
            font-size:40px;
        }
    `]
})

export class HelloWorldComponent {
    title ="Hello World";
}