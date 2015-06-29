angular.module("socially").controller("JobDetailsCtrl", ['$scope', '$stateParams', '$meteor', function($scope, $stateParams, $meteor){
	$scope.job = $meteor.object(Jobs,$stateParams.jobId, false);
	$scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

}]);