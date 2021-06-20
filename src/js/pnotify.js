import '@pnotify/core/dist/BrightTheme.css';
import { notice, info, success, error } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/core/dist/PNotify.css';

function pnotifyNotice(message) {
  notice({
    text: `${message}`,
    delay: 4000,
    addClass: 'pnotify-notice',
    width: '320px',
  });
}

function pnotifyInfo(message) {
  info({
    text: `${message}`,
    delay: 4000,
    addClass: 'pnotify-info',
    width: '320px',
  });
}

function pnotifySuccess(message) {
  success({
    text: `${message}`,
    delay: 4000,
    addClass: 'pnotify-success',
    width: '320px',
  });
}

function pnotifyError(message) {
  error({
    text: `${message}`,
    delay: 4000,
    addClass: 'pnotify-error',
    width: '320px',
  });
}

export default { pnotifyNotice, pnotifyInfo, pnotifySuccess, pnotifyError };
