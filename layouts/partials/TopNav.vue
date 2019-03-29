<template>
    <div>
        <b-navbar type="dark" variant="info">
            <div class="container">
                <nuxt-link class="navbar-brand" to="/">Nuxt.Js</nuxt-link>
                <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
                <b-navbar-nav v-if="authenticated">
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/dashboard">Dashboard</nuxt-link>
                    </li>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <template v-if="authenticated">
                        <b-nav-item-dropdown>
                            <template slot="button-content">
                                {{user.name}}
                            </template>
                            <b-dropdown-item @click.prevent="signOut">Signout</b-dropdown-item>
                        </b-nav-item-dropdown>
                        
                        <!-- <li class="nav-item">
                            <nuxt-link class="nav-link" to="/auth/login">Logout</nuxt-link>
                        </li> -->
                    </template>
                    <template v-else>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/auth/login">Login</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/auth/register">Register</nuxt-link>
                        </li>
                    </template>
                </b-navbar-nav>
            </div>
        </b-navbar>
    </div>
</template>

<script>
export default {
    methods: {
        signOut() {
            this.$auth.logout();
        }
    }
}
</script>
