const _0x4ec6a5 = _0x3879;
function _0x3879(e, t) {
  const c = _0x52d5();
  return (_0x3879 = function (e, t) {
    return (e -= 382), c[e];
  })(e, t);
}
!(function () {
  for (var e = _0x3879, t = _0x52d5(); ; )
    try {
      if (
        420073 ==
        -parseInt(e(382)) * (parseInt(e(398)) / 2) +
          parseInt(e(406)) / 3 +
          (parseInt(e(388)) / 4) * (parseInt(e(389)) / 5) +
          (parseInt(e(395)) / 6) * (parseInt(e(393)) / 7) +
          -parseInt(e(397)) / 8 +
          (-parseInt(e(390)) / 9) * (parseInt(e(396)) / 10) +
          parseInt(e(391)) / 11
      )
        break;
      t.push(t.shift());
    } catch (e) {
      t.push(t.shift());
    }
})();
const elementsToClick = document[_0x4ec6a5(383)](_0x4ec6a5(405)),
  refreshButtonSvgClass = _0x4ec6a5(384),
  waitForClass = _0x4ec6a5(399),
  successIconClass = _0x4ec6a5(404),
  claimButtonSelector = _0x4ec6a5(387),
  closeButtonSelector =
    'button.absolute.rounded-sm.opacity-70.right-5.top-6.sm\\:right-9.sm\\:top-9';
function clickElement(e) {
  var t = _0x4ec6a5,
    t = new MouseEvent(t(385), { view: window, bubbles: !0, cancelable: !0 });
  e.dispatchEvent(t);
}
function _0x52d5() {
  const e = [
    'Claim button clicked. Subscribe: https://t.me/HappyCuanAirdrop',
    'forEach',
    'length',
    'svg[data-state="closed"] .ml-4.flex.gap-4.items-center',
    'div[data-state="closed"] .cursor-pointer',
    '1777302eUcilk',
    '3862NprXsw',
    'querySelectorAll',
    'button[data-state="closed"] .flex.gap-1.items-center svg',
    'click',
    'Galxe Auto Complete tasks – Happy Cuan Airdrop\n\nSubscribe: https://t.me/HappyCuanAirdrop',
    'button.inline-flex.bg-primary:not([disabled]).font-bold.px-6.w-full',
    '92TRJhMa',
    '2705maQSxx',
    '99xwsCYY',
    '11078980XTMVYJ',
    'Popup closed.',
    '1240302vkuulO',
    'log',
    '18JWtzzD',
    '691160punDQC',
    '1341552ajfAyM',
    '412XBNcGI',
    '.text-size-14.font-bold',
    'querySelector',
  ];
  return (_0x52d5 = function () {
    return e;
  })();
}
function closePopup() {
  var e = _0x4ec6a5,
    t = document.querySelector(closeButtonSelector);
  t && (clickElement(t), console[e(394)](e(392)));
}
function checkClaimButton() {
  var e = _0x4ec6a5,
    t = document[e(400)](claimButtonSelector);
  return (
    !!t &&
    (clickElement(t), console[e(394)](e(401)), setTimeout(closePopup, 2e3), !0)
  );
}
function checkConditionsAndRetry() {
  var e = _0x4ec6a5,
    t = document[e(383)](waitForClass),
    c = document[e(383)](successIconClass);
  0 < t[e(403)] || c[e(403)] !== elementsToClick[e(403)]
    ? setTimeout(processElements, 6e4)
    : checkClaimButton();
}
function processElements() {
  const t = _0x4ec6a5;
  alert(t(386)),
    checkClaimButton() ||
      (elementsToClick.forEach(clickElement),
      setTimeout(() => {
        var e = t;
        document[e(383)](refreshButtonSvgClass)[e(402)](clickElement),
          setTimeout(checkConditionsAndRetry, 2e3);
      }, 2e3));
}
processElements();
