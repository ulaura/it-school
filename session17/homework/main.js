class MenuItem {
  constructor(naming, type, price) {
    this.naming = naming;
    this.type = type;
    this.price = price;
  }
}

class CoffeeShop {

  orders = [];

  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
  }

  shopName() {
    return this.name;
  }

  addOrder(itemName) {
    const menuItem = this.menu.find((item) => item.naming === itemName);
    if (!menuItem) {
      console.log(`The item "${itemName}" is currently unavailable`);
    } else {
      this.orders.push(menuItem);
      console.log("Order added");
    }
  }

  fullfillOrders() {
    if (this.orders) {
      this.orders.forEach((order) => {
        setTimeout(() => {
          console.log(`The ${order.naming} is ready`);
        }, (Math.trunc(Math.random() * 9) + 1) * 1000);
      });
      this.orders = [];
    } else {
      console.log("All orders have been fulfilled!");
    }
  }

  dueAmount() {
    return this.orders.reduce((total, order) => {
        return total += order.price;   
    },0);
  }
}

(() => {
  const menuItems = [
    new MenuItem("cinnamon roll", "food", 2.5),
    new MenuItem("iced coffee", "drink", 5.1),
    new MenuItem("donuts", "food", 1.2),
    new MenuItem("espresso", "drink", 3.5),
  ];

  const coffeeShop = new CoffeeShop("JS Coffee Shop", menuItems);
  console.log(`Welcome to ${coffeeShop.name}`);

  coffeeShop.addOrder("donuts");
  coffeeShop.addOrder("espresso");

  console.log(`Your orders are ${coffeeShop.orders.map(order => order.naming).join(", ")}`);

  console.log(`Your due amount is ${coffeeShop.dueAmount()}`);

  coffeeShop.fullfillOrders();

})();
