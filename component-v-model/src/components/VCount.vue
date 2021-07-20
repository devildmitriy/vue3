<template>
  <button @click="add">увеличить счетчик</button>
</template>

<script>
export default {
    emit:['add'],
    methods: {
        add(e){
            console.log('btn',e.target)
            this.$emit('add','param1',2)
        }
    }

}
</script>

<style>

</style>