// Declarative rendering 
new Vue({
  el: '#app',
  data: function () {
    return {

      // this message will be shown in the h1
      hello: 'Tell me how you feel today!',

      // the message will be entered by the user
      message: ''
    }
  },

  // define local filters
  filters: {
    capital: function (value) {
      if (!value) return ''
      value = value.toString()
      // convert user's input to uppercase
      return value.toUpperCase()
    }
  }
})