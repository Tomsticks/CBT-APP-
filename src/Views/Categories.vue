<template>
 <Card v-for="quiz in data" :key="quiz.id" :quiz="quiz"/>

</template>
<script setup>
import data from '../Data/Javascript.json'
import Card from '../components/Cardquestion.vue'
let user = localStorage.getItem('ActiveUser')
if(user === null){
    route.push('/login') 
}
</script>