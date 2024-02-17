import { Component, OnInit } from "@angular/core";
import { GetCartService } from "src/app/shared/get-cart.service";
import { NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
GetCartService;
@Component({
  selector: "app-cart-details",
  templateUrl: "./cart-details.component.html",
  styleUrls: ["./cart-details.component.css"],
})
export class CartDetailsComponent implements OnInit {
  cards: Array<any> = [];
  page: number = 1;
  clickCheck: boolean = false;
  currentSrcImg: string = "";
  imgCheck: boolean = false;
  loaderCheck: boolean = false;
  selectedItem: number | null = null;
  sizeSelect: number | null = null;
  img: number | null = null;
  imgSelectByHex: [] = [];
  color: boolean = false;
  count: number = 0;

  constructor(private data: GetCartService) {}

  ngOnInit(): void {
    this.cards = this.data.getCart();
  }

  getClick(click: any) {
    this.clickCheck = true;
    this.imgCheck = false;
  }

  getImgSrc(event: any) {
    this.imgCheck = !this.imgCheck;
    this.currentSrcImg = event.target.src;
    setTimeout(() => {
      this.imgCheck = true;
    }, 0);
  }

  selectItem(index: number) {
    this.selectedItem = index;
  }

  selectSize(index: number) {
    this.sizeSelect = index;
  }

  selectImg(index: number) {
    this.img = index;
  }

  getImgByhexColor(images: []) {
    this.imgSelectByHex = images;
    this.color = true;
  }

  increaseCount() {
    this.count++;
  }

  deleteCount() {
    this.count = 0;
  }
}
