BakerCalc.RecipesController = Ember.ArrayController.extend({
  sortProperties: ['id'],
  actions: {

    delete: function(message) {
      message.destroyRecord();
    }
  }
});
