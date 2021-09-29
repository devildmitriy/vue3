<template>
  <router-view v-slot="slotProps">
    <transition name="fade-btn" mode="out-in"> 
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <!-- <div class="container">
    <list-data> </list-data>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCanceled"
      @leave-cancelled="leaveCanceled"
    >
      <p v-if="paraIsVisible">This is only sometimes visible ...</p>
    </transition>
    <button @click="toggleParagraph">Toogle Paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-btn" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">show users</button>
      <button @click="hideUsers" v-else>hide users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div> -->
</template>

<script>
//import ListData from './components/ListData.vue';

export default {
  //components: { ListData },
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null
    };
  },
  methods: {
    leaveCanceled() {
      console.log('leave-canceled');
      clearInterval(this.leaveInterval);
    },
    enterCanceled() {
      console.log('enter-canceled');
      clearInterval(this.enterInterval);
    },
    beforeEnter(el) {
      console.log('beforeEnter');
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('enter');
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    afterEnter() {
      console.log('afterEnter');
    },
    beforeLeave(el) {
      console.log('beforeLeave');
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log('leave');
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave() {
      console.log('afterLeave');
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: all .3s ease-out; */
}

.animate {
  /* transform: translateX(-130px); */
  animation: slide-fade 0.3s ease-out forwards;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

/* .para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.para-enter-active {
  transition: all 1s ease-out;
}
.para-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.para-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.para-leave-active {
  transition: all 1s ease-out;
}
.para-leave-to {
  opacity: 0;
  transform: translateY(-30px);
} */

.fade-btn-enter-from,
.fade-btn-leave-to {
  opacity: 0;
}
.fade-btn-enter-active {
  transition: all 0.3s ease-out;
}
.fade-btn-enter-to,
.fade-btn-leave-from {
  opacity: 1;
}

.fade-btn-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-form {
}
.route-enter-active {
  animation: slide-fade 0.5s ease-out;
}
.route-enter-to {
}

.route-enter-leave {
  animation: slide-fade 0.5s ease-out reverse;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
