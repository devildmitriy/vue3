<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">go to team 2</router-link>
  </section>
</template>

<script scoped>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  props:['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: 'Test',
      members: [
        { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
        { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' }
      ]
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      //this.$route.path
      console.log('loadTeam')
      //const teamId = route.params.teamId;
      const selectedTeam = this.teams.find(item => item.id === teamId);
      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find(user => user.id === member);
        selectedMembers.push(selectedUser);
      }

      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    }
  },
  created() {
    this.loadTeamMembers(this.teamId);
  },
  beforRouterUpdate(to,form ,next) {
    console.log('beforRouterUpdate')
    next();
  },
  watch: {
    teamId(newRoute) {
      this.loadTeamMembers(newRoute);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
