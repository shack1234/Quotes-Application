import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote("Bernhard Shaw",1,"Emma","Life Quotes",'A life spent making mistakes is not only more honorable,but more useful than a life spent doing nothing', new Date(2020,2,31),29,4),
    new Quote("Douglas Adams",2,"Adams","TEChnology Quotes","First we thought the PC was a calculator. Then we found out how to turn numbers into letters with ASCII — and we thought it was a typewriter. Then we discovered graphics, and we thought it was a television. With the World Wide Web, we've realized it's a brochure", new Date(2020,2,14),100,5),
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.createdDate) - <any>new Date(a.createdDate);
    });
  } 
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.createdDate = new Date(quote.createdDate)
    this.quotes.push(quote);
  }
   toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isTrue,index){
    if(isTrue){
      let toDelete = confirm(`Are you sure you want to delete " ${this.quotes[index].title}" posted by  ${this.quotes[index].name}?`)
      if(toDelete){  
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }
  ngOnInit(): void {
  }

}
