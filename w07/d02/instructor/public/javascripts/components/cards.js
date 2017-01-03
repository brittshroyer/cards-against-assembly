(function() {
  var app = angular.module('CardsAgainstAssembly');

  app.component('cards', {
    bindings: {

    },

    controller: function(CardService) {
      var self = this;

      CardService.getAllCards(function(cardData) {
        self.cards = cardData;
      });
    },

    template: `
    <section id="cards" class="container-fluid">
      <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-4" ng-repeat="card in $ctrl.cards">
          <card question="{{card.question}}"></card>
        </div>
      </div>
    </section>
    `
  });
})();
