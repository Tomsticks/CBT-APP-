import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../Views/Landing.vue'
import RegisterPage from '../Views/Registration.vue'
import LoginPage from '../Views/Login.vue'
import dashboard from '../Views/Dashboard.vue'
// import Questions from '../Views/Question.vue'
import Result from '../Views/Result.vue'
import EachQuestions from '../Views/QuestionPage.vue'
import Cartegory from '../Views/Categories.vue'
// import { defaults } from 'autoprefixer'

 const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path:'/register',
      name:'register',
      component:RegisterPage
    },
    {
      path:'/login',
      name:'login',
      component:LoginPage
    },
    {
      path:'/dashboard',
      name:'dashboard',
      component:dashboard
    },
     {
      path: "/quiz/:id",
      name: "each",
      component:EachQuestions,
    },
  
    {
      path:'/categorie',
      name:'Categories',
      component:Cartegory
    },
    {
      path:'/result',
      name:'result',
      component:Result
    },
  ]
})

export default router
