BakerCalc.NewRecipeController = Ember.ArrayController.extend({
  actions: {
    add: function() {
      var item = this.store.createRecord('recipe', {
        flour: this.get('flour'),
        fingernails: this.get('fingernails'),
        hair: this.get('hair')
      });
      item.save();
      this.set('flour', '');
      this.set('fingernails', '');
      this.set('hair', '');
      this.transitionToRoute('recipes');

      // var box = this.get('controllers.box.model');
      // box.get('items').pushObject(item);
      // box.save();
    }
  }
});
