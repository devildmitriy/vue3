<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <base-button mode="flat" @click="removeResource(this.id)">Delete</base-button>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link">View Recource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ['title', 'description', 'link', 'id'],
  inject:['removeResource'],
  methods: {
    // remove() {
    //   console.log('del');
    //   this.removeResource(this.id)
    // }
  }
  
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
