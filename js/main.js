// Person Model
var Person = Backbone.Model.extend({
  defaults: {
    name: "Homer Simpson",
    age: 40,
    occupation: 'Power Plant Worker'
  }

});

// A list of People
var PeopleCollection = Backbone.Collection.extend({

});


// View for a Person
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


var peopleCollection = new PeopleCollection([
 {
    name: "Homer Simpson",
    age: 40,
    occupation: 'power plant operator'
  },
  {
    name: "Marge Simpson",
    age: 40,
    occupation: "House Wife"
  },
  {
    name: "Grandpa Simpson",
    age: 88,
    occupation: "retired"
  }
]);

console.log(peopleCollection);