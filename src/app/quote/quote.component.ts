import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quotes:Quote[] = [
    new Quote('Kaaa na mama yako','Lonyangapuo',0,0,new Date(2019,9,14),"Admin"),
    new Quote('What we see depends mainly on what we look for','Anonymous',0,0,new Date(2019,10,14),"Admin"),
    new Quote('The Way Get Started Is To Quit Talking And Begin Doing','Walt Disney',0,0,new Date(2019,11,14),"Admin"),
    new Quote('The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty','Winston Churchill',0,0,new Date(2019,11,14),"Admin"),
    new Quote('You Don’t Have To Be Great To Start, But You Have To Start To Be Great','Zig Ziglar',0,0,new Date(2019,9,28),"Admin"),
    new Quote('Kaaa na mama yako','Lonyangapuo',0,0,new Date(2019,12,24),"Admin")
  ];



  toggleDetails(index){
    this.quotes[index].showDetail = !this.quotes[index].showDetail;
  }
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