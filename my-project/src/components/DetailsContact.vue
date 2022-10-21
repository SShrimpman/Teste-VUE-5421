<template>
    <div class="flex justify-center">
        <div class="border p-5 w-3/6">
            <div class="flex justify-center py-3 pb-5">
                    <h1 class="text-xl font-medium">
                        Gestão de Contactos    
                    </h1>
                </div>
            <div class="flex justify-end mt-4 gap-2">
                <button class="bg-blue-500 hover:bg-blue-700 w-20 h-8 rounded" @click="editContact">Editar</button>
                <button class="bg-red-500 hover:bg-red-700 w-20 h-8 rounded" @click="deleteContact">Apagar</button>
            </div>
            <form >
                <div class="border my-3 p-4">
                    <h1 class="flex justify-start p-1 mb-3">{{$route.params.fullName}}</h1>
                    <h1 class="flex justify-start p-1 mb-3">{{$route.params.cellphone}}</h1>
                    <h1 class="flex justify-start p-1 mb-3">{{$route.params.email}}</h1>
                    <h1 class="flex justify-start p-1 mb-3">{{$route.params.address}}</h1>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { contactStore } from '../store/contactStore';
export default {
    setup(){
        const contactStoreT = contactStore()
        return { contactStoreT }
    },
    data(){
        updateContact : {}
    },
    methods: {
        editContact(){
            this.updateContact = {
                id : this.$route.params.id,
                fullName : this.$route.params.fullName,
                cellphone : this.$route.params.cellphone,
                email : this.$route.params.email,
                address : this.$route.params.address
            }
            this.$router.push({ name: "Edit", params:{ id: this.updateContact.id, fullName: this.updateContact.fullName, cellphone: this.updateContact.cellphone, email: this.updateContact.email, address: this.updateContact.address }});
        },
        deleteContact() {
            this.contactStoreT.delete(this.$route.params.id)
            this.$router.push({ name: "List" });
        }
    },
}
</script>