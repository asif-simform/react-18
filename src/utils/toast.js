import { toast, Zoom } from 'react-toastify'

const toastOptions = {
  position: toast.POSITION.BOTTOM_CENTER,
  autoClose: false,
  hideProgressBar: true,
  draggable: false,
  transition: Zoom,
  pauseOnFocusLoss: false,
  closeOnClick: true,
  closeButton: false
};

const dismissToast =  async () => {
  // toast.clearWaitingQueue();
  // await toast.dismiss();
}

export const successToast = (message, options) => {
  console.log("successToast")
  if (!message) return;

  dismissToast();

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