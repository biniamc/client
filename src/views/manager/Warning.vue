<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
  <!-- <WarningAppBar />
  <WarningDrawer />
  <WarningView />
  <WarningSettings /> -->
    <v-row justify="center">
      
      <v-col
        cols="12"
        md="8"
      >
        <base-material-card>
          <template v-slot:heading>
            <div class="text-h3 font-weight-light">
              send warning 
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    v-model="emp_id"
                    label="Employee Id"
                    class="purple-input"
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
                    label="massages"
                    value=""
                  />
                </v-col>
                
                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    color="success"
                    class="mr-0"
                    @click="sendWarning" :disabled="!valid"
                  >
                    Send Warning
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
  //     WarningAppBar: () => import('./components/core/AppBar'),
  //     WarningDrawer: () => import('./components/core/Drawer'),
  //     WarningSettings: () => import('./components/core/Settings'),
  //     WarningView: () => import('./components/core/View'),
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
      emp_id:"",
      date:"",
      description: "",
     
    };
  },
  methods: {
  sendWarning() {
      //if (this.$refs.form.validate()) {
      let newWarning = {
        emp_id: this.emp_id,
        date: this.date,
        description: this.description,
       
      };
      // console.log("newCustomer", newCustomer);
      axios
        .post("http://localhost:3000/warnings", newWarning)
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
          this.get('/warnings', (req,res)=>{
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
