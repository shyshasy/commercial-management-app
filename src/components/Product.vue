<template>
    <div>
      <h2>Product Management</h2>
      
      <!-- Form to add a product -->
      <div class="mb-3">
        <input v-model="newProduct.name" class="form-control" placeholder="Product Name">
        <input v-model="newProduct.description" class="form-control mt-2" placeholder="Description">
        <input v-model="newProduct.price" class="form-control mt-2" placeholder="Price">
        <input v-model="newProduct.stock" class="form-control mt-2" placeholder="Stock">
        <input v-model="newProduct.category" class="form-control mt-2" placeholder="Category">
        <input v-model="newProduct.barcode" class="form-control mt-2" placeholder="Barcode">
        <input v-model="newProduct.status" class="form-control mt-2" placeholder="Status">
        <button @click="addProduct" class="btn btn-primary mt-3">
          <i class="fas fa-plus"></i> Add Product
        </button>
      </div>
      
      <!-- Product list -->
      <ul class="list-group">
        <li v-for="product in products" :key="product.id" class="list-group-item d-flex justify-content-between align-items-center">
          <span>{{ product.name }}</span>
          <div>
            <button @click="listProduct(product)" class="btn btn-info btn-sm me-2">
              <i class="fas fa-eye"></i> List
            </button>
            <button @click="editProduct(product)" class="btn btn-warning btn-sm me-2">
              <i class="fas fa-edit"></i> Edit
            </button>
            <button @click="removeProduct(product.id)" class="btn btn-danger btn-sm">
              <i class="fas fa-trash"></i> Delete
            </button>
          </div>
        </li>
      </ul>
      
      <!-- Modal for listing a product -->
      <div v-if="selectedProduct" class="modal show d-block" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Product Details</h5>
              <button type="button" class="close" aria-label="Close" @click="clearSelection">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="mb-2">
                <label><strong>Name:</strong></label>
                <p>{{ selectedProduct.name }}</p>
              </div>
              <div class="mb-2">
                <label><strong>Description:</strong></label>
                <p>{{ selectedProduct.description }}</p>
              </div>
              <div class="mb-2">
                <label><strong>Price:</strong></label>
                <p>{{ selectedProduct.price }}</p>
              </div>
              <div class="mb-2">
                <label><strong>Stock:</strong></label>
                <p>{{ selectedProduct.stock }}</p>
              </div>
              <div class="mb-2">
                <label><strong>Category:</strong></label>
                <p>{{ selectedProduct.category }}</p>
              </div>
              <div class="mb-2">
                <label><strong>Barcode:</strong></label>
                <p>{{ selectedProduct.barcode }}</p>
              </div>
              <div class="mb-2">
                <label><strong>Status:</strong></label>
                <p>{{ selectedProduct.status }}</p>
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
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="mb-2">
                <label>Name</label>
                <input v-model="editingProduct.name" class="form-control" placeholder="Product Name">
              </div>
              <div class="mb-2">
                <label>Description</label>
                <input v-model="editingProduct.description" class="form-control" placeholder="Description">
              </div>
              <div class="mb-2">
                <label>Price</label>
                <input v-model="editingProduct.price" class="form-control" placeholder="Price">
              </div>
              <div class="mb-2">
                <label>Stock</label>
                <input v-model="editingProduct.stock" class="form-control" placeholder="Stock">
              </div>
              <div class="mb-2">
                <label>Category</label>
                <input v-model="editingProduct.category" class="form-control" placeholder="Category">
              </div>
              <div class="mb-2">
                <label>Barcode</label>
                <input v-model="editingProduct.barcode" class="form-control" placeholder="Barcode">
              </div>
              <div class="mb-2">
                <label>Status</label>
                <input v-model="editingProduct.status" class="form-control" placeholder="Status">
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
  
  <script>
  export default {
    data() {
      return {
        newProduct: {
          name: '',
          description: '',
          price: '',
          stock: '',
          category: '',
          barcode: '',
          status: ''
        },
        products: [],
        selectedProduct: null, // Selected product for viewing details
        editingProduct: null // Product currently being edited
      };
    },
    methods: {
      addProduct() {
        if (this.newProduct.name && this.newProduct.price && this.newProduct.stock) {
          this.products.push({ ...this.newProduct, id: Date.now() });
          this.newProduct = { name: '', description: '', price: '', stock: '', category: '', barcode: '', status: '' };
        } else {
          alert('Please fill in all required fields.');
        }
      },
      editProduct(product) {
        this.editingProduct = { ...product }; // Prepares a copy for editing
      },
      closeEditModal() {
        this.editingProduct = null; // Closes the edit modal
      },
      saveProduct() {
        const index = this.products.findIndex(p => p.id === this.editingProduct.id);
        if (index !== -1) {
          this.$set(this.products, index, this.editingProduct);
          alert('Changes saved successfully!'); // Confirmation message
        }
        this.closeEditModal();
      },
      removeProduct(id) {
        if (confirm('Are you sure you want to delete this product?')) {
          this.products = this.products.filter(product => product.id !== id);
        }
      },
      listProduct(product) {
        this.selectedProduct = product;
      },
      clearSelection() {
        this.selectedProduct = null; // Closes the details modal
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styles for a chic design */
  h2 {
    font-weight: bold;
    color: #333;
  }
  
  .list-group-item {
    font-size: 16px;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    border-color: #6c757d;
  }
  
  .btn-info {
    background-color: #17a2b8;
    border-color: #17a2b8;
  }
  
  .btn-warning {
    background-color: #ffc107;
    border-color: #ffc107;
  }
  
  .btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
  }
  
  .modal.show {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    background-color: #fff;
    border-radius: 0.3rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .modal-header,
  .modal-footer {
    padding: 1rem;
    border-bottom: 1px solid #e9ecef;
  }
  
  .modal-title {
    font-size: 1.25rem;
  }
  
  .close {
    font-size: 1.5rem;
    color: #000;
  }
  
  .close:hover {
    color: #dc3545;
  }
  
  .form-control {
    border-radius: 0.3rem;
    border: 1px solid #ced4da;
  }
  </style>
  