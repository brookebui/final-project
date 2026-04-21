// Simple review filters for review listing pages.

const cuisineFilter = document.getElementById("cuisine-filter");
const reviewerFilter = document.getElementById("reviewer-filter");
const filterButton = document.getElementById("cuisine-filter-button");
const noResultsMessage = document.getElementById("no-results-message");
const cards = document.querySelectorAll(".review-card");

function applyFilter() {
  const chosenCuisine = cuisineFilter ? cuisineFilter.value : "all";
  const chosenReviewer = reviewerFilter ? reviewerFilter.value : "all";
  let visibleCardCount = 0;

  cards.forEach((card) => {
    const cuisine = card.dataset.cuisine;
    const reviewer = card.dataset.reviewer;
    const matchesCuisine = chosenCuisine === "all" || cuisine === chosenCuisine;
    const matchesReviewer = chosenReviewer === "all" || reviewer === chosenReviewer;

    if (matchesCuisine && matchesReviewer) {
      visibleCardCount += 1;
      card.classList.add("is-hiding");
      card.style.display = "";

      setTimeout(() => {
        card.classList.remove("is-hiding");
      }, 20);
      return;
    }

    card.classList.add("is-hiding");
    card.style.display = "none";
  });

  if (noResultsMessage) {
    noResultsMessage.hidden = visibleCardCount !== 0;
  }
}

if (cuisineFilter && filterButton) {
  filterButton.addEventListener("click", applyFilter);
}
