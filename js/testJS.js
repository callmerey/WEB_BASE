// var product_js = [{
//         name: "Áo phông",
//         price: "190000",
//         image: 'pic1.jpg',
//         title: 'Áo phông nữ mùa hè in hình cây dừa Bến Tre',
//     }, {
//         name: "Áo phông mod 2",
//         price: "170000",
//         image: 'pic2.jpg',
//         title: 'Áo phông nữ mùa hè mẫu 2 có chữ siêu xịn',
//     }, {
//         name: "Áo phông 73",
//         price: "1890000",
//         image: 'pic3.jpg',
//         title: 'Áo phông nữ mùa hè in hình 73',
//     }, {
//         name: "Áo bơi mod 1",
//         price: "198000",
//         image: 'pic4.jpg',
//         title: 'đồ mơi nam màu xanh mod 1, siêu bền siêu cấp vip',
//     },
//     {
//         name: "áo tắm nữ mod 1",
//         price: "199000",
//         image: 'pic5.jpg',
//         title: 'Áo tắm nữ mùa hè bao mát',
//     },
//     {
//         name: "áo bơi nam nâu",
//         price: "188000",
//         image: 'pic6.jpg',
//         title: 'đồ mơi nam màu xanh mod 1, siêu bền siêu cấp vip',
//     },
//     {
//         name: "áo tắm nữ mod 2",
//         price: "177000",
//         image: 'pic7.jpg',
//         title: 'Áo tắm nữ mùa hè bao mát',
//     },
// ]

// sessionStorage.setItem('products', JSON.stringify(product_js));
// $(document).ready(function displayProduct() {
//     var cartArray = product_js;
//     var output = "";
//     var productId = 0;
//     for (var i in cartArray) {
//         productId++;
//         output +=
//             '<div class="col_1_of_3 span_1_of_3">' +
//             '<div class="view view-first">' +
//             '<form action="product_detail.html">' +
//             '<input type="submit" onclick="displayDetail()"  data-name="' + cartArray[i].name + '" data-image="' + cartArray[i].image + '" data-title="' + cartArray[i].title + '" data-price="' + cartArray[i].price + '" data-id="' + cartArray[i].id + '" class="detail" value="Detail">' +
//             '<div class="inner_content clearfix">' +
//             '<div class="product_image">' +
//             '<img src="/sunfhouse/images/' + cartArray[i].image + '" class="img-responsive" alt="">' +
//             '<div class="mask">' +
//             '<div class="info"> ' +
//             '<a href="javascript:void(0)" data-name="' + cartArray[i].name + '" data-image="' + cartArray[i].image + '" data-title="' + cartArray[i].title + '" data-price="' + cartArray[i].price + '" data-id="' + cartArray[i].id + '" class="add-to-cart">Add to cart</a></div>' +
//             '<a/>' +
//             '</div>' +
//             '<div class="product_container">' +
//             '<div class="cart-left">' +
//             '<p class="title">' + cartArray[i].name + '</p>' +
//             '</div>' +
//             '<div class="price">' + cartArray[i].price + '</div>' +
//             '<div class="clearfix"></div>' +
//             '</div>' +
//             '</div>' +
//             '<div class="sale-box"><span class="on_sale title_shop">New</span></div>' +
//             '</div>' +
//             '</input>' +
//             '</form>' +
//             '</div>' +
//             '</div>'
//     }
//     $('.product').html(output);

//     $('.add-to-cart').click(function(event) {
//         event.preventDefault();
//         var id = $(this).attr('data-id');
//         var name = $(this).attr('data-name');
//         var image = $(this).attr('data-image');
//         var title = $(this).attr('data-title');
//         var price = Number($(this).data('price'));
//         shoppingCart.addItemToCart(name, price, 1, image, title);
//         displayCart();
//     });

//     $('.detail').click(function(event) {
//         event.preventDefault();
//         var id = $(this).attr('data-id');
//         var name = $(this).attr('data-name');
//         var image = $(this).attr('data-image');
//         var title = $(this).attr('data-title');
//         var price = Number($(this).data('price'));
//         shoppingCart.addItemListDetail(name, price, 1, image, title);
//         displayDetail();
//         window.location.href = "product_detail.html";
//     });

// })

// var shoppingCart = (function() {
//     cart = [];

//     detail = [];
//     // Constructor
//     function Item(name, price, count, image, title) {
//         this.name = name;
//         this.price = price;
//         this.count = count;
//         this.image = image;
//         this.title = title;
//     }

//     // Save cart
//     function saveCart() {
//         sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
//     }

//     function saveDetail() {
//         sessionStorage.setItem('detail', JSON.stringify(cart));
//     }

