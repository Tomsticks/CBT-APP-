<template>
    <!-- <Toast :toast="toast" class="absolute right-[60px] mt-[10px]" /> -->
    <div  class=" main h-[100vh] flex  gap-[20px] overflow-x-hidden items-center justify-center sm:justify-start ">
        <!-- <Header class="   w-[100%]  items-center bg-[black] sm:hidden"/> -->
  <form @submit.prevent="submit"
  class="flex self-center  h-[90vh] bg-[#fff] border rounded-lg  flex-col w-[600px] items-center 
  gap-[40px] xl:w-[70%] sm:w-[100%] sm:border-none">
    <h1 class=" self-center font-serif text-[30px] sm:self-start">Create an Account</h1>

    <div class="inputs flex flex-col mt-[3vh] gap-[40px] w-[90%]  ">
    <div class="divin flex border  ">
        <svg class="h-[5vh]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
</svg>
    <input  placeholder="Fullname" class="in " type="text" v-model="fullname" id="fullname" />
    <p v-if="false">This field is Required</p>
</div>
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
<select  required class="bg-[#F2F5FB] py-[10px] w-[100%] outline-none" name="" id="">
    <option class="outline-none" value="" disabled selected >Gender</option>
    <option class="outline-none" value="">Male</option>
    <option class="outline-none" value="">Female</option>
</select>
</div>
  
    <button @click="Register" class="border w-[50%] self-center py-[15px] bg-[#D85425] rounded-[50px] shadow-xl text-white ">{{ Process }}</button>
    <div class="comment  flex gap-1 justify-center items-center border-black w-[100%]">
        <p>Already Have an account:</p><router-link class=" text-[#030e4f] font-bold " to="/login"> Sign In</router-link>

    </div>
  </form>
  </div>
  
</template>

<script setup>
import Toast from '@/components/Toast.vue'
import {ref} from 'vue'
import Header from '@/components/Header.vue'
import {reactive} from 'vue'
import {authfunc, crud} from '@/services/index.js'
import { async } from '@firebase/util';
import { useRouter } from 'vue-router';
const router = useRouter()
const password = ref('')
const email = ref('')
const fullname = ref('')
const toast = ref('')
toast.value= 'determined'
const form = reactive({
    email:'',
    password:'',
    fullname:''
})
let userid = localStorage.getItem("ActiveUser") || ""
let Process = ref('')
Process.value = 'Proceed'
const submit = async ()=>{
Process.value = 'Please Wait . . . .'


    try {
        const response = await authfunc.signup(email.value, password.value)
        const userid = response.user.uid
        const users = {
    fullname:fullname.value,
    email:email.value,
    password:password.value,
    userId:userid
}
const userName = users.fullname

        crud.addDocWithId('users', userName, users)
        router.push('/login')
        alert('account created')
        } catch (error) {
        console.log(error);
        alert('check')
    
    }
}


</script>

<style scoped>
.main{
    background-image:   linear-gradient(rgba(0, 0, 0, 0.375), rgba(0, 0, 0, 0.589)), url(../image/RegPage.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
@media(max-width:639px){
   .main{
    background: none
   }
}
@media(max-height:584px){
    form{
        height: 100%;
    }
}
</style>