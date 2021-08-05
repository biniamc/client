<template>
  <v-app>
    <dashboard-core-app-bar />

    <dashboard-core-drawer />

    <v-content>
        <router-view />
      <dashboard-core-footer />
  </v-content>

    <dashboard-core-settings />
  </v-app>
</template>

<script>
  export default {
    name: 'AssistanceIndex',

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
