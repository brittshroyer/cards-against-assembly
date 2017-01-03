(function() {
  var app = angular.module('CardsAgainstAssembly');

  app.component('newCard', {
    bindings: {

    },

    controller: function(CardService, $location) {
      var self = this;

      this.newCard = {
        question: ''
      }

      this.addCard = function() {
        CardService.saveCard(this.newCard.question, function(newCard) {
          $location.path('/');
        });
      }
    },

    template: `
    <section class="container-fluid">
      <div class="row">
        <form name="add-card" id="add-card" ng-submit="$ctrl.addCard()">
          <input type="text" name="question" id="question" placeholder="What's your question?" ng-model="$ctrl.newCard.question" />
        </form>
        <br />
        <div class="card">
          <h4 class="card-title">{{ $ctrl.newCard.question }}</h4>
          <h6>Cards Against Assembly</h6>
        </div>
      </div>
    </section>
    `
  })
})()
