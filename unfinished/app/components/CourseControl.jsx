require('jquery-ui/autocomplete');
let React = require('react');
let ReactDom = require('react-dom');

let CourseControl = React.createClass({
  componentDidMount: function() {
    this.autocomplete();
  },

  componentDidUpdate: function() {
    this.autocomplete();
  },

  autocomplete: function() {
    let starData = this.props.starData;
    let starNames = starData.map((star) => {return star.name;});

    $(ReactDom.findDOMNode(this.refs.search)).autocomplete({
      source: starNames,
      minLength: 3,
      select: (event, ui) => {
        let starName = ui.item.value;
        let system = this.findSystem(starData, starName);

        this.props.updateDestination(system);
        ui.item.value = '';
      },
      messages: {
        noResults: '',
        results: function() {},
      },
    });
  },

  findSystem: function(starData, starName) {
    return starData.filter((star) => {return star.name === starName; })[0];
  },

  render: function() {
    return (
        <div className="course-control">
        <input type="text" className="search" placeholder="Star System" ref="search" />
        </div>
    );
  },
});

module.exports = CourseControl;
