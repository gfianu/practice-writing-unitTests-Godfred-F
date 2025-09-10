// Adds an item to the cart
function addItem(cart, item, quantity){
    if (typeof item !== "string" || typeof quantity !== "number" || quantity <= 0){
        return cart;
    }
    if (cart[item]) {
        cart[item] += quantity;
    } else {
        cart[item] = quantity;
    }
    return cart;
}

// Removes an item 
function removeItem(cart, item){
    if (cart[item]) {
        delete cart[item];
    }
    return cart;
}

// returns total number of items in the cart
function getTotalItems(cart){
    return Object.values(cart).reduce((total, qty)=> total + qty, 0);
}

// export functions
module.exports = {
    addItem,
    removeItem,
    getTotalItems
};

