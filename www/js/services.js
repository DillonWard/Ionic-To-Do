angular.module('starter.services', [])

.factory('Task', function() {
  
  var data = {  
      
      tasks: [{
          
          id: 0,
          title: "Shopping",
          detail: "Milk, Eggs, Bread",
          added: new Date()
          
      }
          
      
    ] 
  }
  
  var ids;

    function addTask(title, detail) {
    data.tasks.push({id: data.tasks.length + 1, title: title, detail: detail, added: new Date()});
  }
  
    function getter(id){
        
        for(var i = 0; i <data.tasks.length; i++){
            if(data.tasks[i].id === parseInt(id)){
                return data.tasks[i];
            }
            
        }
        return null;
    }
    
    function remove(id){
      data.tasks.splice(data.tasks.indexOf(id), 1);
  }
  
  return {
      data: data, 
      addTask: addTask,
      getter: getter,
      remove: remove
  };
});
