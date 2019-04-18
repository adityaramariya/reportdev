(function () {
  'use strict';

  angular.module('angular-d3plus', [])
    .directive('d3plusPie', ['angularD3plusUtils', function (angularD3plusUtils) {
      return {
        restrict: 'AE',
        scope: angularD3plusUtils.scope({
          data: '=',
          id: '@',
          size: '@?',
          attrs: '=',
          color: '@'
        }),
        template: angularD3plusUtils.template,
        link: angularD3plusUtils.link,
        controller: ['$scope', '$element', function ($scope, $element) {
          // console.log('scope', $scope);
          angularD3plusUtils.controller($scope, $element, 'pie');
        }]
      };
    }])
    .directive('d3plusBar', ['angularD3plusUtils', '$rootScope', function (angularD3plusUtils, $rootScope) {
      return {
        restrict: 'AE',
        scope: angularD3plusUtils.scope({
          data: '=',
          id: '@',
          x: '@',
          y: '@',
          time: '@?',
          size: '@?',
          attrs: '=',
          color: '@',
          labely: '@'

        }),
        template: angularD3plusUtils.template,
        link: angularD3plusUtils.link,
        controller: ['$scope', '$element', function ($scope, $element) {
          angularD3plusUtils.controller($scope, $element, 'bar');
        }]
      };
    }])
    .directive('d3plusBubbles', ['angularD3plusUtils', function (angularD3plusUtils) {
      return {
        restrict: 'AE',
        scope: angularD3plusUtils.scope({
          data: '=',
          id: '@',
          depth: '@',
          size: '@?'
        }),
        template: angularD3plusUtils.template,
        link: angularD3plusUtils.link,
        controller: ['$scope', '$element', function ($scope, $element) {
          angularD3plusUtils.controller($scope, $element, 'bubbles');
        }]
      };
    }])
    .directive('d3plusBox', ['angularD3plusUtils', function (angularD3plusUtils) {
      return {
        restrict: 'AE',
        scope: angularD3plusUtils.scope({
          data: '=',
          id: '@',
          x: '@',
          y: '@',
          size: '@?'
        }),
        template: angularD3plusUtils.template,
        link: angularD3plusUtils.link,
        controller: ['$scope', '$element', function ($scope, $element) {
          angularD3plusUtils.controller($scope, $element, 'box');
        }]
      };
    }])
    .directive('d3plusGeomap', ['angularD3plusUtils', function (angularD3plusUtils) {
      return {
        restrict: 'AE',
        scope: angularD3plusUtils.scope({
          data: '=',
          coords: '=',
          id: '@',
          text: '@?',
          size: '@?'
        }),
        template: angularD3plusUtils.template,
        link: angularD3plusUtils.link,
        controller: ['$scope', '$element', function ($scope, $element) {
          angularD3plusUtils.controller($scope, $element, 'geo_map');
        }]
      };
    }])
    .directive('d3plusLine', ['angularD3plusUtils', function (angularD3plusUtils) {
      return {
        restrict: 'AE',
        scope: angularD3plusUtils.scope({
          data: '=',
          id: '@',
          x: '@',
          y: '@',
          text: '@?',
          size: '@?'
        }),
        template: angularD3plusUtils.template,
        link: angularD3plusUtils.link,
        controller: ['$scope', '$element', function ($scope, $element) {
          angularD3plusUtils.controller($scope, $element, 'line');
        }]
      };
    }])
    .directive('d3plusNetwork', ['angularD3plusUtils', function (angularD3plusUtils) {
      return {
        restrict: 'AE',
        scope: angularD3plusUtils.scope({
          data: '=',
          id: '@',
          size: '@?',
          nodes: '=',
          edges: '='
        }),
        template: angularD3plusUtils.template,
        link: angularD3plusUtils.link,
        controller: ['$scope', '$element', function ($scope, $element) {
          angularD3plusUtils.controller($scope, $element, 'network');
        }]
      };
    }])
    .directive('d3plusPaths', ['angularD3plusUtils', function (angularD3plusUtils) {
      return {
        restrict: 'AE',
        scope: angularD3plusUtils.scope({
          data: '=',
          id: '@',
          size: '@?'
        }),
        template: angularD3plusUtils.template,
        link: angularD3plusUtils.link,
        controller: ['$scope', '$element', function ($scope, $element) {
          angularD3plusUtils.controller($scope, $element, 'paths');
        }]
      };
    }])
    .directive('d3plusRadar', ['angularD3plusUtils', function (angularD3plusUtils) {
      return {
        restrict: 'E',
        scope: angularD3plusUtils.scope({
          data: '=',
          id: '@',
          size: '@?',
        }),
        template: angularD3plusUtils.template,
        link: angularD3plusUtils.link,
        controller: ['$scope', '$element', function ($scope, $element) {
          angularD3plusUtils.controller($scope, $element, 'radar');
        }]
      };
    }])
    .directive('d3plusRings', ['angularD3plusUtils', function (angularD3plusUtils) {
      return {
        restrict: 'AE',
        scope: angularD3plusUtils.scope({
          data: '=',
          edges: '=',
          size: '@?'
        }),
        template: angularD3plusUtils.template,
        link: angularD3plusUtils.link,
        controller: ['$scope', '$element', function ($scope, $element) {
          angularD3plusUtils.controller($scope, $element, 'rings');
        }]
      };
    }])
    .directive('d3plusSankey', ['angularD3plusUtils', function (angularD3plusUtils) {
      return {
        restrict: 'AE',
        scope: angularD3plusUtils.scope({
          id: '@',
          edges: '=',
          nodes: '=',
          focus: '@',
          size: '@?'
        }),
        template: angularD3plusUtils.template,
        link: angularD3plusUtils.link,
        controller: ['$scope', '$element', function ($scope, $element) {
          angularD3plusUtils.controller($scope, $element, 'sankey');
        }]
      };
    }])
    .directive('d3plusScatter', ['angularD3plusUtils', function (angularD3plusUtils) {
      return {
        restrict: 'AE',
        scope: angularD3plusUtils.scope({
          data: '=',
          id: '@',
          y: '@',
          x: '@',
          type: '@?'
        }),
        template: angularD3plusUtils.template,
        link: angularD3plusUtils.link,
        controller: ['$scope', '$element', function ($scope, $element) {
          angularD3plusUtils.controller($scope, $element, 'scatter');
        }]
      };
    }])
    .directive('d3plusTable', ['angularD3plusUtils', function (angularD3plusUtils) {
      return {
        restrict: 'AE',
        scope: angularD3plusUtils.scope({
          id: '@',
          cols: '@',
          shape: '@'
        }),
        template: angularD3plusUtils.template,
        link: angularD3plusUtils.link,
        controller: ['$scope', '$element', function ($scope, $element) {
          angularD3plusUtils.controller($scope, $element, 'table');
        }]
      };
    }])
    .directive('d3plusTreemap', ['angularD3plusUtils', function (angularD3plusUtils) {
      return {
        restrict: 'AE',
        scope: angularD3plusUtils.scope({
          data: '=',
          id: '@',
          size: '@?'
        }),
        template: angularD3plusUtils.template,
        link: angularD3plusUtils.link,
        controller: ['$scope', '$element', function ($scope, $element) {
          angularD3plusUtils.controller($scope, $element, 'tree_map');
        }]
      };
    }])
    .factory('angularD3plusUtils', function ($rootScope, barService) {
      var services = {
        myid: function ($scope, $element) {
          var name;
          if ($scope.container) name = $scope.container;
          else if ($element) name = '#' + $element[0].children[0].id;
          else if ($scope.viz) name = $scope.viz.container();
          return name;
        },
        template: function ($scope) {
          var divid;
          if (!$scope.container) {
            divid = 'd3plus-' + new Date().getTime() + Math.floor((Math.random() * 10) + 1);
            $scope.container = '#' + divid;
            if ($scope.length > 0) $scope[0].container = $scope.container;
          }
          var style = '';
          if ($scope[0].attributes['style'])
            style = $scope[0].attributes['style'].nodeValue;
          //console.log('adasdsadsad', $scope[0].nodeName == "D3PLUS-BAR");
          // console.log('helllooooooo');
          // console.log(''+$scope[0].attributes['style']);
          if ($scope[0].nodeName == "D3PLUS-BAR") {
            return '<div id="' + divid + '" style="' + style + '"></div>';
          } else {
            return '<div id="' + divid + '" style="' + style + '"></div> <div class="ac-legents result-data"> <br /> <span ng-if="incomplete>=0" class="ico-pass" style="background-color: #fffa02"></span><span ng-if="incomplete>=0">incomplete : {{incomplete}} ({{(incomplete*100)/(passes+incomplete+violations+inapplicable) | number:1 }}%)<br /></span>     <span ng-if="passes>=0" class="ico-pass" style="background-color: #01a317"></span><span ng-if="passes>=0">passes : {{passes}} ({{(passes*100)/(passes+incomplete+violations+inapplicable) | number:1 }}%)<br /></span><span ng-if="violations>=0" class="ico-pass" style="background-color: #ff0202"></span><span ng-if="violations>=0">violations : {{violations}} ({{(violations*100)/(passes+incomplete+violations+inapplicable) | number:1 }}%)<br /></span><span ng-if="inapplicable>=0"  class="ico-pass" style="background-color: #8cff9b"></span><span ng-if="inapplicable>=0">inapplicable : {{inapplicable}} ({{(inapplicable*100)/(passes+incomplete+violations+inapplicable) | number:1 }}%)<br /></span><span ng-if="automated>=0" class="ico-pass" style="background-color: #EACE3F"></span><span ng-if="automated>=0"> Automated : {{automated}} ({{(automated*100)/(lowpriority+automated+nonAutomated+manual) | number:1 }}%)</span><br /> <span ng-if="nonAutomated>=0" class="ico-pass" style="background-color: #282F6B"></span>     <span ng-if="nonAutomated>=0">Non Automated : {{nonAutomated}} ({{(nonAutomated*100)/(lowpriority+automated+nonAutomated+manual) | number:1 }}%) </span><br><span ng-if="manual>=0" class="ico-pass"  style="background-color: #b22200"></span> <span ng-if="manual>=0">Not Feasible : {{manual}} ({{(manual*100)/(lowpriority+automated+nonAutomated+manual) | number:1 }}%) </span></br><span ng-if="lowpriority>=0" class="ico-pass" style="background-color: #228B22"></span><span ng-if="lowpriority>=0">Low Priority : {{lowpriority}} ({{(lowpriority*100)/(lowpriority+automated+nonAutomated+manual) | number:1 }}%)</span></div><div class="result-data"><span class="ico-pass"></span>Passed : {{totalPassed}} ({{(totalPassed*100)/(totalPassed+totalFailed) | number:1 }}%)  <br>  <span class="ico-fail"></span>Failed : {{totalFailed}} ({{(totalFailed*100)/(totalPassed+totalFailed) | number:1 }}%)</div>';
          }

        },
        link: function ($scope, $element, $attrs) {
          $scope.$watch('data', function (data) {
            if ($element[0].tagName == "D3PLUS-PIE") {
              // console.log('D3 data', data);
              var newData = [];

              var val = [];

              angular.forEach(data, function (value, key) {
                // console.log(value.value);
                val.push(value.value);
              });

              // console.log('valvalvalvalvalvalval', val);

              var maxVal = Math.max.apply(null, val);

              // console.log('maxVal', maxVal);

              angular.forEach(data, function (value, key) {
                // console.log(value.value);
                value.Value = value.value;
                value.value = Math.round((value.value / maxVal) * 100);
                // console.log(value.value);
              });

              // console.log(data);
              // if (data.length == 3) {
              //     var val1 = data[0].value;
              //     var val2 = data[1].value;
              //     var val3 = data[2].value;

              //     console.log(val1,val2,val3);
              // }

              // console.log('newData', newData);

              // rendering graph
              if (data && data.length > 0) {
                $scope.viz.data(data)
                  .tooltip(["Value"])
                  .draw();
              }

            } else if ($element[0].tagName == "D3PLUS-BAR") {
              // console.log($attrs);
              // draw bar    
              if (data && data.length > 0) {
                var n = 0;
                $scope.viz.data(data)
                  .mouse({
                    "move": false,
                    // key will also take custom function
                    "click": function (e) {
                      // console.log("eeeee", e);
                      if (e.link) {
                        var url = e.link;
                        window.open(url, '_blank');
                      }
                      // if (e.innerData && e.report) {
                      if (e.menunav) {
                        var getid = e.id;
                        // console.log(ele);
                        $('#d3plus_tooltip_id_bar').hide();
                        var ele = $("[data-id=" + getid + "]");
                        // level4
                        ele.parent('ul').parent().parent("ul").parent().parent("ul").parent().parent("ul").siblings("input").prop("checked", true);

                        setTimeout(function () {
                          // level3
                          ele.parent('ul').parent().parent("ul").parent().parent("ul").siblings("input").prop("checked", true);
                        }, 200)

                        setTimeout(function () {
                          // level2
                          ele.parent('ul').parent().parent("ul").siblings("input").prop("checked", true);
                        }, 400)

                        setTimeout(function () {
                          // level1
                          ele.parent('ul').siblings("input").prop("checked", true);
                        }, 600)

                        
                        setTimeout(function () {
                          // last
                          if(!!ele.find("label").length){
                            ele.children("label").click();
                          }else{
                            ele.children("a").click();
                          }
                            

                        }, 700)

                        // console.log(ele.parent('ul').parent().parent("ul").siblings("input"));
                        // console.log("eleP", ele.parent().siblings());

                        // $rootScope.$apply(function () {
                        //   $rootScope.currBarData = e.innerData;
                        //   $rootScope.reportType = e.report;
                        //   if (e.report == 'weekly') {
                        //     $rootScope.weeklyData = e.innerData;
                        //   }
                        //   if (e.report == 'green') {
                        //     $rootScope.greenData = e.innerData;
                        //   }
                        //   if (e.report == 'current') {
                        //     $rootScope.currentData = e.innerData;
                        //   }
                        // });
                      }
                      else if (e.innerData && e.report) {
                        $rootScope.$apply(function () {
                          $rootScope.currBarData = e.innerData;
                          $rootScope.reportType = e.report;
                          if (e.report == 'weekly') {
                            $rootScope.weeklyData = e.innerData;
                          }
                          if (e.report == 'green') {
                            $rootScope.greenData = e.innerData;
                          }
                          if (e.report == 'current') {
                            $rootScope.currentData = e.innerData;
                          }

                        });
                      }


                      // $rootScope.currBarData = "Muydtjsdfjh" + (n++);
                      // console.log($rootScope.currBarData);
                      // if(e.link){
                      //     var url = e.link;
                      //     window.open(url,'_blank');
                      // }
                      // console.log(e);
                    }
                  })
                  .y({
                    "label": $scope.labely
                  })
                  .size("value")
                  .tooltip(["project", "date", "config", "pass", "fail", "total", "time"])
                  .draw();
              }
            } else {

              if (data && data.length > 0) {
                $scope.viz.data(data).draw();
              }
            }
          });
          $scope.$on('DataReady', function (event, args) {
            // console.log('DataReady');
            if (args.elementid === $scope.elementid) {
              if (args.data && args.data.length > 0) $scope.viz.data(args.data);
              if (args.nodes) $scope.viz.nodes(args.nodes);
              if (args.edges) {
                $scope.viz.edges(args.edges);
                if (args.edgesarrows) $scope.viz.edges({
                  'arrows': args.edgesarrows
                });
              }
              $scope.viz.draw();
            }
          });
        },
        controller: function ($scope, $element, type) {
          $scope.viz = d3plus.viz().container(d3.select($element[0].children[0]));
          if ($scope.attrs) services.setvar($scope.viz.attrs, $scope.attrs);
          if ($scope.color) services.setvar($scope.viz.color, $scope.color);
          if ($scope.cols) services.setvar($scope.viz.cols, $scope.cols);
          if ($scope.depth) $scope.viz.depth(Math.round($scope.depth));
          if ($scope.nodes) services.setvar($scope.viz.nodes, $scope.nodes);
          if ($scope.edges) services.setvar($scope.viz.edges, $scope.edges);
          if ($scope.focus) services.setvar($scope.viz.focus, $scope.focus);
          if ($scope.id) services.setvar($scope.viz.id, $scope.id);
          if ($scope.shape) services.setvar($scope.viz.shape, $scope.shape);
          if ($scope.size) services.setvar($scope.viz.size, $scope.size);
          if ($scope.time) services.setvar($scope.viz.time, $scope.time);
          if ($scope.x) services.setvar($scope.viz.x, $scope.x);
          if ($scope.y) services.setvar($scope.viz.y, $scope.y);
          if ($scope.coords) services.setvar($scope.viz.coords, $scope.coords);
          if ($scope.tooltip) services.setvar($scope.viz.tooltip, $scope.tooltip);
          $scope.viz.legend(false)
          $scope.viz.type(type);
          // $scope.viz.tooltip(true);
          // alert(0)
          // console.log();

          $scope.viz.size(function (a) {
          if (a.name == "passed") {
              $scope.$apply(function () {
                $scope.totalPassed = a.Value
              })
            }

            if (a.name == "passed") {
              $scope.$apply(function () {
                $scope.totalPassed = a.Value
              })
            }
            if (a.name == "failed") {
              $scope.$apply(function () {
                $scope.totalFailed = a.Value;
              })
            }
            if (a.name == "Low Priority") {
              $scope.$apply(function () {
                $scope.lowpriority = a.Value;
              })
            }

            if (a.name == "Automated") {
              $scope.$apply(function () {
                $scope.automated = a.Value;
              })
            }
            if (a.name == "NonAutomated") {
              $scope.$apply(function () {
                $scope.nonAutomated = a.Value;
              })
            }
            if (a.name == "Manual") {
              $scope.$apply(function () {
                $scope.manual = a.Value;
              })
            }
            if (a.name == "Not feasible") {
              $scope.$apply(function () {
                $scope.manual = a.Value;
              })
            }
            if (a.name == "wcag2aa") {
              $scope.$apply(function () {
                $scope.wcag2aa = a.Value;
              })
            }
            if (a.name == "wcag2a") {
              $scope.$apply(function () {
                $scope.wcag2a = a.Value;
              })
            }
            if (a.name == "section508") {
              $scope.$apply(function () {
                $scope.section508 = a.Value;
              })
            }
            if (a.name == "best-practice") {
              $scope.$apply(function () {
                $scope.bestPractice = a.Value;
              })
            }
            if (a.name == "experimental") {
              $scope.$apply(function () {
                $scope.experimental = a.Value;
              })
            }
            if (a.name == "incomplete") {
              $scope.$apply(function () {
                $scope.incomplete = a.Value;
              })
            }
            if (a.name == "passes") {
              $scope.$apply(function () {
                $scope.passes = a.Value;
              })
            }
            if (a.name == "violations") {
              $scope.$apply(function () {
                $scope.violations = a.Value;
              })
            }
            if (a.name == "inapplicable") {
              $scope.$apply(function () {
                $scope.inapplicable = a.Value;
              })
            }



            // if(a.projectName == "WCC" ){
            //     $scope.issueCount.wcc = a.value;
            // }
            return a.value;
          });
          $scope.viz.labels({
            "align": "end",
            "resize": false,
            "font": {
              "family": "arial",
              "size": 14
            }
          });

        },
        scope: function (typescope) {
          typescope.data = '=';
          typescope.container = '@?';
          typescope.style = '@?';
          typescope.focus = '@?';
          typescope.tooltip = '@?';
          typescope.elementid = '@?';
          typescope.config = '@?';
          return typescope;
        },
        setvar: function (func, val) {
          try {
            var parsed = JSON.parse(val);
            if (parsed) func(parsed);
            else func(val);
          } catch (e) {
            func(val);
          }
        }
      };
      return services;
    });
})();