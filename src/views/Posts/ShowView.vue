<script setup>
import { onMounted } from 'vue';
import {usePostsStore} from '@/stores/posts'
import { useRoute } from 'vue-router';

const { getAllPosts} = usePostsStore();
const route = useRoute()
const post = ref(null)

onMounted(async() => (post.value = await getAllPosts(route.params.id)))

</script>

<template>
  <main>
    ㅇ
  </main>
</template>