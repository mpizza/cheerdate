<script lang="ts">
  export let teamID = 'T1';
  import ogImageFubon from '$lib/images/og_sets/og_fubonag.png';
  import ogImagePSG from '$lib/images/og_sets/og_psg.jpg';
  import ogImageRKG from '$lib/images/og_sets/og_rkg.png';
  import ogImageUNIG from '$lib/images/og_sets/og_unig.jpg';
  import ogImageWDG from '$lib/images/og_sets/og_wdg.jpg';
  import ogImageWS from '$lib/images/og_sets/og_ws.jpg';
  let ogImage = ogImagePSG;
  switch(teamID) {
    case "T1":
      ogImage = ogImagePSG;
      break;
    case "T2":
      ogImage = ogImageWDG;
      break;
    case "T3":
      ogImage = ogImageRKG;
      break;
    case "T4":
      ogImage = ogImageFubon;
      break;
    case "T5":
      ogImage = ogImageUNIG;
      break;
    case "T6":
      ogImage = ogImageWS;
      break;
    default:
      ogImage = ogImagePSG;
  }
</script>

<meta property="og:image" content={ogImage} />