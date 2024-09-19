<template>
    <div class="container mt-5 position-relative">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#">Orders</a>
        </li>
      </ul>
      <!-- Buttons for Submit and Return to Home positioned in the top-right corner -->
      <div class="form-buttons custom-buttons">
    <!-- Utiliser 'router-link' pour une navigation facile -->
    <router-link to="/" class="btn btn-secondary me-2">Return to Home</router-link>
    <button type="submit" class="btn btn-success">Submit</button>
  </div>


      <form @submit.prevent="submitOrder" class="mt-4">
        <div class="row">
          <!-- Left Column -->
          <div class="col-md-6">
            <div class="form-group mb-3">
              <label for="date">Date</label>
              <input type="date" class="form-control" id="date" v-model="order.date">
            </div>
            <div class="form-group mb-3">
              <label for="customerName">Customer Name</label>
              <input type="text" class="form-control" id="customerName" v-model="order.customerName">
            </div>
            <div class="form-group mb-3">
              <label for="deliveryAddress">Delivery Address</label>
              <input type="text" class="form-control" id="deliveryAddress" v-model="order.deliveryAddress">
            </div>
          </div>
          <!-- Right Column -->
          <div class="col-md-6">
            <div class="form-group mb-3">
              <label for="trackNumber">Track Number</label>
              <input type="text" class="form-control" id="trackNumber" v-model="order.trackNumber">
            </div>
            <div class="form-group mb-3">
              <label for="orderStatus">Order Status</label>
              <select id="orderStatus" class="form-control" v-model="order.status">
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group mt-4">
          <label>Order Details</label>
          <table class="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(detail, index) in order.details" :key="index">
                <td><input type="text" class="form-control" v-model="detail.product"></td>
                <td><input type="number" class="form-control" v-model="detail.quantity"></td>
                <td><input type="number" class="form-control" v-model="detail.price"></td>
                <td><button type="button" class="btn btn-danger" @click="removeDetail(index)">Remove</button></td>
              </tr>
            </tbody>
          </table>
          <button type="button" class="btn btn-primary" @click="addDetail">Add New Detail</button>
        </div>
      </form>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        order: {
          date: '',
          customerName: '',
          deliveryAddress: '',
          trackNumber: '',  // Nouveau champ pour le numéro de suivi
          status: 'processing', // Nouveau champ pour le statut de la commande
          details: [
            { product: '', quantity: 1, price: 0 }
          ]
        }
      };
    },
    methods: {
      addDetail() {
        this.order.details.push({ product: '', quantity: 1, price: 0 });
      },
      removeDetail(index) {
        this.order.details.splice(index, 1);
      },
      submitOrder() {
        alert('Order submitted!');
      },
      returnHome() {
        alert('Returning to home!');
      }
    }
  };
  </script>
  
  <style scoped>
.container {
  margin-top: 20px;
  position: relative; /* Assurez-vous que le conteneur est positionné relativement */
}

.form-buttons {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0; /* Positionne les boutons en haut du conteneur */
  right: 0; /* Positionne les boutons à droite du conteneur */
  gap: 0.5rem; /* Ajuste l'espacement entre les boutons */
}

.custom-buttons {
  position: absolute;
  top: -20px; /* Ajustez cette valeur pour encore plus de hauteur */
  right: 0;
  padding: 1rem;
  z-index: 10; /* Assure que les boutons restent au-dessus des autres éléments */
}

</style>
