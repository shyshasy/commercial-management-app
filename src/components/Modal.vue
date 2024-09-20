<template>
  <div class="modal fade" :class="{ show: show }" style="display: block;" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ action === 'add' ? 'Add' : 'Edit' }} {{ modalTitle }}</h5>
          <button type="button" class="close" aria-label="Close" @click="$emit('close')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
          <button type="button" class="btn btn-primary">{{ action === 'add' ? 'Add' : 'Save' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
props: ['show', 'action'],
computed: {
  modalTitle() {
    return this.action === 'add' ? 'Add' : 'Edit';
  }
}
}
</script>
