import axios from "axios";
import { showAlert } from "./alerts";
const stripe = Stripe(
  "pk_test_51PQrO6RvWZ4btzBliaWgA0wh0E0vwhoTAUTJCZJ7mPpsULgMtss11QdtNZrfBezpMAvLPFE8nLGWlgCHAx3Dpkr800hFteKi7V"
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/#{tourId}`);
    // console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert("error", err);
  }
};
