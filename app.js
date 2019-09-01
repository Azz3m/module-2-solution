
	/*
	  **********************************************************
      ****  Coded By : Eng.Azzam Azez Ali **********************
      ****  for more info email me @: Azzamazezali@gmail *******
      **********************************************************
	*/

(function (){
  'use restrict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var itemsToBuy = this;
    itemsToBuy.buyMessage="";
    itemsToBuy.buyAnItem = function(itemIndex){
      ShoppingListCheckOffService.itemRemoveFromBuyList(itemIndex);
      if(itemsToBuy.toBuy.length === 0){
        itemsToBuy.buyMessage = ShoppingListCheckOffService.changeMessage();
      }
    }
    itemsToBuy.toBuy = ShoppingListCheckOffService.showItemsInBuyList();
  }
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtList = this;
    boughtList.bought = ShoppingListCheckOffService.showItemsInBoughtList();
    if(boughtList.bought === undefined){
    }
      }

function ShoppingListCheckOffService(){
  var service= this;
  // list of items to buy
  var toBuy = [
    { name: 'Cookies', quantity: 10 },
    { name: 'Bananas', quantity: 100 },
    { name: 'fishes', quantity: 6 },
	{ name: 'Cucamber', quantity: 10 },
    { name: 'potatos', quantity: 100 },
    { name: 'tomatos', quantity: 6 }
  ];
  var bought=[];
  var boughtItem = undefined;
  var boughtLength = toBuy.length;
  service.itemRemoveFromBuyList = function(itemIndex){
      console.log("You have buy:("+ toBuy[itemIndex].name +"):,quantity = "+toBuy[itemIndex].quantity+" .");
      boughtItem = toBuy[itemIndex];
      bought.push(boughtItem);
      toBuy.splice(itemIndex,1);
  };

  service.showItemsInBuyList = function(){
   return toBuy;

  };
  service.showItemsInBoughtList = function(){
    return bought;
  };

  service.changeMessage = function(){
    if((toBuy.length === 0) && (toBuy !== undefined)){
      return "products are out";
    }
  };

}
})();
