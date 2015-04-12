go2ahcApp.directive('showtab',
    function() {
        return {
            link: function(scope, element, attrs) {
                element.click(function(e) {
                    e.preventDefault();
                    $(element).tab('show');
                });
            }
        };
    });

// Global Loader
go2ahcApp.directive('loading', ['$http', function($http) {
    return {
        restrict: 'A',
        link: function(scope, elm, attrs) {
            scope.isLoading = function() {
                return $http.pendingRequests.length > 0;
            };

            scope.$watch(scope.isLoading, function(v) {
                if (v) {
                    elm.show();
                } else {
                    elm.hide();
                }
            });
        }
    };

}]);

//AutoComplete Directive
go2ahcApp.directive('autoComplete', function($timeout) {
    return function(scope, iElement, iAttrs) {
            iElement.autocomplete({
                source: scope[iAttrs.uiItems],
                select: function() {
                    $timeout(function() {
                      iElement.trigger('input');
                    }, 0);
                }
            });
    };
});

go2ahcApp.directive('userSearch', function() {
  return {
    restrict    : 'E',  // used E because of element 
    templateUrl : 'views/layout/userSearch.html'
  };
});