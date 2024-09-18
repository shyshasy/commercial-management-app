import { createRouter, createWebHistory } from 'vue-route'
import Home from '../views/Home.vue'
import Customer from '../components/Customer.vue'
import Product from '../components/Product.vue'
import Order from '../components/Order.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/customers', component: Customer },
  { path: '/products', component: Product },
  { path: '/orders', component: Order },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
