import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})

export class ServerComponent{
    name = 'Tanmoy'
    surname = 'Koner'

    getSurname(){
        return this.surname;
    }
}