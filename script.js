//       document.getElementById("myForm").addEventListener("submit", function (event) {
//         event.preventDefault();

//         let name = document.getElementById("name").value;
//         let year = document.getElementById("year").value;
//         let url = document.getElementById("url").textContent;

//         console.log(`Submitting data: Name - ${name}, Year - ${year}, URL - ${url}`);
        
//         fetch(url, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ name, year })
//         })
//         .then(response => response.json())
//         .then(data => console.log("Success:", data))
//         .catch(error => console.error("Error:", error));
//       });

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    let name = document.getElementById("name").value.trim();
    let year = document.getElementById("year").value.trim();

    if (name && year) {
        let newUrl = `https://localhost:8080/?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
        document.getElementById("url").textContent = newUrl;
    }
});
