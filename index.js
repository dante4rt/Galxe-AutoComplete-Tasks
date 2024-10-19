var _0x5a8b5d = _0x28ac;
!(function () {
  for (var e = _0x28ac, t = _0x132c(); ; )
    try {
      if (
        173821 ==
        -parseInt(e(314)) +
          (parseInt(e(290)) / 2) * (-parseInt(e(303)) / 3) +
          (parseInt(e(289)) / 4) * (-parseInt(e(295)) / 5) +
          (parseInt(e(291)) / 6) * (-parseInt(e(288)) / 7) +
          parseInt(e(293)) / 8 +
          -parseInt(e(311)) / 9 +
          (parseInt(e(294)) / 10) * (parseInt(e(308)) / 11)
      )
        break;
      t.push(t.shift());
    } catch (e) {
      t.push(t.shift());
    }
})();
const elementsToClick = document.querySelectorAll(_0x5a8b5d(313)),
  refreshButtonSvgClass = _0x5a8b5d(299),
  waitForClass = _0x5a8b5d(306),
  successIconClass = _0x5a8b5d(300),
  claimButtonSelector = _0x5a8b5d(305),
  closeButtonSelector = _0x5a8b5d(307);
function clickElement(e) {
  var t = _0x5a8b5d,
    o = new MouseEvent(t(297), { view: window, bubbles: !0, cancelable: !0 });
  e[t(298)](o);
}
function _0x132c() {
  var e = [
    'click',
    'dispatchEvent',
    'div.flex.gap-1.items-center:not(.font-inter.text-size-14.text-foreground):not(.px-4.h-8.rounded-6.border.border-solid.border-border-button) span svg',
    'svg[data-state="closed"] .ml-4.flex.gap-4.items-center',
    'Claim button clicked. Subscribe: https://t.me/HappyCuanAirdrop',
    'forEach',
    '3EvOJgA',
    'length',
    'button.bg-primary:not([disabled]).w-full',
    '.text-size-14.font-bold',
    'button.absolute.rounded-sm.opacity-70.right-5.top-6.sm\\:right-9.sm\\:top-9',
    '140327JMWYdv',
    'querySelector',
    'Galxe Auto Complete tasks – Happy Cuan Airdrop\n\nSubscribe: https://t.me/HappyCuanAirdrop',
    '2666664nNzmZe',
    'querySelectorAll',
    'div[data-state="closed"] .cursor-pointer',
    '45396OJguKS',
    'log',
    '7DMrKKQ',
    '13276OBIfTo',
    '4696gkmbpo',
    '495630AiVNBf',
    'Popup closed.',
    '1442544KdWWwJ',
    '410pDBqQv',
    '155THsWLS',
    'All tasks has been completed!\n\nSubscribe: https://t.me/HappyCuanAirdrop',
  ];
  return (_0x132c = function () {
    return e;
  })();
}
function closePopup() {
  var e = _0x5a8b5d,
    t = document[e(309)](closeButtonSelector);
  t && (clickElement(t), console.log(e(292)));
}
function checkClaimButton() {
  var e = _0x5a8b5d,
    t = document.querySelector(claimButtonSelector);
  return (
    !!t &&
    (clickElement(t), console[e(315)](e(301)), setTimeout(closePopup, 2e3), !0)
  );
}
function checkConditionsAndRetry() {
  var e = _0x5a8b5d,
    t = document[e(312)](waitForClass),
    o = document.querySelectorAll(successIconClass);
  0 < t[e(304)] || o[e(304)] !== elementsToClick.length
    ? setTimeout(processElements, 6e4)
    : checkClaimButton();
}
function _0x28ac(e, t) {
  var o = _0x132c();
  return (_0x28ac = function (e, t) {
    return o[(e -= 288)];
  })(e, t);
}
function processElements() {
  var e = _0x5a8b5d;
  alert(e(310)),
    checkClaimButton()
      ? alert(e(296))
      : (elementsToClick[e(302)](clickElement),
        setTimeout(() => {
          document
            .querySelectorAll(refreshButtonSvgClass)
            .forEach(clickElement),
            setTimeout(checkConditionsAndRetry, 2e3);
        }, 2e3));
}
processElements();
