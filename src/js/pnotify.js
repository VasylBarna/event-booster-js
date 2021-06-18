import '@pnotify/core/dist/BrightTheme.css';
import { notice, info, success, error } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/core/dist/PNotify.css';

function onFetchNotice(message) {
  notice({
    text: `${message}`,
    delay: 2000,
  });
}

function onFetchInfo(message) {
  info({
    text: `${message}`,
    delay: 2000,
  });
}

function onFetchSuccess(message) {
  success({
    text: `${message}`,
    delay: 2000,
  });
}

function onFetchError(message) {
  error({
    text: `${message}`,
    delay: 2000,
  });
}

export default { onFetchNotice, onFetchInfo, onFetchSuccess, onFetchError };
