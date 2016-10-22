
var app = angular.module("app", [])
  .controller("IndexController", ["$scope", function ($scope) {

    $scope.sections = ['section1', 'section2', 'section3', 'section4']
    $scope.currentSection = $scope.sections[0];

    $scope.setCurrentSection = function (section) {
      $scope.currentSection = section;
    }
  }]);

app.directive('scrollingHighlight', function () {
  return {
    link: function (scope, element, attr) {
      var sections = scope.$eval(attr.scrollingHighlight),
          callback = scope.$eval(attr.scrollingHighlightCallback),
          bottoms = [];

      for (var i = 0; i < sections.length; i++) {
        bottoms.push($('#' + sections[i]).offset().top + $('#' + sections[i]).height() - 60);
      }

      function findCurrentSection() {
        var currentPos = $(window).scrollTop(),
            currentSection = null;

        if (currentPos < bottoms[0]) {
          currentSection = sections[0]
        } else if (currentPos > bottoms[bottoms.length - 1]) {
          currentSection = sections[bottoms.length - 1];
        } else {
          for (var i = 0; i < bottoms.length - 1; i++) {
            if (currentPos > bottoms[i] && currentPos <= bottoms[i + 1]) {
              currentSection = sections[i + 1];
              break;
            }
          }
        }
        callback(currentSection);
      }

      $(window).on('scroll', function () {
        findCurrentSection();
        scope.$apply()
      });

      $('a[href*=#]').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
          scrollTop: $(this.hash).offset().top
        }, 1000);
      });

      findCurrentSection();
    }
  };
});