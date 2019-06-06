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
            name: 'Monitor de Linguagem de Programação Imperativa',
            from: 'fev 2012',
            through: 'jun 2012',
            description: 'Monitor da matéria Linguagem de programação imperativa utilizando C como exemplo. O objetivo da monitoria era propor desafios para a turma e ajudá-los a compreender os conceitos.'
        },
        {
            name: 'Monitor de Estrutura de Dados',
            from: 'fev 2015',
            through: 'jun 2015',
            description: 'Monitor da matéria Estrutura de dados utilizando Java para demonstrar. Meu papel era propor desafios e ajudar os alunos com suas dúvidas.'
        },
        {
            name: 'Bolsista CAPES',
            from: 'ago 2012',
            through: 'ago 2013',
            description: 'Título do projeto: Desenvolvimento e aplicação de modelos de previsão de desempenho para redes ópticas translúcidas'
        },
        {
            name: 'Bolsista CAPES',
            from: 'ago 2013',
            through: 'ago 2014',
            description: 'Título do projeto: Utilização de modelos analíticos para quantificação de crosstalk em WSSs.'
        }
    ];
    
    $scope.schoolEducation = [
        {
            institution: 'Visão',
            finishedOn: '2010',
            level: 'Ensino médio',
            link: 'http://www.colegiovisaorecife.com.br/'
        },
        {
            institution: 'Universidade de Pernambuco (UPE)',
            finishedOn: '2016',
            level: 'Bacharelado',
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
            publish: 'Setembro 2014',
            link: 'documents/LTE_LTEA.pdf',
            description: 'Document wrote for UPE bachelor\'s degree\'s subject that describe LTE.'
        },
        {
            name: 'DataStructuresIntro.pdf',
            publish: 'Maio 2015',
            link: 'documents/DataStructuresIntro.pdf',
            description: 'Document wrote to help students to understand Data Structures when I\'was a teaching assistant volunteer.'
        },
        {
            name: 'Z3TheoremProver.pdf',
            publish: 'Junho 2015',
            link: 'documents/Z3TheoremProver.pdf',
            description: 'Document wrote as a project of the subject Formal Methods that describe how Z3 Theorem Prover works.'
        },
        {
            name: 'SysadminUbuntu.pdf',
            publish: 'Julho 2015',
            link: 'documents/SysadminUbuntu.pdf',
            description: 'Tutorial of how to create a SVN server using Ubuntu Server. This document was wrote when I was doing the research on 2015 because we need to configure a SVN server to control the version of the code locally. This was usefull for future people that has to maintain the server and to configure other servers.'
        },
        {
            name: 'hbb3-lista1-report.pdf',
            publish: 'Agosto 2017',
            link: 'documents/hbb3-lista1-report.pdf',
            description: 'UFPE\'s Master Degree subject Multiple Classifier Systems\' first excercise report.',
            details: 'https://github.com/Hartur/MachineLearning'
        },
        {
            name: 'hbb3-lista2-report.pdf',
            publish: 'Setembro 2017',
            link: 'documents/hbb3-lista2-report.pdf',
            description: 'UFPE\'s Master Degree subject Multiple Classifier Systems\' second excercise report.',
            details: 'https://github.com/Hartur/MachineLearning'
        },
        {
            name: 'hbb3-lista3-report.pdf',
            publish: 'Setembro 2017',
            link: 'documents/hbb3-lista3-report.pdf',
            description: 'UFPE\'s Master Degree subject Multiple Classifier Systems\' third excercise report.',
            details: 'https://github.com/Hartur/MachineLearning'
        },
        {
            name: 'hbb3-lista4-report.pdf',
            publish: 'Outubro 2017',
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
        job: 'Estagiário em engenharia de redes',
        from: 'mai 2014',
        through: 'mar 2015',
        description: 'Trabalhei como engenheiro de redes focados em roteadores da Lucent Alcatel.'
    },
    {
        company: 'Pitang',
        link: 'https://www.pitang.com/',
        job: 'Estagiário em desenvolvimento de software',
        from: 'fev 2015',
        through: 'set 2016',
        description: 'Trabalhei em uma aplicação que consistia em um plugin para Excel utilizando C#.'
    },
    {
        company: 'ABA - Associação Brasil América',
        link: 'http://www.estudenaaba.com/',
        job: 'Estagiário em desenvolvimento de software',
        from: 'out 2016',
        through: 'jan 2017',
        description: 'Manutenção de sistema que utiliza PHP, JavaScript, Bootstrap e SQL Server.'
    },
    {
        company: 'Sistematech Informática Eireli',
        link: '',
        job: 'Analista de Sistemas',
        from: 'fev 2017',
        through: 'nov 2017',
        description: 'Trabalhei em uma aplicação utilizando Angular 1.3x e Bootstrap no frontend, C# como backend, Entity Framework como ORM, SQL Server como banco, Protractor para testes E2E e testes unitários no backend'
    },
    {
        company: "M2S Software",
        link: "http://www.m2ssoftware.com/",
        job: "Engenheiro de Software",
        from: 'nov 2017',
        through: 'jan 2019',
        description: 'Trabalhei em uma aplicação ASP.NET MVC 5 utilizando as linguagens padrões (Razor, JavaScript, Bootstrap) e NHibernate como ORM e SQL Server como banco.'
    },
    {
        company: "Tekap Serviços e Consultoria",
        link: "https://supertroco.com.br/",
        job: "Líder Técnico",
        from: 'nov 2017',
        through: 'jan 2019',
        description: 'Desenvolvimento de aplicações utilizando C#, NodeJs, AngularJs e Bootstrap; Gerenciamento de equipe utilizando Scrum adaptado.'
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
    if($('#togglerbtn').is(':visible') && $('#navbarsMenu').is(':visible')) {
        $('#togglerbtn').click();
    }
}