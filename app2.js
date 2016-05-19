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
  this.employeesPerHour = [];
  this.dailyEmployeesHoursTotal = 0;
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

CoffeeShop.prototype.calcCustomerBuysPerHour = function (){
  for (var i = 0; i < hours.length; i++) {
    var employees = parseFloat((this.customersPerHour[i] * 2 / 60).toFixed(1));
    this.employeesPerHour.push(employees);
    this.dailyEmployeesHoursTotal += parseFloat(this.employeesPerHour[i]);
  }
  console.log(this.employeesPerHour);
  console.log(this.dailyEmployeesHoursTotal);
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
    this.dailyPoundPackagesTotal += packages;

  }
  // console.log(this.packages);
  // console.log(this.poundPackagesPerHour);
};
CoffeeShop.prototype.calcBeansPerHour = function(){
  var totalBeans = 0;
  for (var i = 0; i < hours.length; i++) {
    var beansPerHour = parseFloat((this.beansNeededForCupsPerHour[i] + this.poundPackagesPerHour[i]).toFixed(1));
  // 1 lbs === 16 cups
    // console.log (beansPerHour);
    this.beansPerHour.push(beansPerHour);
    totalBeans += beansPerHour;
  }
  this.totalBeans = Math.ceil(totalBeans);
};

var pikePlace  = new CoffeeShop('Pike Place Market', 14, 35, 1.2, 0.34);
pikePlace.calcCustomersPerHour();
pikePlace.calcCupsPerHour();
pikePlace.calcBeansNeededForCupsPerHour();
pikePlace.calcPoundPackagesPerHour();
pikePlace.calcBeansPerHour();
pikePlace.calcCustomerBuysPerHour();

var capitolHill  = new CoffeeShop('Capitol Hill', 12, 28, 3.2, 0.03);
capitolHill.calcCustomersPerHour();
capitolHill.calcCupsPerHour();
capitolHill.calcBeansNeededForCupsPerHour();
capitolHill.calcPoundPackagesPerHour();
capitolHill.calcBeansPerHour();
capitolHill.calcCustomerBuysPerHour();

var seattlePublicLibrary  = new CoffeeShop('Seattle Public Library', 9, 45, 2.6, 0.02);
seattlePublicLibrary.calcCustomersPerHour();
seattlePublicLibrary.calcCupsPerHour();
seattlePublicLibrary.calcBeansNeededForCupsPerHour();
seattlePublicLibrary.calcPoundPackagesPerHour();
seattlePublicLibrary.calcBeansPerHour();
seattlePublicLibrary.calcCustomerBuysPerHour();

var southLakeUnion  = new CoffeeShop('South Lake Union', 5, 18, 1.3, 0.04);
southLakeUnion.calcCustomersPerHour();
southLakeUnion.calcCupsPerHour();
southLakeUnion.calcBeansNeededForCupsPerHour();
southLakeUnion.calcPoundPackagesPerHour();
southLakeUnion.calcBeansPerHour();
southLakeUnion.calcCustomerBuysPerHour();

var seaTacAirport  = new CoffeeShop('Sea-Tac Airport', 28, 44, 1.1, 0.41);
seaTacAirport.calcCustomersPerHour();
seaTacAirport.calcCupsPerHour();
seaTacAirport.calcBeansNeededForCupsPerHour();
seaTacAirport.calcPoundPackagesPerHour();
seaTacAirport.calcBeansPerHour();
seaTacAirport.calcCustomerBuysPerHour();

//get ref to table element

var beansTable = document.getElementById('beans-table');

var trElement = document.createElement('tr');
var thElement = document.createElement('th');
thElement.textContent = '';
trElement.appendChild(thElement);

var thElement = document.createElement('th');
thElement.textContent = 'Daily Location Total';
trElement.appendChild(thElement);

