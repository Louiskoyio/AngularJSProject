import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteUpvote(complete:boolean){
    this.quote.upvotes=this.quote.upvotes+1;
  }

  quoteDownvote(complete:boolean){
    this.quote.downvotes=this.quote.downvotes+1;
  }

  constructor() { }

  ngOnInit() {
  }

}
