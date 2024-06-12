const _0x36922a = _0x497f;
function _0x5274() {
  const _0x516b42 = [
    'button.inline-flex.bg-primary:not([disabled])',
    'button.absolute.rounded-sm.opacity-70.right-5.top-6.sm\x5c:right-9.sm\x5c:top-9',
    '.text-size-14.font-bold',
    '35gQwDne',
    '277620yrXTYP',
    '693212uRArZT',
    '10XiPEYc',
    'length',
    'querySelector',
    '263061TXsVpZ',
    'log',
    '9xXLime',
    '562428MoGfya',
    'querySelectorAll',
    'click',
    '443272wviMjY',
    '2055752JchJhQ',
    'dispatchEvent',
    '6919KBZYzm',
    'svg[data-state=\x22closed\x22]\x20.ml-4.flex.gap-4.items-center',
    '12030eRCjzt',
    'forEach',
  ];
  _0x5274 = function () {
    return _0x516b42;
  };
  return _0x5274();
}
(function (_0x2cbd1c, _0x13e489) {
  const _0x1e795c = _0x497f,
    _0x46de30 = _0x2cbd1c();
  while (!![]) {
    try {
      const _0x4161ea =
        -parseInt(_0x1e795c(0x190)) / 0x1 +
        parseInt(_0x1e795c(0x18c)) / 0x2 +
        parseInt(_0x1e795c(0x193)) / 0x3 +
        (-parseInt(_0x1e795c(0x196)) / 0x4) *
          (-parseInt(_0x1e795c(0x18d)) / 0x5) +
        (-parseInt(_0x1e795c(0x18b)) / 0x6) *
          (-parseInt(_0x1e795c(0x1a0)) / 0x7) +
        (parseInt(_0x1e795c(0x197)) / 0x8) *
          (parseInt(_0x1e795c(0x192)) / 0x9) +
        (-parseInt(_0x1e795c(0x19b)) / 0xa) *
          (parseInt(_0x1e795c(0x199)) / 0xb);
      if (_0x4161ea === _0x13e489) break;
      else _0x46de30['push'](_0x46de30['shift']());
    } catch (_0x49686e) {
      _0x46de30['push'](_0x46de30['shift']());
    }
  }
})(_0x5274, 0x36c21);
const elementsToClick = document[_0x36922a(0x194)](
    'div[data-state=\x22closed\x22]\x20.cursor-pointer'
  ),
  refreshButtonClass =
    'button[data-state=\x22closed\x22]\x20.ml-4.flex.gap-4.items-center',
  waitForClass = _0x36922a(0x19f),
  successIconClass = _0x36922a(0x19a),
  claimButtonSelector = _0x36922a(0x19d),
  closeButtonSelector = _0x36922a(0x19e);
function clickElement(_0x2208d8) {
  const _0x539b18 = _0x36922a,
    _0x3c7c78 = new MouseEvent(_0x539b18(0x195), {
      view: window,
      bubbles: !![],
      cancelable: !![],
    });
  _0x2208d8[_0x539b18(0x198)](_0x3c7c78);
}
function closePopup() {
  const _0x4249bb = _0x36922a,
    _0x2da1ac = document[_0x4249bb(0x18f)](closeButtonSelector);
  _0x2da1ac &&
    (clickElement(_0x2da1ac), console[_0x4249bb(0x191)]('Popup\x20closed.'));
}
function checkClaimButton() {
  const _0x2e8229 = _0x36922a,
    _0x49c844 = document['querySelector'](claimButtonSelector);
  if (_0x49c844)
    return (
      clickElement(_0x49c844),
      console[_0x2e8229(0x191)](
        'Claim\x20button\x20clicked.\x20Subscribe:\x20https://t.me/HappyCuanAirdrop'
      ),
      setTimeout(closePopup, 0x7d0),
      !![]
    );
  return ![];
}
function checkConditionsAndRetry() {
  const _0x2eae8d = _0x36922a,
    _0x6dd6b3 = document[_0x2eae8d(0x194)](waitForClass),
    _0x605121 = document[_0x2eae8d(0x194)](successIconClass);
  _0x6dd6b3[_0x2eae8d(0x18e)] > 0x0 ||
  _0x605121[_0x2eae8d(0x18e)] !== elementsToClick['length']
    ? setTimeout(processElements, 0xea60)
    : checkClaimButton();
}
function _0x497f(_0xa67890, _0x1f3538) {
  const _0x527456 = _0x5274();
  return (
    (_0x497f = function (_0x497fd2, _0x7ff795) {
      _0x497fd2 = _0x497fd2 - 0x18b;
      let _0x5f2151 = _0x527456[_0x497fd2];
      return _0x5f2151;
    }),
    _0x497f(_0xa67890, _0x1f3538)
  );
}
function processElements() {
  const _0x20a19a = _0x36922a;
  !checkClaimButton() &&
    (elementsToClick[_0x20a19a(0x19c)](clickElement),
    setTimeout(() => {
      const _0x3c2249 = _0x20a19a,
        _0x5a20c6 = document[_0x3c2249(0x194)](refreshButtonClass);
      _0x5a20c6[_0x3c2249(0x19c)](clickElement),
        setTimeout(checkConditionsAndRetry, 0x7d0);
    }, 0x7d0));
}
processElements();
