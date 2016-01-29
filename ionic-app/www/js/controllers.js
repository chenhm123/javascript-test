var app = angular.module('starter.controllers', [])

app.run(function($rootScope,$window){
  $rootScope.$window=$window;
  $rootScope.go_back = function() {
    $window.history.back();
  };
})

app.controller('LoginCtrl',function($scope,$location,User,$cordovaDialogs,$ionicLoading,$timeout){
  $scope.login = function(user){
    if(User.checkUser(user.userName,user.password)){
      $location.path('/main')
    }else{
      $cordovaDialogs.alert('您输入的用户名或者密码有误');
    }
  }
  $scope.show = function() {
    $ionicLoading.show({
      template: 'Loading...'
    });
    $timeout(function(){
      $ionicLoading.hide();
    },1000)
  };
});

app.controller('ConfigCtrl',function($window,$scope){
  $scope.$window=$window;
  $scope.go_back = function() {
    $window.history.back();
  };
});

app.controller('MainCtrl',function($scope,$ionicSideMenuDelegate){
  $scope.changeMenu = function(){
    $ionicSideMenuDelegate.toggleRight();
  }

  var itemHight = (window.innerHeight -90);
  var colItem = itemHight/2;
  var rowItem = (itemHight-10)/4;
  $scope.rowItem = "{'height':'"+rowItem+"px','position':'relative'}";
  $scope.colItem = "{'height':'"+colItem+"px','position':'relative'}";
});

app.controller('HotelCtrl',function($scope,HotelList){
    $scope.hotelList = HotelList.getAllHotel();
});
app.controller('Item1Ctrl',function($scope,$cordovaDatePicker,tableList){
  $scope.todayDate = new Date();
  $scope.tableList = [];

  var options = {
    date: new Date(),
    mode: 'date', // or 'time'
    minDate: new Date() - 10000,
    allowOldDates: true,
    allowFutureDates: false,
    doneButtonLabel: 'DONE',
    doneButtonColor: '#F2F3F4',
    cancelButtonLabel: 'CANCEL',
    cancelButtonColor: '#000000'
  };

  $scope.datePick = function(){
    document.addEventListener("deviceready", function () {
      $cordovaDatePicker.show(options).then(function(date){
        $scope.todayDate = $filter('date')(date, "yyyy-MM-dd")
      });
    }, false);
  }

  $scope.getInfoData = function(data){
      $scope.tableList = tableList.getList();
  }
});


