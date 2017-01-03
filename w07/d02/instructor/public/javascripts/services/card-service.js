(function() {
  var app = angular.module('CardsAgainstAssembly');

  app.service('CardService', function($http) {

    this.getCards = function(callback) {

      $http({
        method: 'GET',
        url: '/cards'
      }).then(function successCallback(response) {
        console.log('response.data', response.data);

        callback(response.data);
      }, function errorCallback(error) {
        console.log('Error', error);
      });

      // return [
      //  { question: 'I couldn\'t complete my assignment because ________' },
      //  { question: 'I get by with a little help from ________' },
      //  { question: 'The field trip was completely ruined by ________' },
      //  { question: 'The color of Kyle\'s energy is ________' },
      //  { question: 'What is my secret power?' }
      // ];
    }

    this.save = function(question, callback) {
      $http({
        method: 'POST',
        url: '/cards',
        data: {
          question: question
        }
      }).then(function successCallback(response) {
        console.log('response.data', response.data);

        callback(response.data);
      }, function errorCallback(error) {
        console.log('Error', error);
      });
    }
  });
})();
