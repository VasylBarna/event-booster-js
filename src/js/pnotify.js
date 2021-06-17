import '@pnotify/core/dist/BrightTheme.css';
import { notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

function onFetchNotice(message) {
  notice({
    text: `${message}`,
    delay: 2000,
  });
}

function onFetchInfo() {
  info({
    text: `${message}`,
    delay: 2000,
  });
}

function onFetchSuccess() {
  success({
    text: `${message}`,
    delay: 2000,
  });
}

function onFetchError() {
  error({
    text: `No events`,
    delay: 2000,
  });
}

export default { onFetchNotice, onFetchInfo, onFetchSuccess, onFetchError };
