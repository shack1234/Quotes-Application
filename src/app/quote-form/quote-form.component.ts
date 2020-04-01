import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote("", 1, "", "", "", new Date(), 0, 0);
  @Output() addQuote = new EventEmitter<Quote>();
  submitQuote() {
    this.addQuote.emit(this.newQuote);

  }
  //  RESETTING  FORM FIELDS
  reset() {
    this.newQuote = new Quote("", 1, "", "", "", new Date(), 0, 0); // returns everything to default
  }
  constructor() { }

  ngOnInit(): void {
  }

}
