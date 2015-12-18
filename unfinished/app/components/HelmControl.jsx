let React = require('react');
let ShipInfo = require('./ShipInfo.jsx');
let CourseControl = require('./CourseControl.jsx');
let NavigationalDashboard = require('./NavigationalDashboard.jsx');
let WarpDriveControls = require('./WarpDriveControls.jsx');

let HelmControl = React.createClass({
  render: function() {
    let ship = this.props.ship;

    return (
      <div className="helm">
        <div id="helm-header">
          <h1>Helm Control</h1>
        </div>
        <ShipInfo info={ship.info} updateShipInfo={this.props.updateShipInfo} />
        <NavigationalDashboard ship={ship} />
        <CourseControl starData={this.props.starData}
                       updateDestination={this.props.updateDestination} />
        <WarpDriveControls speed={ship.speed}
                           updateSpeed={this.props.updateSpeed}
                           engageWarpDrive={this.props.engageWarpDrive} />
      </div>
    );
  }
});

module.exports = HelmControl;
