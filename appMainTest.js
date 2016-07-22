app.directive('dropdownMenu', ['$document', function ($socument) {
        return {
            restrict: 'E',
            template: '/components/dropdown-menu.html',
            controller: ['$scope', function ($scope) {
                    // 必要に応じて処理を定義…
                }],
            link: function (scope, element, attrs) {
                var close = function ($event) {
                    scope.$apply(function () {
                        scope.isActive = false;
                        $document.unbind('click', close);
                    });
                };
                scope.isActive = false;
                scope.clickButtonHandler = function ($event) {
                    $event.stopPropagation();
                    scope.isActive = !scope.isActive;
                };
                scope.$watch('isActive', function (newValue) {
                    newValue && $document.bind('click', close);
                });
            }
        };
    }]);
