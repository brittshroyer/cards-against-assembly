(function() {
  var app = angular.module('CardsAgainstAssembly');

  app.service('CardService', function($http) {
    this.getAllCards = function(callback) {
      $http({
        method: 'GET',
        url: '/cards'
      }).then(function successCallback(response) {
        console.log('success', response.data);

        callback(response.data);
      }, function errorCallback(response) {
        console.log('error', response);
      });

      // return [
      //  { question: 'I couldn\'t complete my assignment because ________' },
      //  { question: 'I get by with a little help from ________' },
      //  { question: 'The field trip was completely ruined by ________' },
      //  { question: 'Kyle is a ________' },
      //  { question: 'What is my secret power?' }
      // ];
    }

    this.saveCard = function(question, callback) {
      $http({
        method: 'POST',
        url: '/cards',
        data: {
          question: question
        }
      }).then(function successCallback(response) {
        console.log('success', response.data);

        callback(response.data);
      }, function errorCallback(response) {
        console.log('error', response);
      });
    }
  });
})();
