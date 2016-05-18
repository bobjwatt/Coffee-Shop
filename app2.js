var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

function CoffeeShop(locationName, minCustomersHour, maxCustomersHour, avgCupsPerCustomer, avgPoundsPerCustomer ){

  this.locationName = locationName;
  this.minCustomersHour = minCustomersHour;
  this.maxCustomersHour = maxCustomersHour;
  this.avgCupsPerCustomer = avgCupsPerCustomer;
  this.avgPoundsPerCustomer = avgPoundsPerCustomer;
  this.customersPerHour = [];
  this.dailyCustomersTotal = 0;
  this.dailyCupsTotal = 0;
  this.cupsPerHour = [];
  this.beansNeededForCupsPerHour = [];
  this.dailyBeansNeeded = 0;
  this.poundPackagesPerHour = [];
  this.dailyPoundPackagesTotal = 0;
  this.beansPerHour = [];
  this.customerBuysPerHour = [];
  this.dailyCustomerBuysTotal = 0;
  this.BaristaPerCustomerPerHour = [];
  this.dailyBaristaTotal = 0;
}

CoffeeShop.prototype.calcCustomersPerHour = function() {
  for (var i = 0; i < hours.length; i ++) {
    var customers = Math.ceil(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1)) + this.minCustomersHour;
    this.customersPerHour.push(customers);
    this.dailyCustomersTotal += parseFloat(customers.toFixed(1));
  }
  // console.log(this.customersPerHour);
  // console.log(this.dailyCustomersTotal);
};
//Barista calulation 1 of 2 Not Calculating???
CoffeeShop.prototype.calcCustomerBuysPerHour = function (){
  for (var i = 0; i < hours.length; i++) {
    var buys = parseFloat((this.cupsPerHour[i] + this.poundPackagesPerHour[i]) / 2).toFixed(1);
    this.customerBuysPerHour.push(buys);
    this.dailyCustomerBuysTotal += parseFloat(buys.toFixed(1));
  }
  console.log(this.customerBuysPerHourTotal);
  console.log(this.dailyCustomerBuysTotal);
};
//Barista calulation 2 of 2 - Not Calculating???
CoffeeShop.prototype.calcBaristaPerCustomerPerHour = function (){
  for (var i = 0; i < hours.length; i++) {
    var Barista = parseFloat((this.buys[i] / 30).toFixed(1));
    this.baristaPerCustomerPerHour.push(Barista);
    this.dailyBaristaTotal += (Barista);
  }
  console.log(this.customersPerHour);
  console.log(this.dailyCustomerBuysTotal);

};

CoffeeShop.prototype.calcCupsPerHour = function(){
  for (var i = 0; i < this.customersPerHour.length; i ++){
    var cups  = parseFloat((this.customersPerHour[i] * this.avgCupsPerCustomer).toFixed(1));
    this.cupsPerHour.push(cups);
    this.dailyCupsTotal += parseFloat(cups.toFixed(1));
  }
  console.log(this.dailyCupsTotal);
  console.log(this.cupsPerHour);
};
CoffeeShop.prototype.calcBeansNeededForCupsPerHour = function(){
  for (var i = 0; i < this.cupsPerHour.length; i++) {
    var beansPerCup = parseFloat((this.cupsPerHour[i] / 16).toFixed(1));
  // 1 lbs === 16 cups
    this.beansNeededForCupsPerHour.push(beansPerCup);
    this.dailyBeansNeeded += parseFloat(beansPerCup.toFixed(1));
  }
  // console.log(this.dailyBeansNeeded);
  // console.log(this.beansNeededForCupsPerHour);
};
CoffeeShop.prototype.calcPoundPackagesPerHour = function(){
  for (var i = 0; i < hours.length; i++) {
    var packages = parseFloat((this.avgPoundsPerCustomer * this.customersPerHour[i]).toFixed(1));
  // 1 lbs === 16 cups
    this.poundPackagesPerHour.push(packages);
    this.dailyPoundPackagesTotal += parseFloat(packages.toFixed(1));

  }
  // console.log(this.packages);
  // console.log(this.poundPackagesPerHour);
};
CoffeeShop.prototype.calcBeansPerHour = function(){
  for (var i = 0; i < hours.length; i++) {
    var beansPerHour = parseFloat((this.beansNeededForCupsPerHour[i] + this.poundPackagesPerHour[i]).toFixed(1));
  // 1 lbs === 16 cups
    // console.log (beansPerHour);
    this.beansPerHour.push(beansPerHour);
  }
};

var pikePlace  = new CoffeeShop(pikePlace, 14, 35, 1.2, 0.34);
pikePlace.calcCustomersPerHour();
pikePlace.calcCupsPerHour();
pikePlace.calcBeansNeededForCupsPerHour();
pikePlace.calcPoundPackagesPerHour();
pikePlace.calcBeansPerHour();
pikePlace.calcCustomerBuysPerHour();
pikePlace.calcBaristaPerCustomerPerHour();

var capitolHill  = new CoffeeShop(capitolHill, 12, 28, 3.2, 0.03);
capitolHill.calcCustomersPerHour();
capitolHill.calcCupsPerHour();
capitolHill.calcBeansNeededForCupsPerHour();
capitolHill.calcPoundPackagesPerHour();
capitolHill.calcBeansPerHour();
capitolHill.calcCustomerBuysPerHour();
capitolHill.calcBaristaPerCustomerPerHour();

var seattlePublicLibrary  = new CoffeeShop(seattlePublicLibrary, 9, 45, 2.6, 0.02);
seattlePublicLibrary.calcCustomersPerHour();
seattlePublicLibrary.calcCupsPerHour();
seattlePublicLibrary.calcBeansNeededForCupsPerHour();
seattlePublicLibrary.calcPoundPackagesPerHour();
seattlePublicLibrary.calcBeansPerHour();
seattlePublicLibrary.calcCustomerBuysPerHour();
seattlePublicLibraryikePlace.calcBaristaPerCustomerPerHour();

var southLakeUnion  = new CoffeeShop(southLakeUnion, 5, 18, 1.3, 0.04);
southLakeUnion.calcCustomersPerHour();
southLakeUnion.calcCupsPerHour();
southLakeUnion.calcBeansNeededForCupsPerHour();
southLakeUnion.calcPoundPackagesPerHour();
southLakeUnion.calcBeansPerHour();
southLakeUnion.calcCustomerBuysPerHour();
southLakeUnion.calcBaristaPerCustomerPerHour();

var seaTacAirport  = new CoffeeShop(seaTacAirport, 28, 44, 1.1, 0.41);
seaTacAirport.calcCustomersPerHour();
seaTacAirport.calcCupsPerHour();
seaTacAirport.calcBeansNeededForCupsPerHour();
seaTacAirport.calcPoundPackagesPerHour();
seaTacAirport.calcBeansPerHour();
seaTacAirport.calcCustomerBuysPerHour();
seaTacAirport.calcBaristaPerCustomerPerHour();
