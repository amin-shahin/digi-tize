const moonIcon = document.querySelector('moon');
const sunIcon = document.querySelector('sun');
const themeSwitcherBtns = document.querySelectorAll('.theme-switcher')
const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

if(userTheme || (!userTheme && systemTheme)){
    document.documentElement.classList.add('dark');
    moonIcon.classList.add('hidden');
}else{
    document.documentElement.classList.remove('dark');
    sunIcon.classList.add('hidden');
}

function iconSwitch(theme){
if(userTheme === 'dark'){

}else if( userTheme === 'light'){
    
}
}

//switcher 
themeSwitcherBtns.forEach(item =>{
  item.addEventListener('click',(e)=>{
    const theme = e.target.dataset.theme;
    console.log(theme);
  })
})



// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'
  
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')