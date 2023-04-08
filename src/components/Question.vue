<template>
<h1>{{ question.text }}</h1>
<div @click="emitSelOpt(opt.isCorrect)" v-for="opt in question.options" :key="opt.id" class="options flex">
    <h3 class="optlabel">
{{ opt.label }}
    </h3>
    <h2 class="opttext">
        <p>{{ opt.text }} </p>
    </h2>
</div>

</template>


<script setup>

 const {question} = defineProps(['question'])
 const emit = defineEmits(["selectedOpt"])

function emitSelOpt(isCorrect){
emit("selectedOpt", isCorrect)
}


</script>