<template>
   <div style="background-image: url(../Image/Backgroud.jfif) ; background-position: fixed;" 
   class="main  h-[100vh] flex flex-col  ">
<Header class=" self-center"/>
<Hero/>
   </div>
   
</template>

<script setup>
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import Footer from '../components/Footer.vue'
</script>