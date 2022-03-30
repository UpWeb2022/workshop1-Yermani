import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public titleApp: string;
  public  listProduct: Product[];
  priceMax=300;
  constructor() {
  }
  ngOnInit(): void {
    this.titleApp= 'First Angular App';
    this.listProduct= [
      {
        picture:'https://images.phildar.fr/asset/public/produits/051018/2264/051018_2264_S1-700x700.jpg',
        id:1,
        title: 'T-shirt1',
        description: 'lkjforjgiheriojlerhgu',
      price: 120 ,
      quantity: 0,
      like: 12
    
    },
    {
      picture:'https://www.morgandetoi.fr/on/demandware.static/-/Sites-Morgan_master/default/dwfac8e841/pull-manches-longues-avec-col-en-v-bleu-electrique-femme-or-32536300829700314.jpg',
        id:2,
        title: 'T-shirt2',
        description: 'lkjforjgiheriojlerhgu',
      price: 150 ,
      quantity: 6,
      like: 20,
    },
    {
      picture:'https://archzine.fr/wp-content/uploads/2019/12/pull-oversize-couleur-rouge-col-enroule%CC%81-jeans-clairs-femme-tenue-d-hiver-look-style-casual-chic-pull-et-jeans.jpg',
        id:3,
        title: 'T-shirt3',
        description: 'lkjforjgiheriojlerhgu',
      price: 130 ,
      quantity: 10,
      like: 21,
    },
    {
      picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1HAfbrsBka358or3eIMSicM3tH2xURrlZA&usqp=CAU',
        id:4,
        title: 'T-shirt4',
        description: 'lkjforjgiheriojlerhgu',
      price: 160 ,
      quantity: 12,
      like: 18
    },
    {
      picture:'https://www.only.com/dw/image/v2/ABBT_PRD/on/demandware.static/-/Sites-pim-catalog/default/dwb5fee762/pim-static/large/15264902_Eggnog_955569_003_ProductLarge.jpg?sw=420&sh=560&sm=fit',
        id:5,
        title: 'T-shirt5',
        description: 'lkjforjgiheriojlerhgu',
      price: 120 ,
      quantity: 30,
      like: 28
    }
    ]
  }
  public incrementLike(p:Product): void{
    let i = this.listProduct.indexOf(p);
    if(i!=-1){
      this.listProduct[i].like++;

    }
  }
    public BuyProduct(p:Product): void{
      let i = this.listProduct.indexOf(p);
      if(i!=-1){
        this.listProduct[i].quantity--;
  
      }


  }


}
