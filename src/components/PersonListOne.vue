<template>
  <div class="one">
    <h1>Person List One</h1>
    <ul>
        <li v-for="(person, index) in persons" :key="index">
        {{person.name}} -- {{person.city}}
    </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: ['persons']
}
</script>

<style>

</style>