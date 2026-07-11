export const openWhatsApp = (message = "") => {
  window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { message } }));
};

export const sendBookingToWhatsApp = (name, phone, address, message = "") => {
  let text = `Hello Pressivo! I would like to book a service.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Address:* ${address}`;
  if (message) {
    text += `\n\n*Details:* ${message}`;
  }
  const encoded = encodeURIComponent(text);
  window.open(`https://wa.me/917290909369?text=${encoded}`, "_blank", "noopener,noreferrer");
};

export const PHONE_NUMBER_1 = "7290909369";
export const PHONE_NUMBER_2 = "9560863381";
export const EMAIL = "info@pressivo.in";
export const ADDRESS = "Shop No. 40, 1st Floor, Suncity Avenue, Sector 102, Gurgaon 122006";
