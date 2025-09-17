# RealStatesApi

All URIs are relative to *http://localhost:5000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**realStatesDelete**](#realstatesdelete) | **DELETE** /api/RealStates/{id} | |
|[**realStatesGet**](#realstatesget) | **GET** /api/RealStates | |
|[**realStatesGet2**](#realstatesget2) | **GET** /api/RealStates/price-range | |
|[**realStatesGet3**](#realstatesget3) | **GET** /api/RealStates/{id} | |
|[**realStatesPost**](#realstatespost) | **POST** /api/RealStates | |
|[**realStatesUpdate**](#realstatesupdate) | **PUT** /api/RealStates/{id} | |

# **realStatesDelete**
> File realStatesDelete()


### Example

```typescript
import {
    RealStatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RealStatesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.realStatesDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **realStatesGet**
> PagedResultOfRealState realStatesGet()


### Example

```typescript
import {
    RealStatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RealStatesApi(configuration);

let pageNumber: number; // (optional) (default to 1)
let pageSize: number; // (optional) (default to 10)
let sortBy: string; // (optional) (default to undefined)
let sortDescending: boolean; // (optional) (default to false)
let name: string; // (optional) (default to undefined)
let address: string; // (optional) (default to undefined)
let minPrice: number; // (optional) (default to undefined)
let maxPrice: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.realStatesGet(
    pageNumber,
    pageSize,
    sortBy,
    sortDescending,
    name,
    address,
    minPrice,
    maxPrice
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageNumber** | [**number**] |  | (optional) defaults to 1|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **sortBy** | [**string**] |  | (optional) defaults to undefined|
| **sortDescending** | [**boolean**] |  | (optional) defaults to false|
| **name** | [**string**] |  | (optional) defaults to undefined|
| **address** | [**string**] |  | (optional) defaults to undefined|
| **minPrice** | [**number**] |  | (optional) defaults to undefined|
| **maxPrice** | [**number**] |  | (optional) defaults to undefined|


### Return type

**PagedResultOfRealState**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **realStatesGet2**
> RealStatePriceRange realStatesGet2()


### Example

```typescript
import {
    RealStatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RealStatesApi(configuration);

const { status, data } = await apiInstance.realStatesGet2();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**RealStatePriceRange**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **realStatesGet3**
> RealState realStatesGet3()


### Example

```typescript
import {
    RealStatesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RealStatesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.realStatesGet3(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RealState**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **realStatesPost**
> File realStatesPost(realState)


### Example

```typescript
import {
    RealStatesApi,
    Configuration,
    RealState
} from './api';

const configuration = new Configuration();
const apiInstance = new RealStatesApi(configuration);

let realState: RealState; //

const { status, data } = await apiInstance.realStatesPost(
    realState
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **realState** | **RealState**|  | |


### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **realStatesUpdate**
> File realStatesUpdate(realState)


### Example

```typescript
import {
    RealStatesApi,
    Configuration,
    RealState
} from './api';

const configuration = new Configuration();
const apiInstance = new RealStatesApi(configuration);

let id: string; // (default to undefined)
let realState: RealState; //

const { status, data } = await apiInstance.realStatesUpdate(
    id,
    realState
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **realState** | **RealState**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

