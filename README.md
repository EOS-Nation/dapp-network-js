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
const client = new DappClient({ endpoint, fetch })
```

**TypeScript**

```ts
import { DappClient } from "dapp-client"
import fetch from "isomorphic-fetch"

const endpoint = "https://dsp.eosn.io"
const client = new DappClient({ endpoint, fetch })
```

## ENV Variables

```bash
DSP_ENDPOINT=<Enter DSP Endpoint>  # "https://dsp.eosn.io"
```

## Supported Endpoints

```bash
# Chain
/v1/chain/get_table_rows
/v1/chain/get_table_by_scope
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [JsonRpc](#jsonrpc)
    -   [Parameters](#parameters)
    -   [Examples](#examples)
    -   [get_table_rows](#get_table_rows)
        -   [Parameters](#parameters-1)
        -   [Examples](#examples-1)
    -   [get_table_by_scope](#get_table_by_scope)
        -   [Parameters](#parameters-2)
        -   [Examples](#examples-2)
-   [JsonRpc](#jsonrpc-1)
    -   [get_table_rows](#get_table_rows-1)
        -   [Parameters](#parameters-3)
        -   [Examples](#examples-3)
    -   [get_table_by_scope](#get_table_by_scope-1)
        -   [Parameters](#parameters-4)
        -   [Examples](#examples-4)
-   [Error](#error)
-   [Error](#error-1)

### JsonRpc

JsonRpc

#### Parameters

-   `endpoint` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** dsp endpoint
-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** optional params (optional, default `{}`)
    -   `options.fetch` **[Fetch](https://developer.mozilla.org/docs/Web/API/Fetch_API)?** fetch
    -   `options.dappservices` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** dappservices code
    -   `options.ipfsservice1` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** ipfsservice1 code

#### Examples

```javascript
const endpoint = "https://dsp.eosn.io"
const rpc = new JsonRpc(endpoint, { fetch })
```

#### get_table_rows

[GET /v1/chain/get_table_rows](https://developers.eos.io/eosio-nodeos/reference#get_table_rows)

Returns an object containing rows from the specified table.

##### Parameters

-   `code` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the smart contract that controls the provided table
-   `scope` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The account to which this data belongs
-   `table` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the table to query
-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** optional params (optional, default `{}`)
    -   `options.json` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** JSON response (optional, default `true`)
    -   `options.index_position` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Position of the index used (optional, default `1`)
    -   `options.key_type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Type of key specified by index_position (for example - uint64_t or name)
    -   `options.lower_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is not less than provided value in set
    -   `options.upper_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is greater than provided value in set
    -   `options.table_key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Table Key
    -   `options.encode_type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Encode type
    -   `options.show_payer` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Show Payer (optional, default `false`)
    -   `options.limit` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit the result amount (optional, default `10`)

##### Examples

```javascript
const response = await rpc.get_table_rows("<code>", "<scope>", "<table>");
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
    -   `options.reverse` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?** Reverse the order of returned results

##### Examples

```javascript
const response = await rpc.get_table_by_scope();
console.log(response);
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;GetTableByScope>** table rows

### JsonRpc

#### get_table_rows

[GET /v1/chain/get_table_rows](https://developers.eos.io/eosio-nodeos/reference#get_table_rows)

Returns an object containing rows from the specified table.

##### Parameters

-   `code` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the smart contract that controls the provided table
-   `scope` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The account to which this data belongs
-   `table` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the table to query
-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** optional params (optional, default `{}`)
    -   `options.json` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** JSON response (optional, default `true`)
    -   `options.index_position` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Position of the index used (optional, default `1`)
    -   `options.key_type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Type of key specified by index_position (for example - uint64_t or name)
    -   `options.lower_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is not less than provided value in set
    -   `options.upper_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is greater than provided value in set
    -   `options.table_key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Table Key
    -   `options.encode_type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Encode type
    -   `options.show_payer` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Show Payer (optional, default `false`)
    -   `options.limit` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit the result amount (optional, default `10`)

##### Examples

```javascript
const response = await rpc.get_table_rows("<code>", "<scope>", "<table>");
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
    -   `options.reverse` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?** Reverse the order of returned results

##### Examples

```javascript
const response = await rpc.get_table_by_scope();
console.log(response);
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;GetTableByScope>** table rows
