<template>
  <div>
    <base-card>
      <base-button
        @click="setSelectedTab('stored-resources')"
        :mode="storedButtonstyle"
      >
        Stored Resources
      </base-button>
      <base-button
        @click="setSelectedTab('add-resource')"
        :mode="addButtonStuyle"
      >
        Add Resources
      </base-button>
    </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import BaseCard from '../UI/BaseCard.vue';
import AddResource from './AddResource.vue';
import StoredResources from './StoredResources.vue';
export default {
  components: { BaseCard, AddResource, StoredResources },

  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official guide',
          description: 'The official Vue.js documentation.',
          link: 'https://v3.ru.vuejs.org/'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://www.google.com/'
        }
      ]
    };
  },

  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource
    };
  },

  computed: {
    storedButtonstyle() {
      return this.selectedTab === 'stored-resources' ? '' : 'flat';
    },
    addButtonStuyle() {
      return this.selectedTab === 'add-resource' ? '' : 'flat';
    }
  },

  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      this.storedResources.unshift({
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      });
      this.selectedTab = 'stored-resources';
    },
    removeResource(id){
        const idx = this.storedResources.findIndex(res => res.id === id)
        this.storedResources.splice(idx,1)
        console.log('del',this.storedResources);
    }
  }
};
</script>

<style></style>
