/// <reference types="vite/client" />
const mode = import.meta.env.VITE_NODE_ENV;
const site_key = import.meta.env.VITE_SITE_KEY;
const tinymce_key = import.meta.env.VITE_TMCE_API_KEY;

export const SERVER_URL =
  mode === "development"
    ? "/back-end" //این عبارت توسط پراکسی در مود توسعه با آدرس سرور جایگزین می شود
    : "";