<script setup>  
import { useRouter } from 'vue-router';

const {quiz} = defineProps(['quiz'])
const router = useRouter( )

function navigate(){
    router.push(`/quiz/${quiz.id}`)
}
</script>

 <template>
 <div @click="navigate" class="Card">
    <img :src="quiz.img" alt="Qeust img">
    <div class="text">  
        <h1>{{quiz.name}}</h1>
        <p>{{ quiz.questions.length }}</p>
    </div>
</div>
</template>

