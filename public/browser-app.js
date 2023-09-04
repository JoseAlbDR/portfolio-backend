const url = "/api/v1/products";
const fileFormDOM = document.querySelector(".file-form");

const titleInputDOM = document.querySelector("#title");
const descriptionInputDOM = document.querySelector("#description");
const gitHubInputDOM = document.querySelector("#github");
const liveInputDOM = document.querySelector("#live");
const imageInputDOM = document.querySelector("#image");

const containerDOM = document.querySelector(".container");
let imageValue;

imageInputDOM.addEventListener("change", async (e) => {
  const imageFile = e.target.files[0];
  const formData = new FormData();
  formData.append("image", imageFile);
  try {
    const {
      data: {
        image: { src },
      },
    } = await axios.post(`${url}/uploads`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    imageValue = src;
  } catch (error) {
    imageValue = null;
    console.log(error);
  }
});

fileFormDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const titleValue = nameInputDOM.value;
  const imageValue = imageInputDOM.value;
  const descriptionValue = descriptionInputDOM.value;
  const gitHubValue = gitHubInputDOM.value;
  const liveValue = liveInputDOM.value;
  try {
    const project = {
      title: titleValue,
      price: descriptionValue,
      image: imageValue,
      github: gitHubValue,
      live: liveValue,
    };

    await axios.post(url, project);
  } catch (error) {
    console.log(error);
  }
});
