const { addItem, removeItem, getTotalItems } = require('../shopping-cart/cart.js');

// declaring cart object
let cart = {}

// addItem tests
describe("addItem", function() {
    // Positive test
    test("should add a new item with a valid name and quantity", function(){
        addItem(cart, "apple", 3);
        expect(cart.apple).toBe(3);
    });

    // Negative test
    test("should be undefined if item with negative quantity is added", function(){
        addItem(cart, "banana", -2);
        expect(cart.banana).toBe(undefined);
    });

    // Edge case test
    test("should be undefined if item with a quantity 0 is added", function(){
        addItem(cart, "orange", 0);
        expect(cart.orange).toBe(undefined);
    });

});

// Remove item tests
describe("removeItem", function() {
    // Positive test
    test("should remove an existing item from the chart", function(){
        addItem(cart, "pineapple", 3);
        removeItem(cart, "pineapple");
        expect(cart.pineapple).toBe(undefined);
    });

    // Negative test
    test("should be undefined if attempting to remove an item not in cart", function(){
        removeItem(cart, "nectarine");
        expect(cart.nectarine).toBe(undefined);
    });

    // Edge case test
    test("length of cart should be 0 if last item is removed from cart", function(){
        removeItem(cart, "apple");
        expect(Object.keys(cart).length).toBe(0);
    });

});

// getTotalItems tests
describe("getTotalItems", function() {
    // Positive test
    test("should correctly count total number of items", function(){
        addItem(cart, "apple", 3);
        addItem(cart, "banana", 2);
        expect(getTotalItems(cart)).toBe(5);
    });

    // Negative test
    test("should return 0 if cart is empty", function(){
        removeItem(cart, "apple");
        removeItem(cart, "banana");
        expect(getTotalItems(cart)).toBe(0);
    });

    // Edge case test
    test("should be abble to calculate large quantities", function(){
        addItem(cart, "orange", 1000);
        addItem(cart, "banana", 20000)
        expect(getTotalItems(cart)).toBe(21000);
    });

});


