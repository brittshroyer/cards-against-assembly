(function() {
  var app = angular.module('CardsAgainstAssembly');

  app.component('newCard', {
    bindings: {

    },

    controller: function(CardService, $location) {
      this.newCard = {
        question: ''
      }

      var self = this;

      this.addCard = function() {
        var newQuestion = self.newCard.question;

        CardService.save(newQuestion, function(newCard) {
          console.log('newCard', newCard);

          self.newCard.question = '';
          $location.path('/');
        });
      }
    },

    template: `
    <section class="container-fluid">
      <div class="row">
        <form name="add-card" id="add-card" ng-submit="$ctrl.addCard()">
          <input type="text" name="question" id="question" placeholder="What's your question?" ng-model="$ctrl.newCard.question">
        </form>
        <br>
        <div class="card">
          <h4 class="card-title">{{ $ctrl.newCard.question }}</h4>
          <h6>Cards Against Assembly</h6>
        </div>
      </div>
    </section>
    `
  });
})();
