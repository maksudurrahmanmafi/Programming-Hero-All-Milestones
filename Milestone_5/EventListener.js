document.getElementById("mouse-hover").addEventListener("click", () => {
  const title = document.getElementById("page-title");
  // title.innerText="I love you "
  title.style.color = "red";
  document.body.style.backgroundColor = "pink";
  title.innerHTML = "<h4>Tu hai teri zindegi per</h4>";

  document.getElementById("mouse-hover").style.color = "black";
  document.getElementById("mouse-hover").style.backgroundColor = "white";
  document.getElementById("mouse-hover").style.padding = "10px";
  document.getElementById("mouse-hover").innerText = "😱";

  // for realoding full page
  // location.reload()


});

  /*
     update name code start here
     */
    document.getElementById('update').addEventListener('click', () => {
        console.log('button clicked');
        
    })

  document.getElementById("update").addEventListener("click", () => {
    const input = document.getElementById("input-name");

    document.getElementById("user").innerText = input.value;

    input.value = "";
  });
