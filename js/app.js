'use strict';
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike = {
  location: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  averageCookies: 6.3,
  customersPerHour: [],
  cookiesSoldHour: [],
  totalCustomers: 0,
  totalCookies: 0,
  makeCustomers: function(){
    for( var i = 0; i < storeHours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1) + this.minCustomers));
      this.cookiesSoldHour.push(Math.floor(this.customersPerHour[i] * this.averageCookies));
      this.totalCustomers = this.customersPerHour[i] + this.totalCustomers;
      this.totalCookies = this.cookiesSoldHour[i] + this.totalCookies;
    }
  },
  render: function(){
    this.makeCustomers();
    var ul = document.getElementById('first-ave');
    for( var i = 0; i < storeHours.length; i++){
      var liEL = document.createElement('li');
      liEL.textContent = storeHours[i] + ' : ' + this.customersPerHour[i] + ' customers and with:' + this.cookiesSoldHour[i] + ' cookies sold.' ;
      ul.appendChild(liEL);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Totals: ' + this.totalCustomers + ' customers and :' + this.totalCookies + ' total cookies.';
    ul.appendChild(liEl);
  }
};


var seaTac = {
  location: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  averageCookies: 1.2,
  customersPerHour: [],
  cookiesSoldHour: [],
  totalCustomers: 0,
  totalCookies: 0,
  makeCustomers: function(){
    for( var i = 0; i < storeHours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1) + this.minCustomers));
      this.cookiesSoldHour.push(Math.floor(this.customersPerHour[i] * this.averageCookies));
      this.totalCustomers = this.customersPerHour[i] + this.totalCustomers;
      this.totalCookies = this.cookiesSoldHour[i] + this.totalCookies;
    }
  },
  render: function(){
    this.makeCustomers();
    var ul = document.getElementById('airport');
    for( var i = 0; i < storeHours.length; i++){
      var liEL = document.createElement('li');
      liEL.textContent = storeHours[i] + ' : ' + this.customersPerHour[i] + ' customers and with:' + this.cookiesSoldHour[i] + ' cookies sold.' ;
      ul.appendChild(liEL);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Totals: ' + this.totalCustomers + ' customers and :' + this.totalCookies + ' total cookies.';
    ul.appendChild(liEl);
  }
};

var seattleCenter = {
  location: 'Seattle Center House',
  minCustomers: 11,
  maxCustomers: 38,
  averageCookies: 3.7,
  customersPerHour: [],
  cookiesSoldHour: [],
  totalCustomers: 0,
  totalCookies: 0,
  makeCustomers: function(){
    for( var i = 0; i < storeHours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1) + this.minCustomers));
      this.cookiesSoldHour.push(Math.floor(this.customersPerHour[i] * this.averageCookies));
      this.totalCustomers = this.customersPerHour[i] + this.totalCustomers;
      this.totalCookies = this.cookiesSoldHour[i] + this.totalCookies;
    }
  },
  render: function(){
    this.makeCustomers();
    var ul = document.getElementById('center-house');
    for( var i = 0; i < storeHours.length; i++){
      var liEL = document.createElement('li');
      liEL.textContent = storeHours[i] + ' : ' + this.customersPerHour[i] + ' customers and with:' + this.cookiesSoldHour[i] + ' cookies sold.' ;
      ul.appendChild(liEL);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Totals: ' + this.totalCustomers + ' customers and :' + this.totalCookies + ' total cookies.';
    ul.appendChild(liEl);
  }
};

var capitolHill = {
  location: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  averageCookies: 2.3,
  customersPerHour: [],
  cookiesSoldHour: [],
  totalCustomers: 0,
  totalCookies: 0,
  makeCustomers: function(){
    for( var i = 0; i < storeHours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1) + this.minCustomers));
      this.cookiesSoldHour.push(Math.floor(this.customersPerHour[i] * this.averageCookies));
      this.totalCustomers = this.customersPerHour[i] + this.totalCustomers;
      this.totalCookies = this.cookiesSoldHour[i] + this.totalCookies;
    }
  },
  render: function(){
    this.makeCustomers();
    var ul = document.getElementById('cap-hill');
    for( var i = 0; i < storeHours.length; i++){
      var liEL = document.createElement('li');
      liEL.textContent = storeHours[i] + ' : ' + this.customersPerHour[i] + ' customers and with:' + this.cookiesSoldHour[i] + ' cookies sold.' ;
      ul.appendChild(liEL);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Totals: ' + this.totalCustomers + ' customers and :' + this.totalCookies + ' total cookies.';
    ul.appendChild(liEl);
  }
};

var alki = {
  location: 'Alki Beach',
  minCustomers: 2,
  maxCustomers: 16,
  averageCookies: 4.6,
  customersPerHour: [],
  cookiesSoldHour: [],
  totalCustomers: 0,
  totalCookies: 0,
  makeCustomers: function(){
    for( var i = 0; i < storeHours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1) + this.minCustomers));
      this.cookiesSoldHour.push(Math.floor(this.customersPerHour[i] * this.averageCookies));
      this.totalCustomers = this.customersPerHour[i] + this.totalCustomers;
      this.totalCookies = this.cookiesSoldHour[i] + this.totalCookies;
    }
  },
  render: function(){
    this.makeCustomers();
    var ul = document.getElementById('alki-beach');
    for( var i = 0; i < storeHours.length; i++){
      var liEL = document.createElement('li');
      liEL.textContent = storeHours[i] + ' : ' + this.customersPerHour[i] + ' customers and with:' + this.cookiesSoldHour[i] + ' cookies sold.' ;
      ul.appendChild(liEL);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Totals: ' + this.totalCustomers + ' customers and :' + this.totalCookies + ' total cookies.';
    ul.appendChild(liEl);
  }
};

pike.render();
seaTac.render();
seattleCenter.render();
capitolHill.render();
alki.render();