for (var i = 0; i < hours.length; i++) {
  var thElement = document.createElement('th');
  thElement.textContent = hours[i];
  trElement.appendChild(thElement);
};
beansTable.appendChild(trElement);
//Log way to do it
// var trElement = document.createElement('tr');
// var thElement = document.createElement('th');
// thElement.textContent = 'Pike Place Market';
// trElement.appendChild(thElement);
//
// var tdElement = document.createElement('td');
// tdElement.textContent = pikePlace.totalBeans;
// trElement.appendChild(tdElement);
//
// for (var i = 0; i < pikePlace.beansPerHour.length; i++) {
//   var tdElement = document.createElement('td');
//   tdElement.textContent = pikePlace.beansPerHour[i];
//   trElement.appendChild(tdElement);
// };
// beansTable.appendChild(trElement);
// //***********************************//
// var trElement = document.createElement('tr');
// var thElement = document.createElement('th');
// thElement.textContent = 'Capitol Hill';
// trElement.appendChild(thElement);
//
// var tdElement = document.createElement('td');
// tdElement.textContent = capitolHill.totalBeans;
// trElement.appendChild(tdElement);
//
// for (var i = 0; i < capitolHill.beansPerHour.length; i++) {
//   var tdElement = document.createElement('td');
//   tdElement.textContent = capitolHill.beansPerHour[i];
//   trElement.appendChild(tdElement);
// };
// beansTable.appendChild(trElement);
// //**************************************//
// var trElement = document.createElement('tr');
// var thElement = document.createElement('th');
// thElement.textContent = 'Seattle Public Library';
// trElement.appendChild(thElement);
//
// var tdElement = document.createElement('td');
// tdElement.textContent = seattlePublicLibrary.totalBeans;
// trElement.appendChild(tdElement);
//
// for (var i = 0; i < seattlePublicLibrary.beansPerHour.length; i++) {
//   var tdElement = document.createElement('td');
//   tdElement.textContent = seattlePublicLibrary.beansPerHour[i];
//   trElement.appendChild(tdElement);
// };
// beansTable.appendChild(trElement);
//
// //**************************************//
// var trElement = document.createElement('tr');
// var thElement = document.createElement('th');
// thElement.textContent = 'South Lake Union';
// trElement.appendChild(thElement);
//
// var tdElement = document.createElement('td');
// tdElement.textContent = southLakeUnion.totalBeans;
// trElement.appendChild(tdElement);
//
// for (var i = 0; i < southLakeUnion.beansPerHour.length; i++) {
//   var tdElement = document.createElement('td');
//   tdElement.textContent = southLakeUnion.beansPerHour[i];
//   trElement.appendChild(tdElement);
// };
// beansTable.appendChild(trElement);
//
// //***************************************//
//
// var trElement = document.createElement('tr');
// var thElement = document.createElement('th');
// thElement.textContent = 'Sea-Tac Airport';
// trElement.appendChild(thElement);
//
// var tdElement = document.createElement('td');
// tdElement.textContent = seaTacAirport.totalBeans;
// trElement.appendChild(tdElement);
//
// for (var i = 0; i < seaTacAirport.beansPerHour.length; i++) {
//   var tdElement = document.createElement('td');
//   tdElement.textContent = seaTacAirport.beansPerHour[i];
//   trElement.appendChild(tdElement);
// };
// beansTable.appendChild(trElement);

//***********//
//generalized version
function makeTableRow(store) {
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = store.locationName;
  trElement.appendChild(thElement);

  var tdElement = document.createElement('td');
  tdElement.textContent = store.totalBeans;
  trElement.appendChild(tdElement);

  for (var i = 0; i < store.beansPerHour.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = store.beansPerHour[i];
    trElement.appendChild(tdElement);
  };
  beansTable.appendChild(trElement);
}
makeTableRow(pikePlace);
makeTableRow(seaTacAirport);
makeTableRow(seattlePublicLibrary);
makeTableRow(southLakeUnion);
makeTableRow(capitolHill);

//*****************************************************//

var headerform = document.getElementById('header-form');
headerform.addEventListener('submit', handleSubmission);
//elementName.addEventListener('event type', handlerFunction);
function handleSubmission(event){
  event.preventDefault();

  var locationName = event.target.location.value;
  var minCustomersHour = parseFloat(event.target.min.value);
  var maxCustomersHour = parseFloat(event.target.max.value);
  var avgCupsPerCustomer = parseFloat(event.target.avgcups.value);
  var avgPoundsPerCustomer = parseFloat(event.target.avgpounds.value);

  var newShop  = new CoffeeShop(locationName, minCustomersHour, maxCustomersHour, avgPoundsPerCustomer, avgPoundsPerCustomer);

  newShop.calcCustomersPerHour();
  newShop.calcCupsPerHour();
  newShop.calcBeansNeededForCupsPerHour();
  newShop.calcPoundPackagesPerHour();
  newShop.calcBeansPerHour();
  newShop.calcCustomerBuysPerHour();

  makeTableRow(newShop);
  console.log(newShop);

  event.target.location.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avgcups.value = null;
  event.target.avgpounds.value = null;

}
