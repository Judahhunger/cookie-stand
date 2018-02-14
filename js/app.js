'use strict';
//Global Vars
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var patsCookieShopTable = document.getElementById('shopTable');
// Object constructor
function PatsCookieShop(address, minCustomers, maxCustomers, averageCookies){
  this.address = address;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookies = averageCookies;
  this.customersPerHour = [];
  this.cookiesSoldHour = [];
  this.totalCustomers = 0;
  this.totalCookies = 0;
  PatsCookieShop.allStores.push(this);
}
PatsCookieShop.allStores = [];
PatsCookieShop.prototype.makeCustomersPerHour = function(){ //method used to populate array using random number function.
  for( var i = 0; i < storeHours.length; i++){
    var customersOnHour = makeRandomNum(this.maxCustomers, this.minCustomers);
    this.customersPerHour.push(customersOnHour);
    this.totalCustomers += customersOnHour;
  }
};
PatsCookieShop.prototype.makeCookiesPerHour = function(){
  this.makeCustomersPerHour();
  for( var i = 0; i < storeHours.length; i++){
    var cookiesOnHour = Math.floor(this.customersPerHour[i] * this.averageCookies);
    this.cookiesSoldHour.push(cookiesOnHour);
    this.totalCookies += cookiesOnHour;
  }
};
PatsCookieShop.prototype.render = function(){
  this.makeCookiesPerHour();
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.address;
  trEl.appendChild(tdEl);

  for(var i = 0; i < storeHours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSoldHour[i] + ', cookies made for :' + this.customersPerHour[i] + ' customers';
    trEl.appendChild(tdEl);
  }
  var thEL = document.createElement('th');
  thEL.textContent = this.totalCookies + ': cookies per-day, for ' + this.totalCustomers + 'customers.';
  trEl.appendChild(thEL);
  patsCookieShopTable.appendChild(trEl);
};

