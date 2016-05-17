var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
console.log(hours);

var pikePlace = {
  locationName: 'Pike Place Market',
  minCustomersHour: 14,
  maxCustomersHour: 35,
  avgCupsPerCustomer: 1.2,
  avgPoundsPerCustomer: 0.34,
  beansPerHour: [],
  customersPerHour: [],
  cupsPerHour: [],
  beansNeededForCupsPerHour: [],
  poundPackagesPerHour: [],
  dailyCustomersTotal: 0,
  dailyCupsTotal: 0,
  dailyPoundPackagesTotal: 0,
  dailyBeansNeeded: 0,

  //Customers Per Hour//
  calcCustomersPerHour: function(min,max) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.ceil(Math.random() * (max - min + 1)) + min;
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal += parseFloat(customers.toFixed(1));
    }
    console.log(this.dailyCustomersTotal);
  },
  //Cups Per Hour//
  calcCupsPerHour: function(){
    for (var i = 0; i < this.customersPerHour.length; i ++){
      var cups  = parseFloat((this.customersPerHour[i] * this.avgCupsPerCustomer).toFixed(1));
      this.cupsPerHour.push(cups);
      this.dailyCupsTotal += parseFloat(cups.toFixed(1));
    }
    console.log(this.dailyCupsTotal);
  },
  //Beans Needed For Cups Per Hour//
  calcBeansNeededForCupsPerHour: function(){
    for (var i = 0; i < this.cupsPerHour.length; i++) {
      var beansPerCup = parseFloat((this.cupsPerHour[i] / 16).toFixed(1));
    // 1 lbs === 16 cups
      this.beansNeededForCupsPerHour.push(beansPerCup);
      this.dailyBeansNeeded += parseFloat(beansPerCup.toFixed(1));
    }
    console.log(this.dailyBeansNeeded);
  },
    //Pound Packages Per Hour//
  calcPoundPackagesPerHour:function(){
    for (var i = 0; i < hours.length; i++) {
      var packages = parseFloat((this.avgPoundsPerCustomer * this.customersPerHour[i]).toFixed(1));
    // 1 lbs === 16 cups
      this.poundPackagesPerHour.push(packages);
      this.dailyPoundPackagesTotal += parseFloat(packages.toFixed(1));

    }
    console.log(packages);
  },
    //Beans Per Hour//
  calcBeansPerHour: function(){ //Not calculating??
    for (var i = 0; i < hours.length; i++) {
      var beansPerHour = parseFloat((this.beansNeededForCupsPerHour[i] + this.poundPackagesPerHour[i]).toFixed(1));
    // 1 lbs === 16 cups
      // console.log (beansPerHour);
      this.beansPerHour.push(beansPerHour);
    }
  },
  render: function() {
    pikePlace.calcCustomersPerHour(pikePlace.minCustomersHour, pikePlace.maxCustomersHour);
    pikePlace.calcCupsPerHour();
    pikePlace.calcBeansNeededForCupsPerHour();
    pikePlace.calcPoundPackagesPerHour();
    pikePlace.calcBeansPerHour();
    // call all of the other methods that calc data
    var ulElement = document.getElementById('pike');

    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');

      liElement.textContent = hours[i] + ': ' + this.beansPerHour[i] + ' lbs ' + ' [' + this.customersPerHour[i] + ' customers, ' + this.cupsPerHour[i] + ' cups (' + this.beansNeededForCupsPerHour[i] + ')' + this.poundPackagesPerHour[i] + ' lbs to-go]';
      ulElement.appendChild(liElement);
    }
    //Total customers at Pike Place Market: 235
    var liElement = document.createElement('li');
    liElement.textContent = 'Total customers at ' + this.locationName + ': ' + this.dailyCustomersTotal;
    ulElement.appendChild(liElement);

  //Total cups sold at Pike Place Market: 189
    var liElement = document.createElement('li');
    liElement.textContent = 'Total cups sold at ' + this.locationName + ': ' + this.dailyCupsTotal;
    ulElement.appendChild(liElement);

    //Total pound packages sold at Pike Place Market: 26
    var liElement = document.createElement('li');
    liElement.textContent = 'Total pound packages sold at ' + this.locationName + ': ' + this.dailyPoundPackagesTotal;
    ulElement.appendChild(liElement);

    //Total pounds of beans needed at Pike Place Market: 38.4
    var liElement = document.createElement('li');
    liElement.textContent = 'Total pound of beans needed at ' + this.locationName + ': ' + this.dailyBeansNeeded;
    ulElement.appendChild(liElement);
  }
};
pikePlace.render();
console.log(pikePlace);

