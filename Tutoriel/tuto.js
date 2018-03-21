 // Declarative rendering     
 var app = new Vue(
    {
        el: '#app',
        data: 
        {
            message :' helllo man' 
        }
    }
);

// Declarative rendering    
var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  })
// conditionals (v-if) and loops (v-for)
var app3 = new Vue(
  {
    el: '#app-3',
    data:
    {
       seen: false  
    }   
  }
);
var app4 = new Vue(
  {
      el: '#app-4',
      data:
      {
         todos : [
           
         {text: 'Learn Javascript'},
         {text: 'Learn Vue'},
         {text: 'Build something awesome'}

         ]
      }
  }
);
// Handling User Input wit v-on:click

var app5 = new Vue(
  {
      el: '#app-5',
      data : 
      {
          message : 'hello Vue.js!' ,
         
      },
      methods: {
       reverseMessage : function()
       {
           this.message = this.message.split('').reverse().join('')
       }

      }


  }
);

// v-model 
var app6 = new Vue({
   
  el: '#app-6',
  data :
  {  
     message : 'hello vue!'
  }
})

/**
*   argument with Components
**/

Vue.component('todo-item', {
    props: ['todo'],
    template: 
    '<li>{{ todo.id }}{{ todo.text }}</li>'
  })
  
  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  })