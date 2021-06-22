var product_js = [{
        name: "Áo phông",
        price: "190000",
        image: 'pic1.jpg',
        title: 'Áo phông nữ mùa hè in hình cây dừa Bến Tre',
    }, {
        name: "Áo phông mod 2",
        price: "170000",
        image: 'pic2.jpg',
        title: 'Áo phông nữ mùa hè mẫu 2 có chữ siêu xịn',
    }, {
        name: "Áo phông 73",
        price: "1890000",
        image: 'pic3.jpg',
        title: 'Áo phông nữ mùa hè in hình 73',
    }, {
        name: "Áo bơi mod 1",
        price: "198000",
        image: 'pic4.jpg',
        title: 'đồ mơi nam màu xanh mod 1, siêu bền siêu cấp vip',
    },
    {
        name: "áo tắm nữ mod 1",
        price: "199000",
        image: 'pic5.jpg',
        title: 'Áo tắm nữ mùa hè bao mát',
    },
    {
        name: "áo bơi nam nâu",
        price: "188000",
        image: 'pic6.jpg',
        title: 'đồ mơi nam màu xanh mod 1, siêu bền siêu cấp vip',
    },
    {
        name: "áo tắm nữ mod 2",
        price: "177000",
        image: 'pic7.jpg',
        title: 'Áo tắm nữ mùa hè bao mát',
    },
]

sessionStorage.setItem('products', JSON.stringify(product_js));
$(document).ready(function displayProduct() {
    var cartArray = product_js;
    var output = "";
    var productId = 0;
    for (var i in cartArray) {
        productId++;
        output +=
            '<div class="col_1_of_3 span_1_of_3">' +
            '<div class="view view-first">' +
            '<a href="">' +
            '<div class="inner_content clearfix">' +
            '<div class="product_image">' +
            '<img src="./images/' + cartArray[i].image + '" class="img-responsive" alt="">' +
            '<div class="mask">' +
            '<div class="info"> ' +
            '<a href="javascript:void(0)" data-name="' + cartArray[i].name + '" data-image="' + cartArray[i].image + '" data-title="' + cartArray[i].title + '" data-price="' + cartArray[i].price + '" data-id="' + cartArray[i].id + '" class="add-to-cart">Add to cart</a></div>' +
            '</div>' +
            '<div class="product_container">' +
            '<div class="cart-left">' +
            '<p class="title">' + cartArray[i].name + '</p>' +
            '</div>' +
            '<div class="price">' + cartArray[i].price + '</div>' +
            '<div class="clearfix"></div>' +
            '</div>' +
            '</div>' +
            '<div class="sale-box"><span class="on_sale title_shop">New</span></div>' +
            '</div>' +
            '</a>' +
            '</div>' +
            '</div>'
    }
    $('.product').html(output);


    $('.add-to-cart').click(function(event) {
        event.preventDefault();
        var id = $(this).attr('data-id');
        var name = $(this).attr('data-name');
        var image = $(this).attr('data-image');
        var title = $(this).attr('data-title');
        console.log(title);
        var price = Number($(this).data('price'));
        shoppingCart.addItemToCart(name, price, 1, image, title);
        displayCart();
    });
})

var shoppingCart = (function() {
    cart = [];
    // Constructor
    function Item(name, price, count, image, title) {
        this.name = name;
        this.price = price;
        this.count = count;
        this.image = image;
        this.title = title;
    }

    // Save cart
    function saveCart() {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    // Load cart
    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
        loadCart();
    }


    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};

    // Add to cart
    obj.addItemToCart = function(name, price, count, image, title) {
            for (var item in cart) {
                if (cart[item].name === name) {
                    cart[item].count++;
                    saveCart();
                    return;
                }
            }
            var item = new Item(name, price, count, image, title);
            cart.push(item);
            saveCart();
        }
        // Set count from item
    obj.setCountForItem = function(name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    };
    // Remove item from cart
    obj.removeItemFromCart = function(name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count--;
                if (cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    // Remove all items from cart
    obj.removeItemFromCartAll = function(name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }

    // Clear cart
    obj.clearCart = function() {
        cart = [];
        saveCart();
    }

    // Count cart 
    obj.totalCount = function() {
        var totalCount = 0;
        for (var item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }

    // Total cart
    obj.totalCart = function() {
        var totalCart = 0;
        for (var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
    }

    // List cart
    obj.listCart = function() {
        var cartCopy = [];
        for (i in cart) {
            item = cart[i];
            itemCopy = {};
            for (p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }
    return obj;
})();

// Clear items
$('.remove_cart').click(function() {
    shoppingCart.clearCart();
    displayCart();
});


function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    for (var i in cartArray) {
        output += " <tr>" +
            "<td>" +
            "<table>" +
            "<tr>" +
            "<td>" + '<img width="200" height="250" src="./images/' + cartArray[i].image + '" class="img-responsive"></td>' +
            "<td>" + '<b style="margin-top: 100px"><div class="name_item" data-id="' + cartArray[i].name + '">' + cartArray[i].name + '</div></b>' +
            "<p style='width: 256px;'>" + cartArray[i].title + "</p>" +
            '<div style="margin-bottom: 40px">' +
            '<i class="fab fa-facebook-f"></i>' +
            '<i style="margin-left: 20px" class="fab fa-twitter"></i>' +
            '<i style="margin-left: 20px" class="fab fa-instagram-square"></i>' +
            "</div>" +
            "</td>" +
            "</tr>" +
            "</table>" +
            "</td>" +
            "<td>" + cartArray[i].price + 'VNĐ' + "</td>" +
            "<td>" +
            '<div class="input-group" style="width: 120px;">' +
            '<input class="minus-item is-form" type="button" value="-">' +
            '<input aria-label="quantity" style="width: 25px;" class="item-count" max="100" min="1" name="" type="number" value="' + cartArray[i].count + '"' + 'data-name=' + cartArray[i].name + '">' +
            '<input class="plus-item is-form" type="button" value="+">' +
            "</div>" +
            "</td>" +
            "<td>" +
            '<a href="#" class="delete-item" data-name="' + cartArray[i].name + '" > xóa' +
            "</a>" +
            "</td>" +
            "</tr>"
    }
    $('.total-cart').html(shoppingCart.totalCart() + ' ' + 'VNĐ');
    $('.total-count').html(shoppingCart.totalCount());
    $('.result').html(output);
}

// Delete item button

$('.result').on("click", ".delete-item", function(event) {
    const nam = document.querySelector('.name_item');
    var name = nam.dataset.id;
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
})


// -1
$('.result').on("click", ".minus-item", function(event) {

    const nam = document.querySelector('.name_item');
    var name = nam.dataset.id;
    shoppingCart.removeItemFromCart(name);
    displayCart();
})

// +1
$('.result').on("click", ".plus-item", function(event) {

    const nam = document.querySelector('.name_item');
    var name = nam.dataset.id;
    shoppingCart.addItemToCart(name);
    displayCart();
})

// Item count input
$('.result').on("change", ".item-count", function(event) {

    const nam = document.querySelector('.name_item');
    var name = nam.dataset.id;

    var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    console.log(count);
    console.log(name);
    displayCart();
});
displayCart();