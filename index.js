let allData;
let mydata = document.getElementById("mynote");
let shownote = document.getElementById("shownote");

mydata.addEventListener("click", async () => {
  let user = JSON.parse(localStorage.getItem("userDetails"));
  let token = localStorage.getItem("token");
  let newdata = allData.filter((data, ind) => {
    if (data.userid === user._id) {
      console.log("matched", ind + 1);
      return data;
    }
  });
  console.log(newdata, "----");
  Display(newdata);
});
shownote.addEventListener("click", () => {
  Display(allData);
});
let url = "http://localhost:1000/post/allpost";
fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((res) => {
    allData = res.allpost;
    Display(res.allpost);
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

let main = document.getElementById("main");
function Display(data) {
  main.innerText = "";
  data.map((element, index) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let title = document.createElement("h2");
    title.innerText = element.title;

    let description = document.createElement("p");
    description.innerText = element.description;

    let posted = document.createElement("h2");
    posted.innerText = `Posted By:- ${element.username}`;

    card.append(title, description, posted);
    main.append(card);
  });
}
