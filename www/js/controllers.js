angular.module('starter.controllers', [])

.controller('ListsCtrl', function($scope, Task) {
    $scope.tasks = Task.data;    
    
    
    var data = {
        newTask: "",
        newDetails: ""
    };
    

    function addTask(){
                
        if($scope.data.newTask === ""){
        }
        
        else{
          Task.addTask(data.newTask, data.newDetails)
          
        }
        $scope.data.newTask = ""; 
        $scope.data.newDetails = ""; 
    }
    
    $scope.data = data;
    $scope.addTask = addTask;
    
    
})


.controller('DetailsCtrl', function($scope, $stateParams, Task){
    $scope.tasks = Task.data;   
    $scope.tasks = Task.getter($stateParams.taskID);
 
})
;