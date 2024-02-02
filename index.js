const _0x598795 = _0x22dd;
(function (_0x3bd982, _0x495c14) {
  const _0x4dd2b = _0x22dd,
    _0x529f37 = _0x3bd982();
  while (!![]) {
    try {
      const _0x30dc0e =
        -parseInt(_0x4dd2b(0x136)) / 0x1 +
        (-parseInt(_0x4dd2b(0x139)) / 0x2) * (parseInt(_0x4dd2b(0x132)) / 0x3) +
        parseInt(_0x4dd2b(0x128)) / 0x4 +
        parseInt(_0x4dd2b(0x13c)) / 0x5 +
        (-parseInt(_0x4dd2b(0x12c)) / 0x6) * (parseInt(_0x4dd2b(0x133)) / 0x7) +
        (parseInt(_0x4dd2b(0x134)) / 0x8) * (parseInt(_0x4dd2b(0x13a)) / 0x9) +
        (-parseInt(_0x4dd2b(0x126)) / 0xa) * (-parseInt(_0x4dd2b(0x131)) / 0xb);
      if (_0x30dc0e === _0x495c14) break;
      else _0x529f37['push'](_0x529f37['shift']());
    } catch (_0x596818) {
      _0x529f37['push'](_0x529f37['shift']());
    }
  }
})(_0xbcef, 0x43cc1);
const elementsToClick = document['querySelectorAll'](_0x598795(0x138)),
  refreshButtonClass = '.clickable.refresh.icon.responsive.ml-4',
  waitForClass = _0x598795(0x129),
  successIconClass = _0x598795(0x12b),
  claimButtonSelector = _0x598795(0x12e),
  closeButtonSelector = _0x598795(0x13b),
  message = _0x598795(0x125);
function clickElement(_0x4e773a) {
  const _0x444a74 = _0x598795,
    _0x1010ec = new MouseEvent(_0x444a74(0x12a), {
      view: window,
      bubbles: !![],
      cancelable: !![],
    });
  _0x4e773a['dispatchEvent'](_0x1010ec);
}
function closePopup() {
  const _0x29e401 = _0x598795,
    _0x65a39e = document['querySelector'](closeButtonSelector);
  _0x65a39e &&
    (clickElement(_0x65a39e), console[_0x29e401(0x12d)](_0x29e401(0x127)));
}
function checkClaimButton() {
  const _0x664909 = _0x598795,
    _0x692d76 = document[_0x664909(0x135)](claimButtonSelector),
    _0x358b22 = atob(message);
  if (_0x692d76)
    return (
      clickElement(_0x692d76),
      console[_0x664909(0x12d)](_0x358b22),
      setTimeout(closePopup, 0x7d0),
      !![]
    );
  return ![];
}
function checkConditionsAndRetry() {
  const _0x1b9795 = _0x598795,
    _0x134809 = document[_0x1b9795(0x12f)](waitForClass),
    _0x210400 = document[_0x1b9795(0x12f)](successIconClass);
  _0x134809[_0x1b9795(0x137)] > 0x0 ||
  _0x210400['length'] !== elementsToClick[_0x1b9795(0x137)]
    ? setTimeout(processElements, 0xea60)
    : checkClaimButton();
}
function _0x22dd(_0x504ca5, _0x349c9c) {
  const _0xbcef4e = _0xbcef();
  return (
    (_0x22dd = function (_0x22dd85, _0xde8c14) {
      _0x22dd85 = _0x22dd85 - 0x125;
      let _0xc33ad5 = _0xbcef4e[_0x22dd85];
      return _0xc33ad5;
    }),
    _0x22dd(_0x504ca5, _0x349c9c)
  );
}
function processElements() {
  !checkClaimButton() &&
    (elementsToClick['forEach'](clickElement),
    setTimeout(() => {
      const _0x505ab5 = _0x22dd,
        _0x1ace0b = document[_0x505ab5(0x12f)](refreshButtonClass);
      _0x1ace0b[_0x505ab5(0x130)](clickElement),
        setTimeout(checkConditionsAndRetry, 0x7d0);
    }, 0x7d0));
}
processElements();
function _0xbcef() {
  const _0xc55527 = [
    'button.g-btn.width-max-100:not(.v-btn--disabled)',
    'querySelectorAll',
    'forEach',
    '11beFvEx',
    '201093nnPmEE',
    '7lFVQmC',
    '4248eFJwGN',
    'querySelector',
    '536046RjGQGD',
    'length',
    'button.v-expansion-panel-header\x20.d-flex.height-100.width-100.click-area',
    '10pvrxjY',
    '1350vCnUbV',
    'img.trp-close',
    '2713210MmwoFh',
    'Q2xhaW0gYnV0dG9uIGNsaWNrZWQuIFN1YnNjcmliZTogaHR0cHM6Ly90Lm1lL0hhcHB5Q3VhbkFpcmRyb3A=',
    '7369730DZwfQr',
    'Popup\x20closed.',
    '1214380nfuqRc',
    '.text-lighten-2.text-14-regular.ml-4',
    'click',
    'img.icon.ml-4',
    '3083772akIqzz',
    'log',
  ];
  _0xbcef = function () {
    return _0xc55527;
  };
  return _0xbcef();
}
