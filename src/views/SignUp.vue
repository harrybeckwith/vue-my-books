<template>
    <form @submit.prevent="onSignUp">
        <input v-model="email" type="text" palceholder="email">
        <input v-model="password" type="text" palceholder="password">
        <button type="submit">sign up</button>
    </form>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
    },
    watch: {
        user(value) {
            console.log(value);
            if (value !== null && value !== undefined) {
                this.$router.push('/');
            }
        },
    },
    methods: {
        onSignUp() {
            this.$store.dispatch('signUserUp', {
                email: this.email,
                password: this.password,
            });
        },
    },
};
</script>