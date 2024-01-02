    // vue js
        // consists of the information such as the question and choices and the correct answers
        var test = {
          asks: [
          {
              question: "What shape is no.1 ?",
              // list of questions with the correct answers
              answers: [
                  {question: 'Circle', true: true}, 
                  {question: 'Triangle'}, 
                  {question: 'Square'}, 
              ]
              },
              
              {
              question: "What shape is no.2 ?",
              answers: [
                  {question: 'Circle'}, 
                  {question: 'Hexagon', true: true}, 
                  {question: 'Pentagon'}, 
              ]
              },
              
              {
              question: "What shape is no.3 ?",
              answers: [
                  {question: 'Circle'}, 
                  {question: 'Hexagon'}, 
                  {question: 'Pentagon', true: true}, 
              ]
              },

              {
              question: "What shape is no.4 ?",
              answers: [
                  {question: 'Rectangle', true: true}, 
                  {question: 'Hexagon'}, 
                  {question: 'Pentagon'}, 
              ]
              },

              {
              question: "What shape is no.5 ?",
              answers: [
                  {question: 'Circle'}, 
                  {question: 'Hexagon'}, 
                  {question: 'Triangle', true: true}, 
              ]
              },
              
          ]
          };

          // consists of the information such as the question and choices and the correct answers
          var quiz = {
            asks: [          
            // list of questions with the correct answers
            {
                question: "An object that has a fixed shape and volume, sturdy, and malleable is called: ",
                answers: [
                    {question: 'Solid', true: true}, 
                    {question: 'Liquid'}, 
                    {question: 'Gas'}, 
                ]
                },
                
                {
                question: "A substance or object that has a fixed volume but changes shape according to the place or container is called: ",
                answers: [
                  {question: 'Solid'}, 
                  {question: 'Liquid', true: true}, 
                  {question: 'Gas'}, 
                ]
                },
                
                {
                question: "A substance or object that has a volume and shape that always changes according to the place or container: ",
                answers: [
                  {question: 'Solid'}, 
                  {question: 'Liquid'}, 
                  {question: 'Gas',true: true}
                ]
                },          
            ]
            };

    // the tabs with their names and their contents are here
    Vue.component('tab-4 to 6 years old', {
      data: function () {
        return {
            test: test,
            // Store current question idx
            askidx: 0,
            // the array is set to be false to hide the correct answer 
            useranswers: Array(test.asks.length).fill(false)
        };
      },
        // methods used in this feature
        methods: {
          // this fucntion is to proceed to the next question
          page: function() {
              this.askidx++;
          },
          // this function calculates the final score gained by the user by returning the true answers
          mark: function() {
              return this.useranswers.filter(function(val) { 
                  return val 
              }).length * 100 / 5;
        }
      },
        // the section for students aged between 4 to 6 and its content
      template: `
      <!-- declarative rendering -->
      <div id="mcq">
      <a href="game.html"><h5>click here to learn math</h5></a>
          <h1>Let's get to know shapes!</h1>
          <!-- idx is used to check with current ask idx -->
          <div v-for="(ask, idx) in test.asks">
            <!-- Hide all questions, show only the one with idx === to current question idx -->
            <div v-show="idx === askidx">
              <img src="../../images/shapes.png">
              <h2>{{ ask.question }}</h2>
              <ol>
                <li v-for="answer in ask.answers">
                  <label>
                    <!-- i'm choosing the radio button for the user to choose one of the choices -->
                    <!-- the answers will be grouped regarding to the questions -->
                    <input type="radio" 
                    v-model="useranswers[idx]"                      
                    v-bind:name="idx"  
                    
                    v-bind:value="answer.true">
                    
                    <!-- declarative rendering of user's answer -->
                    {{answer.question}}
                  </label>
                </li>
              </ol>
              <!-- a clickable button that will bring user to the next question -->

              <button v-on:click="page">next</button>
            </div>
          </div>

          <!-- this will be prompted after the user finished answering all questions -->
          <div v-show="askidx === test.asks.length">
            <h3>Congratulations!</h3>
            <!-- shows the final mark -->
            <p>
              Your mark is: {{ mark() }}
            </p>
            <img style="width: 236px; height: 260px;" src=".././images/clap.gif">
          </div>
        </div>

      `
    })

    // the tabs with their names and their contents are here
    Vue.component('tab-7 to 9 years old', {
      data: function () {
        return {
            quiz: quiz,
            // Store current question idx
            askidx: 0,
            // the array is set to be false to hide the correct answer 
            useranswers: Array(quiz.asks.length).fill(false)

        };
      },
        // methods used in this feature
        methods: {
          // this fucntion is to proceed to the next question
          page: function() {
              this.askidx++;
          },
          // this function calculates the final score gained by the user by returning the true answers
          mark: function() {
              return this.useranswers.filter(function(val) { 
                  return val 
              }).length * 100 / 3;
        }
      },
        // the section for students aged between 7 to 9 and its content
      template: `
      <!-- declarative rendering -->
      <div id="mcq">
      <img src="../../images/states.jpeg" width="300" height="300"style="margin-bottom:10px;">
          <h1>States</h1>
          <!-- idx is used to check with current ask idx -->
          <div v-for="(ask, idx) in quiz.asks">
            <!-- Hide all questions, show only the one with idx === to current question idx -->
            <div v-show="idx === askidx">
              <h2>{{ ask.question }}</h2>
              <ol>
                <li v-for="answer in ask.answers">
                  <label>
                    <!-- i'm choosing the radio button for the user to choose one of the choices -->
                    <!-- the answers will be grouped regarding to the questions -->
                    <input type="radio" 
                    v-model="useranswers[idx]"                      
                    v-bind:name="idx"  
                    
                    v-bind:value="answer.true">
                    
                    <!-- declarative rendering of user's answer -->
                    {{answer.question}}
                  </label>
                </li>
              </ol>
              <!-- a clickable button that will bring user to the next question -->

              <button v-on:click="page">next</button>
            </div>
          </div>

          <!-- this will be prompted after the user finished answering all questions -->
          <div v-show="askidx === quiz.asks.length">
            <h3>Congratulations!</h3>
            <!-- shows the final mark -->
            <p>
              Your mark is: {{ mark() }}
            </p>
            <img style="width: 236px; height: 260px;" src="./images/clap.gif">
          </div>
        </div> 
      `
    })
    

    // here
    Vue.component('tab-10 to 12 years old', {
      // this will contains of the props
      data: function () {
        return {
          integer: 'Integer Numbers',
          definition: 'Integer is a number system which is the set of all numbers (not fractions) consisting of negative integers {…,-3,-2,-1}, zero {0}, and positive integers {1,2,3, …}. Integers are a subset of rational numbers.',
          positive: 'Examples of positive integers: 10, 20, 30',
          negative: 'Examples of negative integers: -10, -20, -30',
          non: 'Non-integer example: -10½'
        }
      },
      template: `
      <div>
        <h1>{{ integer }}</h1>
        <h4>{{ definition }}</h4>
        <p>{{ positive }}</p>
        <p>{{ negative }}</p>
        <p>{{ non }}</p>
      </div>`
    })

    // Declarative rendering 
    var app = new Vue({
      el: '#app',
      data: {
        // the default section that will be shown to the user; active class
        active: '4 to 6 years old',
        // the sections names
        sections: ['4 to 6 years old', '7 to 9 years old', '10 to 12 years old'],
      },


      computed: {
        // function
        activeTab: function() {
          return 'tab-' + this.active.toLowerCase()
        }
      }
    })    