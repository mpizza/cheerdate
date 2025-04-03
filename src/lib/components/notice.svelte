<script>
  export let message = '';
  export let show = false;
  $: show_class = show ? 'show' :'';
</script>

<div class="notice {show_class}">
  {message}
</div>

<style>
  .notice {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 100;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .notice.show {
        opacity: 1;
  }
</style>
