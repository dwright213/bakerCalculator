BakerCalc.NewRecipesRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('new-recipe');
  }
})
