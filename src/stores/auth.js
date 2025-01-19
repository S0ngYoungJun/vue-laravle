import { defineStore} from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => {
    return {
      user: 'jon'
    }
  },
  actions: {
   async authenticate(apiRoute, apiuformData) {
    const res = await fetch(`/api/${register}`, {
      method:'post',
      body:JSON.stringify(formData),
    });
    
    const data = await res.json();
    console.log(data);
   }
  }
})