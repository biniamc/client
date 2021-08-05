<template>
  <v-app>
    
     <dashboard-core-app-bar />

    <Dashboard-Core-Drawer />

    <!-- <dashboard-core-view /> -->
     <v-content>
      <router-view />
    </v-content>

    <dashboard-core-settings />
    <dashboard-core-footer />
  </v-app>
</template>

<script>
  export default {
    name: 'AdminIndexDashboard',

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
