const one = {
    template: '<div class="contact"><center> <h1>Our CEO</h1><br> <img src="../../images/ceo.png" style="width:50%"> <h3>Monica Valentina</h3> <p style="color: grey;">CEO of KIDDO.IT</p> <a href="tel:087780522378">Phone: +6287780522378</a> <p>Bachelor of Computer Science</p>            <a href="mailto: monicatasmin06@gmail.com">e-mail: monicatasmin06@gmail.com</a>    </div>'
} 

const two = {
    template: '#create-template'

} 

const router = new VueRouter({
    routes: [
        {
            path: '/one',
            component: one
        },
        {
            path: '/two',
            component: two
        }
    ]
})

var routeTest = new Vue({
    router,
    el: '#app',
    data: {

    },

}).$mount('#app')