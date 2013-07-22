var Person = Backbone.Model.extend({
  defaults: {
    name: "Homer Simpson",
    age: 40,
    occupation: 'Power Plant Worker'
  }

});

var PersonView = Backbone.View.extend({
  tagName: 'li',

  template: _.template($('#personTemplate').html()),

  initialize: function() {
    console.log(this.model);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON() ));
 }

});

var person = new Person;
var personView = new PersonView({model: person});
