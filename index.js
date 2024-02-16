function calculakm() {
  const valorkm = document.getElementById("kmvalor");
  const numerokm = Number(valorkm.value);

  if (numerokm <= 60) {
    document.getElementById("aviso").innerText = "voce ta suave";
  } else{
    document.getElementById("aviso").innerText = 'vai ser multado seu maldito arriscado atropelar alguem';
  }
}
calculakm();