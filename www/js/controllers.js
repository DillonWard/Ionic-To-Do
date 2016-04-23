angular.module('starter.controllers', [])

.controller('ListsCtrl', function($scope, Task) {
    $scope.tasks = Task.data;    
   
    $scope.remove = function(item){
        Task.remove(item);
    };
    
    var data = {
        newTask: "",
        newDetail: ""
    };
    

    function addTask(){
                
        if($scope.data.newTask === ""){
        }
        
        else{
          Task.addTask(data.newTask, data.newDetail)
          
        }
        $scope.data.newTask = ""; 
        $scope.data.newDetail = ""; 
    }
    
    $scope.data = data;
    $scope.addTask = addTask;
 
    
})


.controller('DetailsCtrl', function($scope, $stateParams, Task){
    $scope.data ={
        newName: "",
        newDetail: ""  
    };
    
    function editTask(){
        console.log($scope.data);
        Task.editTask($stateParams.taskID, $scope.data.newName, $scope.data.newDetail);
        
        $scope.data.newName = "";
        $scope.data.newDetail = "";
    }
    $scope.tasks = Task.getter($stateParams.taskID);
    $scope.editTask = editTask;
   
})
;