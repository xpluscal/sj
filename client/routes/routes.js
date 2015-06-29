angular.module("socially").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('jobs', {
        url: '/jobs',
        templateUrl: 'client/jobs/views/jobs-list.ng.html',
        controller: 'JobsListCtrl',
		resolve: {
			'subscribe': [
				'$meteor', function($meteor) {
					return $meteor.subscribe('jobs');
				}
		  	]
		}
      })
      .state('job', {
        url: '/jobs/:jobId',
        templateUrl: 'client/jobs/views/job-detail.ng.html',
        controller: 'JobDetailsCtrl'
      });

      $urlRouterProvider.otherwise("/jobs");
}]);