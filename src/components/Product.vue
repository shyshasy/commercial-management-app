  <template>
    <div class="container mt-5">
      <h2>List of Products</h2>

      <!-- Button to open Add Product Modal -->
      <button class="btn btn-success mb-3" @click="openAddModal">
        <i class="fas fa-plus"></i> Add New Product
      </button>

      <!-- Product list in a Bootstrap table -->
      <table class="table table-striped table-bordered mt-4 custom-table">
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
          <tr v-if="products.length === 0">
          <td colspan="8" class="text-center">No products available</td>
        </tr>
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
                <i class="fas fa-times"></i>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-6 mb-2">
                  <label>Product Name</label>
                  <input v-model="newProduct.name" class="form-control" placeholder="Product Name">
                </div>
                  <div class="col-md-6 mb-2">
                  <label>Description</label>
                  <textarea v-model="newProduct.description" class="form-control" placeholder="Description" rows="3"></textarea>
                </div>

                <div class="col-md-6 mb-2">
                  <label>Price</label>
                  <input v-model="newProduct.price" class="form-control" placeholder="Price" type="number">
                </div>
                <div class="col-md-6 mb-2">
                  <label>Stock</label>
                  <input v-model="newProduct.stock" class="form-control" placeholder="Stock" type="nu">
                </div>
                <div class="col-md-6 mb-2">
                  <label>Category</label>
                  <input v-model="newProduct.category" class="form-control" placeholder="Category">
                </div>
                <div class="col-md-6 mb-2">
                  <label>Barcode</label>
                  <input v-model="newProduct.barcode" class="form-control" placeholder="Barcode">
                </div>
                <div class="col-md-6 mb-2">
                  <label for="status">Status</label>
                <select v-model="newProduct.category" class="form-control" required>
                  <option value="" disabled>Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="closeAddModal">Close</button>
              <button type="button" class="btn btn-primary" @click="addProduct">Add Product</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal for viewing a product -->
      <div v-if="selectedProduct" class="modal show d-block" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">View Product</h5>
              <button type="button" class="close" aria-label="Close" @click="clearSelection">
                <i class="fas fa-times"></i>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-6 mb-2">
                  <label>Product Name</label>
                  <input v-model="selectedProduct.name" class="form-control" disabled>
                </div>
                  <div class="col-md-6 mb-2">
                <label>Description</label>
                <textarea v-model="newProduct.description" disabled  class="form-control" placeholder="Description" rows="3"></textarea>
              </div>

                <div class="col-md-6 mb-2">
                  <label>Price</label>
                  <input v-model="selectedProduct.price" class="form-control" disabled>
                </div>
                <div class="col-md-6 mb-2">
                  <label>Stock</label>
                  <input v-model="selectedProduct.stock" class="form-control" disabled>
                </div>
                <div class="col-md-6 mb-2">
                  <label>Category</label>
                  <input v-model="selectedProduct.category" class="form-control" disabled>
                </div>
                <div class="col-md-6 mb-2">
                  <label>Barcode</label>
                  <input v-model="selectedProduct.barcode" class="form-control" disabled>
                </div>
                <div class="col-md-6 mb-2">
                  <label>Status</label>
                  <input v-model="selectedProduct.status" class="form-control" disabled>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="clearSelection">Close</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal for editing a product -->
      <div v-if="editingProduct" class="modal show d-block" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit Product</h5>
              <button type="button" class="close" aria-label="Close" @click="closeEditModal">
                <i class="fas fa-times"></i>
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
                  <textarea v-model="editingProduct.description" class="form-control" placeholder="Description" rows="3"></textarea>
                </div>

                <div class="col-md-6 mb-2">
                  <label>Price</label>
                  <input v-model="editingProduct.price" class="form-control" placeholder="Price" type="number">
                </div>
                <div class="col-md-6 mb-2">
                  <label>Stock</label>
                  <input v-model="editingProduct.stock" class="form-control" placeholder="Stock" type="number">
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
                  <label for="status">Status</label>
                <select v-model="editingProduct.category" class="form-select" required>
                  <option value="" disabled>Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                  
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
      description: 'Latest model of smartphone',
      price: '800',
      stock: 5,
      category: 'Electronics',
      barcode: '987654321',
      status: 'Out of Stock'
    }
  ]);

  const showAddModal = ref(false);
  const selectedProduct = ref(null);
  const editingProduct = ref(null);
  const newProduct = ref({});

  // Fonctions pour gérer les modals
  const openAddModal = () => showAddModal.value = true;
  const closeAddModal = () => showAddModal.value = false;

  const listProduct = (product) => {
    selectedProduct.value = { ...product };
  };

  const clearSelection = () => selectedProduct.value = null;

  const editProduct = (product) => {
    editingProduct.value = { ...product };
  };

  const closeEditModal = () => editingProduct.value = null;

  const addProduct = () => {
    products.value.push({ ...newProduct.value, id: Date.now() });
    newProduct.value = {};
    closeAddModal();
  };

  const saveProduct = () => {
    const index = products.value.findIndex(p => p.id === editingProduct.value.id);
    if (index !== -1) {
      products.value[index] = { ...editingProduct.value };
      closeEditModal();
    }
  };

  const removeProduct = (id) => {
    products.value = products.value.filter(p => p.id !== id);
  };
  </script>

<style scoped>
/* Increase size and width of input fields and textareas */
.form-control {
  width: 100%; /* Ensure inputs take full width */
  height: 40px; /* Increase height */
  font-size: 16px; /* Increase font size for better readability */
}

textarea.form-control {
  height: 100px; /* Increase height for textareas */
}

/* Increase the width of the modal */
.modal-dialog {
  max-width: 800px; /* Set desired max-width for the modal */
  width: 100%; /* Allow it to take full width */
}

/* Styles for the delete icon button */
.btn-danger i {
  font-size: 16px; /* Decrease the size of the icon */
  transition: transform 0.2s ease; /* Add transition for hover effect */
}

.btn-danger:hover i {
  transform: scale(1.1); /* Slightly enlarge the icon on hover */
}

/* Close button style */
.close {
  position: absolute;
  top: 10px;
  right: 10px; /* Moves the close icon to the right */
  background-color: transparent;
  border: none;
  font-size: 18px; /* Decreased size of the close icon */
  cursor: pointer;
  color: #ff0000; /* Changes the icon color */
  padding: 3px; /* Decreased padding */
  transition: transform 0.2s ease, color 0.2s ease;
}

.close:hover {
  transform: scale(1.1); /* Slightly reduces the scale on hover */
  color: #d9534f; /* Changes color on hover */
}

/* Modal content styling */
.modal-content {
  position: relative; /* Necessary for the absolute positioning of the close icon */
  padding: 20px;
}
</style>
