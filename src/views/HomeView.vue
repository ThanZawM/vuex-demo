<template>
  <div class="home">
    <PersonListOne :persons="persons"> </PersonListOne>

    <input type="text" name="" id="" v-model="name" /> |
    <input type="text" name="" id="" v-model="city" />
    <button @click="add(name, city)">Add Person</button>
  </div>
</template>

<script>
import PersonListOne from "@/components/PersonListOne.vue";
// import { mapGetters } from 'vuex'

export default {
  name: "HomeView",
  data() {
    return {
      name: "",
      city: "",
    };
  },
  computed: {
    persons() {
      return this.$store.getters.persons;
    },
    // ...mapGetters([
    //   'persons'
    // ])
  },
  components: {
    PersonListOne,
  },
  methods: {
    add(name, city) {
      var payload = { name: name, city: city };
      // this.$store.commit("addPerson", payload);
      this.$store.dispatch("addPerson", payload);
    },
  },
};
</script>
