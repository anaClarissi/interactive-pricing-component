const plans = [
  { pageviews: '10K',  price: 8  },
  { pageviews: '50K',  price: 12 },
  { pageviews: '100K', price: 16 },
  { pageviews: '500K', price: 24 },
  { pageviews: '1M',   price: 36 },
];

const pageRange = document.querySelector("#page-range");

const pageViews = document.querySelector("#page-views");

const viewPrice = document.querySelector("#view-price");

const switchBilling = document.querySelector("#switch-billing");



pageRange.addEventListener("input", () => {

    updatePlan();

    updateRangeBar();

});

switchBilling.addEventListener("input", updateBilling)


function updatePlan() {

    const index = Number(pageRange.value);

    const currentPlan = plans[index];

    pageViews.textContent = currentPlan.pageviews;
    
    if (switchBilling.checked) {

        const discount = 0.75;

        const price = (currentPlan.price * 12) * discount;

        viewPrice.textContent = `$${price.toFixed(2)}`;

        return;

    }


    viewPrice.textContent = `$${currentPlan.price.toFixed(2)}`;

}

function updateBilling() {

    let billing = switchBilling.checked ? "year" : "month";

    const billingText = document.querySelector("#billing");

    billingText.textContent = ` / ${billing}`;

    updatePlan();

}

function updateRangeBar() {

    const min = pageRange.min || 0;

    const max = pageRange.max || 0;

    const percentage = ((pageRange.value - min) / (max - min)) * 100;

    pageRange.style.setProperty("--progress", `${percentage}%`)

}

updateRangeBar();

updatePlan();

updateBilling();