///CAPITOL HILL///

var capitolHill = {
  locationName: 'Capitol HILL',
  minCustomersHour: 12,
  maxCustomersHour: 28,
  avgCupsPerCustomer: 3.2,
  avgPoundsPerCustomer: 0.03,
  beansPerHour: [],
  customersPerHour: [],
  cupsPerHour: [],
  beansNeededForCupsPerHour: [],
  poundPackagesPerHour: [],
  dailyCustomersTotal: 0,
  dailyCupsTotal: 0,
  dailyPoundPackagesTotal: 0,
  dailyBeansNeeded: 0,

  //Customers Per Hour//
  calcCustomersPerHour: function(min,max) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.ceil(Math.random() * (max - min + 1)) + min;
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal += parseFloat(customers.toFixed(1));
    }
    console.log(this.dailyCustomersTotal);
  },
  //Cups Per Hour//
  calcCupsPerHour: function(){
    for (var i = 0; i < this.customersPerHour.length; i ++){
      var cups  = parseFloat((this.customersPerHour[i] * this.avgCupsPerCustomer).toFixed(1));
      this.cupsPerHour.push(cups);
      this.dailyCupsTotal += parseFloat(cups.toFixed(1));
    }
    console.log(this.dailyCupsTotal);
  },
  //Beans Needed For Cups Per Hour//
  calcBeansNeededForCupsPerHour: function(){
    for (var i = 0; i < this.cupsPerHour.length; i++) {
      var beansPerCup = parseFloat((this.cupsPerHour[i] / 16).toFixed(1));
    // 1 lbs === 16 cups
      this.beansNeededForCupsPerHour.push(beansPerCup);
      this.dailyBeansNeeded += parseFloat(beansPerCup.toFixed(1));
    }
    console.log(this.dailyBeansNeeded);
  },
    //Pound Packages Per Hour//
  calcPoundPackagesPerHour:function(){
    for (var i = 0; i < hours.length; i++) {
      var packages = parseFloat((this.avgPoundsPerCustomer * this.customersPerHour[i]).toFixed(1));
    // 1 lbs === 16 cups
      this.poundPackagesPerHour.push(packages);
      this.dailyPoundPackagesTotal += parseFloat(packages.toFixed(1));

    }
    console.log(packages);
  },
    //Beans Per Hour//
  calcBeansPerHour: function(){ //Not calculating??
    for (var i = 0; i < hours.length; i++) {
      var beansPerHour = parseFloat((this.beansNeededForCupsPerHour[i] + this.poundPackagesPerHour[i]).toFixed(1));
    // 1 lbs === 16 cups
      // console.log (beansPerHour);
      this.beansPerHour.push(beansPerHour);
    }
  },
  render: function() {
    capitolHill.calcCustomersPerHour(capitolHill.minCustomersHour, capitolHill.maxCustomersHour);
    capitolHill.calcCupsPerHour();
    capitolHill.calcBeansNeededForCupsPerHour();
    capitolHill.calcPoundPackagesPerHour();
    capitolHill.calcBeansPerHour();
    // call all of the other methods that calc data
    var ulElement = document.getElementById('capitol');

    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');

      liElement.textContent = hours[i] + ': ' + this.beansPerHour[i] + ' lbs ' + ' [' + this.customersPerHour[i] + ' customers, ' + this.cupsPerHour[i] + ' cups (' + this.beansNeededForCupsPerHour[i] + ')' + this.poundPackagesPerHour[i] + ' lbs to-go]';
      ulElement.appendChild(liElement);
    }
    //Total customers at Pike Place Market: 235
    var liElement = document.createElement('li');
    liElement.textContent = 'Total customers at ' + this.locationName + ': ' + this.dailyCustomersTotal;
    ulElement.appendChild(liElement);

  //Total cups sold at Pike Place Market: 189
    var liElement = document.createElement('li');
    liElement.textContent = 'Total cups sold at ' + this.locationName + ': ' + this.dailyCupsTotal;
    ulElement.appendChild(liElement);

    //Total pound packages sold at Pike Place Market: 26
    var liElement = document.createElement('li');
    liElement.textContent = 'Total pound packages sold at ' + this.locationName + ': ' + this.dailyPoundPackagesTotal;
    ulElement.appendChild(liElement);

    //Total pounds of beans needed at Pike Place Market: 38.4
    var liElement = document.createElement('li');
    liElement.textContent = 'Total pound of beans needed at ' + this.locationName + ': ' + this.dailyBeansNeeded;
    ulElement.appendChild(liElement);
  }
};
capitolHill.render();
console.log(capitolHill);

