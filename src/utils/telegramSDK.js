import WebApp from '@twa-dev/sdk';

export const initTelegramSDK = () => {
  WebApp.ready();
  WebApp.expand();
  
  const themeParams = WebApp.themeParams;
  
  if (themeParams.bg_color) {
    document.documentElement.style.setProperty('--tg-theme-bg-color', themeParams.bg_color);
  }
  if (themeParams.text_color) {
    document.documentElement.style.setProperty('--tg-theme-text-color', themeParams.text_color);
  }
  if (themeParams.hint_color) {
    document.documentElement.style.setProperty('--tg-theme-hint-color', themeParams.hint_color);
  }
  if (themeParams.link_color) {
    document.documentElement.style.setProperty('--tg-theme-link-color', themeParams.link_color);
  }
  if (themeParams.button_color) {
    document.documentElement.style.setProperty('--tg-theme-button-color', themeParams.button_color);
  }
  if (themeParams.button_text_color) {
    document.documentElement.style.setProperty('--tg-theme-button-text-color', themeParams.button_text_color);
  }
};

export const showBackButton = (onClick) => {
  WebApp.BackButton.show();
  WebApp.BackButton.onClick(onClick);
};

export const hideBackButton = () => {
  WebApp.BackButton.offClick();
  WebApp.BackButton.hide();
};

export const sendData = (data) => {
  WebApp.sendData(JSON.stringify(data));
};

export const closeWebApp = () => {
  WebApp.close();
};
