<template>
   <dic class="result">
    <p>RESULT...</p>
    <h1>2/5</h1>
   </dic>
</template>

<script setup>
let user = localStorage.getItem('ActiveUser')
if(user === null){
    route.push('/login') 
}
</script>