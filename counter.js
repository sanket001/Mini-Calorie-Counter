new Vue({
    el: '#app',
    data: {
        searchQuery: '',
        gridColumns: ['dish', 'calories', 'button'],
        foods: [
          { dish: 'Pizza', calories: Infinity, },
          { dish: 'Chinese', calories: 500,},
          { dish: 'Idli', calories: 500,  },
          { dish: 'Dosa', calories: 500,  },
          { dish: 'Coconut', calories: 500,  },
          { dish: 'Milk', calories: 500,  },
          { dish: 'Bread', calories: 500, },
          { dish: 'Noodles', calories: 500, },
          { dish: 'Tofu', calories: 500,  },
          { dish: 'Dal Fry', calories: 500, }
        ]
    }
})
