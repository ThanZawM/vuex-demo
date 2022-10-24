<template>
  <div class="home">
    <PersonListOne :persons="persons">
    </PersonListOne>
  </div>
</template>

<script>
import PersonListOne from '@/components/PersonListOne.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'HomeView',
  data() {
    return {

    }
  },
  computed: {
    // persons() {
    //   return this.$store.getters.persons

    // }
    ...mapGetters([
      'persons'
    ])
  },
  components: {
    PersonListOne,
  },

}
</script>