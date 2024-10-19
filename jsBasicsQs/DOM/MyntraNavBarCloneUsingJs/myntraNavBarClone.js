 let navBarEle=document.createElement('div');
 console.log(navBarEle)
//   navBarEle.textContent="this is text content of navbar"
// navBarEle.style.border="2px solid red";
navBarEle.style.height= '50px'
navBarEle.style.backgroundColor= "rgb(248, 247, 247)"
navBarEle.style.display='flex'
document.body.appendChild(navBarEle);



let logoDiv=document.createElement('div');
// logoDiv.style.border="2px solid yellow";
logoDiv.style.height= '46px'
logoDiv.style.width= '5%'
 
let logoimg=document.createElement('img');
logoimg.src="https://images.indianexpress.com/2021/01/myntra.png"
logoimg.alt="logo image"
logoimg.style.width = '100%';
logoimg.style.height = 'auto';


logoDiv.appendChild(logoimg)

// logoDiv.style.backgroundColor="blue"
navBarEle.appendChild(logoDiv);


let ele1s1=document.createElement('div');
// ele1s1.style.border="2px solid white";
ele1s1.style.height= '15px'
ele1s1.style.width= '6%'
ele1s1.style.marginTop='14px';
ele1s1.style.marginLeft='50px';
// ele1s1.style.backgroundColor="purple"
ele1s1.textContent="MEN";
 

navBarEle.appendChild(ele1s1);


let ele2s1=document.createElement('div');
// ele2s1.style.border="2px solid white";
ele2s1.style.height= '15px'
ele2s1.style.width= '6%'
ele2s1.style.marginTop='14px';
ele2s1.style.marginLeft='50px';
// ele2s1.style.backgroundColor="purple"
ele2s1.textContent="WOMEN";

navBarEle.appendChild(ele2s1);

let ele2s2 = document.createElement('div');
// ele2s2.style.border = "2px solid white";
ele2s2.style.height = '15px';
ele2s2.style.width = '6%';
ele2s2.style.marginTop = '14px';
ele2s2.style.marginLeft = '50px';
// ele2s2.style.backgroundColor = "purple";
ele2s2.textContent="KIDS";

navBarEle.appendChild(ele2s2);


let ele3s1 = document.createElement('div');
// ele3s1.style.border = "2px solid white";
ele3s1.style.height = '15px';
ele3s1.style.width = '6%';
ele3s1.style.marginTop = '14px';
ele3s1.style.marginLeft = '50px';
// ele3s1.style.backgroundColor = "purple";
ele3s1.textContent="LIVING";

navBarEle.appendChild(ele3s1);


let ele4s1 = document.createElement('div');
// ele4s1.style.border = "2px solid white";
ele4s1.style.height = '15px';
ele4s1.style.width = '6%';
ele4s1.style.marginTop = '14px';
ele4s1.style.marginLeft = '50px';
// ele4s1.style.backgroundColor = "purple";
ele4s1.textContent="STUDIOS";

navBarEle.appendChild(ele4s1);

let ele5s1 = document.createElement('div');
ele5s1.style.border = "2px solid white";
ele5s1.style.height = '15px';
ele5s1.style.width = '20%';
ele5s1.style.marginTop = '14px';
ele5s1.style.marginLeft = '330px';
ele5s1.style.backgroundColor = "purple";

let serachBarEle = document.createElement('input');
serachBarEle.placeholder="Search for product,brands and more"
ele5s1.appendChild(serachBarEle)
serachBarEle.style.width='100%';
navBarEle.appendChild(ele5s1);

let ele6s1 = document.createElement('div');
ele6s1.style.border = "2px solid white";
ele6s1.style.height = '15px';
ele6s1.style.width = '1%';
ele6s1.style.marginTop = '14px';
ele6s1.style.marginLeft = '25px';
// ele6s1.style.backgroundColor = "purple";
let icondiv1 = document.createElement('div');
icondiv1.textContent='🧑‍💼';
ele6s1.appendChild(icondiv1)


navBarEle.appendChild(ele6s1);

let ele7s1 = document.createElement('div');
ele7s1.style.border = "2px solid white";
ele7s1.style.height = '15px';
ele7s1.style.width = '1%';
ele7s1.style.marginTop = '14px';
ele7s1.style.marginLeft = '10px';
// ele7s1.style.backgroundColor = "purple";
let icondiv2 = document.createElement('div');
icondiv2.textContent='🛒';
ele7s1.appendChild(icondiv2)
navBarEle.appendChild(ele7s1);

