import { Component } from '@angular/core';
import { ITableData } from './book-search';
import { BooksService } from './book-search.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
})
export class BookSearchComponent {

  constructor(private booksService:BooksService) {}
  tableData:ITableData[] =[]

  private _bookFilter:string = '';
  get bookFilter():string{
      return this._bookFilter;
  }

  set bookFilter(value:string){
    this._bookFilter =  value
  }

  performFilter(filter:string):string{
    return filter.replace(' ','+').toLocaleLowerCase()
  }

  search(){
    if(this._bookFilter){
      this.booksService.getBooks(this.performFilter(this._bookFilter)).subscribe({
        next:tableData => this.tableData = tableData.docs.filter((item:any)=>item.title&&item.author_name&&item.publish_year)
          
      })
    }
  }

}
