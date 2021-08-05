<template>
  <v-container id="dashboard" fluid tag="section">
    <!-- <AdminDrawer />
    <AdminAppBar />
    <AdminView />
    <AdminSettings /> -->
    <v-row>
      <v-col cols="12" md="11">
        <base-material-card class="px-5 py-3">
          <template v-slot:heading>
            <v-tabs v-model="tabs" background-color="transparent" slider-color="white">
              <v-tab class="mr-3">about</v-tab>
              <v-tab>admin</v-tab>
            </v-tabs>
          </template>
        </base-material-card>
      </v-col>
      <div class="text-h4 font-weight-light">
        Add Customers
        <router-link to="/AddCustomer">
          <v-btn class="mx-2" fab dark color="indigo">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </router-link>
      </div>
      <v-col cols="15" md="12">
        <base-material-card color="warning" class="px-5 py-3">
          <template v-slot:heading>
            <div class="text-h3 font-weight-light">customers</div>
          </template>
          <v-card-text>
            <!-- :headers="headers" -->
            <v-data-table :items="customers" :headers="customer_headers">
              <template v-slot:item.actions="{ item }">
               <router-link :to="'edit-customer/'+item._id">
                 <v-icon small class="mr-2" >mdi-pencil</v-icon>
                 </router-link> 
                <v-icon small @click="deleteItem1(item)">mdi-delete</v-icon>
              </template>
            </v-data-table>
          </v-card-text>
        </base-material-card>
      </v-col>
      <div class="text-h4 font-weight-light">
        Add Employees
        <router-link to="/AddEmployee">
          <v-btn class="mx-2" fab dark color="indigo">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </router-link>
      </div>
      <v-col cols="15" md="12">
        <base-material-card color="warning" class="px-5 py-3">
          <template v-slot:heading>
            <div class="text-h3 font-weight-light">Employees</div>
          </template>
          <v-card-text>
            <v-data-table :headers="employee_headers" :items="employees">
              <template v-slot:item.actions="{ item }">
                <router-link :to="'UpdateEmployee/'+item._id">
                <v-icon small class="mr-2">mdi-pencil</v-icon>
                </router-link>
                <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
              </template>
            </v-data-table>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  name: "Admin",
  // components: {
  //     AdminAppBar: () => import('./components/core/AppBar'),
  //     AdminDrawer: () => import('./components/core/Drawer'),
  //     AdminSettings: () => import('./components/core/Settings'),
  //     AdminView: () => import('./components/core/View'),
  //   },
    data() {
    return {
      customers: [],
      employees: [],
      tabs: "",
      editedIndex:-1,
      editItemData:{
        first_name:'',
        last_name:'',
        email:'',
        phone_no:'',
        address:'',
        gender:'',
        user_name:'',
        password:'',
      },
      customer_headers: [
        { text: "Id", value: "_id" },
        { text: "First Name", value: "first_name" },
        { text: "Last Name", value: "last_name" },
        { text: "Email", value: "email" },
        { text: "Phone Number", value: "phone_no" },
        { text: "Address", value: "address" },
        { text: "Gender", value: "gender" },
        { text: "User Name", value: "user_name" },
        { text: "Password", value: "password" },
        { text: "Action", value: "actions", sortable: false }
      ],
      employee_headers: [
        { text: "Id", value: "_id" },
        { text: "Employee Id", value: "emp_id" },
        { text: "First Name", value: "first_name" },
        { text: "Last Name", value: "last_name" },
        { text: "Email", value: "email" },
        { text: "Phone Number", value: "phone_no" },
        { text: "Gender", value: "gender" },
        { text: "Branch", value: "branch" },
        { text: "Department", value: "department" },
        { text: "User Name", value: "user_name" },
        { text: "Password", value: "password" },
        { text: "Action", value: "actions", sortable: false }
      ]
    };
  },
  computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    

  mounted() {
    this.fetchCustomers();
    this.fetchEmployees();
  },
  methods: {
    async fetchCustomers() {
      axios({
        method: "get",
        url: "http://localhost:3000/customers"
      })
        .then(response => {
          this.customers = response.data;
          console.log(this.customers);
        })
        .catch(error => {
          console.error(error);
        });
    },
    fetchEmployees() {
      axios
        .get("http://localhost:3000/employees")
        .then(res => {
          this.employees = res.data;
          console.log(this.employees);
        })
        .catch(error => {
          console.error(error);
        });
    },
    editItem(item){

      this.editedIndex = this.custmers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      
      // axios
      //   .put("http://localhost:3000/customers"),
      
    },
    deleteItem1(item) {
      axios
    .delete(`http://localhost:3000/customer/${item._id}`)
    .then(res => {
      if(res.data.success){
       this.customers = this.customers.filter(customer => customer._id != item._id)
      }
      else{
        console.log('not success')
      }
    })
    .catch(error => {
      console.error(error);
    });
      // console.log(item._id)
      // this.editedIndex = this.customers.indexOf(item);
      // this.editedItem = Object.assign({}, item);
      // this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.customers.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    deleteItem(item) {
      axios
    .delete(`http://localhost:3000/employee/${item._id}`)
    .then(res => {
      if(res.data.success){
       this.employees = this.employees.filter(employee => employee._id != item._id)
      }
      else{
        console.log('not success')
      }
    })
    .catch(error => {
      console.error(error);
    });
      // console.log(item._id)
      // this.editedIndex = this.customers.indexOf(item);
      // this.editedItem = Object.assign({}, item);
      // this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.employees.splice(this.editedIndex, 1);
      this.closeDelete();
    }
  }
};
</script>