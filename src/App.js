<template>
<button class="dupe">Duplicate Card</button>
<button class="color-change">Change Color</button>
<button class="title-change">Change Title</button>
<button class="delete-dupe">Delete card</button>

<div class="wrapper">
  <div class="card">
      <img src="https://destiny.wiki.gallery/images/thumb/2/27/CrotaEndArt.jpg/1200px-CrotaEndArt.jpg" alt="Image depicting a shadow of a guardian slashing down a shadow of Crota, son of Oryx, whilst standing in Crota's throne room." style="max-width: 400px">
      <div class="container">
        <h2>Crotas End</h2>
        <details>
          <p>Crota's soul may have been banished from our world, and his brood all but demolished, but Crota himself still remains. To end this threat once and for all, a new team of six Guardians needs to enter the deepest pit of the Hellmouth and infiltrate his realm, the Oversoul Throne.</p>
        </details>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// create dupe
document.querySelector(".dupe").addEventListener("click", (e) => {
  // Clone the first card
  const firstCard = document.querySelector(".card");
  const clonedCard = firstCard.cloneNode(true);
  // Append the cloned card to the wrapper
  document.querySelector(".wrapper").appendChild(clonedCard);
  //delete dupe
  document.querySelector(".delete-dupe").addEventListener("click", (e) => {
    document.querySelector(".wrapper").removeChild(clonedCard);
  });
});
//change color
document.querySelector(".color-change").addEventListener("click", (e) => {
  document.querySelector(".card").classList.toggle("colorChanged");
});
//change title
document.querySelector(".title-change").addEventListener("click", (e) => {
  document.querySelector(".card h2").textContent = "Something Else";
});
</script>
