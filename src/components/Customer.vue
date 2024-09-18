<template>
  <div>
    <h2>Clients</h2>
    <button class="btn btn-primary mb-3" @click="showModal('add')">Ajouter Client</button>
    
    <!-- Tableau des clients -->
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in clients" :key="client.id">
          <td>{{ client.name }}</td>
          <td>{{ client.address }}</td>
          <td>{{ client.email }}</td>
          <td>{{ client.phone }}</td>
          <td>
            <button class="btn btn-warning btn-sm" @click="showModal('edit', client)">Edit</button>
            <button class="btn btn-danger btn-sm" @click="deleteClient(client.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <modal :show="isModalVisible" @close="closeModal" :action="modalAction" @save="handleFormSubmit">
      <template #content>
        <form @submit.prevent="handleFormSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="address">Address</label>
            <input type="text" id="address" v-model="form.address" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input type="text" id="phone" v-model="form.phone" class="form-control" required>
          </div>
          <button type="submit" class="btn btn-primary">Save</button>
        </form>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
  components: { Modal },
  data() {
    return {
      isModalVisible: false,
      modalAction: '',
      selectedClient: null,
      form: {
        id: null,
        name: '',
        address: '',
        email: '',
        phone: ''
      },
      clients: [] // Liste des clients
    }
  },
  methods: {
    showModal(action, client = null) {
      this.modalAction = action;
      if (client) {
        this.selectedClient = client;
        this.form = { ...client };
      } else {
        this.form = { id: null, name: '', address: '', email: '', phone: '' };
      }
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    handleFormSubmit() {
      if (this.modalAction === 'add') {
        this.addClient();
      } else if (this.modalAction === 'edit') {
        this.editClient();
      }
    },
    addClient() {
      const newClient = { ...this.form, id: Date.now() };
      this.clients.push(newClient);
      this.closeModal();
    },
    editClient() {
      const index = this.clients.findIndex(client => client.id === this.form.id);
      if (index !== -1) {
        this.clients.splice(index, 1, { ...this.form });
      }
      this.closeModal();
    },
    deleteClient(clientId) {
      this.clients = this.clients.filter(client => client.id !== clientId);
    }
  }
}
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>
