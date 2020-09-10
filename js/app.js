const app = new Vue({
  el:"#todoapp",
  data:{
    list:["寫代碼","吃飯飯","睡覺覺"],
    inputValue:"好好學習，天天向上"
  },
  methods: {
    addTodo:function(){
      this.list.push(this.inputValue);
    },
    delTodo:function(index){
      console.log("刪除"+index);
      this.list.splice(index,1);
    },
    clearTodo:function(){
      this.list = [];
    }
  },
})