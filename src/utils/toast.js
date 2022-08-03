import { toast, Zoom } from 'react-toastify'

const toastOptions = {
  position: toast.POSITION.BOTTOM_CENTER,
  autoClose: false,
  hideProgressBar: true,
  draggable: false,
  transition: Zoom,
  pauseOnFocusLoss: false,
  // closeButton: false
};

const dismissToast =  async () => {
  console.log("called d")
   // Easy, right 😎
   toast.clearWaitingQueue();
  await toast.dismiss();
}

export const successToast = (message, options) => {
  if (!message) return;

  dismissToast();
  console.log("called s")

  toast.success(message, {
    className:'my-app-success-toast-message',
    ...toastOptions,
    ...options
  })
}

export const errorToast =  (message, options) => {
  if (!message) return

  dismissToast();

  toast.error(message, {
    className:'my-app-error-toast-message',
    ...toastOptions,
    ...options
  })
}

export const infoToast =  (message, options) => {
  if (!message) return

  dismissToast();

  toast.info(message, {
    className:'my-app-info-toast-message',
    ...toastOptions,
    ...options
  })
}