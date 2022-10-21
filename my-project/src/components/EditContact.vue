<template>
    <form>
        <div class="flex justify-center">
            <div class="border py-5 w-3/6">
                <div class="flex justify-center py-3 pb-16">
                    <h1 class="text-xl font-medium">
                        Gestão de Contactos    
                    </h1>
                </div>
                <div class="flex justify-center h-48">
                    <div class="grid grid-cols-2 border p-2 w-5/6">
                        <div class="grid content-start">
                            <input class="h-7 p-1 m-2" type="text" placeholder="Nome" v-model="$route.params.fullName">
                            <input class="h-7 p-1 m-2" type="text" placeholder="Número de Telemóvel" v-model="$route.params.cellphone">
                            <input class="h-7 p-1 m-2" type="email" placeholder="Email" v-model="$route.params.email">
                            <input class="h-7 p-1 m-2" type="text" placeholder="Morada" v-model="$route.params.address">
                        </div>
                        <div class="flex justify-end items-end gap-2">
                            <button type="reset" class="bg-red-500 hover:bg-red-700 text-white w-20 h-8 rounded" @click="cancel">Cancelar</button>
                            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white w-20 h-8 rounded" @click="editContact">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import {contactStore} from '../store/contactStore';

export default {
    setup(){
        const contactStoreT = contactStore()
        return {contactStoreT}
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
            this.contactStoreT.update(this.updateContact)
            this.$router.push({ name: "List" });
        },
        cancel() {
            this.$router.push({ name: "List" });
        }
    },
}
</script>