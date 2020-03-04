import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CatalogueService} from '../services/catalogue.service';
import {ProductModel} from '../model/product.model';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public currentProduct: ProductModel;
  public url: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private catalogueService: CatalogueService) { }

  ngOnInit() {
    this.url = atob(this.activatedRoute.snapshot.params.id); // id se trouve dans snapshot.params
    this.catalogueService.getResource(this.url)
      .subscribe(data => {
        this.currentProduct = data;
      }, err => {
        console.log(err);
      });
    console.log(this.url);
  }
  onUpdate(value: any) {
    this.catalogueService.updateResource(this.url, value)
      .subscribe(data => {
        alert('Mise à jour effectuée avec succès');
        this.router.navigateByUrl('/products');
      }, err => {
        console.log(err);
      });

  }


}
