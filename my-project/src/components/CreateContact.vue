<template>
    <form @submit.prevent="onSubmitHandler($event)">
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
                            <input class="h-7 p-1 m-2" type="text" placeholder="Nome" v-model="addContact.fullname">
                            <input class="h-7 p-1 m-2" type="text" placeholder="Número de Telemóvel" v-model="addContact.cellphone">
                            <input class="h-7 p-1 m-2" type="email" placeholder="Email" v-model="addContact.email">
                            <input class="h-7 p-1 m-2" type="text" placeholder="Morada" v-model="addContact.address">
                        </div>
                        <div class="flex justify-end items-end gap-2">
                            <button type="reset" class="bg-red-500 hover:bg-red-700 text-white w-20 h-8 rounded" @click="cancel">Cancelar</button>
                            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white w-20 h-8 rounded">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import addContact  from '../models/addContact'
import {contactStore} from '../store/contactStore';

export default {
    setup(){
        const contactStoreT = contactStore()
        return {contactStoreT}
    },
    data() {
        return {
            addContact: new addContact(),
        };
    },
    computed:{
        getContacts(){
            return this.contactStoreT.getContacts;
        }
    },
    methods: {
        onSubmitHandler(e){
                if(this.addContact.id){
                    this.contactStoreT.update(this.addContact)
                    this.$router.push({ name: "List" });
                }
                else{
                    this.contactStoreT.add(this.addContact)
                    this.$router.push({ name: "List" });
                }
        },
        cancel() {
            this.$router.push({ name: "List" });
        }
    },
}
</script>