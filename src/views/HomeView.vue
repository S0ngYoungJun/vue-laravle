<script setup>
import {onMounted, ref} from 'vue'
import {usePostsStore} from "@/stores/posts"
import { RouterLink} from 'vue-router';

const {getAllPosts} = usePostsStore();

const posts = ref([]);

onMounted(async () => (posts.value = await getAllPosts()));
</script>

<template>
  <main>
    <h1 class="title">최신 글</h1>

    <div v-if="posts.length>0">
       <div v-for="post in posts" 
       :key="post.id" 
       class="border-l-4 border-blue-300 pl-4 mb-12"
       >
        <h2 class="font-bold text-3xl">{{ post.title }}</h2>
        <p class="text-xs text-slate-600 mb-4">
          {{ post.user.name }} 에 의해 게시된
        </p>
        <p>
          {{ post.body }}
          <RouterLink
           :to="{ name: 'show', params: { id: post.id}}"
           class="text-blue-400 font-bold underline"
           >더 보기.....
          </RouterLink>
        </p>
       </div>
    </div>

    <div v-else>
      <h2 class="title">없음</h2>
    </div>
  </main>
</template>
