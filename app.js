var app = angular.module('curriculumApp', ['ngRoute']);

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
    $scope.jobs = jobs;
    
    $scope.academicActivities = [
        {
            name: 'Teaching Assistant of the subject Imperative Programming',
            from: 'feb 2012',
            through: 'jun 2012',
            description: 'Teaching Assistant of the subject Imperative Programming using C as example. The main idea was give some challenges to the students and help them to exercise the concepts.'
        },
        {
            name: 'Teaching Assistant of the subject Data Structures',
            from: 'feb 2015',
            through: 'jun 2015',
            description: 'Teaching Assistant of the subject Data Structures using Java to give the examples. My job was help the students with their doubts and give some challenges to help them to fixate the concepts.'
        },
        {
            name: 'CAPES Scholarship Holder',
            from: 'aug 2012',
            through: 'aug 2013',
            description: 'Title of the research: Development and application of translucid optical networks performance forecast models.'
        },
        {
            name: 'CAPES Scholarship Holder',
            from: 'aug 2013',
            through: 'aug 2014',
            description: 'Title of the research: Usage of crosstalk and WSS quantification analytical models.'
        }
    ];
    
    $scope.schoolEducation = [
        {
            institution: 'Visão',
            finishedOn: '2010',
            level: 'High School',
            link: 'http://www.colegiovisaorecife.com.br/'
        },
        {
            institution: 'University of Pernambuco (UPE)',
            finishedOn: '2016',
            level: 'Bachelor\'s Degree',
            link: 'http://www.ecomp.poli.br/'
        }
    ]
    clickMenu(tabs[0]);
});

app.controller('ContactController', function($scope){
    $scope.email = 'harturbrito92@gmail.com';
    $scope.phone = '+55 (081) 99247-1119';
    clickMenu(tabs[1]);
});

app.controller('DocumentsController', function($scope){
    $scope.documents = [
        {
            name: 'LTE_LTEA.pdf',
            publish: 'September 2014',
            link: 'documents/LTE_LTEA.pdf',
            description: 'Document wrote for UPE bachelor\'s degree\'s subject that describe LTE.'
        },
        {
            name: 'DataStructuresIntro.pdf',
            publish: 'May 2015',
            link: 'documents/DataStructuresIntro.pdf',
            description: 'Document wrote to help students to understand Data Structures when I\'was a teaching assistant volunteer.'
        },
        {
            name: 'Z3TheoremProver.pdf',
            publish: 'June 2015',
            link: 'documents/Z3TheoremProver.pdf',
            description: 'Document wrote as a project of the subject Formal Methods that describe how Z3 Theorem Prover works.'
        },
        {
            name: 'SysadminUbuntu.pdf',
            publish: 'July 2015',
            link: 'documents/SysadminUbuntu.pdf',
            description: 'Tutorial of how to create a SVN server using Ubuntu Server. This document was wrote when I was doing the research on 2015 because we need to configure a SVN server to control the version of the code locally. This was usefull for future people that has to maintain the server and to configure other servers.'
        },
        {
            name: 'hbb3-lista1-report.pdf',
            publish: 'August 2017',
            link: 'documents/hbb3-lista1-report.pdf',
            description: 'UFPE\'s Master Degree subject Multiple Classifier Systems\' first excercise report.',
            details: 'https://github.com/Hartur/MachineLearning'
        },
        {
            name: 'hbb3-lista2-report.pdf',
            publish: 'September 2017',
            link: 'documents/hbb3-lista2-report.pdf',
            description: 'UFPE\'s Master Degree subject Multiple Classifier Systems\' second excercise report.',
            details: 'https://github.com/Hartur/MachineLearning'
        },
        {
            name: 'hbb3-lista3-report.pdf',
            publish: 'September 2017',
            link: 'documents/hbb3-lista3-report.pdf',
            description: 'UFPE\'s Master Degree subject Multiple Classifier Systems\' third excercise report.',
            details: 'https://github.com/Hartur/MachineLearning'
        },
        {
            name: 'hbb3-lista4-report.pdf',
            publish: 'October 2017',
            link: 'documents/hbb3-lista4-report.pdf',
            description: 'UFPE\'s Master Degree subject Multiple Classifier Systems\' fourth excercise report.',
            details: 'https://github.com/Hartur/MachineLearning'
        }
    ];
    clickMenu(tabs[2]);
});

jobs = [
    {
        company: 'FITec',
        link: 'http://www.fitec.org.br/pt/inicio/',
        job: 'Intern',
        from: 'may 2014',
        through: 'mar 2015',
        description: 'There I worked configuring Alcatel Lucent routers.'
    },
    {
        company: 'Pitang',
        link: 'https://www.pitang.com/',
        job: 'Software Developer',
        from: 'feb 2015',
        through: 'sep 2016',
        description: 'There I worked on a Microsoft Excel plugin using C#.'
    },
    {
        company: 'ABA - Associação Brasil América',
        link: 'http://www.estudenaaba.com/',
        job: 'Software Developer',
        from: 'oct 2016',
        through: 'jan 2017',
        description: 'There I worked on a PHP project that uses Bootstrap 3 and JavaScript as front-end'
    },
    {
        company: 'Sistematech Informática Eireli',
        link: '',
        job: 'System Analyst',
        from: 'feb 2017',
        through: 'nov 2017',
        description: 'The project that I worked there uses ASP.NET Boilerplate, which is a framework that uses Bootstrap 3, AngularJS 1.3 and C#.'
    },
    {
        company: "M2S Software",
        link: "http://www.m2ssoftware.com/",
        job: "Software Engineer",
        from: 'nov 2017',
        through: 'now',
        description: 'Here I work on a ASP.NET MVC 5 project.'
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
    });
    if($('#navbarsMenu').is(':visible')) {
        $('#togglerbtn').click();
    }
}