///Seattle Public Library///

var seattlePublicLibrary = {
  locationName: 'Seattle Public Library',
  minCustomersHour: 9,
  maxCustomersHour: 45,
  avgCupsPerCustomer: 2.6,
  avgPoundsPerCustomer: 0.02,
  beansPerHour: [],
  customersPerHour: [],
  cupsPerHour: [],
  beansNeededForCupsPerHour: [],
  poundPackagesPerHour: [],
  dailyCustomersTotal: 0,
  dailyCupsTotal: 0,
  dailyPoundPackagesTotal: 0,
  dailyBeansNeeded: 0,

  //Customers Per Hour//
  calcCustomersPerHour: function(min,max) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.ceil(Math.random() * (max - min + 1)) + min;
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal += parseFloat(customers.toFixed(1));
    }
    console.log(this.dailyCustomersTotal);
  },
  //Cups Per Hour//
  calcCupsPerHour: function(){
    for (var i = 0; i < this.customersPerHour.length; i ++){
      var cups  = parseFloat((this.customersPerHour[i] * this.avgCupsPerCustomer).toFixed(1));
      this.cupsPerHour.push(cups);
      this.dailyCupsTotal += parseFloat(cups.toFixed(1));
    }
    console.log(this.dailyCupsTotal);
  },
  //Beans Needed For Cups Per Hour//
  calcBeansNeededForCupsPerHour: function(){
    for (var i = 0; i < this.cupsPerHour.length; i++) {
      var beansPerCup = parseFloat((this.cupsPerHour[i] / 16).toFixed(1));
    // 1 lbs === 16 cups
      this.beansNeededForCupsPerHour.push(beansPerCup);
      this.dailyBeansNeeded += parseFloat(beansPerCup.toFixed(1));
    }
    console.log(this.dailyBeansNeeded);
  },
    //Pound Packages Per Hour//
  calcPoundPackagesPerHour:function(){
    for (var i = 0; i < hours.length; i++) {
      var packages = parseFloat((this.avgPoundsPerCustomer * this.customersPerHour[i]).toFixed(1));
    // 1 lbs === 16 cups
      this.poundPackagesPerHour.push(packages);
      this.dailyPoundPackagesTotal += parseFloat(packages.toFixed(1));

    }
    console.log(packages);
  },
    //Beans Per Hour//
  calcBeansPerHour: function(){ //Not calculating??
    for (var i = 0; i < hours.length; i++) {
      var beansPerHour = parseFloat((this.beansNeededForCupsPerHour[i] + this.poundPackagesPerHour[i]).toFixed(1));
    // 1 lbs === 16 cups
      // console.log (beansPerHour);
      this.beansPerHour.push(beansPerHour);
    }
  },
  render: function() {
    seattlePublicLibrary.calcCustomersPerHour(seattlePublicLibrary.minCustomersHour, seattlePublicLibrary.maxCustomersHour);
    seattlePublicLibrary.calcCupsPerHour();
    seattlePublicLibrary.calcBeansNeededForCupsPerHour();
    seattlePublicLibrary.calcPoundPackagesPerHour();
    seattlePublicLibrary.calcBeansPerHour();
    // call all of the other methods that calc data
    var ulElement = document.getElementById('spl');

    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');

      liElement.textContent = hours[i] + ': ' + this.beansPerHour[i] + ' lbs ' + ' [' + this.customersPerHour[i] + ' customers, ' + this.cupsPerHour[i] + ' cups (' + this.beansNeededForCupsPerHour[i] + ')' + this.poundPackagesPerHour[i] + ' lbs to-go]';
      ulElement.appendChild(liElement);
    }
    //Total customers at Pike Place Market: 235
    var liElement = document.createElement('li');
    liElement.textContent = 'Total customers at ' + this.locationName + ': ' + this.dailyCustomersTotal;
    ulElement.appendChild(liElement);

  //Total cups sold at Pike Place Market: 189
    var liElement = document.createElement('li');
    liElement.textContent = 'Total cups sold at ' + this.locationName + ': ' + this.dailyCupsTotal;
    ulElement.appendChild(liElement);

    //Total pound packages sold at Pike Place Market: 26
    var liElement = document.createElement('li');
    liElement.textContent = 'Total pound packages sold at ' + this.locationName + ': ' + this.dailyPoundPackagesTotal;
    ulElement.appendChild(liElement);

    //Total pounds of beans needed at Pike Place Market: 38.4
    var liElement = document.createElement('li');
    liElement.textContent = 'Total pound of beans needed at ' + this.locationName + ': ' + this.dailyBeansNeeded;
    ulElement.appendChild(liElement);
  }
};
seattlePublicLibrary.render();
console.log(seattlePublicLibrary);

