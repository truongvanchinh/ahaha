const animals = [
  {
    img: "assets/img/dolphin.png",
    text: "Hôm nay bạn hoà đồng dễ thương như cá heo 🐬💗",
  },
  { img: "assets/img/cat.png", text: "Bạn cần được ôm 1 cái như mèo 🐱💞" },
  {
    img: "assets/img/bear.png",
    text: "Tâm trạng hôm nay: ngủ 23 tiếng như gấu 🐻💤",
  },
];

document.getElementById("animalBtn").onclick = function () {
  const pick = animals[Math.floor(Math.random() * animals.length)];
  document.getElementById("animalImg").src = pick.img;
  document.getElementById("animalText").innerText = pick.text;
  document.getElementById("result").style.display = "block";
};
