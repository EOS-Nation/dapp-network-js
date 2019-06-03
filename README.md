# DAPP JavaScript/TypeScript Client Library

## Installation

Using Yarn:

```bash
yarn add dapp-client
```

or using NPM:

```bash
npm install --save dapp-client
```

## Quick Start

**CommonJS**

```js
const { DappClient } = require("dapp-client")
const fetch = require("isomorphic-fetch")

const endpoint = "https://dsp.eosn.io"
const client = new DappClient(endpoint, { fetch })
```

**TypeScript**

```ts
import { DappClient } from "dapp-client"
import fetch from "isomorphic-fetch"

const endpoint = "https://dsp.eosn.io"
const client = new DappClient(endpoint, { fetch })
```

## Supported Endpoints

```bash
# Chain
/v1/chain/get_currency_stats
/v1/chain/get_info
/v1/chain/get_table_by_scope
/v1/chain/get_table_rows

# DSP
/v1/dsp/ipfsservice1/get_table_row
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [DappClient](#dappclient)
    -   [Parameters](#parameters)
    -   [Examples](#examples)
    -   [get_table_package](#get_table_package)
        -   [Parameters](#parameters-1)
        -   [Examples](#examples-1)
    -   [get_table_accountext](#get_table_accountext)
        -   [Parameters](#parameters-2)
        -   [Examples](#examples-2)
    -   [get_table_rows](#get_table_rows)
        -   [Parameters](#parameters-3)
        -   [Examples](#examples-3)
    -   [get_all_table_rows](#get_all_table_rows)
        -   [Parameters](#parameters-4)
        -   [Examples](#examples-4)
    -   [dsp_get_table_row](#dsp_get_table_row)
        -   [Parameters](#parameters-5)
        -   [Examples](#examples-5)
    -   [get_table_by_scope](#get_table_by_scope)
        -   [Parameters](#parameters-6)
        -   [Examples](#examples-6)
    -   [get_currency_balance](#get_currency_balance)
        -   [Parameters](#parameters-7)
        -   [Examples](#examples-7)
    -   [get_currency_stats](#get_currency_stats)
        -   [Parameters](#parameters-8)
        -   [Examples](#examples-8)
    -   [get_info](#get_info)
        -   [Examples](#examples-9)
-   [DAPP](#dapp)
    -   [Examples](#examples-10)
-   [delay](#delay)
    -   [Parameters](#parameters-9)
    -   [Examples](#examples-11)

### DappClient

DAPP Client

#### Parameters

-   `endpoint` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** dsp endpoint
-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** optional params (optional, default `{}`)
    -   `options.dappservices` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** DAPP Services contract (optional, default `"dappservices"`)
    -   `options.ipfsservice1` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** IPFS Services contract (optional, default `"ipfsservice1"`)
    -   `options.oracleservic` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Oracle Services contract (optional, default `"oracleservic"`)
    -   `options.cronservices` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Cron Services contract (optional, default `"cronservices"`)
    -   `options.fetch` **[Fetch](https://developer.mozilla.org/docs/Web/API/Fetch_API)** fetch (optional, default `global.fetch`)

#### Examples

```javascript
const endpoint = "https://dsp.eosn.io"
const client = new DappClient(endpoint, { fetch })
```

#### get_table_package

Get TABLE package

##### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** optional params (optional, default `{}`)
    -   `options.lower_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is not less than provided value in set
    -   `options.upper_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is greater than provided value in set
    -   `options.limit` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit the result amount (optional, default `10`)
    -   `options.show_payer` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Show Payer (optional, default `false`)

##### Examples

```javascript
const response = await client.get_table_package({limit: 500});

for (const row of response.rows) {
    console.log(row);
    // {
    //     id: 9,
    //     api_endpoint: 'https://dsp.eosn.io',
    //     package_json_uri: 'https://eosnation.io/package1.dsp-package.json',
    //     package_id: 'package1',
    //     service: 'ipfsservice1',
    //     provider: 'eosnationdsp',
    //     quota: '500.0000 QUOTA',
    //     package_period: 86400,
    //     min_stake_quantity: '10000.0000 DAPP',
    //     min_unstake_period: 3600,
    //     enabled: 1
    // }
}
```

#### get_table_accountext

Get TABLE accountext

##### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** optional params (optional, default `{}`)
    -   `options.lower_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is not less than provided value in set
    -   `options.upper_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is greater than provided value in set
    -   `options.limit` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit the result amount (optional, default `10`)
    -   `options.show_payer` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Show Payer (optional, default `false`)

##### Examples

```javascript
const response = await client.get_table_accountext({limit: 500});

for (const row of response.rows) {
    console.log(row);
    // {
    //     id: 29,
    //     account: 'eosnationdsp',
    //     service: 'ipfsservice1',
    //     provider: 'eosnationdsp',
    //     quota: '0.0001 QUOTA',
    //     balance: '255101.1461 DAPP',
    //     last_usage: '1555466031000',
    //     last_reward: '1555466031000',
    //     package: 'package2',
    //     pending_package: 'package2',
    //     package_started: '1555466031000',
    //     package_end: '1555469631000'
    // }
}
```

#### get_table_rows

[GET /v1/chain/get_table_rows](https://developers.eos.io/eosio-nodeos/reference#get_table_rows)

Returns an object containing rows from the specified table.

##### Parameters

-   `code` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the smart contract that controls the provided table
-   `scope` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The account to which this data belongs
-   `table` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the table to query
-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** optional params (optional, default `{}`)
    -   `options.lower_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is not less than provided value in set
    -   `options.upper_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is greater than provided value in set
    -   `options.limit` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit the result amount (optional, default `10`)
    -   `options.show_payer` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Show Payer (optional, default `false`)
    -   `options.json` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** JSON response (optional, default `true`)
    -   `options.index_position` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Position of the index used (optional, default `1`)
    -   `options.key_type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Type of key specified by index_position (for example - uint64_t or name)
    -   `options.table_key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Table Key
    -   `options.encode_type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Encode type

