<template>
  <div class="loader-wrapper">
    <div class="loader" :class="'loader-'+type">
      <svg
        class="loader-logo"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 1.62504L27.5 10.5558L27.4953 10.5558H27.5L19.4209 25.5096H16.8931L14.8162 22.3943H13.1838L11.1069 25.5096H8.57908L0.500039 10.5558L0.5 10.5558H0.500056L14 1.62507L14 1.625L14 1.62504ZM14 1.6254L12.9616 17.825L8.80773 10.6077L1.33362 10.561L9.0363 24.6789H10.6623L12.7392 21.5635H15.2608L17.3377 24.6789H18.9637L26.6664 10.561L19.1923 10.6077L15.0385 17.825L14 1.6254Z"
          fill="inherit"
        />
      </svg>
      <svg
        class="loader-item"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 49C11.7452 49 1 38.2548 1 25C1 11.7452 11.7452 1 25 1C38.2548 1 49 11.7452 49 25"
          stroke="inherit"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>
