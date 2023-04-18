<template>
  <div>
  <base-card>
    <base-button :mode="storedResourcesMode" @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
    <base-button :mode="addResourceMode" @click="setSelectedTab('add-resource')">Add Resource</base-button>
  </base-card>
  <component :is="selectedTab"></component>
</div>
</template>

<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'
export default {
  components:{
    StoredResources,
    AddResource
  },
  data(){
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {id: 'offocial-guide', title: 'Official Guide', description: 'The official Vue.js documentation.', link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org'
        }
      ]
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      AddResource: this.AddResource,
      deleteResource: this.removeResource
    }
  },
  computed: {
    storedResourcesMode(){
      return this.selectedTab === 'stored-resources' ? null : 'flat'
    },
    addResourceMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat'
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    },
    AddResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      }
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources'
    },
    removeResource(resId) {
      const resIndex = this.storedResources.findIndex(res => res.id === resId)
      this.storedResources.splice(resIndex, 1)
    }
  }
}
</script>