///South Lake Union///

var southLakeUnion = {
  locationName: 'South Lake Union',
  minCustomersHour: 5,
  maxCustomersHour: 18,
  avgCupsPerCustomer: 1.3,
  avgPoundsPerCustomer: 0.04,
  beansPerHour: [],
  customersPerHour: [],
  cupsPerHour: [],
  beansNeededForCupsPerHour: [],
  poundPackagesPerHour: [],
  dailyCustomersTotal: 0,
  dailyCupsTotal: 0,
  dailyPoundPackagesTotal: 0,
  dailyBeansNeeded: 0,

  //Customers Per Hour//
  calcCustomersPerHour: function(min,max) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.ceil(Math.random() * (max - min + 1)) + min;
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal += parseFloat(customers.toFixed(1));
    }
    console.log(this.dailyCustomersTotal);
  },
  //Cups Per Hour//
  calcCupsPerHour: function(){
    for (var i = 0; i < this.customersPerHour.length; i ++){
      var cups  = parseFloat((this.customersPerHour[i] * this.avgCupsPerCustomer).toFixed(1));
      this.cupsPerHour.push(cups);
      this.dailyCupsTotal += parseFloat(cups.toFixed(1));
    }
    console.log(this.dailyCupsTotal);
  },
  //Beans Needed For Cups Per Hour//
  calcBeansNeededForCupsPerHour: function(){
    for (var i = 0; i < this.cupsPerHour.length; i++) {
      var beansPerCup = parseFloat((this.cupsPerHour[i] / 16).toFixed(1));
    // 1 lbs === 16 cups
      this.beansNeededForCupsPerHour.push(beansPerCup);
      this.dailyBeansNeeded += parseFloat(beansPerCup.toFixed(1));
    }
    console.log(this.dailyBeansNeeded);
  },
    //Pound Packages Per Hour//
  calcPoundPackagesPerHour:function(){
    for (var i = 0; i < hours.length; i++) {
      var packages = parseFloat((this.avgPoundsPerCustomer * this.customersPerHour[i]).toFixed(1));
    // 1 lbs === 16 cups
      this.poundPackagesPerHour.push(packages);
      this.dailyPoundPackagesTotal += parseFloat(packages.toFixed(1));

    }
    console.log(packages);
  },
    //Beans Per Hour//
  calcBeansPerHour: function(){ //Not calculating??
    for (var i = 0; i < hours.length; i++) {
      var beansPerHour = parseFloat((this.beansNeededForCupsPerHour[i] + this.poundPackagesPerHour[i]).toFixed(1));
    // 1 lbs === 16 cups
      // console.log (beansPerHour);
      this.beansPerHour.push(beansPerHour);
    }
  },
  render: function() {
    southLakeUnion.calcCustomersPerHour(southLakeUnion.minCustomersHour, southLakeUnion.maxCustomersHour);
    southLakeUnion.calcCupsPerHour();
    southLakeUnion.calcBeansNeededForCupsPerHour();
    southLakeUnion.calcPoundPackagesPerHour();
    southLakeUnion.calcBeansPerHour();
    // call all of the other methods that calc data
    var ulElement = document.getElementById('slu');

    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');

      liElement.textContent = hours[i] + ': ' + this.beansPerHour[i] + ' lbs ' + ' [' + this.customersPerHour[i] + ' customers, ' + this.cupsPerHour[i] + ' cups (' + this.beansNeededForCupsPerHour[i] + ')' + this.poundPackagesPerHour[i] + ' lbs to-go]';
      ulElement.appendChild(liElement);
    }
    //Total customers at Pike Place Market: 235
    var liElement = document.createElement('li');
    liElement.textContent = 'Total customers at ' + this.locationName + ': ' + this.dailyCustomersTotal;
    ulElement.appendChild(liElement);

  //Total cups sold at Pike Place Market: 189
    var liElement = document.createElement('li');
    liElement.textContent = 'Total cups sold at ' + this.locationName + ': ' + this.dailyCupsTotal;
    ulElement.appendChild(liElement);

    //Total pound packages sold at Pike Place Market: 26
    var liElement = document.createElement('li');
    liElement.textContent = 'Total pound packages sold at ' + this.locationName + ': ' + this.dailyPoundPackagesTotal;
    ulElement.appendChild(liElement);

    //Total pounds of beans needed at Pike Place Market: 38.4
    var liElement = document.createElement('li');
    liElement.textContent = 'Total pound of beans needed at ' + this.locationName + ': ' + this.dailyBeansNeeded;
    ulElement.appendChild(liElement);
  }
};
southLakeUnion.render();
console.log(southLakeUnion);

