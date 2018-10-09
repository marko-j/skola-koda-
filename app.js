



function izracunajdane() {
  const satiEkspert = 10000
  const satiPocetnik = 2000
  brojSatiDnevno=document.getElementById("c").value;
  const godina = 365

  const brojDanaPocetnik = satiPocetnik/brojSatiDnevno
  const brojDanaEkspert = satiEkspert/brojSatiDnevno
  const brojGodinaPocetnik = brojDanaPocetnik/godina
  const brojGodinaEkspert = brojDanaEkspert/godina


p1.innerText=("BROJ GODINA UCENJA DO POCETNIKA JE:" + brojGodinaPocetnik.toFixed())
p2.innerText=("BROJ GODINA UCENJA DO EKSPERTA JE:") + brojGodinaEkspert.toFixed()
}

const dugme = document.getElementById("c1")
dugme.addEventListener("click",izracunajdane);

const p1 = document.getElementById("c2")
const p2 = document.getElementById("c3")
