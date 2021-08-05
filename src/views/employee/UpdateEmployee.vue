<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
  <!-- <UpdateEmployeeDrawer />
  <UpdateEmployeeAppBar />
  <UpdateEmployeeView />
  <UpdateEmployeeSettings /> -->
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <base-material-card>
          <template v-slot:heading>
            <div class="text-h3 font-weight-light">
              Update Employee Information
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
                    v-model="emp_id"
                    class="purple_input"
                    label="Employee Id"
                  />
                </v-col>
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
                    v-model="branch"
                    label="Branch"
                    class="purple-input"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="department"
                    label="Department"
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
                    @click="updateEmployee" :disabled="!valid"
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
  //     UpdateEmployeeAppBar: () => import('./components/core/AppBar'),
  //     UpdateEmployeeDrawer: () => import('./components/core/Drawer'),
  //     UpdateEmployeeSettings: () => import('./components/core/Settings'),
  //     UpdateEmployeeView: () => import('./components/core/View'),
  //   },
  data() {
    return {
      valid: true,
      emp_id:"",
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
      gender: "",
      branch: "",
      department: "",
      user_name: "",
      // idRules: [
      //   v => !!v || 'ID is required',
      //   v => (v && v.length <= 20) || 'ID must be less than 10 characters',
      // ],

      password: "",
    };
  },
  created(){
        let id = this.$route.params.id
        axios.get(`http://localhost:3000/employee/${id}`)
            .then(resp =>{
                let data= resp.data
                this.emp_id= data.emp_id
                this.first_name = data.first_name
                this.last_name = data.last_name
                this.email = data.email
                this.phone_no = data.phone_no;
                this.branch = data.branch;
                this.department = data.department;
                this.gender = data.gender;
                this.user_name = data.user_name;
                this.password = data.password;
            })
    },
    
  methods: {
  updateEmployee() {
      // if (this.$refs.form.validate()) {
      let newEmployee = {
        emp_id: this.emp_id,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone_no: this.phone_no,
        branch: this.branch,
        department: this.department,
        gender: this.gender,
        user_name: this.user_name,
        password: this.password,
      };
console.log("newEmployee", newEmployee);
      axios
        .put(`http://localhost:3000/employee/${this.$route.params.id}`, newEmployee)
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