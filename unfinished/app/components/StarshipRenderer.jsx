let React = require('react');
let starshipImage = require('../utilities/starshipImage.js');

let StarshipRenderer = React.createClass({
  render: function() {
    return (
      <g dangerouslySetInnerHTML={this.renderImage()}></g>
    );
  },

  renderImage: function() {
    let imageInText = starshipImage.renderImageElementAsString(this.props.ship);
    return {__html: imageInText};
  }
});

module.exports = StarshipRenderer;
