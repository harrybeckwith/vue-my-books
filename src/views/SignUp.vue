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