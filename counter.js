new Vue({
    el: '#app',
    data: {
        searchQuery: '',
        gridColumns: ['dish', 'calories'],
        foods: [
          { dish: 'Pizza', calories: Infinity },
          { dish: 'Chinese', calories: 500 }
        ]
    }
})
