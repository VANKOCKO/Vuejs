// Vue est un object de la class vue que nous avons importees dans le template 
new Vue({
      
    el:"#app",
    data: {
         title:" hello Vue Js",
         link:'https://www.google.fr/'
    },
    methods: {
         sayHello :function () {
               return this.title;
         }
    }

})