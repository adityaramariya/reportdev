var appModule = angular.module('app', ['ngRoute', 'angular-d3plus'])

appModule.config(function ($routeProvider) {
  $routeProvider
    // .when('/', {
    //   templateUrl: 'libs/views/main-page.html',
    //   // controller: 'mainController',
    //   reloadOnSearch: false

    //   // controllerAs:'lc'
    // })
    .when('/', {
      templateUrl: 'libs/views/main-page.html',
      controller: 'mainController',
      reloadOnSearch: false

      // controllerAs:'lc'
    })
    .otherwise({
      redirectTo: '/',
      reloadOnSearch: false

    });
});
appModule.run(['$route', '$rootScope', '$location', '$routeParams', function ($route, $rootScope, $location, $routeParams) {
  var original = $location.url();
  if ($location.search().layout) {
    console.log('params', $location.search().layout);
  } else {
    console.log('no params');
    $location.search('layout', 1).search('name', 'System Health');
  }
  console.log('original', original);

}]);
appModule.controller('mainController', ['$rootScope', '$scope', '$http', '$timeout', '$location', 'barService', function ($rootScope, $scope, $http, $timeout, $location, $routeParams, barService) {
  var newDate = new Date().getTime();
  // $scope.param1 = $routeParams;

  $scope.urlCurrent;
  $scope.currpg = 'home';

  $scope.layout;
  $scope.nameLayout;

  $scope.renderedData = '';
  $scope.isMgraph = false;
  $scope.currMdata = {};
  $scope.currProj = {};
  // pagenames
  $scope.autoCoverage = false;
  //for bar charts changing data
  $rootScope.currBarData = null;

  $scope.showBarData = function () {}

  $scope.showWeek = function (data) {

    $scope.currProj = data;
    $scope.layout = 2;
  }
  $scope.showMore = function (data) {
    $scope.isMgraph = true;
    $scope.isWeek = false;
    $scope.currMdata = data;
  }

  $scope.backFromMore = function () {
    $scope.isMgraph = false;
    $scope.currMdata = {};
  }

  $scope.backFromWeek = function () {
    $scope.currProj = data;
    $scope.layout = 1;
  }

  $scope.attributes = [{
      "name": "passed",
      "hex": "#8BC34A"
    },
    {
      "name": "failed",
      "hex": "#EF5350"
    },
    {
      "name": "NonAutomated",
      "hex": "#282F6B"
    },
    {
      "name": "Automated",
      "hex": "#EACE3F"
    },
    {
      "name": "green",
      "hex": "#8BC34A"
    },
    {
      "name": "red",
      "hex": "#b22200"
    },
    {
      "name": "blue",
      "hex": "#282F6B"
    },
    {
      "name": "yellow",
      "hex": "#EACE3F"
    },
    {
      "name": "Not feasible",
      "hex": "#b22200"
    },
    {
      "name": "Low Priority",
      "hex": "#228B22"
    },
    {
      "name": "wcag2aa",
      "hex": "#7566b9"
    },
    {
      "name": "wcag2a",
      "hex": "#787d10"
    },
    {
      "name": "section508",
      "hex": "#10797db5"
    },
    {
      "name": "best-practice",
      "hex": "#7d1010b5"
    },
    {
      "name": "experimental",
      "hex": "#152af9b5"
    },
    {
      "name": "incomplete",
      "hex": "#fffa02"
    },
    {
      "name": "passes",
      "hex": "#01a317"
    },
    {
      "name": "violations",
      "hex": "#ff0202"
    },
    {
      "name": "inapplicable",
      "hex": "#8cff9b"
    },
  ];

  $scope.violationsDate;
  $scope.flag173 = false;
  $scope.currGraphData = {};
  $scope.standardArrayCount = [];
  $scope.standardArray = [];
  $scope.standardArrayTotal;

  $scope.allScenarioViolations = [];
  $scope.allScenarioViolationsCount = [];
  $scope.allCount = [{
      name: "inapplicable",
      value: 0
    },
    {
      name: "incomplete",
      value: 0
    },
    {
      name: "passes",
      value: 0
    },
    {
      name: "violations",
      value: 0
    },
  ];
  $scope.allFinalCount = [];
  $scope.allTotalCount = 0;
  $scope.allTotalPercentage = 0;
  $scope.allScenarioViolationsTotalCount = 0;
  $scope.allScenarioViolationsPercentage = 0;
  $scope.totalDataCount = [];
  $scope.totalDataArray = [];
  $scope.checkClassVar = true;
  $scope.xx = true;
  $scope.checkClass = (x, i) => {
    if (x == 173 && i == 0) {
      return true;
    } else if (x == 173 && i !== 0) {
      return false;
    }
  }
  $scope.mainInd = 0;
  $scope.l1Ind = 0;
  $scope.l2Ind = 0;
  $scope.l3Ind = 0;

  // dynamic menu starts
  $http.get('json/systemHealthMenu.json?' + newDate).then(function (response) {
    console.log('call systemhealthmenu.json');
    $scope.systemhealthmenu = response.data;
    console.log('systemhealthmenu', $scope.systemhealthmenu);
    var zeroData = angular.copy($scope.systemhealthmenu);
    zeroData[0].layout =""+1;
    if (zeroData[0].projects) {
      var proj = zeroData[0].projects;
      if (proj.name) {
        proj.layout =""+1;
      }
    }
    for (let i = 0; i < proj.length; i++) {
      proj[i].layout =""+1;
      if (proj[i].childproject) {
        var cproj = proj[i].childproject;
        for (let j = 0; j < cproj.length; j++) {
          cproj[j].layout =""+1
        }
      }
    }
    console.log(zeroData);

    $timeout(function () {
      // init_sidebar();
      newSidebarNav();
    }, 500)
    if ($location.search().layout) {
      $scope.layout = $location.search().layout;
      $scope.nameLayout = $location.search().name;
      console.log('First If');
      console.log($scope.layout, $scope.nameLayout);
      loop1:
        for (let i = 0; i < zeroData.length; i++) {
          const element = zeroData[i];
          console.log(element);
          if (element.layout == $scope.layout && element.name == $scope.nameLayout) {
            $scope.showGraphS(element);
            console.log(element.layout, $scope.layout, element.name, $scope.nameLayout);
            break loop1;
          } else {
            console.log('else enter', i);
            var project = element.projects;
            for (let j = 0; j < project.length; j++) {
              var projectElement = project[j];
              if (projectElement.layout == $scope.layout && projectElement.name == $scope.nameLayout) {
                console.log(projectElement.layout, $scope.layout, projectElement.name, $scope.nameLayout);

                $scope.showGraphS(projectElement);
                break loop1;
              } else {
                if (projectElement.childproject) {
                  var childProject = projectElement.childproject;
                  for (let k = 0; k < childProject.length; k++) {
                    var childprojectElement = childProject[k];
                    if (childprojectElement.layout == $scope.layout && childprojectElement.name == $scope.nameLayout) {
                      console.log(childprojectElement.layout, $scope.layout, childprojectElement.name, $scope.nameLayout);
                      console.log('childprojectElement.layout', typeof childprojectElement.layout);
                      console.log('$scope.layout', typeof $scope.layout);
                      console.log('childprojectElement.name', typeof childprojectElement.name);
                      console.log(' , typeof$scope.nameLayout', typeof $scope.nameLayout);
                      $scope.showGraphS(childprojectElement);
                      break loop1;
                    } else {
                      if (childprojectElement.childproject) {
                        var innerChildProject = childprojectElement.childproject;
                        for (let p = 0; p < innerChildProject.length; p++) {
                          var innerChildProjectElement = innerChildProject[p];
                          if (innerChildProjectElement.layout == $scope.layout && innerChildProjectElement.name == $scope.nameLayout) {
                            console.log('innerChildProjectElement.layout', typeof innerChildProjectElement.layout);
                            console.log('$scope.layout', typeof $scope.layout);
                            console.log('innerChildProjectElement.name', typeof innerChildProjectElement.name);
                            console.log(' , typeof$scope.nameLayout', typeof$scope.nameLayout);
                            $scope.showGraphS(innerChildProjectElement);
                            // break loop1;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
    } else {
      console.log('First else');
      $scope.layout = 1;
      console.log('Default layout');
    }
  });

  $http.get('json/automationMenu.json?' + newDate).then(function (response) {
    // for first time load data
    $scope.automationMenu = response.data.data;
  });
  // dynamic menu endss

  $http.get('json/systemHealth.json?' + newDate).then(function (response) {
    $scope.systemHealth = response.data.data;
    // for first time load data
    $scope.currGraphData = response.data.data;
  });
  // // get the overall issue count data

  $http.get('json/overallIssueCount.json?' + newDate).then(function (response) {
    $scope.allIssueCount = response.data;
    $scope.issueCountAttr = response.data.colorCode;
  });

  //  code for module wise report starts ----------------------------------------------------------------
  // getting dynamic menu items
  $http.get('json/moduleWiseReportMenu.json' + newDate).then(function (response) {
    $scope.moduleWiseReportMenu = response.data.data;
  });

  // init
  // new function for dynamic menu

  $scope.showGraphS = function (data) {
    namejson = data.projectjson;
    nameLayout = data.name;
    $scope.urlCurrent = 'json/' + namejson + '.json?' + newDate;
    console.log( $scope.mainInd,
      $scope.l1Ind,
      $scope.l2Ind,
      $scope.l3Ind);
    $scope.layout = 1;
    $location.search('layout', $scope.layout).search('name', nameLayout);
    if ($scope.layout == 2) {
      $scope.backFromWeek();
    }
    // automation coverage
    if (data.layout == 3) {
      $location.search('layout', data.layout).search('name', data.name);
      $scope.showAutoCoverageOverall();
      $scope.layout = 3;
      return false;
    }
    // automation coverage inner
    if (data.layout == 31) {
      $location.search('layout', data.layout).search('name', data.name);
      $scope.showAutoCoverageData(data.varname);
      return false;
    }
    // module wise layout
    if (data.layout == 5) {
      $location.search('layout', data.layout).search('name', data.name);
      $scope.renderModuleReport(data.projectjson);
      return false;
    }
    // overall issue count
    if (data.layout == 4) {
      $location.search('layout', data.layout).search('name', data.name);
      $scope.layout = 4;
      return false;
    }

    if (data.layout == 50) {
      $location.search('layout', data.layout).search('name', data.name);
      $scope.layout = 50;
      $scope.renderModuleScenarioCount(data.projectjson);
      return false;
    }

    if (data.layout == 60) {
      $location.search('layout', data.layout).search('name', data.name);
      $scope.layout = 60;
      $scope.renderScenarioCountReport(data.projectjson);
      return false;
    }

    if (data.layout == 3) {
      $location.search('layout', data.layout).search('name', data.name);
      $scope.showAutoCoverageOverall();
      $scope.layout = 3;
      return false;
    }
    // automation coverage inner
    if (data.layout == 31) {
      $location.search('layout', data.layout).search('name', data.name);
      $scope.showAutoCoverageData(data.varname);
      return false;
    }

    if (data.layout == 121) {
      $location.search('layout', data.layout).search('name', data.name);
      $scope.layout = 121;
      return false;
    }
    if (data.layout == 131) {
      $location.search('layout', data.layout).search('name', data.name);
      $scope.showCookieReport(data.projectjson);
      return false;
    }

    if (data.layout == 70) {
      $location.search('layout', data.layout).search('name', data.name);
      $scope.totalDataArray = [];
      $scope.allCount = [{
          name: "inapplicable",
          value: 0
        },
        {
          name: "incomplete",
          value: 0
        },
        {
          name: "passes",
          value: 0
        },
        {
          name: "violations",
          value: 0
        },
      ];
      $scope.allFinalCount = [];
      $scope.allTotalCount = 0;
      var projects = data.projects;
      console.log('its 70', projects);
      for (let i = 0; i < projects.length; i++) {
        const element = projects[i];
        if (element.projectjson) {
          $scope.totalDataArray.push(element.projectjson);
        } else {
          const childproject = element.childproject;
          childproject.forEach(element => {
            $scope.totalDataArray.push(element.projectjson);
          });
        }
        console.log('element.projectjson', element.projectjson);
        $scope.countAccessibilty(element.projectjson);
      }

      $scope.layout = 70;
      return false;
    }

    if (data.layout == 72) {
      $location.search('layout', data.layout).search('name', data.name);
      $scope.renderAccessibilty(data.projectjson);
      console.log('its 72', data.projectjson);
      $scope.layout = 72;
      return false;
    }
    if (data.layout == 173) {
      $location.search('layout', data.layout).search('name', data.name);
      const currentData = data.childproject;
      for (let i = 0; i < currentData.length; i++) {
        if (i == 0) {
          console.log(currentData[i], "is the one");
          $scope.showGraphS(currentData[i]);
        }
      }
      console.log('its 173 label');
      return false;
    }

    $timeout(function () {
      $scope.flag173 = false;
    }, 500)

    $http.get('json/' + namejson + '.json?' + newDate).then(function (response) {
      console.log('You need This');
      $timeout(function () {
        $scope.currGraphData = response.data.data;

      }, 500)
    });
    console.log(namejson);
    console.log(newDate);
    $timeout(function () {
      $scope.backToMainGraph();
      // hide inner bar charts
      if ($rootScope.greenData) $rootScope.greenData = null;
      if ($rootScope.currentData) $rootScope.currentData = null;
      if ($rootScope.weeklyData) $rootScope.weeklyData = null;
    }, 200)
  }

  $scope.showCookieReport = function (namejson) {
    $scope.layout = 131;
    $http.get('json/' + namejson + '.json?' + newDate).then(function (response) {
      $scope.cookieDemo = response.data.maindata;
    });
  }

  // currentautoCoverageData
  $scope.showAutoCoverageData = function (namejson) {
    $scope.layout = 31;
    $http.get('json/automationCoverageProjects.json?' + newDate).then(function (response) {
      $scope.currentautoCoverageData = response.data.data[namejson];
    });
  }



  // // get the automation coverage data
  $scope.showAutoCoverageOverall = function () {
    $http.get('json/automationCoverage.json?' + newDate).then(function (response) {
      $scope.autoCoverageData = response.data.data;
    });
  }

  // rendering function
  $scope.renderModuleReport = function (namejson) {
    alert(namejson);
    $scope.layout = 5;
    $scope.currModuleReport = {};
    $timeout(function () {
      $http.get('json/' + namejson + '.json?' + newDate).then(function (response) {
        $scope.currModuleReport = response.data;
      });
    }, 0);
  }

  $scope.renderAccessibilty = function (namejson) {
    $scope.layout = 72;
    $scope.x = {};
    $timeout(function () {
      $http.get('json/' + namejson + '.json?' + newDate).then(function (response) {
        $scope.x = response.data;
        $scope.myFunction($scope.x);
      });
    }, 0);
  }

  $scope.countAccessibilty = function (namejson) {
    console.log('Hello count');
    $scope.layout = 70;
    $scope.x = {};
    $timeout(function () {
      $http.get('json/' + namejson + '.json?' + newDate).then(function (response) {
        $scope.x = response.data;
        $scope.countFunction($scope.x);
      });
    }, 0);
  }

  $scope.countFunction = function (x) {
    $scope.allFinalCount = [];
    var allScenarioViolations = x.allScenarioViolations[0];
    var scenarioViolationsArray = ["incomplete", "passes", "violations", "inapplicable"];
    var perc = 0;
    var sum = 0;
    for (let index = 0; index < scenarioViolationsArray.length; index++) {
      const element = scenarioViolationsArray[index];
      var lengthValue = allScenarioViolations[element].length;
      for (let i = 0; i < $scope.allCount.length; i++) {
        if ($scope.allCount[i].name == element) {
          $scope.allCount[i].value = $scope.allCount[i].value + lengthValue;
          $scope.allTotalCount = $scope.allTotalCount + lengthValue;
        }
      }
    }
    $scope.allFinalCount = JSON.parse(JSON.stringify($scope.allCount));
    console.log($scope.allFinalCount);

    var incomplete;
    var violations;
    for (let i = 0; i < $scope.allCount.length; i++) {
      if ($scope.allCount[i].name == "incomplete") {
        incomplete = $scope.allCount[i].value;
      } else if ($scope.allCount[i].name == "violations") {
        violations = $scope.allCount[i].value;
      }
    }
    sum = $scope.allTotalCount - incomplete - violations;
    $scope.allTotalPercentage = Math.round(sum * 100 / $scope.allTotalCount);
  }
  $scope.renderModuleScenarioCount = function (namejson) {
    $scope.layout = 50;
    $scope.currModuleReport = {};
    $timeout(function () {
      $http.get('json/' + namejson + '.json?' + newDate).then(function (response) {
        $scope.rdata = response.data;
      });
    }, 0);
  }

  $scope.renderScenarioCountReport = function (namejson) {
    $scope.layout = 60;
    $scope.currModuleReport = {};

    $timeout(function () {
      $http.get('json/' + namejson + '.json?' + newDate).then(function (response) {
        $scope.rdata = response.data;
      });
    }, 0);
  }

  // for inner bar data
  $scope.backToMainGraph = function (x) {
    if (x == 'green') {
      $rootScope.greenData = null;
    }
    if (x == 'current') {
      $rootScope.currentData = null;
    }
    if (x == 'weekly') {
      $rootScope.weeklyData = null;
    }
  }

  $scope.myFunction = function (x) {
    $scope.allScenarioViolations = x.allScenarioViolations[0];
    $scope.renderedData = name;
    var standardArray = ["wcag2aa", "wcag2a", "section508", "best-practice", "experimental"];
    var scenarioViolationsArray = ["incomplete", "passes", "violations", "inapplicable"];

    $scope.standardArray = standardArray;

    function renderOpenLi(a) {
      return '<li>' + a;
    }

    function renderCloseLi(a) {
      return a + '</li>';
    }

    function renderRow(a, b) {
      return '<tr><td>' + a + '</td><td>' + b + '</td>'
    }

    function renderLi(a) {
      return '<li>' + a + '</li>'
    }

    function renderOl(a) {
      return '<ol>' + a + '</ol>'
    }

    function renderParagraphFailureText(a) {
      return '<p class=failuresText>' + a + '</p>'
    }

    function renderHeader(a, b) {
      return '<tr><th>' + a + '</th><th>' + b + '</th>'
    }

    function replaceUlOlLi(a) {
      return a.replace("<li>", "li").replace("<ul>", "ul").replace("<ol>", "ol")
    }

    function renderAnchor(a) {
      return '<a target=_blank href=' + a + '>' + a + '</a>'
    }

    function renderTbCount(a, b) {
      return '<li>' + a + ' : <span>' + b + '</span></li>'
    }

    function renderTotalViolations(a) {
      return '<ul>' + a + '</ul>';
    }

    var renderTotalCount = 0;
    $scope.violationsDate = x.violationsDate;
    var scenarioDatas = document.createElement("span");
    scenarioDatas.innerHTML = x.violationsDate;
    document.getElementById("violtime").appendChild(scenarioDatas);

    if (document.getElementById("scenarioWrap")) {
      var parent = document.getElementById("maindata");

      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
      var scenarioHeading = document.createElement("h4");
      scenarioHeading.id = ("scenario_heading");
      scenarioHeading.className = ("sen_heading")
      parent.appendChild(scenarioHeading);

      var violationsHeading = document.createElement("h4");
      violationsHeading.id = ("violations_heading");
      violationsHeading.className = ("vio_heading")
      violationsHeading.innerHTML = "Violations";

      var violationsTime = document.createElement("span");
      violationsTime.id = ("violtime");

      violationsHeading.appendChild(violationsTime);
      parent.appendChild(violationsHeading);

      var scenarioDatas = document.createElement("span");
      document.getElementById("violtime").appendChild(scenarioDatas);
    }

    for (var i in x.scenario) {
      console.log(x.scenario);
      var el = document.getElementById("scenarioWrap");
      if (document.getElementById("scenarioWrap")) {
        el.remove();
        console.log('do nothing', el.remove());
        var scenarioData = document.createElement("p");
        scenarioData.innerHTML = x.scenario[i].name;
        var wrap = document.createElement("div");
        wrap.id = ("scenarioWrap");
        var parent1 = document.getElementById("scenario_heading");
        parent1.appendChild(wrap);
        document.getElementById("scenarioWrap").appendChild(scenarioData);

      } else {
        var scenarioData = document.createElement("p");
        scenarioData.innerHTML = x.scenario[i].name;
        var wrap = document.createElement("div");
        wrap.id = ("scenarioWrap");
        var parent1 = document.getElementById("scenario_heading");
        parent1.appendChild(wrap);
        document.getElementById("scenarioWrap").appendChild(scenarioData);
      }
    }

    x.allScenarioViolations.forEach(function (allScenario, i) {
      var scenarioData = document.createElement("p");
      scenarioData.className = ("senarioListing")
      scenarioData.innerHTML = "";
      document.getElementById("maindata").appendChild(scenarioData);

      var mybookq = document.createElement("table");
      mybookq.className = ("table table-bordered");
      mybookq.id = ("maintbwrap");
      var header = renderHeader("Standards", "Violations");

      var data = new Array(standardArray.length);
      var finalData;

      var count = {}
      var totalNumberOfViolations = 0;

      allScenario.violations.forEach(function (element, i) {
        for (var standardTemp = 0; standardTemp < standardArray.length; standardTemp++) {
          var n = element.tags.includes(standardArray[standardTemp]);
          temp1 = standardTemp;
          var temp;

          if (n) {
            count[standardArray[standardTemp]] = count[standardArray[standardTemp]] ? count[standardArray[standardTemp]] + 1 : 1;
            totalNumberOfViolations += 1;

            if (data[standardTemp] == undefined)
              data[standardTemp] = renderOpenLi(replaceUlOlLi(element.help) + ":" + renderAnchor(element.helpUrl));
            else
              data[standardTemp] = data[standardTemp] + renderOpenLi(replaceUlOlLi(element.help) + ":" + renderAnchor(element.helpUrl));
            var failureLi = undefined;
            element.nodes.forEach(function (node) {
              if (failureLi == undefined)
                failureLi = renderLi(replaceUlOlLi('[' + node.target + '] ' + node.failureSummary));
              else
                failureLi = failureLi + renderLi(replaceUlOlLi('[' + node.target + '] ' + node.failureSummary));
            });
            data[standardTemp] = renderCloseLi(data[standardTemp] + renderOl(failureLi));
          }
        }
      });

      $scope.standardArrayCount = [];
      $scope.standardArrayTotal = totalNumberOfViolations;

      for (let index = 0; index < standardArray.length; index++) {
        var countValue = 0;
        const element = standardArray[index];
        if (!count[standardArray[index]]) {
          countValue = 0;
        } else {
          countValue = count[standardArray[index]];
        }
        var value = count[standardArray[index]];
        $scope.standardArrayCount.push({
          name: standardArray[index],
          value: countValue,
        });

      }
      $scope.allScenarioViolationsCount = [];
      for (let index = 0; index < scenarioViolationsArray.length; index++) {
        const element = scenarioViolationsArray[index];
        var lengthValue = $scope.allScenarioViolations[element].length;


        $scope.allScenarioViolationsCount.push({
          name: scenarioViolationsArray[index],
          value: lengthValue,
        });
      }

      var passes = 0;
      var violations = 0;
      var incomplete = 0;
      var inapplicable = 0;
      var sum = 0;
      // allScenarioViolationsPercentage
      for (let index = 0; index < $scope.allScenarioViolationsCount.length; index++) {
        const element = $scope.allScenarioViolationsCount[index];
        if (element.name == 'incomplete') {
          incomplete = element.value;
        } else if (element.name == 'passes') {
          passes = element.value;
        } else if (element.name == 'violations') {
          violations = element.value;
        } else if (element.name == 'inapplicable') {
          inapplicable = element.value;
        }
        sum = incomplete + passes + violations + inapplicable;
        $scope.allScenarioViolationsTotalCount = sum;
      }
      var restValue;
      restValue = (sum - violations - incomplete) / sum;
      $scope.allScenarioViolationsPercentage = Math.round(restValue * 100);

      for (var standardTemp = 0; standardTemp < standardArray.length; standardTemp++) {
        if (data[standardTemp] == undefined)
          data[standardTemp] = "No Violations Found";
        data[standardTemp] = renderOl(renderCloseLi(data[standardTemp]));
        if (finalData == undefined)
          finalData = renderRow(standardArray[standardTemp], data[standardTemp])
        else
          finalData += renderRow(standardArray[standardTemp], data[standardTemp])
      }

      renderTotalCount = renderTbCount("Total", totalNumberOfViolations);
      for (var standardTemp = 0; standardTemp < standardArray.length; standardTemp++) {
        if (count[standardArray[standardTemp]] == undefined)
          count[standardArray[standardTemp]] = 0;
        renderTotalCount = renderTotalCount ? renderTotalCount +
          renderTbCount(standardArray[standardTemp],
            count[standardArray[standardTemp]]) : renderTbCount(standardArray[standardTemp], count[standardArray[standardTemp]]);
      }

      mybookq.innerHTML = header + finalData;
      document.getElementById("maindata").appendChild(mybookq);
    });
    var totalcounting = document.createElement("div");
    totalcounting.id = ("totalCountingWrap");
    var parentData = document.getElementById("violations_heading");
    parentData.appendChild(totalcounting);

    var violationsCount = document.createElement("div");
    violationsCount.className = ("tbCount");
    violationsCount.innerHTML = renderTotalViolations(renderTotalCount);
    document.getElementById("totalCountingWrap").appendChild(violationsCount);
    x.allScenarioViolations.forEach(function (allScenario, i) {

      var scenarioData = document.createElement("p");
      scenarioData.className = ("senarioListing")
      scenarioData.innerHTML = 'Incomplete Rules';
      document.getElementById("maindata").appendChild(scenarioData);

      var mybookq = document.createElement("table");
      mybookq.className = ("table table-bordered");
      mybookq.id = ("secondtbwrap");
      var header = renderHeader("Standards", "Violations");
      var data = new Array(standardArray.length);
      var finalData;
      var count = {}
      var totalNumberOfIncompletes = 0;

      allScenario.incomplete.forEach(function (element, i) {
        for (var standardTemp = 0; standardTemp < standardArray.length; standardTemp++) {
          var n = element.tags.includes(standardArray[standardTemp]);
          var help;
          // var help;

          if (n) {
            count[standardArray[standardTemp]] = count[standardArray[standardTemp]] ? count[standardArray[standardTemp]] + 1 : 1;
            totalNumberOfIncompletes += 1;
            help = element.help;

            if (help.startsWith('<')) {
              help = help.replace(/\<.*\>/g, ' ');
            }

            if (data[standardTemp] == undefined) {
              data[standardTemp] = renderOpenLi(replaceUlOlLi(help) + ":" + renderAnchor(element.helpUrl));
            } else {
              data[standardTemp] = data[standardTemp] + renderOpenLi(replaceUlOlLi(help) + ":" + renderAnchor(element.helpUrl));
            }
            var failureLi = undefined;
            element.nodes.forEach(function (node) {
              var failureSummary = node.failureSummary ? node.failureSummary : " ";
              if (failureLi == undefined)
                failureLi = renderLi(replaceUlOlLi('[' + node.target + '] ' + failureSummary));
              else
                failureLi = failureLi + renderLi(replaceUlOlLi('[' + node.target + '] ' + failureSummary));
            });
            data[standardTemp] = renderCloseLi(data[standardTemp] + renderOl(failureLi));
          }
        }
      });

      for (var standardTemp = 0; standardTemp < standardArray.length; standardTemp++) {
        if (data[standardTemp] == undefined)
          data[standardTemp] = "No Violations Found";
        data[standardTemp] = renderOl(renderCloseLi(data[standardTemp]));
        if (finalData == undefined)
          finalData = renderRow(standardArray[standardTemp], data[standardTemp])
        else
          finalData += renderRow(standardArray[standardTemp], data[standardTemp])
      }

      renderTotalCount = renderTbCount("Total", totalNumberOfIncompletes);
      for (var standardTemp = 0; standardTemp < standardArray.length; standardTemp++) {
        if (count[standardArray[standardTemp]] == undefined)
          count[standardArray[standardTemp]] = 0;
        renderTotalCount = renderTotalCount ? renderTotalCount + renderTbCount(standardArray[standardTemp], count[standardArray[standardTemp]]) : renderTbCount(standardArray[standardTemp], count[standardArray[standardTemp]]);
      }

      mybookq.innerHTML = header + finalData;
      document.getElementById("maindata").appendChild(mybookq);
    });

  }
  $scope.showPopup = false;

  $scope.scenarioPop = function (pdata) {
    $scope.showPopup = true;
    $scope.popupData = pdata;
  }
  $scope.hidePop = function () {
    $scope.showPopup = false;
    $scope.popupData = null;
  }

  $scope.today = new Date();

}])

appModule.factory('barService', function ($rootScope) {
  var barService = {};
  barService.get = function () {
    barService.data = $rootScope.currBarData;
  }
  barService.update = function (d) {
    barService.data = d;
  }
  return barService;
});