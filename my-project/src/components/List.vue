<template>
    <div class="flex justify-center">
        <div class="border p-5 w-3/6">
                <div class="flex justify-end gap-2">
                    <button class="border bg-blue-500 hover:bg-blue-700 w-24 p-1 rounded" @click="create">Create</button>
                </div>
            <div class="border my-3 p-4">
                    <div v-for="(item) in getContacts" class="grid grid-cols-2 m-2">
                        <div class="flex flex-start m-2">
                            <h1>{{item.fullname}}</h1>
                        </div>
                        <div class="flex justify-end">
                            <button class="border bg-blue-500 hover:bg-blue-700 w-24 p-1 rounded" @click="details(item)">Details</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia';
import { contactStore } from '../store/contactStore'
export default {
    setup(){
        const contactStoreT = contactStore()
        return {contactStoreT}
    },
    data() {
        return {
            count : 0,
            option : null,
        };
    },
    computed:{
        ...mapState(contactStore,['getContacts','getCount']),
    },
    methods: {
        create() {
            this.$router.push({ name: "Create" });
        },
        // selected(idx){
        //     this.count = idx = 1
        // },
        details(item) {
            this.$router.push({ name: "Details", params:{ id: item.id, fullName:item.fullName, cellphone:item.cellphone, email:item.email, address:item.address }});
        },
    },
}
</script>