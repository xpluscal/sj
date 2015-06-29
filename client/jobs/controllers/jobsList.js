angular.module("socially").controller("JobsListCtrl", ['$scope', '$meteor',
	function ($scope, $meteor){
		
		$scope.jobs = $meteor.collection(Jobs);
		
		$scope.remove = function(job){
		  $scope.jobs.remove(job);
		};
		
		$scope.save = function() {
		  $scope.job.save().then(function(numberOfDocs){
			console.log('save success doc affected ', numberOfDocs);
		  }, function(error){
			console.log('save error', error);
		  });
		};

		$scope.reset = function() {
		  $scope.job.reset();
		};
		
	}
]);