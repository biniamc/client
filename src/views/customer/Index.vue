<template>
  <v-app>
    
    <dashboard-core-app-bar />
    <dashboard-core-drawer />

    <!-- <dashboard-core-view /> -->
      <v-content>
        <router-view />
      </v-content>
    <dashboard-core-footer />
    <dashboard-core-settings />
  </v-app>
</template>

<script>
  export default {
    name: 'CustomerIndex',
    components: {
      DashboardCoreAppBar: () => import('./components/core/AppBar'),
      DashboardCoreDrawer: () => import('./components/core/Drawer'),
      DashboardCoreSettings: () => import('./components/core/Settings'),
      DashboardCoreView: () => import('./components/core/View'),
      DashboardCoreFooter: () => import('./components/core/Footer'),
    },

    data: () => ({
      expandOnHover: false,
    }),
  }
</script>
