<template>
    <div class="container mt-5">
      <h2>Product Management</h2>
  
      <!-- Button to open Add Product Modal -->
      <button class="btn btn-success mb-3" @click="openAddModal">
        <i class="fas fa-plus"></i> Add New Product
      </button>
  
      <!-- Product list in a Bootstrap table -->
      <table class="table table-striped table-bordered mt-4">

        <thead>
          <tr>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Barcode</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.barcode }}</td>
            <td>{{ product.status }}</td>
            <td>
              <button @click="listProduct(product)" class="btn btn-info btn-sm me-2">
                <i class="fas fa-eye"></i> 
              </button>
              <button @click="editProduct(product)" class="btn btn-warning btn-sm me-2">
                <i class="fas fa-edit"></i> 
              </button>
              <button @click="removeProduct(product.id)" class="btn btn-danger btn-sm">
                <i class="fas fa-trash"></i> 
              </button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Modal for adding a product -->
      <div v-if="showAddModal" class="modal show d-block" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add New Product</h5>
              <button type="button" class="close" aria-label="Close" @click="closeAddModal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <input v-model="newProduct.name" class="form-control mb-2" placeholder="Product Name">
              <input v-model="newProduct.description" class="form-control mb-2" placeholder="Description">
              <input v-model="newProduct.price" class="form-control mb-2" placeholder="Price">
              <input v-model="newProduct.stock" class="form-control mb-2" placeholder="Stock">
              <input v-model="newProduct.category" class="form-control mb-2" placeholder="Category">
              <input v-model="newProduct.barcode" class="form-control mb-2" placeholder="Barcode">
              <input v-model="newProduct.status" class="form-control mb-2" placeholder="Status">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="closeAddModal">Close</button>
              <button type="button" class="btn btn-primary" @click="addProduct">Add Product</button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Modal for listing a product -->
      <div v-if="selectedProduct" class="modal show d-block" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">View Product</h5>
              <button type="button" class="close" aria-label="Close" @click="clearSelection">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p><strong>Product Name:</strong> {{ selectedProduct.name }}</p>
              <p><strong>Description:</strong> {{ selectedProduct.description }}</p>
              <p><strong>Price:</strong> {{ selectedProduct.price }}</p>
              <p><strong>Stock:</strong> {{ selectedProduct.stock }}</p>
              <p><strong>Category:</strong> {{ selectedProduct.category }}</p>
              <p><strong>Barcode:</strong> {{ selectedProduct.barcode }}</p>
              <p><strong>Status:</strong> {{ selectedProduct.status }}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="clearSelection">Close</button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Modal for editing a product -->
      <!-- Modal for editing a product -->
<div v-if="editingProduct" class="modal show d-block" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Edit Product</h5>
        <button type="button" class="close" aria-label="Close" @click="closeEditModal">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-6 mb-2">
            <label>Product Name</label>
            <input v-model="editingProduct.name" class="form-control" placeholder="Product Name">
          </div>
          <div class="col-md-6 mb-2">
            <label>Description</label>
            <input v-model="editingProduct.description" class="form-control" placeholder="Description">
          </div>
          <div class="col-md-6 mb-2">
            <label>Price</label>
            <input v-model="editingProduct.price" class="form-control" placeholder="Price">
          </div>
          <div class="col-md-6 mb-2">
            <label>Stock</label>
            <input v-model="editingProduct.stock" class="form-control" placeholder="Stock">
          </div>
          <div class="col-md-6 mb-2">
            <label>Category</label>
            <input v-model="editingProduct.category" class="form-control" placeholder="Category">
          </div>
          <div class="col-md-6 mb-2">
            <label>Barcode</label>
            <input v-model="editingProduct.barcode" class="form-control" placeholder="Barcode">
          </div>
          <div class="col-md-6 mb-2">
            <label>Status</label>
            <input v-model="editingProduct.status" class="form-control" placeholder="Status">
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeEditModal">Close</button>
        <button type="button" class="btn btn-primary" @click="saveProduct">Save Changes</button>
      </div>
    </div>
  </div>
</div>

    </div>
  </template>
  
  <script setup>
import { ref } from 'vue';

// Variables réactives
const products = ref([
  {
    id: 1,
    name: 'Laptop Pro',
    description: 'High-end laptop for professional use',
    price: '1500',
    stock: 10,
    category: 'Electronics',
    barcode: '123456789',
    status: 'Available'
  },
  {
    id: 2,
    name: 'Smartphone X',
    description: 'Latest smartphone with advanced features',
    price: '999',
    stock: 50,
    category: 'Electronics',
    barcode: '987654321',
    status: 'Out of Stock'
  },
  {
    id: 3,
    name: 'Wireless Earbuds',
    description: 'Noise-cancelling wireless earbuds',
    price: '199',
    stock: 30,
    category: 'Accessories',
    barcode: '456789123',
    status: 'Available'
  }
]);

const newProduct = ref({
  name: '',
  description: '',
  price: '',
  stock: '',
  category: '',
  barcode: '',
  status: ''
});
const selectedProduct = ref(null);
const editingProduct = ref(null);
const showAddModal = ref(false);

// Fonctions
const openAddModal = () => {
  showAddModal.value = true;
};

const closeAddModal = () => {
  showAddModal.value = false;
};

const addProduct = () => {
  if (newProduct.value.name && newProduct.value.price && newProduct.value.stock) {
    products.value.push({ ...newProduct.value, id: Date.now() });
    newProduct.value = { name: '', description: '', price: '', stock: '', category: '', barcode: '', status: '' };
    closeAddModal();
  } else {
    alert('Please fill in all required fields.');
  }
};

const editProduct = (product) => {
  editingProduct.value = { ...product };
};

const closeEditModal = () => {
  editingProduct.value = null;
};

const saveProduct = () => {
  const index = products.value.findIndex(p => p.id === editingProduct.value.id);
  if (index !== -1) {
    products.value[index] = editingProduct.value;
    alert('Changes saved successfully!');
  }
  closeEditModal();
};

const removeProduct = (id) => {
  if (confirm('Are you sure you want to delete this product?')) {
    products.value = products.value.filter(product => product.id !== id);
  }
};

const listProduct = (product) => {
  selectedProduct.value = product;
};

const clearSelection = () => {
  selectedProduct.value = null;
};
</script>

  
  <style scoped>
  .custom-table {
    border: 2px solid #007bff; 
    border-radius: 10px; 
    overflow: hidden; 
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
  }
  </style>
  