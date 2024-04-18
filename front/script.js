let currentEventId;

function getAllPosts() {
  fetch("fake_data.json")
    .then((response) => response.json())
    .then((data) => {
      const listPost = document.querySelector("#list-post");
      listPost.innerHTML = "";

      data.forEach((post) => {
        const divElement = document.createElement("div");
        divElement.classList.add("col-md-4");
        divElement.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title d-flex justify-content-between">
                            ${post.title}
                            <span class="badge bg-secondary">
                            ${formatDate(post.event_date)}
                            </span>
                        </h5>
                        <p class="text-body-secondary">
                            ${post.address}, ${post.postal_code}, ${post.city}
                        </p>
                        <p class="card-text fs-5 text my-4">${
                          post.description
                        }</p>
                        <button
                            type="button"
                            class="btn btn-primary open-modal"
                            data-bs-toggle="modal"
                            data-bs-target="#registrationtModal"
                            data-bs-id="${post.id}"
                        >
                            Registration
                        </button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            `;

        document.querySelectorAll(".open-modal").forEach((button) => {
          button.addEventListener("click", function () {
            currentEventId = this.getAttribute("data-bs-id");
          });
        });

        const deleteBtn = divElement.querySelector(".btn-danger");

        console.log(deleteBtn);
        deleteBtn.addEventListener("click", () => {
          /**
           * Delete event
           */
          console.log("Delete button clicked : ", deleteBtn);

          /**
           * COMPLETE CODE WITH FETCH REQUEST
           */
        });

        listPost.appendChild(divElement);
      });
    });
}

getAllPosts();

const addFormEvent = document.querySelector("#add-form-event");

addFormEvent.addEventListener("submit", (e) => {
  /**
   * Add event
   */
  e.preventDefault();
  const title = document.querySelector("input[name=title]").value;
  const description = document.querySelector("input[name=description]").value;
  const address = document.querySelector("input[name=address]").value;
  const postal_code = document.querySelector("input[name=postal_code]").value;
  const city = document.querySelector("input[name=city]").value;
  const event_date = document.querySelector("input[name=event_date]").value;

  console.log("title : ", title);
  console.log("description : ", description);
  console.log("address : ", address);
  console.log("postal_code : ", postal_code);
  console.log("city : ", city);
  console.log("event_date : ", event_date);

  /**
   * COMPLETE CODE WITH FETCH REQUEST
   */
});

const registerEventForm = document.querySelector("#register-form-event");

registerEventForm.addEventListener("submit", (e) => {
  /**
   * Register event
   */
  e.preventDefault();
  const firstName = document.querySelector("input[name=firstName]").value;
  const lastName = document.querySelector("input[name=lastName]").value;
  const email = document.querySelector("input[name=email]").value;

  console.log("firstName : ", firstName);
  console.log("lastName : ", lastName);
  console.log("email : ", email);
  console.log("event_id : ", currentEventId);

  /**
   * COMPLETE CODE WITH FETCH REQUEST
   */
});

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Mois commence à 0
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${day}/${month}/${year} à ${hours}:${minutes}`;
}
