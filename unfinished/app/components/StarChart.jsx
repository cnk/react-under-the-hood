let React = require('react');
let Stars = require('./Stars.jsx');
let StarshipRenderer = require('./StarshipRenderer.jsx');

let StarChart = React.createClass({
  render: function() {
    return (
      <div className="start-chart">
        <svg width="1000" height="600">
          <Stars starData={this.props.starData} updateDestination={this.props.updateDestination} />
          <StarshipRenderer ship={this.props.ship} />
        </svg>
      </div>
    );
  }
});

module.exports = StarChart;
