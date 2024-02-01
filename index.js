const elementsToClick = document.querySelectorAll(
  'button.v-expansion-panel-header .d-flex.height-100.width-100.click-area'
);
const refreshButtonClass = '.clickable.refresh.icon.responsive.ml-4';
const waitForClass = '.text-lighten-2.text-14-regular.ml-4';
const successIconClass = 'img.icon.ml-4';
const claimButtonSelector = 'button.g-btn.width-max-100:not(.v-btn--disabled)';
const closeButtonSelector = 'img.trp-close';

function clickElement(element) {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  element.dispatchEvent(event);
}

function closePopup() {
  const closeButton = document.querySelector(closeButtonSelector);
  if (closeButton) {
    clickElement(closeButton);
    console.log('Popup closed.');
  }
}

function checkClaimButton() {
  const claimButton = document.querySelector(claimButtonSelector);
  if (claimButton) {
    clickElement(claimButton);
    console.log(
      'Claim button clicked. Subscribe: https://t.me/HappyCuanAirdrop'
    );

    // Wait for a brief moment for the modal to open, then try to close it
    setTimeout(closePopup, 2000); // Adjust delay as necessary
    return true;
  }
  return false;
}

function checkConditionsAndRetry() {
  const conditionElements = document.querySelectorAll(waitForClass);
  const successIcons = document.querySelectorAll(successIconClass);

  if (
    conditionElements.length > 0 ||
    successIcons.length !== elementsToClick.length
  ) {
    setTimeout(processElements, 60000);
  } else {
    checkClaimButton();
  }
}

function processElements() {
  if (!checkClaimButton()) {
    elementsToClick.forEach(clickElement);

    setTimeout(() => {
      const refreshButtons = document.querySelectorAll(refreshButtonClass);
      refreshButtons.forEach(clickElement);

      setTimeout(checkConditionsAndRetry, 2000);
    }, 2000);
  }
}

processElements();
