var appControllers = angular.module('appControllers', []);

appControllers.controller('NavigationController', ['$scope', function($scope) {
	 $scope.init = function() {
    $scope.text = "Search by company name or company number"; // set it in the init method
  };
	$scope.names = ['Company', 'Person'];
	$scope.name= 'Company'
	$scope.my = { search: 'Company'};
	$scope.text = 'Search by company name or company number';
	$scope.placeholder = function(name) {
		
		if(name == 'Company'){
			 console.log(name);
			 console.log("Search by company name or company number");
			 name='Company';
			 $scope.name = name;
			 $scope.text = "Search by company name or company number";
		}
		else{
			 console.log(name);
			 console.log("Search by name");
			 name='Person';
			 $scope.name = name;
			 $scope.text = "Search by name";
		}
	};
}]);

appControllers.controller('TabsController', ['$scope', function($scope) {
	$scope.tabs = ["General", "Financial, Corporate Filings & Company Events, Group, People & Contact"];
      // Change the tab
	  $scope.switchTab = function(index) {
	  	switch(index) {
	        case 0: $location.path('/general');break;
	        case 1: $location.path('/financial');break;
	        case 2: $location.path('/corporate');break;
	        case 3: $location.path('/group');break;
	        case 4: $location.path('/people');break;
	        
    	}
    }
}]);	

appControllers.controller('GeneralController', ['$scope', '$http', function($scope, $http) {
	 $http({
        method : "GET",
        url : ""
    }).then(function mySucces(response) {
        $scope.general = response.data;
    }, function myError(response) {
        $scope.general = response.statusText;
    });
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $scope.currentTab = toState.data.selectedTab;
      });
}]);	

appControllers.controller('FinancialController', ['$scope', '$http', function($scope, $http) {
    $http({
        method : "GET",
        url : ""
    }).then(function mySucces(response) {
        $scope.financials = response.data;
        console.log($scope.financials['pr:profit_margin']);
    }, function myError(response) {
        $scope.financials = response.statusText;
    });
}]);
    
appControllers.controller('CorporateController', ['$scope', '$http', function($scope, $http) {
    $http({
        method : "GET",
        url : ""
    }).then(function mySucces(response) {
        $scope.events = response.data;
    }, function myError(response) {
        $scope.events = response.statusText;
    });
    
}]);

appControllers.controller('GroupController', ['$scope', '$http', function($scope, $http) {
    $http({
        method : "GET",
        url : ""
    }).then(function mySucces(response) {
        $scope.group = response.data;
    }, function myError(response) {
        $scope.group = response.statusText;
    });
    
}]);

appControllers.controller('PeopleController', ['$scope', '$http', function($scope, $http) {
    $http({
        method : "GET",
        url : ""
    }).then(function mySucces(response) {
        	 $scope.people = response.data;
        	 $scope.person = [];
	    		    	
	    	for(var i = 0; i < ($scope.people['pd:id']).length; i++) {
		    		$scope.person[i] = ["name: ", $scope.people['pd:Name'][i]," job: ", $scope.people['pd:job_title'][i]," age: ", $scope.people['pd:age'][i]," nationality: ", $scope.people['pd:nationality'][i]," location: ", $scope.people['pd:location'][i]," appointment_date: ", $scope.people['pd:appointment_date'][i]," end_date: ",$scope.people['pd:end_date'][i] ," status: ",$scope.people['pd:status'][i] ]
	    	};

    }, function myError(response) {
        $scope.people = response.statusText;
    });
    
    
    
}]);


appControllers.controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {


  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'partials/info.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

appControllers.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});