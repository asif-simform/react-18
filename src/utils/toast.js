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

const dismissToast = (containerId) => {
  toast.clearWaitingQueue();
  toast.dismiss();
}

export const successToast = (message, options) => {
  if (!message) return;

  dismissToast(options.containerId);

  toast.success(message, {
    className:'my-app-success-toast-message',
    ...toastOptions,
    ...options
  })
}

export const errorToast =  (message, options) => {
  if (!message) return

  dismissToast(options.containerId);

  toast.error(message, {
    className:'my-app-error-toast-message',
    ...toastOptions,
    ...options
  })
}

export const infoToast =  (message, options) => {
  if (!message) return

  dismissToast(options.containerId);

  toast.info(message, {
    className:'my-app-info-toast-message',
    ...toastOptions,
    ...options
  })
}