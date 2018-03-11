# Cash

## Introduction

"Cash" is a web application written in JavaScript that aims to convert various currencies by just one single command line. 

---

## Features

* Convert one currency to more than 30 other currencies through just one command.

* Change the default configuration to convert the currencies for when need.

* Save the default configuration to convert the currencies for the next time.

* Newest exchange rate from https://api.fixer.io/latest.

---

## Environment

It's necessary to pre-install node and npm by executing the command :

```bash
npm install
```

---

## Usage

```bash
node bin/index.js <amount> <currency>
```

**ex.**

* **Execute:**

```bash
node bin/index.js 24 usd
```

* **The result is:**

> ✔ 19.53 (EUR) Euro

> ✔ 17.36 (GBP) Pound Sterling

__Attention: The US dollar is the currency by default setting by this app.__

---

## Comandes

### Usage of commande

Use commandes by execute:

```bash
node bin/index.js <command>
```

### List of commandes

|Commands|Description|
|:-|:-|
|`--save` or `-s`|Save currencies as default currencies|
|`--help` or `-h`|Display help message|
|`--version` or `-v`|Display version number|

---

## Currencies and codes

|ISO Code|Name|
|:-|:-|
|AUD|Australian Dollar|
|RUB|Russian Rouble|
|EUR|Euro|
|BGN|Bulgarian Lev|
|BRL|Real Brazilian|
|CAD|Canadian Dollar|
|CHF|Swiss Franc|
|CNY|Chinese Yuan|
|CZK|Czech Koruna|
|DKK|Danish Krone|
|GBP|Pound Sterling|
|HKD|Hong Kong Dollar|
|HRK|Croatian Kuna|
|HUF|Hungarian Forint|
|IDR|Indonesian Rupiah|
|ILS|Israeli Shekel|
|INR|Indian Rupee|
|JPY|Japanes Yen|
|KRW|South Korean Won|
|MXN|Mexican Peso|
|MYR|Malaysian Ringgit|
|NOK|Norwegian Krone|
|PHP|Philippine Peso|
|PLN|Polish Zloty|
|RON|Romanian New Leu|
|SEK|Swedish Krona|
|SGD|Singapore Dollar|
|THB|Thai Baht|
|TRY|Turkish Lira|
|USD|US Dollar|
|ZAR|South African Rand|
|NZD|New Zealand Dollar|

---

## Example:

EX.1 Want to know 100 Chinese Yuan could exchange how much the currencies by default.

```bash
node bin/index.js 100 cny
```

The result is:

> ✔ 15.78 (USD) US Dollar

> ✔ 12.84 (EUR) Euro

> ✔ 11.41 (GBP) Pound Sterling

EX.2 Want to know 100 Chinese Yuan could exchange how much Hong Kong Dollar, South Korean Won ou Japanes Yen.

```bash
node bin/index.js 100 cny hkd krw jpy
```
The result is:

> ✔ 123.72 (HKD) Hong Kong Dollar

> ✔ 16888.12 (KRW) South Korean Won

> ✔ 1685.73 (JPY) Japanes Yen

EX.3 Want to set a new default configuration.

```bash
node bin/index.js --save pln usd eur cny
```

That That means to replace the currency Pound Sterling by Chinese Yuan.

```bash
node bin/index.js --save pln usd eur cny
```

Ex.4 For more help.

```bash
node bin/index.js --help
```  
