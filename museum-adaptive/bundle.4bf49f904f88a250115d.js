(()=>{var e={63:()=>{const e=document.querySelector(".amount__buy"),t=document.querySelector(".booking__button-close"),n=document.querySelector(".booking"),s=document.querySelector(".booking__background"),r=document.querySelector(".booking__book");e.addEventListener("click",(()=>{s.style.display="block",n.style.left=0}));const o=()=>{n.style.animation="rightLeft 0.3s",n.style.left="-110%",setTimeout((()=>{s.style.display="none",n.style.animation="leftRight 0.3s"}),300)};t.addEventListener("click",(()=>{o()})),s.addEventListener("click",(e=>{e.target.classList.contains("booking__background")&&o()})),r.addEventListener("click",(e=>(e=>{let t=document.createElement("span");const n=e.target.getBoundingClientRect(),s=e.clientX,o=e.clientY,l=s-n.left,a=o-n.top;t.classList.add("circle"),t.style.top=a+"px",t.style.left=l+"px",r.append(t),setTimeout((()=>{t.remove()}),400)})(e)))},312:()=>{const e=window.matchMedia("(max-width: 420px)"),t=document.querySelector(".header__background-img1"),n=document.querySelector(".header__background-img2"),s=document.querySelector(".header__background-img3"),r=document.querySelector(".header__burger-menu"),o=document.querySelector(".header-nav"),l=document.querySelector(".header__container-background"),a=document.querySelector(".welcome");e.matches&&(t.setAttribute("src","./assets/img/design/header__1-420.jpg"),n.setAttribute("src","./assets/img/design/header__2-420.jpg"),s.setAttribute("src","./assets/img/design/header__3-420.jpg")),e.addEventListener("change",(r=>{e.matches?(t.setAttribute("src","./assets/img/design/header__1-420.jpg"),n.setAttribute("src","./assets/img/design/header__2-420.jpg"),s.setAttribute("src","./assets/img/design/header__3-420.jpg")):(t.setAttribute("src","./assets/img/design/header__1-768.jpg"),n.setAttribute("src","./assets/img/design/header__2-768.jpg"),s.setAttribute("src","./assets/img/design/header__3-768.jpg"))}));const c=()=>{r.classList.contains("header__burger-menu")?(r.classList.remove("header__burger-menu"),r.classList.add("header__burger-menu--open"),o.style.left="0",l.style.left="-20px",a.classList.add("welcome--opacity")):(r.classList.remove("header__burger-menu--open"),r.classList.add("header__burger-menu"),o.style.left="-150%",l.style.left="-150%",a.classList.remove("welcome--opacity"))};r.addEventListener("click",(()=>c())),document.body.addEventListener("click",(e=>(e=>{if(r.classList.contains("header__burger-menu--open")){if(e.target.classList.contains("header__burger-menu--open"))return;e.target.classList.contains("header-nav__list")||e.target.classList.contains("header-nav__item")||c()}})(e)))},769:()=>{const e=window.matchMedia("(max-width: 768px"),t=document.querySelector(".gallery__masonry-list");let n=[],s=[[],[],[]],r=3,o=15;const l=()=>{for(let e=1;e<=o;e++)n.push(e);a()},a=()=>{for(let e=1;0!==n.length;e++){let t=Math.ceil(Math.random()*(n.length-1)+1);s[e-1].push(n[t-1]),n.splice(t-1,1),e===r&&(e=0)}c()},c=()=>{for(;t.firstChild;)t.removeChild(t.firstChild);for(let e=0;e<r;e++){let n=document.createElement("div");n.classList.add("masonry-list-col");for(let t=0;t<s[e].length;t++){let r=document.createElement("img");r.classList.add("masonry-list__item"),r.src=`./assets/img/content/gallery/gallery${s[e][t]}.jpg`,r.alt="art picture",n.append(r)}t.append(n)}};e.matches?(r=2,o=10,l()):l(),e.addEventListener("change",(e=>{e.matches?(r=2,o=10):(r=3,o=15),l()}))},543:()=>{const e=document.querySelector(".video__player"),t=document.querySelector(".video__content"),n=(document.querySelector(".video__big-play"),document.querySelector(".video__play"),document.querySelector(".video__progress")),s=document.querySelector(".video__volume"),r=document.querySelector(".video__volume-level"),o=document.querySelector(".video__zoom");let l,a=0;n.addEventListener("input",(()=>(a=n.value,n.style.background=`-webkit-gradient(linear, left top, right top, from(#710707), color-stop(${a}%, #710707), color-stop(${a}%, #C4C4C4), to(#C4C4C4))`,void(n.style.background=`linear-gradient(left, #710707 0%, #710707 ${a}%, #C4C4C4 ${a}%, #C4C4C4 100%)`)))),s.addEventListener("click",(()=>(r.value>0&&(l=r.value),void(t.muted?c(l):c(0)))));const c=(e=r.value)=>{const n=e;t.volume=n/10,r.style.background=`-webkit-gradient(linear, left top, right top, from(#710707), color-stop(${10*n}%, #710707), color-stop(${10*n}%, #C4C4C4), to(#C4C4C4))`,r.style.background=`linear-gradient(left, #710707 0%, #710707 ${10*n}%, #C4C4C4 ${10*n}%, #C4C4C4 100%)`,0===t.volume?(t.muted=!0,r.value=e,s.style.backgroundImage='url("./assets/svg/mute.svg")'):(t.muted=!1,r.value=e,s.style.backgroundImage='url("./assets/svg/volume.svg")')};r.addEventListener("input",(()=>c())),o.addEventListener("click",(()=>{document.fullscreenElement?(document.exitFullscreen(),o.style.backgroundImage='url("./assets/svg/zoom.svg")'):(e.requestFullscreen(),o.style.backgroundImage='url("./assets/svg/fullscreen_exit.svg")')})),document.addEventListener("fullscreenchange",(e=>{document.fullscreenElement||(o.style.backgroundImage='url("./assets/svg/zoom.svg")',t.style.height="735px"),document.fullscreenElement&&(t.style.height="100%")}))},85:()=>{console.log("\nScore: 152 / 160\n\n1. Вёрстка соответствует макету. Ширина экрана 1024px +40\n[+] Блок header +4\n[+] Секция Welcome +4\n[+] Секция Visiting +4\n[+] Секция Explore +4\n[+] Секция Video +4\n[+] Секция Gallery +4\n[+] Секция Tickets +4\n[+] Форма покупки билетов +4\n[+] Секция Contacts +4\n[+] Блок footer +4\n\n2. Вёрстка соответствует макету. Ширина экрана 768px +40\n[+] Блок header +4\n[+] Секция Welcome +4\n[+] Секция Visiting +4\n[+] Секция Explore +4\n[+] Секция Video +4\n[+] Секция Gallery +4\n[+] Секция Tickets +4\n[+] Форма покупки билетов +4\n[+] Секция Contacts +4\n[+] Блок footer +4\n\n3. Вёрстка соответствует макету. Ширина экрана 420px +40\n[+] Блок header +4\n[+] Секция Welcome +4\n[+] Секция Visiting +4\n[+] Секция Explore +4\n[+] Секция Video +4\n[+] Секция Gallery +4\n[+] Секция Tickets +4\n[+] Форма покупки билетов +4\n[+] Секция Contacts +4\n[+] Блок footer +4\n\n[+] 4. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +6\n5. Совмещается адаптивная и респонсивная (резиновая) вёрстка +14 При изменении ширины экрана плавно изменяются размеры:\n[+] слайдера в секции Welcome +2\n[+] слайдера сравнения изображений в секции Explore +2\n[+] кастомного видеоплеера в секции Video +2\n[+] слайдера в секции Video +2\n[+] YouTube-видео в плейлисте в секции Video, маленькие видео выровнены по краям большого +2\n[+] галереи изображений и изображений в ней +2\n[+] карты +2\n\n6. На ширине экрана 1024рх и меньше реализовано адаптивное меню +12\n[+] при нажатии на бургер-иконку меню появляется, плавно выдвигаясь слева, бургер-иконка изменяется на крестик. При нажатии на крестик меню исчезает, плавно возвращаясь назад, иконка крестика превращается в бургер-иконку +2\n[+] ссылки в меню работают, обеспечивая плавную прокрутку по якорям +2\n[+] при клике по ссылке в адаптивном меню, или при клике по любому месту сайта, кроме самого адаптивного меню, меню закрывается +2\n[+] вёрстка меню соответствует макету на всех проверяемых разрешениях +6\n\n7. Оптимизация скорости загрузки страницы +8 Оптимизация скорости загрузки страницы определяется при помощи сервиса https://developers.google.com/speed/pagespeed/insights/. Результат проверки скорости сайта для мобильных устройств:\n[-] 0 to 49 (red): Poor - не выполнено, 0 баллов\n[-] 50 to 89 (orange): Needs Improvement - частично выполнено +4\n[-] 90 to 100 (green): Good - выполнено полностью +8\n")}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(312),n(543),n(769),n(63),n(85)})()})();