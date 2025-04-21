var btn = document.querySelector("button")
var bdy = document.querySelector("body")
btn.addEventListener("click",function(){
    btn.style.scale =".95"
    var ima = document.createElement('img');
    ima.setAttribute('src','https://scontent.fvns1-1.fna.fbcdn.net/v/t39.30808-1/453726808_799416869031472_8077092428361102223_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=R3uY3R1VKbEQ7kNvwFEa2I2&_nc_oc=AdnIkUFwpRKpkiITcWZ0QK72V5TYL2QacGHPbesUYJf5w4xh766tGZvK0wo62rpTz3xYGr-CsBoiWLsUVf-H6WD2&_nc_zt=24&_nc_ht=scontent.fvns1-1.fna&_nc_gid=_aSAKOMlttboSzFn0JagSQ&oh=00_AfFFeccr95JOL3bcgK3qUQMmHuwkP_ZRMTNH_jSMo2nwaw&oe=680862D2');
    ima.style.height ="200px"
    ima.style.margin ="10px"

    bdy.appendChild(ima)
})