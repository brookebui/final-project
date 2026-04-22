const reviewDetails = {
  "zingermans.html": {
    title: "Zingerman's Delicatessen",
    image: "https://www.zingermansdeli.com/app/uploads/2022/11/Deli_Deli_Front_Spring_16x9_Crop_WEB_2021.jpg",
    alt: "Front exterior of Zingerman's Delicatessen in Ann Arbor.",
    address: "422 Detroit Street, Ann Arbor, Michigan",
    rating: "Steph's rating: 4.3 / 5",
    paragraphs: [
      "Zingerman's is one of the most well-known food stops in Ann Arbor, and it feels like a classic deli experience from the moment you arrive in Kerrytown. Its main draw is the long list of made-to-order sandwiches, along with baked goods and specialty grocery items.",
      "Based on current public descriptions and traveler feedback, people keep coming here for the quality of the bread, the classic deli meats, and the overall Ann Arbor institution feel. A common theme in reviews is that the sandwiches are worth trying if you want a well-known local favorite, even if the lines and prices can run high during busy times."
    ]
  },
  "frita-batidos.html": {
    title: "Frita Batidos",
    image: "images/frita.jpg",
    alt: "Burger and fries from Frita Batidos in Ann Arbor.",
    address: "117 West Washington Street, Ann Arbor, Michigan",
    rating: "Steph's rating: 4.5 / 5",
    paragraphs: [
      "Frita Batidos is one of the most popular casual restaurants in Ann Arbor, known for Cuban-inspired burgers and tropical milkshakes. The restaurant presents itself as a lively, casual spot built around fritas and batidos, with a menu that changes with the seasons.",
      "Public reviews often highlight the flavorful burgers, fun atmosphere, and the pairing of a frita with a batido. Review summaries also suggest that it can be busy, but many visitors still describe it as worth the wait because the food feels different from a standard burger stop."
    ]
  },
  "savas.html": {
    title: "Sava's",
    image: "https://images.squarespace-cdn.com/content/v1/67cf414f31701c1c1927f87d/36ddcbe2-a7ff-451a-a430-a8d5077a0384/_F8A4283.jpg",
    alt: "Sandwiches, salad, and drinks at Sava's in Ann Arbor.",
    address: "216 South State Street, Ann Arbor, Michigan",
    rating: "Steph's rating: 4.3 / 5",
    paragraphs: [
      "Sava's is a longtime State Street restaurant that is often described as a go-to place for brunch, dinner, or a nicer meal near campus. Its official site emphasizes a broad menu, fresh ingredients, and a warm dining room for students, locals, and visitors.",
      "Public reviews usually praise the atmosphere, variety, and service, with many people calling it a strong spot for breakfast or celebratory meals. The overall impression is that Sava's remains one of the better-known Ann Arbor restaurants for a polished but still approachable experience."
    ]
  },
  "unitea-cafe.html": {
    title: "Unitea Cafe",
    image: "images/unitea.jpg",
    alt: "Drink from Unitea Cafe.",
    address: "Unitea Cafe, Ann Arbor, Michigan",
    rating: "Brooke's rating: 4.4 / 5",
    paragraphs: [
      "Unitea Cafe is a casual spot to grab milk tea, fruit tea, and other iced drinks when you want something sweet and refreshing. It feels like an easy stop between classes or errands, especially if you want a quick pickup order.",
      "The menu is simple to browse, and it's a good place to try classic boba flavors or mix-ins. Based on public descriptions and review summaries, many visitors like the drink variety and the convenience for a fast treat."
    ]
  },
  "sadako.html": {
    title: "Sadako",
    image: "images/sadako.jpg",
    alt: "Food from Sadako restaurant.",
    address: "Sadako Japanese Restaurant, Ann Arbor, Michigan",
    rating: "Brooke's rating: 4.6 / 5",
    paragraphs: [
      "Sadako is a cozy Japanese restaurant that's a good choice when you want sushi, noodles, or a warm bowl of soup. It has an easygoing vibe that works for a casual lunch or a low-key dinner.",
      "Based on public summaries and common feedback, people often mention consistent sushi options and a menu that has something for different preferences. It's a solid pick if you want Japanese comfort food without a big, formal setting."
    ]
  },
  "saigon-kitchen-bar.html": {
    title: "Saigon Kitchen & Bar",
    image: "images/saigon.jpg",
    alt: "Food from Saigon Kitchen & Bar.",
    address: "Saigon Kitchen & Bar, Ann Arbor, Michigan",
    rating: "Brooke's rating: 4.5 / 5",
    paragraphs: [
      "Saigon Kitchen & Bar is a good option when you're craving Vietnamese comfort food like pho, rice plates, and fresh appetizers. It's a nice choice for a group meal because there are plenty of shareable options.",
      "Based on public descriptions and common review themes, people often point to flavorful broth, filling portions, and a menu that has both familiar classics and lighter choices. It's a solid spot if you want something warm and satisfying, especially on colder Michigan days."
    ]
  }
};

const modal = document.createElement("div");
modal.className = "review-modal-overlay";
modal.setAttribute("hidden", "");
modal.innerHTML = `
  <section class="review-modal" role="dialog" aria-modal="true" aria-label="Restaurant review">
    <button class="modal-close" type="button" aria-label="Close full review">&times;</button>
    <div id="modal-content"></div>
  </section>
`;
document.body.appendChild(modal);

const dialogPanel = modal.querySelector(".review-modal");
const modalContent = document.getElementById("modal-content");
const closeButton = modal.querySelector(".modal-close");

function getReviewKey(link) {
  return link.getAttribute("href").split("/").pop();
}

function openReviewModal(review) {
  const mapQuery = encodeURIComponent(review.address);
  const reviewText = review.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");

  modalContent.innerHTML = `
    <img class="modal-image" src="${review.image}" alt="${review.alt}">
    <div class="modal-body">
      <p class="section-label">Restaurant Review</p>
      <h2>${review.title}</h2>
      <p class="meta">${review.address}</p>
      <p class="rating">${review.rating}</p>
      <h3>Review</h3>
      ${reviewText}
      <div class="map-section">
        <h3>Find it on the map</h3>
        <iframe
          class="map-frame"
          title="Google map for ${review.title}"
          src="https://www.google.com/maps?q=${mapQuery}&output=embed"
          loading="lazy">
        </iframe>
        <a class="button-link" href="https://www.google.com/maps/dir/?api=1&destination=${mapQuery}" target="_blank" rel="noopener">
          Get directions
        </a>
      </div>
    </div>
  `;

  dialogPanel.setAttribute("aria-label", `Full review: ${review.title}`);
  modal.hidden = false;
  document.body.classList.add("modal-open");
  closeButton.focus();
}

function closeReviewModal() {
  dialogPanel.setAttribute("aria-label", "Restaurant review");
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href$=".html"]');
  const isReviewLink = link && link.textContent.trim() === "Read full review";
  const isHighlightedFavorite = link && link.closest(".popular-card");

  if (!isReviewLink && !isHighlightedFavorite) {
    return;
  }

  const review = reviewDetails[getReviewKey(link)];

  if (!review) {
    return;
  }

  event.preventDefault();
  openReviewModal(review);
});

closeButton.addEventListener("click", closeReviewModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeReviewModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeReviewModal();
  }
});
