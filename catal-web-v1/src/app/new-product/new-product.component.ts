import {Component, Injectable, OnInit} from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {Router} from '@angular/router';
import { ProductModel } from '../model/product.model';
@Injectable()
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  public currentProduct: ProductModel;
  public mode = 1;
  constructor(private catalogueService: CatalogueService, private route: Router) {
  }

  ngOnInit() {
  }

  onAjouter(data: any) {
    this.catalogueService.saveResource(this.catalogueService.host + '/produits', data)
      .subscribe(res => {
        console.log(res),
        this.currentProduct = res,
          this.mode = 2;
      }, error => console.log(error));
  }
  onNewProduct() {
    this.mode = 1;
  }
}
