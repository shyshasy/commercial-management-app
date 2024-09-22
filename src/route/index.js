import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Customer from '../components/Customer.vue'
import Product from '../components/Product.vue'
import Order from '../components/Order.vue'
import OrderDetail from '../components/OrderDetail.vue'
import OrdersList from '../components/OrderList.vue'
// import EditOrder from '@/view/EditOrder.vue';
// import ViewOrder from '@/views/ViewOrder.vue';
import EditOrder from '../components/EditOrder.vue'
import ViewOrder from '../components/ViewOrder.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/customers', component: Customer },
  { path: '/products', component: Product },
  { path: '/OrderList', component: OrdersList },
  { path: '/orders', component: Order },
  { path: '/OrderList/edit/:trackNumber', component: EditOrder },
  { path: '/OrderList/view/:trackNumber', component: ViewOrder },
  { path: '/orders/:id', name: 'OrderDetail', component: OrderDetail, props: true },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
