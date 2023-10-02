nav_icon = document.getElementById('nav_icon')
main_menu = document.getElementById('main_menu')
menuList = document.querySelectorAll('.main_menu ul li a')
current = 1
nav_icon.addEventListener('click', function () {
  console.log('click')
  if (current == 1) {
    main_menu.classList.add('active')
    current = 2
  } else if (current == 2) {
    main_menu.classList.remove('active')
    current = 1
  }
})
menuList.forEach(function (navElement) {
  navElement.addEventListener('click', function () {
    if (current == 2) {
      main_menu.classList.remove('active')
      current = 1
    }
  })
})

const smallMenuT = () => {
  mainMenu.classList.add('hides')
  smallMenu.classList.add('shows')
}

const burgerMenuT = () => {
  mainMenu.classList.add('hides')
  burgerMenu.classList.add('shows')
}

const plateMenuT = () => {
  mainMenu.classList.add('hides')
  plateMenu.classList.add('shows')
}

const mealMenuT = () => {
  mainMenu.classList.add('hides')
  mealMenu.classList.add('shows')
}

const drinkMenuT = () => {
  mainMenu.classList.add('hides')
  drinkMenu.classList.add('shows')
}

const alcoholMenuT = () => {
  mainMenu.classList.add('hides')
  alcoholMenu.classList.add('shows')
}

const marketMenuT = () => {
  mainMenu.classList.add('hides')
  marketMenu.classList.add('shows')
}

const backToggle = () => {
  console.log('object')
  smallMenu.classList.remove('shows')
  marketMenu.classList.remove('shows')
  alcoholMenu.classList.remove('shows')
  drinkMenu.classList.remove('shows')
  mealMenu.classList.remove('shows')
  plateMenu.classList.remove('shows')
  burgerMenu.classList.remove('shows')
  mainMenu.classList.remove('hides')
  // mainMenu.classList.replace('hides', 'shows')
}

// $("button").click(function() {
//   $('html,body').animate({
//       scrollTop: $(".second").offset().top},
//       'slow');
// });
