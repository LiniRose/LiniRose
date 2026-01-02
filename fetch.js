fetch("nav.html")
  .then((response) => response.text())
  .then((html) => {
    const container = document.querySelector("#navContainer");
    container.innerHTML = html;

    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";

    const links = container.querySelectorAll("nav a");

    for (const link of links) {
      if (link.getAttribute("href") === currentPage)
        link.classList.add("active");
    }
  });



document.addEventListener("DOMContentLoaded", () => {
  const projectGrid = document.getElementById("projectGrid");

  fetch("projects.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
                    <img src="${project.image}" alt="${project.name}">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <div class="project-software">
                        <strong>Software:</strong> ${project.software.join(
                          ", "
                        )}
                    </div>
                    <a class="project-link" href="${
                      project.link
                    }" target="_blank">
                        View Project →
                    </a>
                `;

        projectGrid.appendChild(card);
      });
    })
    .catch((err) => console.error("Error loading projects:", err));
});
