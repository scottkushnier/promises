axios.get("http://numbersapi.com/273?json").then((x) => console.log(x.data));

axios
  .get("http://numbersapi.com/10,15,20?json")
  .then((x) => console.log(x.data));

document.querySelector("#li1").innerText = "foobar";

const myNum = 3;

fourRes = Promise.all([
  axios.get(`http://numbersapi.com/${myNum}/?json`),
  axios.get(`http://numbersapi.com/${myNum}?json`),
  axios.get(`http://numbersapi.com/${myNum}?json`),
  axios.get(`http://numbersapi.com/${myNum}?json`),
]).then((res4) => {
  document.querySelector("#li1").innerText = res4[0].data.text;
  document.querySelector("#li2").innerText = res4[1].data.text;
  document.querySelector("#li3").innerText = res4[2].data.text;
  document.querySelector("#li4").innerText = res4[3].data.text;
});
