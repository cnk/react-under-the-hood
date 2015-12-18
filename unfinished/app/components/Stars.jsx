let React = require('react');

let Stars = React.createClass({
  render: function() {
    return (
      <g>
        {this.props.starData.map(this.renderStars)}
      </g>
    );
  },

  renderStars: function(star, index) {
    let circleAttr = {
        cx: star.position[0],
        cy: star.position[1],
        r: 2,
        className: 'star-circle',
    };
    let textAttr = {
        x: star.position[0] + 5,
        y: star.position[1] + 5,
        className: 'star-name' + ' ' + star.jurisdiction,
    };

    return (
      <g key={index}>
        <text {...textAttr} onClick={this.props.updateDestination.bind(null, star)} >
          {star.name}
        </text>
        <circle {...circleAttr}></circle>
      </g>
    );
  }
});

module.exports = Stars;
