let React = require('react');
let nav = require('../utilities/starshipNavigation.js');

module.exports = React.createClass({
  render: function() {
    let ship = this.props.ship;
    let destination = ship.destination;
    let posX = Math.round(ship.position[0]);
    let posY = Math.round(ship.position[1]);

    return (
      <div className="navigation-dashboard">
        <h2>Navigation</h2>
        <p>Destination:</p>
        <p>{destination.name.toUpperCase()}</p>
        <p>Current Position:</p>
        <p>{posX}-MARK-{posY}</p>
        <p>Heading:</p>
        <p>{nav.heading(ship)}-MARK-0</p>
      </div>
    );
  }
})
