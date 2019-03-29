<template>
    <div class="container">
      <div class="col-md-6 offset-md-3">
          <div class="card mt-4">
              <div class="card-header">
                  <center><p class="mb-0">Login</p></center>
              </div>
              <div class="card-body">
       
                  <form @submit.prevent="login">
                      <div class="form-group">
                          <label>Email</label>
                          <input v-model="form.email" type="text" class="form-control" :class="{ 'is-invalid' : errors.email}"  placeholder="Email">
                          <div class="invalid-feedback" v-if="errors.email">
                              {{errors.email[0]}}
                          </div>
                      </div>
                      <div class="form-group">
                          <label>Password</label>
                          <input v-model="form.password" type="password" class="form-control" :class="{ 'is-invalid' : errors.password}" placeholder="Password">
                          <div class="invalid-feedback" v-if="errors.password">
                              {{errors.password[0]}}
                          </div>
                      </div>
                      <div class="form-group">
                          <input type="submit" value="Login" class="btn btn-info w-100">
                      </div>
                  </form>
              </div>

          </div>

      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                password: '',
            }
        }
    },

    methods: {
        login() {
            this.$axios.$post('/auth/login', this.form)
            .then(data => {
                this.$auth.login({data: this.form});
                    console.log(data);
                })
                .catch(err => {
                    console.log(err)
            })
        }
    }
}
</script>

