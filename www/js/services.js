angular.module('starter.services', [])

.factory('Task', function() {
  
  var data = {  
      // Sample Tasks
      tasks: [{
          
          id: 0,
          title: "Shopping",
          detail: "Milk, Eggs, Bread",
          added: new Date()
          
      }
    ] 
  }
  
  
  // Adding a task to the list
  // Adds title, details and date
  function addTask(title, detail) {
      data.tasks.push({id: data.tasks.length + 1, title: title, 
                       detail: detail, added: new Date()});
  
  }
  
    // sets IDs to tasks
    function getter(id){
        for(var i = 0; i <data.tasks.length; i++){
            if(data.tasks[i].id === parseInt(id)){
                return data.tasks[i]; 
            }
            
        }
        return null;
    }
    // Function for removing tasks
    function remove(id){
      data.tasks.splice(data.tasks.indexOf(id), 1);
  }
    // Function for editing task
    function editTask(id, newName, newDetail){
        // Loops through the list of tasks
        // Changes the task with the same ID through new entries
        for(var i = 0; i < data.tasks.length; i++){
            if(data.tasks[i].id === parseInt(id)){
                data.tasks[i].title = newName;
                data.tasks[i].detail = newDetail;
            }
            
        }
    }
    
    return {
        data: data, 
        addTask: addTask,
        getter: getter,
        remove: remove,
        editTask: editTask 
  };

});
