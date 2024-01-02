// Declarative rendering 
var app = new Vue({
    el: '#commentsection',
    // data binding
    data: {
    // the sample comments that will be available on the site
      comments: [{
          name: 'Monica',
          usercomment: 'This application has helped my child in online learning. I am very happy because my child is becoming more active in learning'
        },
  
        {
          name: 'Valentina',
          usercomment: 'The teacher really helps my kid to understand the concept of multiplication!'
        },
      ]
    },
  
    methods: {
    // the comment posted by user will be submitted in form of text and to the array
      postComment: 
      function() {
        if (this.name && this.comment) {
            this.comments.push({
                name: this.name,
                usercomment: this.comment
            })
        // if the user doesn't fill the required info, this alert box will pop up
        } else {
          alert('Please fill-in the box');
        }
      }
    },
  })