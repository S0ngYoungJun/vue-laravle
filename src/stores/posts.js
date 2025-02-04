import { defineStore } from "pinia";

export const useAuthStore = defineStore("postsStore", {
  state: () => {
    return {
      errors: {},
    };
  },
  actions: {

    async getAllPosts(post){
      const res = await fetch(`/api/posts/${post}`);
      const data = await res.json();

      console.log(data);
      return data;
    },
    
    async createPost(formData) {
      const res = await fetch("/api/posts", {
        method: "post",
        headers: {
         Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.errors) {
        this.errors = data.errors;
      } else {
        this.router.push({ name: "home"});
      }
    },
   
  
  },
});