##### Examples

```javascript
const response = await rpc.get_table_rows("<code>", "<scope>", "<table>");
console.log(response);
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;GetTableRows>** table rows

#### get_all_table_rows

[GET /v1/chain/get_table_rows](https://developers.eos.io/eosio-nodeos/reference#get_table_rows)

Returns all objects containing rows from the specified table.

##### Parameters

-   `code` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the smart contract that controls the provided table
-   `scope` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The account to which this data belongs
-   `table` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the table to query
-   `lower_bound_key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Key value to identify `lower_bound` object
-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** optional params (optional, default `{}`)
    -   `options.lower_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is not less than provided value in set
    -   `options.upper_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is greater than provided value in set
    -   `options.limit` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit the result amount per `get_table_rows` API request (optional, default `1500`)
    -   `options.show_payer` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Show Payer (optional, default `false`)
    -   `options.json` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** JSON response (optional, default `true`)
    -   `options.index_position` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Position of the index used (optional, default `1`)
    -   `options.key_type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Type of key specified by index_position (for example - uint64_t or name)
    -   `options.table_key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Table Key
    -   `options.encode_type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Encode type
    -   `options.delay_ms` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)?** Delay in ms between API calls (helps prevents rate limited APIs)

##### Examples

```javascript
const response = await rpc.get_all_table_rows("<code>", "<scope>", "<table>", "<lower_bound_key>");
console.log(response);
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;GetTableRows>** table rows

#### dsp_get_table_row

[GET /v1/dsp/ipfsservice1/get_table_row](https://docs.liquidapps.io)

Returns an object containing row from the specified table.

##### Parameters

-   `contract` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the smart contract that controls the provided table
-   `scope` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The account to which this data belongs
-   `table` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the table to query
-   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The key value to query
-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** optional params (optional, default `{}`)
    -   `options.lower_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is not less than provided value in set
    -   `options.upper_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is greater than provided value in set
    -   `options.limit` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit the result amount (optional, default `10`)
    -   `options.show_payer` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Show Payer (optional, default `false`)
    -   `options.json` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** JSON response (optional, default `true`)
    -   `options.index_position` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Position of the index used (optional, default `1`)
    -   `options.key_type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Type of key specified by index_position (for example - uint64_t or name)
    -   `options.table_key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Table Key
    -   `options.encode_type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Encode type

##### Examples

```javascript
const response = await rpc.dsp_get_table_row("<contract>", "<scope>", "<table>", "<key>");
console.log(response);
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;GetTableRows>** table rows

#### get_table_by_scope

[GET /v1/chain/get_table_by_scope](https://developers.eos.io/eosio-nodeos/reference#get_table_by_scope)

Returns an object containing rows from the specified table.

##### Parameters

-   `code` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name of the contract to return table data for
-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** optional params (optional, default `{}`)
    -   `options.table` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filter results by table
    -   `options.lower_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is not less than provided value in set
    -   `options.upper_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is greater than provided value in set
    -   `options.limit` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)?** Limit number of results returned.
    -   `options.reverse` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Reverse the order of returned results (optional, default `false`)

##### Examples

```javascript
const response = await rpc.get_table_by_scope();
console.log(response);
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;GetTableByScope>** table rows

#### get_currency_balance

[GET /v1/chain/get_currency_balance](https://developers.eos.io/eosio-nodeos/reference#get_currency_balance)

Retrieve the stats of for a given currency

##### Parameters

-   `code` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The contract that operates the currency
-   `account` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The account to query balances for
-   `symbol` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The symbol for the currency if the contract operates multiple currencies

##### Examples

```javascript
const response = await rpc.get_currency_balance("eosio.token", "eosio.null", "EOS");
console.log(response);
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;GetCurrencyBalance>** table rows

#### get_currency_stats

[GET /v1/chain/get_currency_stats](https://developers.eos.io/eosio-nodeos/reference#get_currency_stats)

Retrieve the stats of for a given currency

##### Parameters

-   `code` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The contract that operates the currency
-   `symbol` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The symbol for the currency if the contract operates multiple currencies

##### Examples

```javascript
const response = await rpc.get_currency_stats("eosio.token", "EOS");
console.log(response);
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;GetCurrencyStats>** table rows

#### get_info

[GET /v1/chain/get_info](https://developers.eos.io/eosio-nodeos/reference#get_info)

Returns an object containing various details about the blockchain.

##### Examples

```javascript
const response = await rpc.get_info();
console.log(response);
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;GetInfo>** table rows

### DAPP

DAPP

#### Examples

```javascript
import { names } from "dapp-client"

names.DAPP // => "......2ke1.o4"
```

### delay

Promise based timeout delay

#### Parameters

-   `ms` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Milisecond delay

#### Examples

```javascript
await delay(100);
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>** 