//function to make random number between set values.
function makeRandomNum(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Address';
  trEl.appendChild(thEl);
  for(var i = 0; i < storeHours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = storeHours[i];
    trEl.appendChild(thEl);
    patsCookieShopTable.appendChild(trEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
}

function makeFooterOnTable(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals on the Hour';
  trEl.appendChild(thEl);
  for(var i in storeHours){ //looking down each hour
    thEl = document.createElement('th');
    var cookiesMadePerHour = 0;
    var customerTotalPerHour = 0;
    var grandTotalCustomers = 0;
    var grandTotalCookies = 0;
    for(var j in PatsCookieShop.allStores){//looking down each store created.
      cookiesMadePerHour += PatsCookieShop.allStores[j].cookiesSoldHour[i]; ///looks at stores array and finds how many stores then for each index of store it will
      customerTotalPerHour += PatsCookieShop.allStores[j].customersPerHour[i];//*from above* look at index of peramiter and give back arguement.
      grandTotalCustomers += PatsCookieShop.allStores[j].totalCustomers;
      grandTotalCookies += PatsCookieShop.allStores[j].totalCookies;
      thEl.textContent = cookiesMadePerHour + ' Total cookies, ' + customerTotalPerHour + ' Total customers per hour' ;
      trEl.appendChild(thEl);
    }
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total cookies for all Shops ' + grandTotalCookies + ' with Total Customers' + grandTotalCustomers;
  trEl.appendChild(thEl);

  patsCookieShopTable.appendChild(trEl);
}


var pike = new PatsCookieShop('1st and Pike', 23, 65, 6.3);
var seaTac = new PatsCookieShop('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new PatsCookieShop('Seattle Center', 11, 38, 3.7);
var capHill = new PatsCookieShop('Capitol Hll', 20, 38, 2.3);
var alki = new PatsCookieShop('Alki', 2, 16, 4.6);

makeHeaderRow();
pike.render();
seaTac.render();
seattleCenter.render();
capHill.render();
alki.render();
makeFooterOnTable();

// makeAllCookieShopsShow();
// pike.render();

// var pike = {
//   location: '1st and Pike',
//   minCustomers: 23,
//   maxCustomers: 65,
//   averageCookies: 6.3,
//   customersPerHour: [],
//   cookiesSoldHour: [],
//   totalCustomers: 0,
//   totalCookies: 0,
//   makeCustomers: function(){
//     for( var i = 0; i < storeHours.length; i++){
//       this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1) + this.minCustomers));
//       this.cookiesSoldHour.push(Math.floor(this.customersPerHour[i] * this.averageCookies));
//       this.totalCustomers += this.customersPerHour[i];
//       this.totalCookies += this.cookiesSoldHour[i];
//     }
//   },
//   render: function(){
//     this.makeCustomers();
//     var ul = document.getElementById('first-ave');
//     for( var i = 0; i < storeHours.length; i++){
//       var liEL = document.createElement('li');
//       liEL.textContent = storeHours[i] + ' : ' + this.customersPerHour[i] + ' customers and with:' + this.cookiesSoldHour[i] + ' cookies sold.' ;
//       ul.appendChild(liEL);
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Totals: ' + this.totalCustomers + ' customers and :' + this.totalCookies + ' total cookies.';
//     ul.appendChild(liEl);
//   }
// };


// var seaTac = {
//   location: 'SeaTac Airport',
//   minCustomers: 3,
//   maxCustomers: 24,
//   averageCookies: 1.2,
//   customersPerHour: [],
//   cookiesSoldHour: [],
//   totalCustomers: 0,
//   totalCookies: 0,
//   makeCustomers: function(){
//     for( var i = 0; i < storeHours.length; i++){
//       this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1) + this.minCustomers));
//       this.cookiesSoldHour.push(Math.floor(this.customersPerHour[i] * this.averageCookies));
//       this.totalCustomers = this.customersPerHour[i] + this.totalCustomers;
//       this.totalCookies = this.cookiesSoldHour[i] + this.totalCookies;
//     }
//   },
//   render: function(){
//     this.makeCustomers();
//     var ul = document.getElementById('airport');
//     for( var i = 0; i < storeHours.length; i++){
//       var liEL = document.createElement('li');
//       liEL.textContent = storeHours[i] + ' : ' + this.customersPerHour[i] + ' customers and with:' + this.cookiesSoldHour[i] + ' cookies sold.' ;
//       ul.appendChild(liEL);
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Totals: ' + this.totalCustomers + ' customers and :' + this.totalCookies + ' total cookies.';
//     ul.appendChild(liEl);
//   }
// };

// var seattleCenter = {
//   location: 'Seattle Center House',
//   minCustomers: 11,
//   maxCustomers: 38,
//   averageCookies: 3.7,
//   customersPerHour: [],
//   cookiesSoldHour: [],
//   totalCustomers: 0,
//   totalCookies: 0,
//   makeCustomers: function(){
//     for( var i = 0; i < storeHours.length; i++){
//       this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1) + this.minCustomers));
//       this.cookiesSoldHour.push(Math.floor(this.customersPerHour[i] * this.averageCookies));
//       this.totalCustomers = this.customersPerHour[i] + this.totalCustomers;
//       this.totalCookies = this.cookiesSoldHour[i] + this.totalCookies;
//     }
//   },
//   render: function(){
//     this.makeCustomers();
//     var ul = document.getElementById('center-house');
//     for( var i = 0; i < storeHours.length; i++){
//       var liEL = document.createElement('li');
//       liEL.textContent = storeHours[i] + ' : ' + this.customersPerHour[i] + ' customers and with:' + this.cookiesSoldHour[i] + ' cookies sold.' ;
//       ul.appendChild(liEL);
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Totals: ' + this.totalCustomers + ' customers and :' + this.totalCookies + ' total cookies.';
//     ul.appendChild(liEl);
//   }
// };

// var capitolHill = {
//   location: 'Capitol Hill',
//   minCustomers: 20,
//   maxCustomers: 38,
//   averageCookies: 2.3,
//   customersPerHour: [],
//   cookiesSoldHour: [],
//   totalCustomers: 0,
//   totalCookies: 0,
//   makeCustomers: function(){
//     for( var i = 0; i < storeHours.length; i++){
//       this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1) + this.minCustomers));
//       this.cookiesSoldHour.push(Math.floor(this.customersPerHour[i] * this.averageCookies));
//       this.totalCustomers = this.customersPerHour[i] + this.totalCustomers;
//       this.totalCookies = this.cookiesSoldHour[i] + this.totalCookies;
//     }
//   },
//   render: function(){
//     this.makeCustomers();
//     var ul = document.getElementById('cap-hill');
//     for( var i = 0; i < storeHours.length; i++){
//       var liEL = document.createElement('li');
//       liEL.textContent = storeHours[i] + ' : ' + this.customersPerHour[i] + ' customers and with:' + this.cookiesSoldHour[i] + ' cookies sold.' ;
//       ul.appendChild(liEL);
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Totals: ' + this.totalCustomers + ' customers and :' + this.totalCookies + ' total cookies.';
//     ul.appendChild(liEl);
//   }
// };

// var alki = {
//   location: 'Alki Beach',
//   minCustomers: 2,
//   maxCustomers: 16,
//   averageCookies: 4.6,
//   customersPerHour: [],
//   cookiesSoldHour: [],
//   totalCustomers: 0,
//   totalCookies: 0,
//   makeCustomers: function(){
//     for( var i = 0; i < storeHours.length; i++){
//       this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1) + this.minCustomers));
//       this.cookiesSoldHour.push(Math.floor(this.customersPerHour[i] * this.averageCookies));
//       this.totalCustomers = this.customersPerHour[i] + this.totalCustomers;
//       this.totalCookies = this.cookiesSoldHour[i] + this.totalCookies;
//     }
//   },
//   render: function(){
//     this.makeCustomers();
//     var ul = document.getElementById('alki-beach');
//     for( var i = 0; i < storeHours.length; i++){
//       var liEL = document.createElement('li');
//       liEL.textContent = storeHours[i] + ' : ' + this.customersPerHour[i] + ' customers and with:' + this.cookiesSoldHour[i] + ' cookies sold.' ;
//       ul.appendChild(liEL);
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Totals: ' + this.totalCustomers + ' customers and :' + this.totalCookies + ' total cookies.';
//     ul.appendChild(liEl);
//   }
// };

// pike.render();
// seaTac.render();
// seattleCenter.render();
// capitolHill.render();
// alki.render()