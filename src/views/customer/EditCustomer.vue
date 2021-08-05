<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
  <!-- <EditCustomerDrawer />
  <EditCustomerAppBar />
  <EditCustomerSettings />
  <EditCustomerView /> -->
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <base-material-card>
          <template v-slot:heading>
            <div class="text-h3 font-weight-light">
             Edit Customer
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
                    @click="update"
                  >
                    Update
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
  //     EditCustomerAppBar: () => import('./components/core/AppBar'),
  //     EditCustomerDrawer: () => import('./components/core/Drawer'),
  //     eEditCustomerSettings: () => import('./components/core/Settings'),
  //     EditCustomerView: () => import('./components/core/View'),
  //   },
    data(){
        return{

        first_name: "",

        last_name: "",

        email: "",

        phone_no: "",

        address: "",
        gender: "",
        user_name: "",

        password: "",
        }
    },
    created(){
        let id = this.$route.params.id
        axios.get(`http://localhost:3000/customer/${id}`)
            .then(resp =>{
                let data= resp.data
                this.first_name = data.first_name
                this.last_name = data.last_name
                this.email = data.email
                this.phone_no = data.phone_no;
                this.address = data.address;
                this.gender = data.gender;
                this.user_name = data.user_name;
                this.password = data.password;
            })
    },
    methods: {
  update() {
      
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
        .put(`http://localhost:3000/customer/${this.$route.params.id}`, newCustomer)
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
        //   this.$swal(
        //     'Great!',
        //     'customer added successfully',
        //     'success',
        //   ),
        //   this.get('/customers', (req,res)=>{
        //     res.render('/')
        //   })
        // .t
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
}
</script>