//     // Load cart
//     function loadCart() {
//         detail = JSON.parse(sessionStorage.getItem('shoppingCart'));
//     }
//     if (sessionStorage.getItem("shoppingCart") != null) {
//         loadCart();
//     }

//     function loadDetail() {
//         detail = JSON.parse(sessionStorage.getItem('detail'));
//     }
//     if (sessionStorage.getItem("detail") != null) {
//         loadDetail();
//     }

//     // =============================
//     // Public methods and propeties
//     // =============================
//     var obj = {};

//     // Add to cart
//     obj.addItemToCart = function(name, price, count, image, title) {
//             for (var item in cart) {
//                 if (cart[item].name === name) {
//                     cart[item].count++;
//                     saveCart();
//                     return;
//                 }
//             }
//             var item = new Item(name, price, count, image, title);
//             cart.push(item);
//             saveCart();
//         }
//         // Set count from item
//     obj.setCountForItem = function(name, count) {
//         for (var i in cart) {
//             if (cart[i].name === name) {
//                 cart[i].count = count;
//                 break;
//             }
//         }
//     };

//     // Add to cart
//     obj.addItemListDetail = function(name, price, count, image, title) {
//             for (var item in cart) {
//                 if (cart[item].name === name) {
//                     cart[item].count++;
//                     saveDetail();
//                     return;
//                 }
//             }
//             var item = new Item(name, price, count, image, title);
//             cart.push(item);
//             saveDetail();
//         }
//         // Set count from item
//     obj.setCountForItem = function(name, count) {
//         for (var i in cart) {
//             if (cart[i].name === name) {
//                 cart[i].count = count;
//                 break;
//             }
//         }
//     };

//     // Remove item from cart
//     obj.removeItemFromCart = function(name) {
//         for (var item in cart) {
//             if (cart[item].name === name) {
//                 cart[item].count--;
//                 if (cart[item].count === 0) {
//                     cart.splice(item, 1);
//                 }
//                 break;
//             }
//         }
//         saveCart();
//     }

//     // Remove all items from cart
//     obj.removeItemFromCartAll = function(name) {
//         for (var item in cart) {
//             if (cart[item].name === name) {
//                 cart.splice(item, 1);
//                 break;
//             }
//         }
//         saveCart();
//     }

//     // Clear cart
//     obj.clearCart = function() {
//         cart = [];
//         saveCart();
//     }

//     // Count cart 
//     obj.totalCount = function() {
//         var totalCount = 0;
//         for (var item in cart) {
//             totalCount += cart[item].count;
//         }
//         return totalCount;
//     }

//     // Total cart
//     obj.totalCart = function() {
//         var totalCart = 0;
//         for (var item in cart) {
//             totalCart += cart[item].price * cart[item].count;
//         }
//         return Number(totalCart.toFixed(2));
//     }

//     // List cart
//     obj.listCart = function() {
//         var cartCopy = [];
//         for (i in cart) {
//             item = cart[i];
//             itemCopy = {};
//             for (p in item) {
//                 itemCopy[p] = item[p];
//             }
//             itemCopy.total = Number(item.price * item.count).toFixed(2);
//             cartCopy.push(itemCopy)
//         }
//         return cartCopy;
//     }
//     obj.listDetail = function() {
//         var detailCopy = [];
//         for (i in detail) {
//             item = detail[i];
//             itemCopy = {};
//             for (p in item) {
//                 itemCopy[p] = item[p];
//             }
//             itemCopy.total = Number(item.price * item.count).toFixed(2);
//             detailCopy.push(itemCopy)
//         }
//         return detailCopy;
//     }
//     return obj;

// })();

// // Clear items
// $('.remove_cart').click(function() {
//     shoppingCart.clearCart();
//     displayCart();
// });


