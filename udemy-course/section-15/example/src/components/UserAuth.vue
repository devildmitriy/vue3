<template>
  <button @click="login">Login</button>
  <button @click="logout">Logout</button>
</template>

<script>

import {mapMutations} from 'vuex'
export default {
    methods: {
        ...mapMutations(['login','logout'])
    }

}
</script>

<style>

</style>