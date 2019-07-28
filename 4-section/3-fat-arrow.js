'---------------------'
// all possible syntax
'---------------------'

'---------------------'
// closure issue
'---------------------'

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

'---------------------'
// closure issue - fix (that/this)
'---------------------'

var that = this;
this.teams.map(function(team) {
  console.log(`${team} from ${that.city}, ${that.country}`);
})

'---------------------'
// closure issue - fix (bind)
'---------------------'

this.teams.map((function(team) {
  console.log(`${team} from ${this.city}, ${this.country}`);
}).bind(this));

'---------------------'
// closure issue - fix (arrow)
'---------------------'

// fat arrow below will remember the enclosing 'this'
this.teams.map((team) => {
  console.log(`${team} from ${this.city}, ${this.country}`);
})

