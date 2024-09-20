import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Customer from '../components/Customer.vue'
import Product from '../components/Product.vue'
import Order from '../components/Order.vue'
import OrderDetail from '../components/OrderDetail.vue'
import Payment from '../components/Payment.vue'  // Importer le composant Payment
import OrdersList from '../components/OrderList.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/customers', component: Customer },
    { path: '/products', component: Product },
    { path: '/OrderList', component: OrdersList },  // Mise à jour du nom de la route
    { path: '/orders', component: Order },
    { path: '/orders/:id', name: 'OrderDetail', component: OrderDetail, props: true },
    { path: '/payments', component: Payment }
  ];
  

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
