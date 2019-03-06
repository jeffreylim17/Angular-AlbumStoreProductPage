import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    return this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
