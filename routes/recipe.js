BakerCalc.RecipeRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('recipe');
  }
})
