import { defineStore} from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => {
    return {
      user: null,
      errors: {}
    }
  },
  actions: {

    async getUser() {
      if (localStorage.getItem("token")) {
        const res = await fetch("/api/user", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          this.user = data;
        }
      }
    },
    
   async authenticate(apiRoute, apiuformData) {
    const res = await fetch(`/api/${register}`, {
      method:'post',
      body:JSON.stringify(formData),
    });
    
    const data = await res.json();
    if (data.errors) {
      this.errors = data.erros
    } else{
      localStorage.setItem('token', data.token)
      this.user = data.user
      this.router.push({ name: "home"})
    }
   }
  }
})