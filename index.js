function _0x491f() {
  const _0x324943 = [
    'querySelectorAll',
    'log',
    'button[data-state=\x22closed\x22]\x20.ml-4.flex.gap-4.items-center\x20svg',
    '2552226QZnjzL',
    'length',
    '7005140ACApVl',
    'dispatchEvent',
    '8uLlagV',
    'click',
    '786051LhqycK',
    'Popup\x20closed.',
    '1664339ufOfEg',
    '2111648Xcmtzn',
    'div[data-state=\x22closed\x22]\x20.cursor-pointer',
    '10707848WhfrHb',
    'forEach',
    '48pcxlIZ',
    'svg[data-state=\x22closed\x22]\x20.ml-4.flex.gap-4.items-center',
    '4187295XFlcQh',
    'button.absolute.rounded-sm.opacity-70.right-5.top-6.sm\x5c:right-9.sm\x5c:top-9',
    'querySelector',
  ];
  _0x491f = function () {
    return _0x324943;
  };
  return _0x491f();
}
const _0x4e8cd4 = _0x3b4b;
(function (_0x34602e, _0x404f6a) {
  const _0xcb2202 = _0x3b4b,
    _0x531e66 = _0x34602e();
  while (!![]) {
    try {
      const _0x4651c3 =
        parseInt(_0xcb2202(0xc0)) / 0x1 +
        -parseInt(_0xcb2202(0xc1)) / 0x2 +
        (-parseInt(_0xcb2202(0xcd)) / 0x3) *
          (-parseInt(_0xcb2202(0xbc)) / 0x4) +
        -parseInt(_0xcb2202(0xba)) / 0x5 +
        (-parseInt(_0xcb2202(0xc5)) / 0x6) * (parseInt(_0xcb2202(0xbe)) / 0x7) +
        parseInt(_0xcb2202(0xc3)) / 0x8 +
        -parseInt(_0xcb2202(0xc7)) / 0x9;
      if (_0x4651c3 === _0x404f6a) break;
      else _0x531e66['push'](_0x531e66['shift']());
    } catch (_0x47d89a) {
      _0x531e66['push'](_0x531e66['shift']());
    }
  }
})(_0x491f, 0xd7c8d);
const elementsToClick = document['querySelectorAll'](_0x4e8cd4(0xc2)),
  refreshButtonSvgClass = _0x4e8cd4(0xcc),
  waitForClass = '.text-size-14.font-bold',
  successIconClass = _0x4e8cd4(0xc6),
  claimButtonSelector =
    'button.inline-flex.bg-primary:not([disabled]).font-bold.px-6.w-full',
  closeButtonSelector = _0x4e8cd4(0xc8);
function _0x3b4b(_0xf49042, _0x4cf5eb) {
  const _0x491fab = _0x491f();
  return (
    (_0x3b4b = function (_0x3b4be0, _0x4909d2) {
      _0x3b4be0 = _0x3b4be0 - 0xb9;
      let _0x2ec628 = _0x491fab[_0x3b4be0];
      return _0x2ec628;
    }),
    _0x3b4b(_0xf49042, _0x4cf5eb)
  );
}
function clickElement(_0x423906) {
  const _0x44c501 = _0x4e8cd4,
    _0x171cf0 = new MouseEvent(_0x44c501(0xbd), {
      view: window,
      bubbles: !![],
      cancelable: !![],
    });
  _0x423906[_0x44c501(0xbb)](_0x171cf0);
}
function closePopup() {
  const _0x5412e5 = _0x4e8cd4,
    _0x13f687 = document[_0x5412e5(0xc9)](closeButtonSelector);
  _0x13f687 &&
    (clickElement(_0x13f687), console[_0x5412e5(0xcb)](_0x5412e5(0xbf)));
}
function checkClaimButton() {
  const _0x1d797e = _0x4e8cd4,
    _0x4f11ad = document[_0x1d797e(0xc9)](claimButtonSelector);
  if (_0x4f11ad)
    return (
      clickElement(_0x4f11ad),
      console['log'](
        'Claim\x20button\x20clicked.\x20Subscribe:\x20https://t.me/HappyCuanAirdrop'
      ),
      setTimeout(closePopup, 0x7d0),
      !![]
    );
  return ![];
}
function checkConditionsAndRetry() {
  const _0x469b5d = _0x4e8cd4,
    _0x35308f = document[_0x469b5d(0xca)](waitForClass),
    _0x210329 = document[_0x469b5d(0xca)](successIconClass);
  _0x35308f[_0x469b5d(0xb9)] > 0x0 ||
  _0x210329[_0x469b5d(0xb9)] !== elementsToClick[_0x469b5d(0xb9)]
    ? setTimeout(processElements, 0xea60)
    : checkClaimButton();
}
function processElements() {
  alert(
    'Galxe\x20Auto\x20Complete\x20tasks\x20–\x20Happy\x20Cuan\x20Airdrop\x0a\x0aSubscribe:\x20https://t.me/HappyCuanAirdrop'
  ),
    !checkClaimButton() &&
      (elementsToClick['forEach'](clickElement),
      setTimeout(() => {
        const _0x40235c = _0x3b4b,
          _0x13a196 = document['querySelectorAll'](refreshButtonSvgClass);
        _0x13a196[_0x40235c(0xc4)](clickElement),
          setTimeout(checkConditionsAndRetry, 0x7d0);
      }, 0x7d0));
}
processElements();
