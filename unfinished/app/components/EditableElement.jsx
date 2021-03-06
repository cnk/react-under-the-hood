let React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return { editing: false };
  },

  render: function() {
    let isEditing = this.state.editing;

    return isEditing ? this.renderInputField() : this.renderParagraph();
  },

  renderInputField: function() {
    return (
      <input type='text' autoFocus="true" onBlur={this.finishEdit} onKeyPress={this.clickEnter} />
    );
  },

  renderParagraph: function() {
    return (
      <p onClick={this.enterEditState}>{this.props.value}</p>
    );
  },

  enterEditState: function() {
    this.setState({editing: true});
  },

  clickEnter: function(e) {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  },

  finishEdit: function(e) {
    let newValue = e.target.value;

    this.props.onEdit(newValue);
    this.setState({editing: false});
  }

});
