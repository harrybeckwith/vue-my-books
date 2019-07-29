<template>
    <div>
        Event
        {{ event.categorie }}
           {{ event.title }}
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            event: {},
        };
    },
    created() {
        this.event = this.$store.getters.getEventById(this.id);
    },
};
</script>

<style>
</style>
