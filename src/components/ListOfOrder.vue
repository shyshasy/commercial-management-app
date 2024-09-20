<template>
  <div class="container mt-5">
    <h2 class="mb-4">Liste des Commandes</h2>
    <router-link to="/formulaire-commande" class="btn btn-primary mb-3">Ajouter une Commande</router-link>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Date</th>
          <th>Client</th>
          <th>Adresse de Livraison</th>
          <th>Numéro de Suivi</th>
          <th>Statut</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(commande, index) in commandes" :key="index">
          <td>{{ commande.date }}</td>
          <td>{{ commande.client }}</td>
          <td>{{ commande.adresse }}</td>
          <td>{{ commande.numeroSuivi }}</td>
          <td>{{ commande.statut }}</td>
          <td>
            <button class="btn btn-sm btn-info" @click="modifierCommande(index)">Modifier</button>
            <button class="btn btn-sm btn-danger" @click="supprimerCommande(index)">Supprimer</button>
            <button class="btn btn-sm btn-secondary" @click="voirCommande(index)">Voir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const commandes = ref([
  { date: '25/07/2024', client: 'John Doe', adresse: '123 Main St, New York, NY', numeroSuivi: 'NS001', statut: 'Expédiée' },
  { date: '26/07/2024', client: 'Jane Smith', adresse: '456 Oak St, Los Angeles, CA', numeroSuivi: 'NS002', statut: 'Livrée' },
  { date: '27/07/2024', client: 'Alice Martin', adresse: '789 Pine St, Chicago, IL', numeroSuivi: 'NS003', statut: 'En cours' }
]);

const router = useRouter();

const ajouterCommande = () => {
  router.push('/formulaire-commande');
};

const modifierCommande = (index) => {
  alert(`Modifier la Commande #${index + 1}`);
};

const supprimerCommande = (index) => {
  if (confirm(`Êtes-vous sûr de vouloir supprimer la commande #${index + 1}?`)) {
    commandes.value.splice(index, 1);
  }
};

const voirCommande = (index) => {
  alert(`Voir les détails de la Commande #${index + 1}`);
};
</script>

<style scoped>
/* Ajouter des styles personnalisés si nécessaire */
</style>
