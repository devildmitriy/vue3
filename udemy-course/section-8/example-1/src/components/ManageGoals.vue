<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" placeholder="name" ref="goal" />
    <button @click="setGoal">set goal</button>
    <teleport to="body">
      <error-alert v-if="inputIsInvalid">
        <h2>error</h2>
        <button @click="confirmError">Okay</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: { ErrorAlert },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const eneredValue = this.$refs.goal.value;
      if (eneredValue === "") {
        this.inputIsInvalid = true;
        //    alert('')
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
