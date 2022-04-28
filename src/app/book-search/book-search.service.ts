import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})


export class BooksService{

    private url:string ="http://openlibrary.org/search.json?title="

    constructor(private http:HttpClient){}

     getBooks(searchValue:string):Observable<any>{
        return  this.http.get<any>(this.url+searchValue)
    }
}