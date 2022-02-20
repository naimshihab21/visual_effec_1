function scrollAppear() {
  let introText = document.querySelector('.intro__text')
  let introPosition = introText.getBoundingClientRect().top
  let screenPosition = window.innerHeight / 2.2

  if(introPosition < screenPosition) {
    introText.classList.add('intro__appear')
  }
}

window.addEventListener('scroll', scrollAppear)