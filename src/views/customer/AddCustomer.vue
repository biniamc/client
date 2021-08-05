<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
  <!-- <AddCustomerDrawer />
  <AddCustomerAppBar />
  <AddCustomerSettings />
  <AddCustomerView /> -->
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <base-material-card>
          <template v-slot:heading>
            <div class="text-h3 font-weight-light">
              Add New Customer
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="user_name"
                    class="purple-input"
                    label="User Name"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="email"
                    label="Email Address"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="first_name"
                    label="First Name"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="last_name"
                    label="Last Name"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="address"
                    label="Adress"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="gender"
                    label="Gender"
                    class="purple-input"
                  />
                </v-col>
                                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                  v-model="phone_no"
                    class="purple-input"
                    label="Phone Number"
                    type="number"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="password"
                    label="Password"
                    class="purple-input"
                  />
                </v-col>
                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    color="success"
                    class="mr-0"
                    @click="register" :disabled="!valid"
                  >
                    Register
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  // components: {
  //     AddCustomerAppBar: () => import('./components/core/AppBar'),
  //     AddCustomerDrawer: () => import('./components/core/Drawer'),
  //     AddCustomerSettings: () => import('./components/core/Settings'),
  //     AddCustomerView: () => import('./components/core/View'),
  //   },
    data() {
    return {
      drawer: false,
      links: [
        // { icon: "home", text: "Home", route: "/" },
        // {
        //   icon: "person_add",
        //   text: "Create Account",
        //   route: "/create-account",
        // },
        // // { icon: 'recent_actors', text: 'View Users Account', route: '/view_accounts'},
      ],
      valid: true,
      first_name: "",
      // firstnameRules: [
      //   v => !!v || 'Fisrt Name is required',
      //   v => (v && v.length <= 20) || 'Name must be less than 10 characters',
      // ],
      last_name: "",
      // lastnameRules: [
      //   v => !!v || 'Last Name is required',
      //   v => (v && v.length <= 20) || 'Name must be less than 10 characters',
      // ],
      email: "",
      // emailRules: [
      //   v => !!v || 'E-mail is required',
      //   v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      // ],
      phone_no: "",
      // phone_noRules: [
      //   [v => !!v || 'This field is required',
      //   v => /^\d+$/.test(v)||'This field only accept numbers']
      // ],
      address: "",
      gender: "",
      user_name: "",
      // idRules: [
      //   v => !!v || 'ID is required',
      //   v => (v && v.length <= 20) || 'ID must be less than 10 characters',
      // ],

      password: "",
    };
  },
  methods: {
  register() {
      //if (this.$refs.form.validate()) {
      let newCustomer = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone_no: this.phone_no,
        address: this.address,
        gender: this.gender,
        user_name: this.user_name,
        password: this.password,
      };
      // console.log("newCustomer", newCustomer);
      axios
        .post("http://localhost:3000/customers", newCustomer)
        //       return axios({
        //         method: 'post',
        //           data: {

        //       },
        //    url: 'http://localhost:3000/customers',
        //     headers: {
        //        'main-Type': 'application/json',
        //       },
        //     })
        .then(() => {
          this.$swal(
            'Great!',
            'customer added successfully',
            'success',
          ),
          this.get('/customers', (req,res)=>{
            res.render('/')
          })
        .t
          // this.$router.push({ path: "/" });
          this.$refs.form.reset();
        })
        .catch((err) => {
          console.log(err);
        });
      //} // VALIDATION END
      return true;
    },
  },
};
</script>
