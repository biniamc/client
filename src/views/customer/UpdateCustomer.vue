<template>
  <v-container id="user-profile" fluid tag="section">
    <!-- <UpdateCustomerDrawer />
    <UpadteCustomerAppBar />
    <UpadteCustomerView />
    <UpadteCustomerSettings /> -->
    <v-row justify="center">
      <v-col cols="12" md="8">
        <base-material-card>
          <template v-slot:heading>
            <div class="text-h3 font-weight-light">Add New Customer</div>
          </template>

          
          
              
                
                  
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                          <v-text-field v-model="user_name" class="purple-input" label="User Name" />
                        </v-col>

                        <v-col cols="12" md="4">
                          <v-text-field v-model="email" label="Email Address" class="purple-input" />
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            v-model="first_name"
                            label="First Name"
                            class="purple-input"
                          />
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field v-model="last_name" label="Last Name" class="purple-input" />
                        </v-col>

                        <v-col cols="12">
                          <v-text-field v-model="address" label="Adress" class="purple-input" />
                        </v-col>

                        <v-col cols="12" md="4">
                          <v-text-field v-model="gender" label="Gender" class="purple-input" />
                        </v-col>

                        <v-col cols="12" md="4">
                          <v-text-field
                            v-model="phone_no"
                            class="purple-input"
                            label="Phone Number"
                            type="number"
                          />
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field label="Password" class="purple-input" />
                        </v-col>
                      </v-row>
                  

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                  </v-card-actions>
                

                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                      <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              
            
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
              <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
          
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  // components: {
  //     UpadteCustomerAppBar: () => import('./components/core/AppBar'),
  //     UpadteCustomerDrawer: () => import('./components/core/Drawer'),
  //     UpadteCustomerSettings: () => import('./components/core/Settings'),
  //     DUpadteCustomerView: () => import('./components/core/View'),
  //   },
  data: () => ({
    dialog: false,
    dialogDelete: false,
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
    ],
    customers: [],
    employees: [],
    editedIndex: -1,
    editedItem: {}
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },

  created() {
    this.initialize();
  },
  mounted() {
    this.fetchCustomers();
    this.fetchEmployees();
  },
  methods: {
    async fetchCustomers() {
      axios({
        method: "put",
        url: "http://localhost:3000/customers"
      });
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>