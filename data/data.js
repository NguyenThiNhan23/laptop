// import { staticImages } from "../utils/images"; // Đảm bảo bạn có import đúng hình ảnh

// export const orderData = [
//   {
//     id: "order_1",
//     order_no: "#5558760098",
//     order_date: "2 June 2023 2:40 PM",
//     status: "Delivered",
//     delivery_date: "8 June 2023",
//     payment_method: "Cash on Delivery",
//     items: [
//       {
//         id: "product_01",
//         name: "Printed white coat",
//         color: "White",
//         quantity: 1,
//         price: 23,
//         imgSource: require("../assets/images/cart1.png"), // Đây là nơi bạn gán hình ảnh từ `staticImages`
//       },
//       {
//         id: "product_02",
//         name: "Stretchy jumper for women",
//         color: "Maroon",
//         quantity: 5,
//         price: 21,
//         imgSource: require("../assets/images/cart2.png"), // Hình ảnh khác
//       },
//       {
//         id: "product_03",
//         name: "Black Color Hoodie",
//         color: "Black",
//         quantity: 10,
//         price: 90,
//         imgSource: require("../assets/images/cart3.png"), // Hình ảnh khác
//       },
//     ],
//   },
//   {
//     id: "order_2",
//     order_no: "#8958360118",
//     order_date: "2 June 2023 2:40 PM",
//     status: "In Progress",
//     delivery_date: "12 August 2023",
//     payment_method: "Online Payment",
//     items: [
//       {
//         id: "product_04",
//         name: "Stretchy jumper for women",
//         color: "Maroon",
//         quantity: 5,
//         price: 21,
//         imgSource: require("../assets/images/cart2.png"), // Hình ảnh
//       },
//       {
//         id: "product_05",
//         name: "Printed white coat",
//         color: "White",
//         quantity: 1,
//         price: 23,
//         imgSource: require("../assets/images/cart1.png"), // Hình ảnh
//       },
//       {
//         id: "product_08",
//         name: "Black Color Hoodie",
//         color: "Black",
//         quantity: 10,
//         price: 90,
//         imgSource: require("../assets/images/cart3.png"), // Hình ảnh
//       },
//     ],
//   },
// ];

// export { orderData };

export const orderData = [
  {
    id: "order_1",
    order_no: "#5558760098",
    order_date: "2 June 2023 2:40 PM",
    status: "Đã hủy",
    delivery_date: "8 June 2023",
    payment_method: "khi nhận hàng",
    items: [
      {
        id: "product_01",
        name: "Laptop Asus Vivobook Go 15 E1504FA",
        color: "White",
        quantity: 1,
        price: 23,
        imgSource: {
          uri: "https://cdn.tgdd.vn/Products/Images/44/311178/asus-vivobook-go-15-e1504fa-r5-nj776w-glr-2-750x500.jpg",
        }, // require("../assets/images/cart1.png"), // Đảm bảo là require()
      },
      {
        id: "product_02",
        name: "Laptop Dell Inspiron 15 3520",
        color: "Maroon",
        quantity: 5,
        price: 21,
        imgSource: {
          uri: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/325242/dell-inspiron-15-3520-i5-n5i5052w1-glr-2-638629598139234508-750x500.jpg",
        }, // Đảm bảo là require()
      },
      {
        id: "product_03",
        name: "Laptop Lenovo Ideapad Slim 3 15IAH8",
        color: "Black",
        quantity: 10,
        price: 90,
        imgSource: {
          uri: "https://cdn.tgdd.vn/Products/Images/44/313333/lenovo-ideapad-slim-3-15iah8-i5-83er00evn-glr-2-750x500.jpg",
        }, // Đảm bảo là require()
      },
    ],
  },
  {
    id: "order_2",
    order_no: "#8958360118",
    order_date: "2 June 2023 2:40 PM",
    status: "Đang giao",
    delivery_date: "12 August 2023",
    payment_method: "Online",
    items: [
      {
        id: "product_04",
        name: "Laptop Dell Inspiron 15",
        color: "Maroon",
        quantity: 5,
        price: 21,
        imgSource: {
          uri: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/325242/dell-inspiron-15-3520-i5-n5i5052w1-glr-2-638629598139234508-750x500.jpg",
        }, // Đảm bảo là require()
      },
      {
        id: "product_05",
        name: "Laptop Asus Vivobook Go 15 E1504FA R5 ",
        color: "White",
        quantity: 1,
        price: 23,
        imgSource: {
          uri: "https://cdn.tgdd.vn/Products/Images/44/311178/asus-vivobook-go-15-e1504fa-r5-nj776w-glr-2-750x500.jpg",
        }, // Đảm bảo là require()
      },
      {
        id: "product_08",
        name: "Laptop Lenovo Ideapad Slim 3 15IAH8",
        color: "Black",
        quantity: 10,
        price: 90,
        imgSource: {
          uri: "https://cdn.tgdd.vn/Products/Images/44/313333/lenovo-ideapad-slim-3-15iah8-i5-83er00evn-glr-2-750x500.jpg",
        }, // Đảm bảo là require()
      },
    ],
  },
];
