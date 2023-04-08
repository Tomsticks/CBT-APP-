<template>
  {{ status }}
<p v-if="wait">Please Wait..........</p>

<Question :question="quiz.questions[current]" @selected-opt="theOptSel"/>
<button @click="current--" > previous</button>
{{ correctanswer }}
</template>

<script setup>
import Question from '../components/Question.vue'
import { useRoute , useRouter} from 'vue-router';
import { ref , watch , computed} from 'vue';
import data from '../Data/Javascript.json'
const route = useRoute()
const quizId = parseInt(route.params.id)
const current = ref(0)
const quiz = data.find(item => item.id === quizId)
const correctanswer = ref(0)
const router = useRouter()
const wait = ref(false)
// const status = ref(`${current.value}/${quiz.questions.length}`)

// watch(()=> current.value , function(){
//  status.value =`${current.value}/${quiz.questions.length}`
 
// }) 
let user = localStorage.getItem('ActiveUser')
if(user === null){
    route.push('/login') 
}
const status = computed(()=>{
  return `${current.value}/${quiz.questions.length}`
})

function theOptSel(isCorrect){
// console.log('emited ', isCorrect);
if(isCorrect === true){
  correctanswer.value++

}
if(quiz.questions.length - 1 === current.value){
wait.value = true

  setTimeout(() => {
router.push('/result')

  }, 3000);
}
current.value++


}

</script>