const CLASSES = {
  active: 'active',
  elementFade: 'element-fade',
  error: 'error',
  errorEl: 'form__error',
  fixed: 'fixed',
  formControlEl: 'form__control',
  inactvie: 'inactive',
  modal: 'modal',
  phones: 'phones',
  scrollHidden: 'scroll-hidden',
  show: 'show',
  success: 'success'
};

const ERRORS = {
  emptyEmail: 'Введите E-mail',
  emptyMsg: 'Введите сообщение',
  emptyName: 'Введите имя',
  emptyPhone: 'Введите номер',
  invalidEmail: 'Некорректный E-mail',
  invalidPhone: 'Введите номер в формате +375',
  maxMessageLength: 'Не более 250 символов',
  minMessageLength: 'Не менее 16 символов',
  unchecked: 'Поле должно быть отмечено'
};

const FORM_ELEMENTS = {
  username: document.querySelector('#form-name'),
  userPhone: document.querySelector('#form-phone'),
  userEmail: document.querySelector('#form-email'),
  userMsg: document.querySelector('#form-message')
};

const FORM_MODAL_ELEMENTS = {
  username: document.querySelector('#modal-form-name'),
  userPhone: document.querySelector('#modal-form-phone'),
  userAgreement: document.querySelector('#modal-form-agreement')
};

const FORMS = {
  formVeto: document.querySelector('#law-form'),
  formContacts: document.querySelector('#contacts-form'),
  formModal: document.querySelector('#modal-form')
};

const DOM = {
  body: document.querySelector('body'),
  burger: document.querySelector('#burger'),
  callbackBtnFixed: document.querySelector('#callback-fixed'),
  clientItems: document.querySelectorAll('.clients__item'),
  companyInfo: document.querySelector('.company__info'),
  companySection: document.querySelector('#about .container'),
  companyTitle: document.querySelector('.company__title'),
  descripItems: document.querySelectorAll('.descrip__item'),
  descripSection: document.querySelector('#details'),
  detailsCompany: document.querySelectorAll('.company__details'),
  detailsContacts: document.querySelectorAll('.contacts__details'),
  detailsDescrip: document.querySelectorAll('.descrip__details'),
  detailsOnetime: document.querySelectorAll('.onetime__details'),
  detailsOnetimeIndivid: document.querySelector('#onetime-details-individ'),
  detailsOnetimeLegal: document.querySelector('#onetime-details-legal'),
  featuresItems: document.querySelectorAll('.features__item'),
  feeItems: document.querySelectorAll('.fee__item'),
  header: document.querySelector('#header'),
  headerBot: document.querySelector('#header-bot'),
  headerMobileNums: [...document.querySelectorAll('.header .phones li')].slice(
    -2
  ),
  headerInfo: document.querySelector('#header-info'),
  headerTopRight: document.querySelector('#header-top-right'),
  headerLogoContent: document.querySelector('.header__logo-content'),
  headerPhones: document.querySelector('.header .phones'),
  headerTop: document.querySelector('#header-top'),
  headerTopWrapper: document.querySelector('#header-top-wrapper'),
  html: document.querySelector('html'),
  introCallback: document.querySelector('#intro .callback'),
  introSection: document.querySelector('#intro'),
  introSectionButtons: document.querySelector('.intro__buttons'),
  map: document.querySelector('#map'),
  menuLinks: [...document.querySelectorAll('.header__menu a')],
  overlay: document.querySelector('#overlay'),
  onetimeCallback: document.querySelector('#onetime-callback'),
  page: document.querySelector('.page'),
  providerItems: document.querySelectorAll('.provider__item'),
  serviceOnetimeLegal: document.querySelector('#service-onetime-legal'),
  serviceOnetimeIndivid: document.querySelector('#service-onetime-individ'),
  work: document.querySelector('.work'),
  workItems: document.querySelectorAll('.work__item')
};

const DATA_ATTR = {
  modal: '[data-modal-target]',
  modalClose: '[data-close-button]',
  scroll: '[data-scroll]'
};

const LOCATION = {
  curLocation: window.location.href,
  curPathName: window.location.pathname,
  origin: `${window.location.origin}/`,
  hash: window.location.hash
};

export {
  CLASSES,
  ERRORS,
  FORM_ELEMENTS,
  FORM_MODAL_ELEMENTS,
  FORMS,
  DOM,
  DATA_ATTR,
  LOCATION
};
