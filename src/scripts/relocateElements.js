import { CLASSES, DOM } from './constants';
import { isMediaBreakpoint } from './helpers';

function moveHeaderInfoEl() {
  if (isMediaBreakpoint()) {
    DOM.headerTop.append(DOM.headerInfo);

    return;
  }

  DOM.headerBot.append(DOM.headerInfo);
}

function createWrapperForMobileNums() {
  const phonesContainer = document.createElement('ul');
  phonesContainer.classList.add(CLASSES.phones);

  phonesContainer.append(...DOM.headerMobileNums);

  return phonesContainer;
}

function movePhonesOnScroll(isPageYOffset = false) {
  if (!isMediaBreakpoint() && isPageYOffset) {
    const phones = DOM.headerTopRight.querySelector(`.${CLASSES.phones}`);

    if (phones && phones.contains(...DOM.headerMobileNums)) return;

    if (phones) {
      phones.prepend(...DOM.headerMobileNums);
    } else {
      DOM.headerTopRight.prepend(createWrapperForMobileNums());
    }

    return;
  }

  if (
    !isMediaBreakpoint() &&
    !DOM.headerPhones.contains(...DOM.headerMobileNums)
  ) {
    DOM.headerPhones.append(...DOM.headerMobileNums);
  }
}

function movePhonesOnResize() {
  if (isMediaBreakpoint()) {
    const phones = DOM.headerLogoContent.querySelector(`.${CLASSES.phones}`);
    if (phones) phones.remove();

    DOM.headerLogoContent.append(createWrapperForMobileNums());

    return;
  }

  if (!DOM.header.classList.contains(CLASSES.fixed)) {
    DOM.headerPhones.append(...DOM.headerMobileNums);
  }
}

function moveIntroCallback() {
  if (!DOM.introCallback) return;

  if (isMediaBreakpoint()) {
    DOM.descripSection.prepend(DOM.introCallback);
    DOM.introCallback.classList.add(CLASSES.active);

    return;
  }

  if (!DOM.introSectionButtons.contains(DOM.introCallback)) {
    DOM.introSectionButtons.append(DOM.introCallback);
  }
}

function moveCompanyTitle() {
  if (!DOM.companyTitle) return;

  if (isMediaBreakpoint(991.98)) {
    DOM.companySection.prepend(DOM.companyTitle);

    return;
  }

  if (!DOM.companyInfo.contains(DOM.companyTitle)) {
    DOM.companyInfo.prepend(DOM.companyTitle);
  }
}

function relocateElements() {
  moveHeaderInfoEl();
  movePhonesOnResize();
  moveIntroCallback();
  moveCompanyTitle();
}

export default relocateElements;
export { movePhonesOnScroll };
