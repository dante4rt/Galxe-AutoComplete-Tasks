const _0x40a92e = _0xf1c9;
(function (_0x523bba, _0x177904) {
  const _0x392339 = _0xf1c9,
    _0xf22560 = _0x523bba();
  while (!![]) {
    try {
      const _0x278a6e =
        (-parseInt(_0x392339(0x179)) / 0x1) *
          (-parseInt(_0x392339(0x183)) / 0x2) +
        -parseInt(_0x392339(0x189)) / 0x3 +
        -parseInt(_0x392339(0x180)) / 0x4 +
        -parseInt(_0x392339(0x181)) / 0x5 +
        parseInt(_0x392339(0x186)) / 0x6 +
        parseInt(_0x392339(0x187)) / 0x7 +
        (-parseInt(_0x392339(0x182)) / 0x8) *
          (-parseInt(_0x392339(0x188)) / 0x9);
      if (_0x278a6e === _0x177904) break;
      else _0xf22560['push'](_0xf22560['shift']());
    } catch (_0x3dd15e) {
      _0xf22560['push'](_0xf22560['shift']());
    }
  }
})(_0x4c89, 0x5d7cf);
const elementsToClick = document[_0x40a92e(0x17b)](
    'div[data-state=\x22closed\x22]\x20.cursor-pointer'
  ),
  refreshButtonSvgClass = _0x40a92e(0x17c),
  waitForClass = '.text-size-14.font-bold',
  successIconClass = _0x40a92e(0x17d),
  claimButtonSelector =
    'button.inline-flex.bg-primary:not([disabled]).font-bold.px-6.w-full',
  closeButtonSelector = _0x40a92e(0x178);
function clickElement(_0x1b2f43) {
  const _0x306027 = _0x40a92e,
    _0x39ce84 = new MouseEvent(_0x306027(0x17f), {
      view: window,
      bubbles: !![],
      cancelable: !![],
    });
  _0x1b2f43[_0x306027(0x18c)](_0x39ce84);
}
function _0x4c89() {
  const _0x33bcfa = [
    'dispatchEvent',
    'button.absolute.rounded-sm.opacity-70.right-5.top-6.sm\x5c:right-9.sm\x5c:top-9',
    '78311JDvBlx',
    'forEach',
    'querySelectorAll',
    'button[data-state=\x22closed\x22]\x20.ml-5.flex.gap-4.items-center\x20svg',
    'svg[data-state=\x22closed\x22]\x20.ml-4.flex.gap-4.items-center',
    'log',
    'click',
    '461476TtwraV',
    '2159150EDGAXW',
    '168zdSFSH',
    '4sVfrjc',
    'Galxe\x20Auto\x20Complete\x20tasks\x20–\x20Happy\x20Cuan\x20Airdrop\x0a\x0aSubscribe:\x20https://t.me/HappyCuanAirdrop',
    'Popup\x20closed.',
    '4085940cqRFSz',
    '296982aZnxvK',
    '97731gjstXG',
    '533853OldFqe',
    'Claim\x20button\x20clicked.\x20Subscribe:\x20https://t.me/HappyCuanAirdrop',
    'length',
  ];
  _0x4c89 = function () {
    return _0x33bcfa;
  };
  return _0x4c89();
}
function closePopup() {
  const _0x26657e = _0x40a92e,
    _0x2c98eb = document['querySelector'](closeButtonSelector);
  _0x2c98eb &&
    (clickElement(_0x2c98eb), console[_0x26657e(0x17e)](_0x26657e(0x185)));
}
function checkClaimButton() {
  const _0x555a19 = _0x40a92e,
    _0x2e881b = document['querySelector'](claimButtonSelector);
  if (_0x2e881b)
    return (
      clickElement(_0x2e881b),
      console[_0x555a19(0x17e)](_0x555a19(0x18a)),
      setTimeout(closePopup, 0x7d0),
      !![]
    );
  return ![];
}
function checkConditionsAndRetry() {
  const _0x13393f = _0x40a92e,
    _0x2bc00e = document[_0x13393f(0x17b)](waitForClass),
    _0x4858cc = document['querySelectorAll'](successIconClass);
  _0x2bc00e[_0x13393f(0x18b)] > 0x0 ||
  _0x4858cc[_0x13393f(0x18b)] !== elementsToClick[_0x13393f(0x18b)]
    ? setTimeout(processElements, 0xea60)
    : checkClaimButton();
}
function _0xf1c9(_0x35617c, _0x492cee) {
  const _0x4c8915 = _0x4c89();
  return (
    (_0xf1c9 = function (_0xf1c9f0, _0x3a4a92) {
      _0xf1c9f0 = _0xf1c9f0 - 0x178;
      let _0x4dc4cc = _0x4c8915[_0xf1c9f0];
      return _0x4dc4cc;
    }),
    _0xf1c9(_0x35617c, _0x492cee)
  );
}
function processElements() {
  const _0x3ef9e0 = _0x40a92e;
  alert(_0x3ef9e0(0x184)),
    !checkClaimButton() &&
      (elementsToClick[_0x3ef9e0(0x17a)](clickElement),
      setTimeout(() => {
        const _0x58e06a = _0x3ef9e0,
          _0x2b05d9 = document[_0x58e06a(0x17b)](refreshButtonSvgClass);
        _0x2b05d9[_0x58e06a(0x17a)](clickElement),
          setTimeout(checkConditionsAndRetry, 0x7d0);
      }, 0x7d0));
}
processElements();
