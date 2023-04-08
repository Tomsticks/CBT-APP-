<template>
    <div class="head bg-[#00000050] mt-[10px] flex items-center justify-between
     px-[20px] text-[white] shadow-xl w-[90%] sm: ">

<div class="img">
    <img class="h-[10vh] " :src="image.img" alt="">
</div>
<!-- <div class="search">
    <input class="
    border py-[10px] px-[30px] rounded-[30px] outline-none placeholder:text-[black]
    " placeholder="Search" type="text">
</div> -->
<div class="links flex justify-between text-[22px] w-[40vw] md:justify-evenly md:w-[60px]">
    <svg @click="toggle" class="h-10 w-[30px] hidden md:block "  fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
</svg>
    <div class="navlinks links flex justify-between text-[22px] w-[40vw] md:hidden">
    <router-link active-class="clicked" to="/">Home</router-link> 
    <router-link active-class="clicked" to="/register">Register</router-link>
    <router-link active-class="clicked" to="/login">Login</router-link>
    <router-link to="/:id" active-class="clicked">Contact</router-link>
</div>
    <div v-if="det" class="anim absolute bg-[#31056eaf] text-[] md:flex flex-col h-[95vh]text-justify 
     left-[0] top-0 hidden cursor-pointer w-[400px] gap-[4em] h-[100%] pt-[5vh] text-[25px] border-b  sm:w-[100%]">
     <!-- <img :src="image.img" alt=""> -->
     <!-- <img class="h-[10vh] " src="../assets/images/logo-white-removebg-preview.png" alt=""> -->
    <router-link active-class="clicked" to="/">Home</router-link> 
    <router-link active-class="clicked" to="/register">Register</router-link>
    <router-link active-class="clicked" to="/login">Login</router-link>
    <router-link to="/:id" active-class="clicked">Contact</router-link>
</div>
</div>

    </div>
</template>

<script setup>
import {ref} from 'vue'
let image = {
    img:"https://cdn.logo.com/hotlink-ok/logo-social.png"
}

const det = ref(false)
function toggle(){
    det.value = !det.value
}
</script>       
<style>
.clicked{
   border-bottom: 1px solid red;
}
.anim{
    animation: slide .5s forwards;
    background-color: red;
}
@keyframes slide{
100%{
    right: 100%;
}
}
</style>