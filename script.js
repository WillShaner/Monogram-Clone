const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const coupon = document.querySelector('.sales-countdown')
const menu = document.querySelector('.menu');
const priceConverter = document.querySelector('.price-converter-dropdown');
const mockEmail = document.querySelector('.mock-email')

const countdown = () => {
  const countDate = new Date('December 25, 2024 00:00:00').getTime();
  const now = new Date().getTime();
  const diff = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(diff / day);
  const textHour = Math.floor((diff % day) / hour);
  const textMinute = Math.floor((diff % hour) / minute);
  const textSecond = Math.floor((diff % minute) / second);

  days.innerHTML = `${textDay} </br> <span>days</span>`;
  hours.innerHTML = `${textHour} </br> <span>hours</span>`;
  minutes.innerHTML = `${textMinute} </br> <span>minutes</span>`;
  seconds.innerHTML = `${textSecond} </br> <span>seconds</span>`;
}
const closeCoupon = () => {
  coupon.classList.replace('slide-in', 'slide-out')
}
setInterval(countdown, 1000)

window.onload = () => {
  coupon.classList.replace('d-none', 'slide-in')
}

const menuOpen = () => {

  menu.classList.add('modal-open')
  document.body.classList.add('menu-open')
}

const menuClose = () => {
  menu.classList.remove('modal-open')
  document.body.classList.remove('menu-open')
}
const openPriceConverter = () => {
  priceConverter.classList.toggle('d-none')
}


const currencies = [
  {
    name: 'USD',
    symbol: '$',
    conversion: 1
  },
  {
    name: 'CAD',
    symbol: '$',
    conversion: 1.34
  },
  {
    name: 'EUR',
    symbol: '€',
    conversion: 0.92

  },
  {
    name: 'AUD',
    symbol: '$',
    conversion: 1.42

  },
  {
    name: 'GBP',
    symbol: '£',
    conversion: 0.81

  },
  {
    name: 'KRW',
    symbol: '₩',
    conversion: 1229.4

  },
  {
    name: 'JPY',
    symbol: '¥',
    conversion: 130.14

  },
]
let currentCurrency = 'USD'

const changeCurrency = (value, symbol) => {
  priceConverter.classList.add('d-none')
  const toggleSmall = document.querySelector('.small-toggle')
  toggleSmall.innerHTML = `${symbol}`
  const toggleLarge = document.querySelector('.large-toggle')
  toggleLarge.innerHTML = `${value}`
  document.querySelector(`#${currentCurrency}`).classList.remove('current-currency')
  document.querySelector(`#${value}`).classList.add('current-currency')
  currentCurrency = value
  getNewCurrencyValues(value)
}

const getNewCurrencyValues = (value) => {
  const findRate  = currencies.find((x) => x.name === value)
  const exchangeRate = findRate.conversion
  const prices = document.querySelectorAll('.product-price')
  prices.forEach((x) => x.innerHTML = findRate.symbol + (x.ariaValueNow * exchangeRate).toFixed(2))
}
mockEmail.addEventListener('submit', e => e.preventDefault())
