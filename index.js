const _0x5289ff = _0xffa3,
  elementsToClick =
    (!(function () {
      for (var e = _0xffa3, t = _0x269e(); ; )
        try {
          if (
            381466 ==
            -parseInt(e(359)) +
              -parseInt(e(371)) / 2 +
              (parseInt(e(373)) / 3) * (-parseInt(e(369)) / 4) +
              -parseInt(e(363)) / 5 +
              parseInt(e(378)) / 6 +
              parseInt(e(366)) / 7 +
              parseInt(e(364)) / 8
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(),
    document[_0x5289ff(377)](_0x5289ff(362))),
  refreshButtonSvgClass = _0x5289ff(374),
  waitForClass = '.text-size-14.font-bold',
  successIconClass = _0x5289ff(379),
  claimButtonSelector = _0x5289ff(358),
  closeButtonSelector = _0x5289ff(372);
function clickElement(e) {
  var t = _0x5289ff,
    n = new MouseEvent(t(367), { view: window, bubbles: !0, cancelable: !0 });
  e[t(376)](n);
}
function _0xffa3(e, t) {
  const n = _0x269e();
  return (_0xffa3 = function (e, t) {
    return (e -= 358), n[e];
  })(e, t);
}
function _0x269e() {
  const e = [
    '20268568nrnmeu',
    'Claim button clicked. Subscribe: https://t.me/HappyCuanAirdrop',
    '968373IlgNQB',
    'click',
    'Galxe Auto Complete tasks – Happy Cuan Airdrop\n\nSubscribe: https://t.me/HappyCuanAirdrop',
    '8IOxSUW',
    'log',
    '1350494yItHPR',
    'button.absolute.rounded-sm.opacity-70.right-5.top-6.sm\\:right-9.sm\\:top-9',
    '914313pfDwfk',
    'div.flex.gap-1.items-center span svg',
    'forEach',
    'dispatchEvent',
    'querySelectorAll',
    '317718OHhOuD',
    'svg[data-state="closed"] .ml-4.flex.gap-4.items-center',
    'button.bg-primary:not([disabled]).w-full',
    '352396JKiMox',
    'querySelector',
    'length',
    'div[data-state="closed"] .cursor-pointer',
    '3531060GoJHPT',
  ];
  return (_0x269e = function () {
    return e;
  })();
}
function closePopup() {
  var e = document.querySelector(closeButtonSelector);
  e && (clickElement(e), console.log('Popup closed.'));
}
function checkClaimButton() {
  var e = _0x5289ff,
    t = document[e(360)](claimButtonSelector);
  return (
    !!t &&
    (clickElement(t), console[e(370)](e(365)), setTimeout(closePopup, 2e3), !0)
  );
}
function checkConditionsAndRetry() {
  var e = _0x5289ff,
    t = document[e(377)](waitForClass),
    n = document[e(377)](successIconClass);
  0 < t[e(361)] || n.length !== elementsToClick[e(361)]
    ? setTimeout(processElements, 6e4)
    : checkClaimButton();
}
function processElements() {
  const t = _0x5289ff;
  alert(t(368)),
    checkClaimButton() ||
      (elementsToClick[t(375)](clickElement),
      setTimeout(() => {
        var e = t;
        document[e(377)](refreshButtonSvgClass)[e(375)](clickElement),
          setTimeout(checkConditionsAndRetry, 2e3);
      }, 2e3));
}
processElements();