///Sea-Tac Airport///

var seaTacAirport = {
  locationName: 'Sea-Tac Airport',
  minCustomersHour: 28,
  maxCustomersHour: 44,
  avgCupsPerCustomer: 1.1,
  avgPoundsPerCustomer: 0.41,
  beansPerHour: [],
  customersPerHour: [],
  cupsPerHour: [],
  beansNeededForCupsPerHour: [],
  poundPackagesPerHour: [],
  dailyCustomersTotal: 0,
  dailyCupsTotal: 0,
  dailyPoundPackagesTotal: 0,
  dailyBeansNeeded: 0,

  //Customers Per Hour//
  calcCustomersPerHour: function(min,max) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.ceil(Math.random() * (max - min + 1)) + min;
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal += parseFloat(customers.toFixed(1));
    }
    console.log(this.dailyCustomersTotal);
  },
  //Cups Per Hour//
  calcCupsPerHour: function(){
    for (var i = 0; i < this.customersPerHour.length; i ++){
      var cups  = parseFloat((this.customersPerHour[i] * this.avgCupsPerCustomer).toFixed(1));
      this.cupsPerHour.push(cups);
      this.dailyCupsTotal += parseFloat(cups.toFixed(1));
    }
    console.log(this.dailyCupsTotal);
  },
  //Beans Needed For Cups Per Hour//
  calcBeansNeededForCupsPerHour: function(){
    for (var i = 0; i < this.cupsPerHour.length; i++) {
      var beansPerCup = parseFloat((this.cupsPerHour[i] / 16).toFixed(1));
    // 1 lbs === 16 cups
      this.beansNeededForCupsPerHour.push(beansPerCup);
      this.dailyBeansNeeded += parseFloat(beansPerCup.toFixed(1));
    }
    console.log(this.dailyBeansNeeded);
  },
    //Pound Packages Per Hour//
  calcPoundPackagesPerHour:function(){
    for (var i = 0; i < hours.length; i++) {
      var packages = parseFloat((this.avgPoundsPerCustomer * this.customersPerHour[i]).toFixed(1));
    // 1 lbs === 16 cups
      this.poundPackagesPerHour.push(packages);
      this.dailyPoundPackagesTotal += parseFloat(packages.toFixed(1));

    }
    console.log(packages);
  },
    //Beans Per Hour//
  calcBeansPerHour: function(){ //Not calculating??
    for (var i = 0; i < hours.length; i++) {
      var beansPerHour = parseFloat((this.beansNeededForCupsPerHour[i] + this.poundPackagesPerHour[i]).toFixed(1));
    // 1 lbs === 16 cups
      // console.log (beansPerHour);
      this.beansPerHour.push(beansPerHour);
    }
  },
  render: function() {
    seaTacAirport.calcCustomersPerHour(seaTacAirport.minCustomersHour, seaTacAirport.maxCustomersHour);
    seaTacAirport.calcCupsPerHour();
    seaTacAirport.calcBeansNeededForCupsPerHour();
    seaTacAirport.calcPoundPackagesPerHour();
    seaTacAirport.calcBeansPerHour();
    // call all of the other methods that calc data
    var ulElement = document.getElementById('seatac');

    for (var i = 0; i < hours.length; i++) {
      var liElement = document.createElement('li');

      liElement.textContent = hours[i] + ': ' + this.beansPerHour[i] + ' lbs ' + ' [' + this.customersPerHour[i] + ' customers, ' + this.cupsPerHour[i] + ' cups (' + this.beansNeededForCupsPerHour[i] + ')' + this.poundPackagesPerHour[i] + ' lbs to-go]';
      ulElement.appendChild(liElement);
    }
    //Total customers at Pike Place Market: 235
    var liElement = document.createElement('li');
    liElement.textContent = 'Total customers at ' + this.locationName + ': ' + this.dailyCustomersTotal;
    ulElement.appendChild(liElement);

  //Total cups sold at Pike Place Market: 189
    var liElement = document.createElement('li');
    liElement.textContent = 'Total cups sold at ' + this.locationName + ': ' + this.dailyCupsTotal;
    ulElement.appendChild(liElement);

    //Total pound packages sold at Pike Place Market: 26
    var liElement = document.createElement('li');
    liElement.textContent = 'Total pound packages sold at ' + this.locationName + ': ' + this.dailyPoundPackagesTotal;
    ulElement.appendChild(liElement);

    //Total pounds of beans needed at Pike Place Market: 38.4
    var liElement = document.createElement('li');
    liElement.textContent = 'Total pound of beans needed at ' + this.locationName + ': ' + this.dailyBeansNeeded;
    ulElement.appendChild(liElement);
  }
};
seaTacAirport.render();
console.log(seaTacAirport);
