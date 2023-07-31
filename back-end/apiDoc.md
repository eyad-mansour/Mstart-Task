# mstart

<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->

1. [create claimed](#1-create-claimed)
1. [get all claimed](#2-get-all-claimed)
1. [get one claimed](#3-get-one-claimed)
1. [deal update](#4-deal-update)
1. [delete deal](#5-delete-deal)
1. [create deal](#6-create-deal)
1. [get one deal](#7-get-one-deal)
1. [get all deals](#8-get-all-deals)
1. [get all users](#9-get-all-users)
1. [delete user](#10-delete-user)
1. [home](#11-home)
1. [login](#12-login)
1. [signup](#13-signup)

## Endpoints

---

### 1. create claimed

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:3000/claimed
```

**_Headers:_**

| Key           | Value                                                                                                                            | Description |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiMTExMjMxMSIsImlhdCI6MTY4NTAyODMwMH0.V2W0ZgkrAv7swqIo3TJPykHWVmBNOHqKmHD9t4bjZeQ |             |

**_Body:_**

```js
{
  "User_ID": 5,
  "Deal_ID": 2,
  "Server_DateTime": "2023-05-01T10:00:00Z",
  "DateTime_UTC": "2023-05-01T10:00:00Z",
  "Amount": 99.99,
  "Currency": "USD"
}
```

### 2. get all claimed

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:3000/claimed
```

**_Headers:_**

| Key           | Value                                                                                                                            | Description |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiMTExMjMxMSIsImlhdCI6MTY4NTAyODMwMH0.V2W0ZgkrAv7swqIo3TJPykHWVmBNOHqKmHD9t4bjZeQ |             |

### 3. get one claimed

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:3000/claimed/6
```

**_Headers:_**

| Key           | Value                                                                                                                            | Description |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiMTExMjMxMSIsImlhdCI6MTY4NTAyODMwMH0.V2W0ZgkrAv7swqIo3TJPykHWVmBNOHqKmHD9t4bjZeQ |             |

### 4. deal update

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: http://localhost:3000/deal/2
```

**_Headers:_**

| Key           | Value                                                                                                                            | Description |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiMTExMjMxMSIsImlhdCI6MTY4NTAyODMwMH0.V2W0ZgkrAv7swqIo3TJPykHWVmBNOHqKmHD9t4bjZeQ |             |

**_Body:_**

```js
{
  "Server_DateTime": "2023-05-01T10:00:00Z",
  "DateTime_UTC": "2023-05-01T10:00:00Z",
  "Update_DateTime_UTC": "2023-05-01T10:00:00Z",
  "Name": "Test Deal",
  "Description": "This is a test deal after the update.",
  "Status": "Active",
  "Amount": 99.99,
  "Currency": "JD"
}
```

### 5. delete deal

**_Endpoint:_**

```bash
Method: DELETE
Type:
URL: http://localhost:3000/deal/1/1
```

**_Headers:_**

| Key           | Value                                                                                                                            | Description |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiMTExMjMxMSIsImlhdCI6MTY4NTAyODMwMH0.V2W0ZgkrAv7swqIo3TJPykHWVmBNOHqKmHD9t4bjZeQ |             |

### 6. create deal

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:3000/deal
```

**_Headers:_**

| Key           | Value                                                                                                                            | Description |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiMTExMjMxMSIsImlhdCI6MTY4NTAyODMwMH0.V2W0ZgkrAv7swqIo3TJPykHWVmBNOHqKmHD9t4bjZeQ |             |

**_Body:_**

```js
{
  "Server_DateTime": "2023-05-01T10:00:00Z",
  "DateTime_UTC": "2023-05-01T10:00:00Z",
  "Update_DateTime_UTC": "2023-05-01T10:00:00Z",
  "Name": "Test Deal",
  "Description": "This is a test deal.",
  "Status": "Active",
  "Amount": 99.99,
  "Currency": "USD"
}
```

### 7. get one deal

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:3000/deal/1
```

**_Headers:_**

| Key           | Value                                                                                                                            | Description |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiMTExMjMxMSIsImlhdCI6MTY4NTAyODMwMH0.V2W0ZgkrAv7swqIo3TJPykHWVmBNOHqKmHD9t4bjZeQ |             |

### 8. get all deals

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:3000/deals
```

**_Headers:_**

| Key           | Value                                                                                                                            | Description |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiMTExMjMxMSIsImlhdCI6MTY4NTAyODMwMH0.V2W0ZgkrAv7swqIo3TJPykHWVmBNOHqKmHD9t4bjZeQ |             |

### 9. get all users

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:3000/users
```

**_Headers:_**

| Key           | Value                                                                                                                            | Description |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiMTExMjMxMSIsImlhdCI6MTY4NTAyODMwMH0.V2W0ZgkrAv7swqIo3TJPykHWVmBNOHqKmHD9t4bjZeQ |             |

### 10. delete user

**_Endpoint:_**

```bash
Method: DELETE
Type:
URL: http://localhost:3000/users/
```

**_Headers:_**

| Key           | Value                                                                                                                            | Description |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiMTExMjMxMSIsImlhdCI6MTY4NTAyODMwMH0.V2W0ZgkrAv7swqIo3TJPykHWVmBNOHqKmHD9t4bjZeQ |             |

### 11. home

**_Endpoint:_**

```bash
Method: GET
Type:
URL:
```

### 12. login

**_Endpoint:_**

```bash
Method: POST
Type:
URL: http://localhost:3000/login
```

### 13. signup

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:3000/signup
```

**_Body:_**

```js
{
    "Server_DateTime": "2023-05-01T10:30:00Z",
    "DateTime_UTC": "2023-05-01T10:30:00Z",
    "Update_DateTime_UTC": "2023-05-01T10:30:00Z",
    "Name": "3",
    "Email": "23@gmail.com",
    "Password": "11",
    "Status": "1",
    "role": "admin"
}
```

---

[Back to top](#mstart)
