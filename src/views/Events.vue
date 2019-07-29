<template>
    <div class="events">
        <div v-for ="(item, i) in events" :key="item.id" class="events__event" > 
            <p> Cateogrie: {{ item.categorie }} </p>
            <p> Title: {{ item.title }} </p>
             <button @click="goToEvent(item.id)"> See event </button>
            <button @click="deleteItem(i)">Delete {{i }}</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['events']),
    },
    methods: {
        goToEvent(eventId) {
            this.$router.push({
                name: 'event',
                params: { id: eventId },
            });
        },
        deleteItem(i) {
            this.$store.dispatch('removeEvent', i);
        },
    },
};
</script>

<style lang="scss" scoped>
.events {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    &__event {
        border: 1px solid black;
        padding: 5px;
    }
}
</style>
