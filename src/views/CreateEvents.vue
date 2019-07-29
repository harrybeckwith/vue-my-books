<template>
    <div>
        <h3>Create an event </h3>

        {{event.categorie }}

        <form @submit.prevent="createEvent">

            <select v-model="event.categorie">
                <option v-for="cat in categories" :key="cat">
                    {{ cat }}
                </option>
            </select>

            <input  v-model="event.title" type="text" placeholder="title" />

            <button type="submit">
                Create event
            </button>

        </form>
    </div>
</template>

<script>
export default {
    name: 'CreateEvents',
    data() {
        return {
            categories: this.$store.state.categories,
            event: this.createFreshFormData(),
        };
    },
    methods: {
        createEvent() {
            this.$store
                .dispatch('createEvent', this.event)
                .then(() => {
                    this.$router.push({
                        name: 'event',
                        params: { id: this.event.id },
                    });
                    this.event = this.createFreshEventObject();
                })
                .catch(() => {
                    // eslint-disable-next-line no-console
                    console.log('There was a problem creating your event');
                });
        },
        createFreshFormData() {
            const id = Math.floor(Math.random() * 10000000);
            return {
                id,
                cateogrie: '',
                title: '',
            };
        },
    },
};
</script>

<style>
</style>
