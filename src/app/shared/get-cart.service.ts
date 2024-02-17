import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GetCartService {
  data = [
    {
      id: 1,
      title: "Nike Structure 25",
      description: "Running sneakers with thin elastic laces",
      category: "Men's Road Running Shoes",
      video: "https://www.youtube.com/embed?v=j2zYw9p5Xbg",
      price: "140",
      rate: 4.5,
      size: [37, 38, 39, 40, 41],
      images: [],
      colors: [
        {
          name: "red",
          hex: "#dc0000",
          images: [
            "assets/images/1/red/1.jpg",
            "assets/images/1/red/2.jpg",
            "assets/images/1/red/3.jpg",
            "assets/images/1/red/4.jpg",
            "assets/images/1/red/5.jpg",
          ],
        },
        {
          name: "green",
          hex: "#10ad10",
          images: [
            "assets/images/1/green/1.jpg",
            "assets/images/1/green/2.jpg",
            "assets/images/1/green/3.jpg",
            "assets/images/1/green/4.jpg",
            "assets/images/1/green/5.jpg",
          ],
        },
        {
          name: "lime",
          hex: "#32CD32",
          images: [
            "assets/images/1/lime/1.jpg",
            "assets/images/1/lime/2.jpg",
            "assets/images/1/lime/3.jpg",
            "assets/images/1/lime/4.jpg",
            "assets/images/1/lime/5.jpg",
          ],
        },
        {
          name: "black",
          hex: "#000000",
          images: [
            "assets/images/1/black/1.jpg",
            "assets/images/1/black/2.jpg",
            "assets/images/1/black/3.jpg",
            "assets/images/1/black/4.jpg",
            "assets/images/1/black/5.jpg",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Nike Dunk Low Retro",
      description:
        "Rubber outsole with classic hoops pivot circle adds durable traction and heritage style.",
      category: "Men's Shoes",
      price: "115",
      video: "https://www.youtube.com/embed?v=-m57QQXRQik",
      rate: 5,
      size: [37, 38, 39, 41],
      colors: [
        {
          name: "red",
          hex: "#dc0000",
          images: [
            "assets/images/2/red/1.jpg",
            "assets/images/2/red/2.jpg",
            "assets/images/2/red/3.jpg",
            "assets/images/2/red/4.jpg",
            "assets/images/2/red/5.jpg",
          ],
        },
        {
          name: "black",
          hex: "#000000",
          images: [
            "assets/images/2/black/1.jpg",
            "assets/images/2/black/2.jpg",
            "assets/images/2/black/3.jpg",
            "assets/images/2/black/4.jpg",
            "assets/images/2/black/5.jpg",
          ],
        },
        {
          name: "blue",
          hex: "#0000FF",
          images: [
            "assets/images/2/blue/1.jpg",
            "assets/images/2/blue/2.jpg",
            "assets/images/2/blue/3.jpg",
            "assets/images/2/blue/4.jpg",
            "assets/images/2/blue/5.jpg",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Nike Free Metcon 5",
      description:
        "A breathable, lightweight upper has a comfortable, sock-like feel with a 7/8-length inner sleeve and provides easy entry.",
      category: "Men's Workout Shoes",
      price: "130",
      rate: 4.5,
      video: "https://www.youtube.com/embed?v=NP7oNGpH-LQ",
      size: [37, 38, 39, 40, 41],
      colors: [
        {
          name: "red",
          hex: "#dc0000",
          images: [
            "assets/images/3/red/1.jpg",
            "assets/images/3/red/2.jpg",
            "assets/images/3/red/3.jpg",
            "assets/images/3/red/4.jpg",
            "assets/images/3/red/5.jpg",
          ],
        },
        {
          name: "orange",
          hex: "#FFA500",
          images: [
            "assets/images/3/orange/1.jpg",
            "assets/images/3/orange/2.jpg",
            "assets/images/3/orange/3.jpg",
            "assets/images/3/orange/4.jpg",
            "assets/images/3/orange/5.jpg",
          ],
        },
        {
          name: "blue",
          hex: "#0000FF",
          images: [
            "assets/images/3/blue/1.jpg",
            "assets/images/3/blue/2.jpg",
            "assets/images/3/blue/3.jpg",
            "assets/images/3/blue/4.jpg",
            "assets/images/3/blue/5.jpg",
          ],
        },
        {
          name: "purble",
          hex: "#800080",
          images: [
            "assets/images/3/purble/1.jpg",
            "assets/images/3/purble/2.jpg",
            "assets/images/3/purble/3.jpg",
            "assets/images/3/purble/4.jpg",
            "assets/images/3/purble/5.jpg",
          ],
        },
      ],
    },
  ];

  constructor() {}

  getCart() {
    return this.data;
  }
}
