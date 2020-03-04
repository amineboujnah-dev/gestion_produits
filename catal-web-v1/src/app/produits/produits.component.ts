import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  public produits: any; // la valeur par défaut de any=undefined
  public currentKeyword: string;

  constructor(private catalogueService: CatalogueService, private router: Router) { }
  currentPage: number = 0;
  size: number = 5;
  totalPages: number;
  pages: Array<number>;

  ngOnInit() {
  }
  onGetProducts() {
    this.catalogueService.getProducts(this.currentPage, this.size)
      .subscribe(data => {
        this.totalPages = data['page'].totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.produits = data;
      }, error => {
        console.log(error);
      });
  }
  onPageProducts(i: number) {
    this.currentPage = i;
    this.chercherProduits();
  }
  onChercher(form: any) {
    this.currentPage = 0;
    this.currentKeyword = form.Keyword;
    this.chercherProduits();
  }
  chercherProduits() {
    this.catalogueService.getProductsByKeyword(this.currentKeyword, this.currentPage, this.size)
      .subscribe(data => {
        this.totalPages = data['page'].totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.produits = data;
      }, error => {
        console.log(error);
      });
  }
  onDeleteProduct(p) {
    let conf = confirm('Êtes-vous sûr ?'); // une boite de confirmation
    if (conf) {
      this.catalogueService.deleteResource(p._links.self.href)
        .subscribe(data => {
          this.chercherProduits();

        }, error => {
          console.log(error);
        });
    }
  }
  onEditProduct(p) {
    let url = p._links.self.href;
    this.router.navigateByUrl('/edit-product/' + btoa(url)); // url contient le id, btoa encode l'url
  }

}
