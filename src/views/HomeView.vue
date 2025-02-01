<script setup>
import {onMounted} from 'vue'
import {usePostsStore} from "@/stores/posts"

const {getAllPosts} = usePostsStore();
const posts = ref([])
onMounted(async () => posts.value = await getAllPosts());
</script>

<template>
  <main>
    <h1 class="title">최신 글</h1>

    <div v-if="posts.length" > 0">
       <div v-for="post in posts" : key="post.id">
        <h2>{{ post.title }}</h2>
       </div>
    </div>
  </main>
</template>
