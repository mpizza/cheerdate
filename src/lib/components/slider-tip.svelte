<div class= "p-3 flex items-center justify-center text-gray-700">
  <span class="hand-slide-animation mr-2">👆</span>
  <span>左右滑動查看更多資料</span>
  <span class="inline-block ml-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
    </svg>
  </span>
</div>

<style>
  @keyframes slideRL {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(-10px); }
  }
  
  .hand-slide-animation {
    animation: slideRL 1.5s infinite;
    display: inline-block;
  }
</style>