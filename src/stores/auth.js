import { defineStore} from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => {
    return {
      user: null,
      errors: {}
    }
  },
  actions: {
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
    }
   }
  }
})