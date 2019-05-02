<template>
  <d-container fluid>
    <d-row>
      <!-- Main Sidebar -->
      <main-sidebar :items="sidebarItems" />

      <d-col class="main-content offset-lg-2 offset-md-3 p-0" tag="main" lg="10" md="9" sm="12">

        <!-- Main Navbar -->
        <main-navbar />

        <!-- Content -->
        <slot />

        <!-- Main Footer -->
        <main-footer />
      </d-col>

    </d-row>
  </d-container>
</template>

<script>
import getSidebarItems from '@/data/sidebar-nav-items';

// Main layout components
import basicFunction from '@/basicFunction';
import graphqlFunction from '@/graphqlFunction';
import address from '@/address';
import MainNavbar from '@/components/layout/MainNavbar/MainNavbar.vue';
import MainSidebar from '@/components/layout/MainSidebar/MainSidebar.vue';
import MainFooter from '@/components/layout/MainFooter/MainFooter.vue';

export default {
  name: 'default',
  components: {
    MainNavbar,
    MainSidebar,
    MainFooter,
  },
  data() {
    return {
      sidebarItems: getSidebarItems(),
    };
  },

  created: function()
  {
      this.fetchPlugin();
  },

  methods: {
    fetchPlugin() {
      this.axios.get(address + ":3000/get-plugin").then((response) => {
        let query = `query getAllPlugin {
          plugins {
            name
            status
          }
        }`;
        graphqlFunction.graphqlFetchAll(query, (result) => {
          var temp = {
            title: 'Plugin',
            items: [],
          }
          for(var i = 0; i < result.plugins.length; i++) {
            temp.items.push({
              title: basicFunction.capitalize(result.plugins[i].name),
              htmlBefore: '<i class="material-icons">vertical_split</i>',
              to: {
                name: result.plugins[i].name,
              },
            });
          }
          this.sidebarItems.push(temp);
        });
      });
    },
  }
};
</script>

