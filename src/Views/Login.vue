<template>
    
    <div  class=" main h-[100vh] flex  gap-[20px] overflow-x-hidden items-center justify-center sm:justify-start ">
        <!-- <Header class="   w-[100%]  items-center bg-[black] sm:hidden"/> -->
  <form @submit.prevent="login"
  class="flex self-center  h-[90vh] bg-[#fff] border rounded-lg  flex-col w-[600px] items-center 
  gap-[40px] xl:w-[70%] sm:w-[100%] sm:border-none">
    <h1 class=" self-center font-serif text-[30px] sm:w-[90%] sm:pl-[20px] sm:self-start">Create an Account</h1>

    <div class="inputs flex flex-col mt-[3vh] gap-[40px] w-[90%]  ">
   
    <div class="divin flex">
        <svg class="h-[5vh]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
</svg>
    <input placeholder="Email" class="in" type="email" v-model="email" id="email" />
</div>
    <div class="divin flex">
        <svg class="h-[5vh]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path>
</svg>
    <input placeholder="Password" v-model="password"
    class=" in" type="Password" id="password" />
    <!-- <i class="fas border-[black] px-[10px] " :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i> -->
</div>

</div>
  
    <button @click="Register" class="border w-[50%] self-center py-[15px] bg-[#D85425] rounded-[50px] shadow-xl text-white ">{{ button }}</button>
    <div class="comment  flex gap-1 justify-center items-center border-black w-[100%]">
        <p>Already Have an account:</p><router-link class=" text-[#030e4f] font-bold " to="/register"> Sign Up</router-link>

    </div>
  </form>
  </div>
</template>
<script setup>
import Header from '../components/Header.vue'   
import dashboard from './Dashboard.vue'
import {reactive, ref} from 'vue'
import {authfunc, crud} from '@/services/index.js'
import { useRouter } from "vue-router";
const route = useRouter();
const button = ref('LOGIN')
const determine = ref(false)
const email = ref('')
const password = ref('')
const form = reactive({
    email:'',
    password:''
})

const login = async()=>{
    button.value ='Please Wait . . . . '
    try {
       const res = await authfunc.login(email.value, password.value) 
   const userid = res.user.uid;
   localStorage.setItem('ActiveUser', userid)
   alert('welcom user')
      route.push('/dashboard')
    } catch (error) {
        console.log(error);
        if(error.code == 'auth/user-disabled'){
        alert('disabled')
    }else if(error.code == 'auth/invalid-email' || 'auth/wrong-password'){
alert('invalid userName/Password')
    }
    
    }

    

}


</script>