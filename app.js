var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl : 'home.html',
        controller  : 'HomeController'
      })

    .when('/about', {
        templateUrl : 'about.html',
        controller  : 'AboutController'
      })
    
      .when('/contact', {
        templateUrl : 'contact.html',
        controller  : 'ContactController'
      })
    
      .when('/documents', {
        templateUrl : 'documents.html',
        controller  : 'DocumentsController'
      })
    
      .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope){
    var today = new Date();
    var birthDate = new Date('12/04/1992');
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    $scope.age = age;
    $scope.currentJob = jobs[jobs.length - 1];
    clickMenu("");
});

app.controller('AboutController', function($scope){
    clickMenu(tabs[0]);
});

app.controller('ContactController', function($scope){
    $scope.email = 'harturbrito92@gmail.com';
    $scope.phone = '+55 (081) 99247-1119';
    clickMenu(tabs[1]);
});

app.controller('DocumentsController', function($scope){
    clickMenu(tabs[2]);
});

jobs = [
    {
        company: "M2S Software",
        link: "http://www.m2ssoftware.com/",
        job: "Software Developer"
    }
]

tabs = [ 'about', 'contact', 'documents' ];

function clickMenu(tab){
    $(tabs).each(function(){
        if(this.toString() === tab){
            $('#'+this).addClass('active');
        } else {
            $('#'+this).removeClass('active');
        }
    })
}