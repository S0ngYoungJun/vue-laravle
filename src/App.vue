<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth';
import { onMounted } from 'vue';

const authStore = useAuthStore();

onMounted(() => {
  authStore.getUser();
})
</script>

<template>
  <header>
    <nav>
        <RouterLink :to="{name: 'home'}" class="nav-link">Home</RouterLink>
        <div>
          <form @submit.prevent="authStore.logout">
            <button class="nav-link">Logout</button>
          </form>
        </div>

        <div v-if="authStore.user" class="flex items-center space-x-6">
        <p class="text-sm text-slate-300">
          Welcome back {{ authStore.user.name }}
        </p>
        <RouterLink :to="{ name: 'create' }" class="nav-link">
          새 글
        </RouterLink>
        <form @submit.prevent="authStore.logout">
          <button class="nav-link">Logout</button>
        </form>
      </div>
      

      <div v-else class="space-x-6">
        <RouterLink :to="{name: 'register'}" class="nav-link">회원가입</RouterLink>
        <RouterLink :to="{name: 'login'}" class="nav-link">로그인</RouterLink> 
      </div>
    </nav>
  </header>

  <RouterView />
</template>


