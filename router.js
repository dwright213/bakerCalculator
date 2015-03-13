BakerCalc.Router.map(function() {
  this.resource('recipes', {path: '/'});
  this.resource('new-recipe');
  this.resource('about');
});
