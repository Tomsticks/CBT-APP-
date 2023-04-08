<template>
    <main class="bg-[#0B65C6]">
    <Header/>
<div class="body">
<h1 class="text-[50px]">Dashboard</h1>
<h2 class="text-[40px] text-[red]" @click="questions">QUESTION</h2>

<button @click="logOut" class="border border-black">SIGN OUT</button>
</div>
</main>
</template>

<script setup>
import {ref} from 'vue'
import {reactive} from 'vue'
import { doc, getDoc,collection } from "firebase/firestore";
import {authfunc, crud,db} from '@/services/index.js'
import { useRouter } from "vue-router";
import Header from '@/components/Dashboard/Head.vue'
import { async } from '@firebase/util';
import {onMounted} from 'vue'

const route = useRouter();
let user = localStorage.getItem('ActiveUser')
if(user === null){
    route.push('/login') 
}
const logOut = function(){
    authfunc.signout()
    // window.location.reload()d
route.push('/')
localStorage.removeItem('ActiveUser')
}

function questions(){
    route.push('/categorie') 
}
 const userId = localStorage.getItem('ActiveUser')
 console.log(userId);

 onMounted(async () => {
    const data =   await crud.getSingleDoc('users',userId )
 console.log(data);

        });
    
 




</script>