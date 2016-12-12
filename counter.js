new Vue({
    el: '#app',
    data: {
        searchQuery: '',
        gridColumns: ['dish', 'calories'],
        foods: [
          { dish: 'Pizza', calories: Infinity, },
          { dish: 'Chinese', calories: 250,},
          { dish: 'Idli', calories: 50,  },
          { dish: 'Dosa', calories: 100,  },
          { dish: 'Coconut', calories: 95,  },
          { dish: 'Milk', calories: 75,  },
          { dish: 'Bread', calories: 80, },
          { dish: 'Noodles', calories: 200, },
          { dish: 'Tofu', calories: 60,  },
          { dish: 'Dal Fry', calories: 80, }
        ],
        userInput: [],
        },
        methods:{
          addDish:function(dish){
            this.userInput.push(dish);
          } //adds the dish and calorie information into userInput Array
        }
})
