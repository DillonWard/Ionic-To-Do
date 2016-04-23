angular.module('starter.controllers', [])

.controller('ListsCtrl', function($scope, Task) {
    $scope.tasks = Task.data;    
   // Removes item from list of tasks
    $scope.remove = function(item){
        Task.remove(item);
    };
    
    var data = {
        // Variables for new tasks to add
        newTask: "",
        newDetail: ""
    };
    

    function addTask(){
            
        // If it's empty it doesn't add to list if empty
        if($scope.data.newTask === ""){
        }
        
        // Else it's added
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
    
    // Editing tasks
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