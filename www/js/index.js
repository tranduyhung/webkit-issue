var myApp = angular.module('myApp', ['onsen.directives']);

myApp.controller('myController', function($scope) {
	$scope.items = [];

	for (i = 1; i <= 50; i++) {
		var item = {'id': i, 'name': 'Item ' + i};
		$scope.items.push(item);
	}

	$scope.showItem = function($index) {
		$scope.item = $scope.items[$index];
		$scope.myNavigator.pushPage('item.html', { animation: 'slide' });
	}
});