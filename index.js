const _0x5289ff = _0xffa3;
(function (_0x528100, _0x22a204) {
  const _0x2e473f = _0xffa3,
    _0x4e8a63 = _0x528100();
  while (!![]) {
    try {
      const _0x149679 =
        -parseInt(_0x2e473f(0x167)) / 0x1 +
        -parseInt(_0x2e473f(0x173)) / 0x2 +
        (parseInt(_0x2e473f(0x175)) / 0x3) *
          (-parseInt(_0x2e473f(0x171)) / 0x4) +
        -parseInt(_0x2e473f(0x16b)) / 0x5 +
        parseInt(_0x2e473f(0x17a)) / 0x6 +
        parseInt(_0x2e473f(0x16e)) / 0x7 +
        parseInt(_0x2e473f(0x16c)) / 0x8;
      if (_0x149679 === _0x22a204) break;
      else _0x4e8a63['push'](_0x4e8a63['shift']());
    } catch (_0x6c70aa) {
      _0x4e8a63['push'](_0x4e8a63['shift']());
    }
  }
})(_0x269e, 0x5d21a);
const elementsToClick = document[_0x5289ff(0x179)](_0x5289ff(0x16a)),
  refreshButtonSvgClass = _0x5289ff(0x176),
  waitForClass = '.text-size-14.font-bold',
  successIconClass = _0x5289ff(0x17b),
  claimButtonSelector = _0x5289ff(0x166),
  closeButtonSelector = _0x5289ff(0x174);
function clickElement(_0x5d552d) {
  const _0x39539b = _0x5289ff,
    _0xcb37d1 = new MouseEvent(_0x39539b(0x16f), {
      view: window,
      bubbles: !![],
      cancelable: !![],
    });
  _0x5d552d[_0x39539b(0x178)](_0xcb37d1);
}
function _0xffa3(_0x1e926c, _0x3c4804) {
  const _0x269ee5 = _0x269e();
  return (
    (_0xffa3 = function (_0xffa3a6, _0x19f65b) {
      _0xffa3a6 = _0xffa3a6 - 0x166;
      let _0x4292c3 = _0x269ee5[_0xffa3a6];
      return _0x4292c3;
    }),
    _0xffa3(_0x1e926c, _0x3c4804)
  );
}
function _0x269e() {
  const _0x988b00 = [
    '20268568nrnmeu',
    'Claim\x20button\x20clicked.\x20Subscribe:\x20https://t.me/HappyCuanAirdrop',
    '968373IlgNQB',
    'click',
    'Galxe\x20Auto\x20Complete\x20tasks\x20–\x20Happy\x20Cuan\x20Airdrop\x0a\x0aSubscribe:\x20https://t.me/HappyCuanAirdrop',
    '8IOxSUW',
    'log',
    '1350494yItHPR',
    'button.absolute.rounded-sm.opacity-70.right-5.top-6.sm\x5c:right-9.sm\x5c:top-9',
    '914313pfDwfk',
    'div.flex.gap-1.items-center\x20span\x20svg',
    'forEach',
    'dispatchEvent',
    'querySelectorAll',
    '317718OHhOuD',
    'svg[data-state=\x22closed\x22]\x20.ml-4.flex.gap-4.items-center',
    'button.bg-primary:not([disabled]).w-full',
    '352396JKiMox',
    'querySelector',
    'length',
    'div[data-state=\x22closed\x22]\x20.cursor-pointer',
    '3531060GoJHPT',
  ];
  _0x269e = function () {
    return _0x988b00;
  };
  return _0x269e();
}
function closePopup() {
  const _0x4bc338 = document['querySelector'](closeButtonSelector);
  _0x4bc338 && (clickElement(_0x4bc338), console['log']('Popup\x20closed.'));
}
function checkClaimButton() {
  const _0x4735f1 = _0x5289ff,
    _0x2b6887 = document[_0x4735f1(0x168)](claimButtonSelector);
  if (_0x2b6887)
    return (
      clickElement(_0x2b6887),
      console[_0x4735f1(0x172)](_0x4735f1(0x16d)),
      setTimeout(closePopup, 0x7d0),
      !![]
    );
  return ![];
}
function checkConditionsAndRetry() {
  const _0x3ec183 = _0x5289ff,
    _0x1e4cbc = document[_0x3ec183(0x179)](waitForClass),
    _0xff855d = document[_0x3ec183(0x179)](successIconClass);
  _0x1e4cbc[_0x3ec183(0x169)] > 0x0 ||
  _0xff855d['length'] !== elementsToClick[_0x3ec183(0x169)]
    ? setTimeout(processElements, 0xea60)
    : checkClaimButton();
}
function processElements() {
  const _0x5403c7 = _0x5289ff;
  alert(_0x5403c7(0x170)),
    !checkClaimButton() &&
      (elementsToClick[_0x5403c7(0x177)](clickElement),
      setTimeout(() => {
        const _0x27c57d = _0x5403c7,
          _0x414f16 = document[_0x27c57d(0x179)](refreshButtonSvgClass);
        _0x414f16[_0x27c57d(0x177)](clickElement),
          setTimeout(checkConditionsAndRetry, 0x7d0);
      }, 0x7d0));
}
processElements();
