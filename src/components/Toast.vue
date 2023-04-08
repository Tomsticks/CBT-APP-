<script setup>
const {toast} = defineProps(['toast'])
// console.log(toast);
</script>

<template>
   <div class="toast bg-[green] h-[15%] w-[300px]  flex items-center pl-[10px] pb-[5px]   ">
      <!-- <div class="bg-[#fff] h-[100%] w-[100%]  rounded-tl-[10px] rounded-bl-[10px] flex items-center justify-center"> -->
    <p class="toast Text self-center ">{{ toast }}</p>
   </div>
   <!-- </div> -->
</template>

