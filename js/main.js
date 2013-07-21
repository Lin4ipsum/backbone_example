var Person = Backbone.Model.extend({
  defaults: {
    name: "John Doe",
    age: 40,
    occupation: 'circus performer'
  },

  work: function() {
    return this.get('name') + ' is working';
  },

  validate: function(attrs) {
    if (attrs.age < 0) {
    return 'Age must be positive.';
    }
  }

});

var test = new Person({});

test.set({
  age: -2
});

if (!test.isValid()) {
  console.log(test.get("age") + " " + test.validationError);
}
