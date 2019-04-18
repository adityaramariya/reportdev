angular.module('app').directive("pieChart", function () {

    return {
        restrict: "E",
        scope: {
            apiName: "="
        },
        controller: 'BodyController',
        link: function (scope, element, attrs, ngModel) {}
    };
}).controller('BodyController', ['$scope', '$rootScope', '$timeout', '$http', '$element', function ($scope, $rootScope, $timeout, $http, $element) {
    console.log("apiName", $scope.apiName);
    $http.get('json/allProjectPassFail.json').then(function (response) {
        console.log(response);

        var visualization = d3plus.viz()
            .container("#viz")
            .data(response.data.data)
            .color("hex")
            .type("pie")
            .id("name")
            .size("value")
            .draw()

    });
}]);