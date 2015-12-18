let React = require('react');
let starData = require('../data/starData');
let Ship = require('../data/Ship.js');
let nav = require('../utilities/starshipNavigation.js');
let SetIntervalMixin = require('../mixins/SetIntervalMixin.jsx');
let StarChart = require('./StarChart.jsx');
let HelmControl = require('./HelmControl.jsx');

let Game = React.createClass({
  mixins: [SetIntervalMixin],

  getInitialState: function() {
    return { ship: new Ship() };
  },

  render: function() {
    var ship = this.state.ship;
    return (
      <div>
        <StarChart starData={starData}
                   ship={ship}
                   updateDestination={this.updateDestination} />
        <HelmControl ship={ship}
                     starData={starData}
                     updateDestination={this.updateDestination}
                     updateShipInfo={this.updateShipInfo}
                     updateSpeed={this.updateSpeed}
                     engageWarpDrive={this.engageWarpDrive} />
      </div>
    );
  },

  updateShipInfo: function(info) {
    let ship = this.state.ship;
    ship.info = info;
    this.setState({ship: ship});
  },

  updateDestination: function(newDestination) {
    let ship = this.state.ship;
    ship.destination = newDestination;
    this.setState({ship: ship});
  },

  updateSpeed: function(newSpeed) {
    let ship = this.state.ship;
    ship.speed = newSpeed;
    this.setState({ship: ship});
  },

  engageWarpDrive: function() {
    this.clearIntervals();
    this.setInterval(this.updateShipPosition, 30);
  },

  updateShipPosition: function() {
    let ship = this.state.ship;
    if (nav.destinationReached(ship)) {
      this.clearIntervals();
    } else {
      ship.position = nav.nextPositionToDestination(ship);
      this.setState({ship: ship});
    }
  },
});

module.exports = Game;
