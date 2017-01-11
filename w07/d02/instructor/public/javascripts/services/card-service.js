(function(){
  var app = angular.module('CardsAgainstAssembly');
  app.service('CardService', function($http){
    this.getCards = function(){
      http({
        method: 'GET',
        url: '/cards'
      }).then(function successCallBack(response){
        console.log('response', response);
      }).then(function errorCallback(){
        console.log('error', error);

      });

      // return [
      //   { question: 'I couldn\'t complete my assignment because ________' },
      //   { question: 'I get by with a little help from ________' },
      //   { question: 'The field trip was completely ruined by ________' },
      //   { question: 'Kyle is a ________' },
      //   { question: 'What is my secret power?' }
      // ];
    }
  });
})();
