import  {createRouter , createWebHistory } from 'vue-router'
import CreateContact from '../components/CreateContact.vue'
import DetailsContact from '../components/DetailsContact.vue'
import EditContact from '../components/EditContact.vue'
import List from '../components/List.vue'


const routes = [
    { path: '/', name: 'List', component: List },
    { path: '/create', name: 'Create', component: CreateContact },
    { path:'/details/:id/:fullName/:cellphone/:email/:address', name: 'Details', component: DetailsContact },
    { path:'/edit/:id/:fullName/:cellphone/:email/:address', name: 'Edit', component: EditContact }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router