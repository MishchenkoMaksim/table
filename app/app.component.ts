import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: 'app.component.html'
}) 
export class AppComponent {

    rows: number = 10;

    Products = Products.splice(0, this.rows);

    deleteElement(index, id){
        this.Products.splice(index, 1);
        
        console.log(id);
    }
}

let Products = [{ id: 1, name : "product 1", price : 100 },
        { id: 2, name : "product 2", price : 200 },
        { id: 3, name : "product 3", price : 300 },
        { id: 4, name : "product 4", price : 400 },
        { id: 5, name : "product 5", price : 500 },
        { id: 6, name : "product 6", price : 600 },
        { id: 7, name : "product 7", price : 700 },
        { id: 8, name : "product 8", price : 800 },
        { id: 9, name : "product 9", price : 900 },
        { id: 10, name : "product 10", price : 1000 }];

