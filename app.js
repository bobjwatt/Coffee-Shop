var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm:', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm:'];
console.log(hours);

var pikePlace = {
  locationName: 'Pike Place Market',
  minCustomersHour: 14,
  maxCustomersHour: 35,
  avgCupsPerCustomer: 1.2,
  avgPoundsPerCustomer: 0.34, //
  beansPerHour: [], ////finished
  customersPerHour: [],//finished
  cupsPerHour: [],  //finished
  beansNeededForCupsPerHour: [],  //finished
  poundPackagesPerHour: [], //finished
  dailyCustomersTotal: 0,
  dailyCupsTotal: 0,
  dailyPoundPackagesTotal: 0,
  dailyBeansNeeded: 0,

  //Customers Per Hour//
  calcCustomersPerHour: function(min,max) {
    for (var i = 0; i < hours.length; i ++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      this.customersPerHour.push(customers);
      this.dailyCustomersTotal = this.dailyCustomersTotal + customers;
    }
    console.log(this.dailyCustomersTotal);
  },
  //Cups Per Hour//
  calcCupsPerHour: function(){
    for (var i = 0; i < this.customersPerHour.length; i ++){
      var cups  = this.customersPerHour[i] * this.avgCupsPerCustomer;
      this.cupsPerHour.push(cups);
      this.dailyCupsTotal = this.dailyCupsTotal + cups;
    }
    console.log(this.dailyCupsTotal);
  },
  //Beans Needed For Cups Per Hour//
  calcBeansNeededForCupsPerHour: function(){
    for (var i = 0; i < this.cupsPerHour.length; i++) {
      var beansPerCup = parseFloat((this.cupsPerHour[i] / 16).toFixed(1));
    // 1 lbs === 16 cups
      this.beansNeededForCupsPerHour.push(beansPerCup);
      this.dailyBeansNeeded = this.dailyBeansNeeded + beansPerCup;
    }
    console.log(this.dailyBeansNeeded);
  },
    //Pound Packages Per Hour//
  calcPoundPackagesPerHour:function(){
    for (var i = 0; i < this.customersPerHour.length; i++) {
      var poundPackagesPerHour = parseFloat((this.avgPoundsPerCustomer * this.customersPerHour[i] ).toFixed(1));
    // 1 lbs === 16 cups
      this.poundPackagesPerHour.push(poundPackagesPerHour);
      this.dailyPoundPackages = this.dailyPoundPackages + poundPackagesPerHour;
    }
    console.log(this.dailyPoundPackages);
  },
    //Beans Per Hour//
  calcBeansPerHour: function(){
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
    // call all of the other methods that calc data
    var ulElement = document.getElementById('pike');
    for (var i = 0; i < hours.length; i++); {
      var liElement = document.createElement('li');
      liElement.textContent = this.customersPerHour[i];
    }
      // List will say EXACTLY 6:00am: 86.5 lbs [23 customers, 27.6 cups (1.4 lbs), 85.1 lbs to-go]
      // create a <li>
      // give that <li> content
      // append the <li> to the <ul>

    ulElement.appendChild(liElement);
  }
};
pikePlace.render();
