var app = angular.module("providerDirectory", ['ui.bootstrap']);

app.controller("mainCtrl", function($scope) {
	
	$scope.providers = [
		{"last_name": "Harris", "first_name": "Mike", "email_address": "mharris@updox.com", "specialty": "Pediatrics", "practice_name": "Harris Pediatrics"},
		{"last_name": "Wijoyo", "first_name": "Bimo", "email_address": "bwijoyo@updox.com", "specialty": "Podiatry", "practice_name": "Wijoyo Podiatry"},
		{"last_name": "Rose", "first_name": "Nate", "email_address": "nrose@updox.com", "specialty": "Surgery", "practice_name": "Rose Cutters"},
		{"last_name": "Carlson", "first_name": "Mike", "email_address": "mcarlson@updox.com", "specialty": "Orthopedics", "practice_name": "Carlson Orthopedics"},
		{"last_name": "Witting", "first_name": "Mike", "email_address": "mwitting@updox.com", "specialty": "Pediatrics", "practice_name": "Witting's Well Kids Pediatrics"},
		{"last_name": "Juday", "first_name": "Tobin", "email_address": "tjuday@updox.com", "specialty": "General Medicine", "practice_name": "Juday Family Practice"}
	];
	
	$scope.upForRemoval = [];
	$scope.sortField = 'first_name';
	$scope.sortOrder = 'asc';
	
	$scope.toggleRemovalStatus = function(provider) {
		if($scope.upForRemoval.indexOf(provider) == -1) {
			$scope.upForRemoval.push(provider);
		} else {
			$scope.upForRemoval.splice($scope.upForRemoval.indexOf(provider), 1);
		}
	}
	
	$scope.removeSelectedProviders = function() {
		$scope.providers = $scope.providers.filter(function(provider) {
			return $scope.upForRemoval.indexOf(provider) == -1;
		});
		$scope.upForRemoval = [];
	}
	
	$scope.createProvider = function() {
		var newProvider = {"last_name": $scope.newLastName, "first_name": $scope.newFirstName, "email_address": $scope.newEmail,
				"specialty": $scope.newSpecialty, "practice_name": $scope.newPractice}
		$scope.providers.unshift(newProvider);
		$scope.newLastName = "";
		$scope.newFirstName = "";
		$scope.newEmail = "";
		$scope.newSpecialty = "";
		$scope.newPractice = "";
	}
});