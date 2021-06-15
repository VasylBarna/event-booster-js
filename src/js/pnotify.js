import '@pnotify/core/dist/BrightTheme.css';
import { notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

function onFetchNotice() {
  notice({
    title: "I'm a notice.",
    delay: 2500,
    styling: 'brighttheme',
  });
}

function onFetchInfo() {
  info({
    title: "I'm an info message.",
    delay: 2500,
    styling: 'brighttheme',
  });
}

function onFetchSuccess() {
  success({
    title: "I'm a success message.",
    delay: 2500,
    styling: 'brighttheme',
  });
}

function onFetchError() {
  error({
    title: "I'm an error message.",
    delay: 2500,
    styling: 'brighttheme',
  });
}

export { onFetchNotice, onFetchInfo, onFetchSuccess, onFetchError };
