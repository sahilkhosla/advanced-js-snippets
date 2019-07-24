// 1. 

// all possible syntax

// 2. 

const loc = {
  country: 'Canada',
  city: 'Toronto',
  teams: ['Raptors', 'Blue Jays', 'Maple Leafs'],
  getInfo: function() {
    console.log(`Current location is ${this.city}, ${this.country}`);
  },
  getTeamNames: function() {
    this.teams.map(function(team) {
      console.log(`${team} from ${this.city}, ${this.country}`);
    })
  }
}

// loc.getInfo();
loc.getTeamNames();

// fixing with that/this
// fixing with bind
// fixing with fat arrow

const loc = {
  country: 'Canada',
  city: 'Toronto',
  teams: ['Raptors', 'Blue Jays', 'Maple Leafs'],
  getInfo: function() {
    console.log(`Current location is ${this.city}, ${this.country}`);
  },
  getTeamNames: function() {
    // fat arrow below will remember the enclosing 'this'
    this.teams.map((team) => {
      console.log(`${team} from ${this.city}, ${this.country}`);
    })
  }
}