// function displayCart() {
//     var cartArray = shoppingCart.listCart();
//     var output = "";
//     for (var i in cartArray) {
//         output += " <tr>" +
//             "<td>" +
//             "<table>" +
//             "<tr>" +
//             "<td>" + '<img width="200" height="250" src="/sunfhouse/images/' + cartArray[i].image + '" class="img-responsive"></td>' +
//             "<td>" + '<b style="margin-top: 100px"><div class="name_item" data-id="' + cartArray[i].name + '">' + cartArray[i].name + '</div></b>' +
//             "<p style='width: 256px;'>" + cartArray[i].title + "</p>" +
//             '<div style="margin-bottom: 40px">' +
//             '<i class="fab fa-facebook-f"></i>' +
//             '<i style="margin-left: 20px" class="fab fa-twitter"></i>' +
//             '<i style="margin-left: 20px" class="fab fa-instagram-square"></i>' +
//             "</div>" +
//             "</td>" +
//             "</tr>" +
//             "</table>" +
//             "</td>" +
//             "<td>" + cartArray[i].price + 'VNĐ' + "</td>" +
//             "<td>" +
//             '<div class="input-group" style="width: 120px;">' +
//             '<input class="minus-item is-form" type="button" value="-">' +
//             '<input aria-label="quantity" style="width: 25px;" class="item-count" max="100" min="1" name="" type="number" value="' + cartArray[i].count + '"' + 'data-name=' + cartArray[i].name + '">' +
//             '<input class="plus-item is-form" type="button" value="+">' +
//             "</div>" +
//             "</td>" +
//             "<td>" +
//             '<a href="#" class="delete-item" data-name="' + cartArray[i].name + '" > xóa' +
//             "</a>" +
//             "</td>" +
//             "</tr>"
//     }
//     $('.total-cart').html(shoppingCart.totalCart() + ' ' + 'VNĐ');
//     $('.total-count').html(shoppingCart.totalCount());
//     $('.result').html(output);
// }

// // function displayDetail() {
// //     var cartArray = shoppingCart.listDetail();
// //     var output = "";
// //     var output1 = "";
// //     for (var i in cartArray) {
// //         output += " <tr>" +
// //             "<td>" +
// //             "<table>" +
// //             "<tr>" +
// //             "<td>" + '<img width="200" height="250" src="/sunfhouse/images/' + cartArray[i].image + '" class="img-responsive"></td>' +
// //             "<td>" + '<b style="margin-top: 100px"><div class="name_item" data-id="' + cartArray[i].name + '">' + cartArray[i].name + '</div></b>' +
// //             "<p style='width: 256px;'>" + cartArray[i].title + "</p>" +
// //             '<div style="margin-bottom: 40px">' +
// //             '<i class="fab fa-facebook-f"></i>' +
// //             '<i style="margin-left: 20px" class="fab fa-twitter"></i>' +
// //             '<i style="margin-left: 20px" class="fab fa-instagram-square"></i>' +
// //             "</div>" +
// //             "</td>" +
// //             "</tr>" +
// //             "</table>" +
// //             "</td>" +
// //             "<td>" + cartArray[i].price + 'VNĐ' + "</td>" +
// //             "<td>" +
// //             '<div class="input-group" style="width: 120px;">' +
// //             '<input class="minus-item is-form" type="button" value="-">' +
// //             '<input aria-label="quantity" style="width: 25px;" class="item-count" max="100" min="1" name="" type="number" value="' + cartArray[i].count + '"' + 'data-name=' + cartArray[i].name + '">' +
// //             '<input class="plus-item is-form" type="button" value="+">' +
// //             "</div>" +
// //             "</td>" +
// //             "<td>" +
// //             '<a href="#" class="delete-item" data-name="' + cartArray[i].name + '" > xóa' +
// //             "</a>" +
// //             "</td>" +
// //             "</tr>"
// //     }
// //     output1 +=
// //         '<a href="javascript:void(0)" data-name="' + cartArray[i].name + '" data-image="' + cartArray[i].image + '" data-title="' + cartArray[i].title + '" data-price="' + cartArray[i].price + '" data-id="' + cartArray[i].id + '" class="add-to-cart">Add to cart</a>';
// //     $('.name_product').html(cartArray[i].name);
// //     $('.actual').html(cartArray[i].price);
// //     $('.quick_desc').html(cartArray[i].title);
// //     $('.add-to').html(output1);

// // }

// // Delete item button

// $('.result').on("click", ".delete-item", function(event) {
//     const nam = document.querySelector('.name_item');
//     var name = nam.dataset.id;
//     shoppingCart.removeItemFromCartAll(name);
//     displayCart();
// })


// // -1
// $('.result').on("click", ".minus-item", function(event) {

//     const nam = document.querySelector('.name_item');
//     var name = nam.dataset.id;
//     shoppingCart.removeItemFromCart(name);
//     displayCart();
// })

// // +1
// $('.result').on("click", ".plus-item", function(event) {

//     const nam = document.querySelector('.name_item');
//     var name = nam.dataset.id;
//     shoppingCart.addItemToCart(name);
//     displayCart();
// })

// // Item count input
// $('.result').on("change", ".item-count", function(event) {
//     const nam = document.querySelector('.name_item');
//     var name = nam.dataset.id;

//     var count = Number($(this).val());
//     shoppingCart.setCountForItem(name, count);
//     displayCart();
// });
// displayCart();
// displayDetail();