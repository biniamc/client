<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
  <!-- <CustomerDrawer />
  <CustomerSettings />
  <CustomerAppBar />
  <CustomerView  /> -->
    <v-row justify="center">
      
      <v-col
        cols="12"
        md="12"
      >
      <base-material-card class="px-5 py-3">
          <template v-slot:heading>
            <v-tabs v-model="tabs" background-color="transparent" slider-color="white">
              <v-tab class="mr-3">
                Complaints
              </v-tab>
              <v-tab class="mr-3" to="">
                Confirmation
              </v-tab>
              <v-tab class="mr-3">
                Status
              </v-tab>
            </v-tabs>
          </template>
      </base-material-card>
        <base-material-card color="warning">
          <template v-slot:heading>
            <div class="text-h3 font-weight-light">
              Fill your Complaint
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    v-model="user_name"
                    label="User Name"
                    class="purple-input"
                  />
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="address"
                    label="Address"
                    class="purple-input"
                    type="address"
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
                <v-col cols="6">
                  <v-text-field
                    v-model="date"
                    label="Date"
                    class="purple-input"
                    type="date"
                  />
                </v-col>

                <v-col 
                cols="50"
                md="11"
                >
                  <v-textarea
                    v-model="description"
                    class="purple-input"
                    label="Fill Your Complaints"
                    value=""
                  />
                </v-col>
                
                <v-col
                  cols="12"
                  class="text-left"
              >
                  <v-btn
                    color="success"
                    class="mr-0"
                  >
                    upload file
                  </v-btn>
                </v-col>

                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    color="success"
                    class="mr-0"
                    @click="registerComplaint" :disabled="!valid"
                  >
                    Register Complaint
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
  //     CustomerAppBar: () => import('./components/core/AppBar'),
  //     CustomerDrawer: () => import('./components/core/Drawer'),
  //     CustomerSettings: () => import('./components/core/Settings'),
  //     CustomerView: () => import('./components/core/View'),
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
      user_name:"",
      phone_no: "",
      // phone_noRules: [
      //   [v => !!v || 'This field is required',
      //   v => /^\d+$/.test(v)||'This field only accept numbers']
      // ],
      address: "",
      date:"",
      description: "",
     
    };
  },
  methods: {
  registerComplaint() {
      //if (this.$refs.form.validate()) {
      let newComplaint = {
        user_name: this.user_name,
        phone_no: this.phone_no,
        address: this.address,
        date: this.date,
        description: this.description,
       
      };
      // console.log("newCustomer", newCustomer);
      axios
        .post("http://localhost:3000/complaints", newComplaint)
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
          this.get('/complaints', (req,res)=>{
            res.render('/')
          })
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
