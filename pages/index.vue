<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Sign in
      </h1>
      <div class="box">
        <div class="media">
          <div class="media-content">
            <form action="javascript:void(0);">
              <b-field label="Password">
                <b-input
                  v-model="password"
                  type="password"
                  password-reveal
                  expanded
                  rounded
                />
              </b-field>
              <hr />
              <b-button
                type="is-primary"
                native-type="submit"
                @click.stop.prevent="signIn"
              >
                Sign in
              </b-button>
            </form>
          </div>
        </div>
      </div>
      <b-message :active="error !== ''" type="is-danger" has-icon>
        {{ error }}
      </b-message>
    </div>
  </section>
</template>

<script>
export default {
  auth: 'guest',
  data() {
    return {
      password: '',
      error: ''
    }
  },
  methods: {
    async signIn() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            password: this.password
          }
        })
      } catch (e) {
        this.error = e.response.data.message || e.response.data.error.message
        this.loading = false
      }
    }
  }
}
</script>
