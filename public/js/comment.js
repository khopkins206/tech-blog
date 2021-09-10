const newCommentHandler = async (event) => {
  event.preventDefault();

  const body = document.querySelector("#comment-body").value.trim();
  // console.log(post);

  if (body) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ body }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to post comment");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete comment");
    }
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newCommentHandler);
