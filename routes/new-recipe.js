BakerCalc.NewRecipeRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('new-recipe');
  }
})
