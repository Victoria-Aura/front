window.addEventListener('scroll', function () {
    const scrollPosition = document.documentElement.scrollTop;
    const nav =  document.getElementById('TopAppBar')
        if (!scrollPosition){
            nav.style.backgroundColor = 'rgba(0,0,0,0)';
        } else {
            nav.style.backgroundColor = 'rgb(43, 42, 47)';
        }

  });

export { NavPanel } from "./NavPanel";
