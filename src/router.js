import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name:'home',
      component: () => import('@/views/Home'),

    },
    {
      path: '/admin',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Admin',
          path: '',
          component: () => import('@/views/dashboard/Admin'),
        },
        
        // Pages
       
        {
          name: 'Complaints',
          path: '/Complaints/:id',
          component: () => import('@/views/complaints/Complaints'),
        },
       
        
        // {
        //   name: 'UpdateCustomer',
        //   path: '/UpdateCustomer',
        //   component: () => import('@/views/customer/UpdateCustomer'),
        // },
        {
          name: 'Employee',
          path: '/Employee',
          component: () => import('@/views/employee/Employee'),
        },
        {
          name: 'AddEmployee',
          path: '/AddEmployee',
          component: () => import('@/views/employee/AddEmployee'),
        },
        {
          name: 'UpdateEmployee',
          path: '/UpdateEmployee/:id',
          component: () => import('@/views/employee/UpdateEmployee'),
        },
        
        {
          name: 'AddCustomer',
          path: '/AddCustomer',
          component: () => import('@/views/customer/AddCustomer'),
        },
        {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        {
          name: 'Login',
          path: '/Login',
          component: () => import('@/views/login/Login'),
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },
        
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables'),
        },
        {
          name: 'editCustomer',
          path: 'edit-customer/:id',
          component: () => import('@/views/customer/EditCustomer'),
        },
        
      ],
    },
    {
      path: '/customer',
      name: 'Customer',
      component: () => import('@/views/customer/Index'),
      children: [
        {
          path: '/',
          name: 'ComplaintPage',
          component: () => import('@/views/customer/ComplaintPage'),
        },
        {
          path: '/customer-profile',
          name: 'User Profile',
          component: () => import('@/views/customer/pages/UserProfile'),
        },
      ]
    },
    {
      
        name: 'Manager',
        path: '/manager',
        component: () => import('@/views/manager/Index'),
      children: [
        {
          path: '/',
          name: 'manger',
          component: () => import('@/views/manager/Manager'),
        },
        {
          name: 'Warning',
          path: '/Warning',
          component: () => import('@/views/manager/Warning'),
        },
      ]
    },
    {
      name: 'Assistance',
      path: '/Assistance',
      component: () => import('@/views/assistance/Index'),
      children:[
        {
        name: 'Assistance',
        path: '/',
      component: () => import('@/views/assistance/Assistance'),
        },
      ]
    },
    {
      name: 'Customer_Service',
      path: '/Customer_Service',
      component: () => import('@/views/customer_service/Index'),
      children:[
        {
        name: 'Customer_Service',
        path: '/',
      component: () => import('@/views/customer_service/Customer_Service'),
        },
      ]
    },
    {
      name: 'Operation_Maintenance',
      path: '/Operation_Maintenance',
      component: () => import('@/views/Operation_Maintenance/Index'),
      children:[
        {
        name: 'Operation_Maintenance',
        path: '/',
      component: () => import('@/views/Operation_Maintenance/Operation_Maintenance'),
        },
      ]
    },
    
  ],
})
