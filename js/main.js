var Person = Backbone.Model.extend({
  defaults: {
    name: "John Doe",
    age: 40,
    occupation: 'circus performer'
  }
});

var PersonView = Backbone.View.extend({
  tagName: 'li',
  className: 'Person'
});
