<script setup>
import { reactive } from "vue";

const formData = reactive({
  title:"",
  body:"",
})
</script>

<template>
  <main>
     <h1 class="title">새 글 생성</h1>

     <form @submit.prevent="console.log(formData)" class="w-1/2 mx-auto space-y-6">
      <div>
        <input type="text" placeholder="제목" v-model="formData.title"/>
        <p v-if="errors.title" class="error">{{  errors.title[0] }}</p>
      </div>

      <div>
        <textarea rows="7" placeholder="내용"></textarea>
      </div>

      <button class="primary-btn">생성</button>
     </form>
  </main>
</template>