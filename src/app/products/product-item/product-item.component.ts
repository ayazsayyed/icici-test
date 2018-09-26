import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  public products = [{
    'name':'New Startup Current Account',
    'productData' :['Free 100 cheque leaves per month','Free mobile alerts', 'Free RGTF & NEFT', 'Free cash deposit upto 100 times maintained MAB anytime in contry']
  },
  {
    'name':'Subhaarambh Current Account',
    'productData' :['Free 100 cheque leaves per month','Free mobile alerts', 'Free RGTF & NEFT', 'Free cash deposit upto 100 times maintained MAB anytime in contry']
  },
  {
    'name':'Smart Business Account - Gold',
    'productData' :['Free 100 cheque leaves per month','Free mobile alerts', 'Free RGTF & NEFT', 'Free cash deposit upto 100 times maintained MAB anytime in contry']
  },
  {
    'name':'Roaming Current Account - Gold',
    'productData' :['Free 100 cheque leaves per month','Free mobile alerts', 'Free RGTF & NEFT', 'Free cash deposit upto 100 times maintained MAB anytime in contry']
  }]
  constructor() { }

  ngOnInit() {
  }

}
