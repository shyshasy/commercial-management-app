import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Customer from '../components/Customer.vue'
import Product from '../components/Product.vue'
import Order from '../components/Order.vue'
import OrderDetail from '../components/OrderDetail.vue'
import OrdersList from '../components/OrderList.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/customers', component: Customer },
  { path: '/products', component: Product },
  { path: '/OrderList', component: OrdersList },
  { path: '/orders', component: Order },
  { path: '/orders/:id', name: 'OrderDetail', component: OrderDetail, props: true },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
