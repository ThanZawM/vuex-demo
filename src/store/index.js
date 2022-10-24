import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    persons: [
      { name: "mg mg", city: "yangon" },
      { name: "aung aung", city: "mandalay" },
      { name: "hla hla", city: "pyin oo lwin" },
    ],
  },
  getters: {
    persons:(state) => {
      return state.persons.map((p)=>{
        return {name: p.name + "**", city: p.city}
      })  
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
