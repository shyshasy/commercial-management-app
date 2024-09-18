<template>
    <div>
      <h3>Détails de la Commande</h3>
      <button class="btn btn-primary mb-3" @click="addOrderDetail">Ajouter Détail</button>
      <!-- Tableau des détails de commande ici -->
    </div>
  </template>
  
  <script>
  export default {
    props: ['order'],
    methods: {
      addOrderDetail() {
        // Logique pour ajouter un détail de commande
      }
    }
  }
  </script>
  