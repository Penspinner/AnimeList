var animeControllers = angular.module('animeControllers', ['ngAnimate']);

animeControllers.controller('ListController', ['$scope', '$http', function($scope, $http) 
{
    $http.get('../data/data.json').success(function(data)
    {
        $scope.animes = data;
        $scope.order = 'default'
    });
    
}]);

animeControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) 
{
    $http.get('../data/data.json').success(function(data)
    {
        $scope.animes = data;
        $scope.whichItem = $routeParams.itemId;
        
        if ($routeParams.itemId > 0)
        {
            $scope.prevItem = Number($routeParams.itemId) - 1;
        } else
        {
            $scope.prevItem = $scope.animes.length - 1;
        }
        
        if ($routeParams.itemId < $scope.animes.length - 1)
        {
            $scope.nextItem = Number($routeParams.itemId) + 1;
        } else
        {
            $scope.nextItem = 0;
        }
    });
    
}]);