new Vue({
    el: '#app',
    data: {
        searchQuery: '',
        gridColumns: ['dish', 'calories', 'button'],
        foods: [
          { dish: 'Pizza', calories: Infinity, button:'select' },
          { dish: 'Chinese', calories: 500, button:'select' },
          { dish: 'Idli', calories: 500, button:'select' },
          { dish: 'Dosa', calories: 500, button:'select' },
          { dish: 'Coconut', calories: 500, button:'select' },
          { dish: 'Milk', calories: 500, button:'select' },
          { dish: 'Bread', calories: 500, button:'select' },
          { dish: 'Noodles', calories: 500, button:'select' },
          { dish: 'Tofu', calories: 500, button:'select' },
          { dish: 'Dal Fry', calories: 500, button:'select' }
        ]
    }
})
