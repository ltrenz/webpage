scotchApp.controller('friendsController', function($scope, $routeParams) {
    $scope.sortBy='name';
    $scope.reverse=false;
    
    $scope.doSort= function(propName) {
        $scope.sortBy=propName;
        $scope.reverse=!$scope.reverse;
    };
    
    
    var friendId = $routeParams.friendId;
        $scope.comments = null;
        
        function init() {
            //Search the customers for the customerId
            for (var i=0,len=$scope.friends.length;i<len;i++) {
               if ($scope.friends[i].id === parseInt(friendId)) {
                   $scope.comments = $scope.friends[i].comments;
                   break; 
               }
            }
        }
    
    $scope.friends=[
       {
           id:1,
           name:'Kelly',
           DOB:'1998-03-04',
           school:'University of Missouri',
           comments: [
               {
                   id:1,
                   commentName:'Sharon',
                   comment:'will graduate after 6 years'
               }
           ]
       },
        {
           id:2,
           name:'Courtney',
           DOB:'1995-07-24',
           school:'Webster University',
           comments: [
               {
                    id:2,
                   commentName:'Linda',
                   comment:'beginning her Masters'
               }
           ]
       },
        {
           id:3,
           name:'Marina',
           DOB:'1995-01-25',
           school:'Southeast Missouri State',
           comments: [
               {   id:3,
                   commentName:'Vicki',
                   comment:'two semesters left of nursing school'
               }
           ]
       },
        {
           id:4,
           name:'Taylor',
           DOB:'1995-01-25',
           school:'Southeast Missouri State',
           comments: [
               {   id:4,
                   commentName:'Dennis',
                   comment:'will graduate in one semester'
               }
           ]
       },
        {
           id:5,
           name:'Jessica',
           DOB:'1995-05-27',
           school:'Missouri State University',
           comments: [
               {   id:5,
                   commentName:'Sharon',
                   comment:'will graduate after 6 years'
               }
           ]
       },
        {
           id:6,
           name:'Carly',
           DOB:'1995-07-06',
           school:'Missouri State University',
           comments: [
               {   id:6,
                   commentName:'Deanna',
                   comment:'Graduated in May 2017'
               }
           ]
       },
        {
           id:7,
           name:'Janus',
           DOB:'1994-07-15',
           school:'Missouri State Universtiy',
           comments: [
               {   id:7,
                   commentName:'Patty',
                   comment:'beginning student teaching'
               }
           ]
       },
        {
           id:8,
           name:'Alex',
           DOB:'1994-10-24',
           school:'Missouri State University',
           comments: [
               {   id:8,
                   commentName:'Jean',
                   comment:'will graduate after 1 year'
               }
           ]
       }
        
    ];
    

 
    init();
    
   $scope.addToTable=false;
    $scope.addForm=false;
    
    $scope.addFriend=function(){
        $scope.addform=!$scope.addForm
    };
    $scope.submit=function(){
        $scope.addToTable=!$scope.addToTable;
        $scope.addForm=!$scope.addForm    
    };
    
    

    
  
    
});