const _0x138b2b = _0xdc6e,
  elementsToClick =
    (!(function () {
      for (var e = _0xdc6e, t = _0xfba8(); ; )
        try {
          if (
            221589 ==
            -parseInt(e(347)) +
              (parseInt(e(346)) / 2) * (parseInt(e(357)) / 3) +
              (parseInt(e(353)) / 4) * (parseInt(e(356)) / 5) +
              (-parseInt(e(349)) / 6) * (parseInt(e(354)) / 7) +
              parseInt(e(364)) / 8 +
              (-parseInt(e(369)) / 9) * (-parseInt(e(367)) / 10) +
              (parseInt(e(360)) / 11) * (-parseInt(e(351)) / 12)
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(),
    document.querySelectorAll('div[data-state="closed"] .cursor-pointer')),
  refreshButtonSvgClass = _0x138b2b(350),
  waitForClass = _0x138b2b(365),
  successIconClass = 'svg[data-state="closed"] .ml-4.flex.gap-4.items-center',
  claimButtonSelector = _0x138b2b(361),
  closeButtonSelector = _0x138b2b(362);
function clickElement(e) {
  var t = _0x138b2b,
    n = new MouseEvent('click', { view: window, bubbles: !0, cancelable: !0 });
  e[t(368)](n);
}
function closePopup() {
  var e = _0x138b2b,
    t = document[e(363)](closeButtonSelector);
  t && (clickElement(t), console[e(355)](e(366)));
}
function _0xdc6e(e, t) {
  const n = _0xfba8();
  return (_0xdc6e = function (e, t) {
    return (e -= 345), n[e];
  })(e, t);
}
function checkClaimButton() {
  var e = _0x138b2b,
    t = document[e(363)](claimButtonSelector);
  return (
    !!t &&
    (clickElement(t), console[e(355)](e(359)), setTimeout(closePopup, 2e3), !0)
  );
}
function _0xfba8() {
  const e = [
    '6rBufSR',
    'button[data-state="closed"] .flex.gap-4.items-center svg',
    '5083212YhTsNn',
    'querySelectorAll',
    '79136ZKpawQ',
    '1917748iPSymn',
    'log',
    '110XkdqkG',
    '16773hrREsD',
    'Galxe Auto Complete tasks – Happy Cuan Airdrop\n\nSubscribe: https://t.me/HappyCuanAirdrop',
    'Claim button clicked. Subscribe: https://t.me/HappyCuanAirdrop',
    '11wvwyKW',
    'button.inline-flex.bg-primary:not([disabled]).font-bold.px-6.w-full',
    'button.absolute.rounded-sm.opacity-70.right-5.top-6.sm\\:right-9.sm\\:top-9',
    'querySelector',
    '2392704UwVKca',
    '.text-size-14.font-bold',
    'Popup closed.',
    '10iIDmok',
    'dispatchEvent',
    '2360313bcHrhK',
    'length',
    '38BCzJMD',
    '183668yiZObW',
    'forEach',
  ];
  return (_0xfba8 = function () {
    return e;
  })();
}
function checkConditionsAndRetry() {
  var e = _0x138b2b,
    t = document[e(352)](waitForClass),
    n = document[e(352)](successIconClass);
  0 < t.length || n[e(345)] !== elementsToClick.length
    ? setTimeout(processElements, 6e4)
    : checkClaimButton();
}
function processElements() {
  const t = _0x138b2b;
  alert(t(358)),
    checkClaimButton() ||
      (elementsToClick[t(348)](clickElement),
      setTimeout(() => {
        var e = t;
        document[e(352)](refreshButtonSvgClass)[e(348)](clickElement),
          setTimeout(checkConditionsAndRetry, 2e3);
      }, 2e3));
}
processElements();
