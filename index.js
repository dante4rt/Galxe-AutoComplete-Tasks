const _0x5ed6b5 = _0x3fc0,
  elementsToClick =
    (!(function () {
      for (var e = _0x3fc0, t = _0x5c1e(); ; )
        try {
          if (
            607400 ==
            +parseInt(e(485)) * (-parseInt(e(505)) / 2) +
              (-parseInt(e(483)) / 3) * (parseInt(e(495)) / 4) +
              (parseInt(e(503)) / 5) * (parseInt(e(482)) / 6) +
              (-parseInt(e(504)) / 7) * (-parseInt(e(497)) / 8) +
              -parseInt(e(490)) / 9 +
              (parseInt(e(501)) / 10) * (parseInt(e(496)) / 11) +
              parseInt(e(506)) / 12
          )
            break;
          t.push(t.shift());
        } catch (e) {
          t.push(t.shift());
        }
    })(),
    document[_0x5ed6b5(489)](_0x5ed6b5(488))),
  refreshButtonSvgClass = _0x5ed6b5(499),
  waitForClass = '.text-size-14.font-bold',
  successIconClass = _0x5ed6b5(491),
  claimButtonSelector = _0x5ed6b5(487),
  closeButtonSelector = _0x5ed6b5(502);
function clickElement(e) {
  var t = _0x5ed6b5,
    n = new MouseEvent(t(481), { view: window, bubbles: !0, cancelable: !0 });
  e[t(486)](n);
}
function closePopup() {
  var e = _0x5ed6b5,
    t = document.querySelector(closeButtonSelector);
  t && (clickElement(t), console[e(484)]('Popup closed.'));
}
function checkClaimButton() {
  var e = _0x5ed6b5,
    t = document[e(498)](claimButtonSelector);
  return (
    !!t &&
    (clickElement(t), console[e(484)](e(493)), setTimeout(closePopup, 2e3), !0)
  );
}
function _0x5c1e() {
  const e = [
    'Galxe Auto Complete tasks – Happy Cuan Airdrop\n\nSubscribe: https://t.me/HappyCuanAirdrop',
    'Claim button clicked. Subscribe: https://t.me/HappyCuanAirdrop',
    'forEach',
    '3688028UFLfqO',
    '11UdYUES',
    '144ZJwyeA',
    'querySelector',
    'div.flex.gap-1.items-center span svg',
    'length',
    '367660lSuUPJ',
    'button.absolute.rounded-sm.opacity-70.right-5.top-6.sm\\:right-9.sm\\:top-9',
    '87865uGuUCV',
    '193676oxUhhX',
    '62TYyFMU',
    '12077364yCjmwu',
    'click',
    '162tdeunC',
    '3vCwkAZ',
    'log',
    '4269QjdTHq',
    'dispatchEvent',
    'button.bg-primary.w-full',
    'div[data-state="closed"] .cursor-pointer',
    'querySelectorAll',
    '3185658AUMudS',
    'svg[data-state="closed"] .ml-4.flex.gap-4.items-center',
  ];
  return (_0x5c1e = function () {
    return e;
  })();
}
function _0x3fc0(e, t) {
  const n = _0x5c1e();
  return (_0x3fc0 = function (e, t) {
    return (e -= 481), n[e];
  })(e, t);
}
function checkConditionsAndRetry() {
  var e = _0x5ed6b5,
    t = document[e(489)](waitForClass),
    n = document[e(489)](successIconClass);
  0 < t[e(500)] || n[e(500)] !== elementsToClick[e(500)]
    ? setTimeout(processElements, 6e4)
    : checkClaimButton();
}
function processElements() {
  const t = _0x5ed6b5;
  alert(t(492)),
    checkClaimButton() ||
      (elementsToClick[t(494)](clickElement),
      setTimeout(() => {
        var e = t;
        document[e(489)](refreshButtonSvgClass)[e(494)](clickElement),
          setTimeout(checkConditionsAndRetry, 2e3);
      }, 2e3));
}
processElements();
