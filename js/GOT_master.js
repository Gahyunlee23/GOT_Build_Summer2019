(() => {
  console.log('fired!');

  // variable stacks -> get the shields / sigils first
  const sigils = document.querySelectorAll('.sigilContainer'),
        lightBox = document.querySelector('.lightBox'),
        closeButton = document.querySelector('.close-lightBox'),
        houseVideo = document.querySelector('.house-video'),
        bannerImages = document.querySelector("#houseImages");

  function popLightBox() {
    //debug this so far and make sure the event handling works
    // debugger;

    lightBox.classList.add('show-lightBox');

    houseVideo.play();
  }

// e = event
  function closeLightBox(e) {
    e.preventDefault();

    lightBox.classList.remove('show-lightBox');
    houseVideo.currentTime = 0; // rewind the video
    houseVideo.pause();
  }

  function animateBanners() {
    //we need an offset that we multiply by to animate
    // our banners to the left and make the activate one show up

    let offset = 600,
        multiplier = this.dataset.offset
        // this is the data-offset custom data attribute
        // on each of the sigils

    console.log((offset * multiplier) + "px");

    // move the banner to the left using produvt of our math
    bannerImages.style.right = `${offset * multiplier + "px"}`;

    // debugger;
  }

  // sigils.forEach(sigil => sigil.addEventListener("click", popLightBox));
  sigils.forEach(sigil => sigil.addEventListener("click", animateBanners));
  closeButton.addEventListener("click", closeLightBox);

  houseVideo.addEventListener('ended', closeLightBox);



})();
