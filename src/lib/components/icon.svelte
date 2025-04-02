<script lang="ts">
  import fb from '$lib/images/fb_icon.svg';
  import ig from '$lib/images/ig_icon.svg';
  import thread from '$lib/images/thread_icon.svg';
  import x from '$lib/images/x_icon.svg';
  import {
		Link,
	} from 'svelte-hero-icons';
  export let iconType: string;
  export let size: number = 24;
  export let className: string = "";

  const getIconSrc = function(iconType: string) {
    switch(iconType) {
      case 'fb':
        return fb;
      case 'ig':
        return ig;
      case 'thread':
        return thread;
      case 'x':
        return x;
    }
  }

  const iconSrc = getIconSrc(iconType);
</script>

<img
  src={iconSrc}
  width={size}
  height={size}
  class={className}
  alt={iconType + " icon"}
/>
