angular.module('starter.services', [])

.factory('Task', function() {
  
  var data = {  
      
      tasks: [{
          
          id: 0,
          title: "Do Dark Souls",
          detail: "git gud",
          added: new Date()
          
      }
          
      
    ] 
  }
  
  var ids;

    function addTask(title, detail) {
    data.tasks.push({id: data.tasks.length + 1, title: title, detail: detail, added: new Date()});
  }
  
    
  return {
    data: data
    , addTask: addTask
  };
});
