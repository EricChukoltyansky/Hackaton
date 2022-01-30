# bank-api-nodejs

## Name Object

| Property        | Type     | Description                                        |
| --------------- | -------- | -------------------------------------------------- |
| \_id            | `String` | <p>Unique id </p>                                  |
| name            | `String` | <p>Name (unique to prevent duplicates ???)</p>     |
| origin          | `String` | <p>Ethnic/Lingual origin of the name(required)</p> |
| meaning         | `String` | <p>Meaning of the name(optional)</p>               |
| arabicSpelling  | `String` | <p>Name spelling in arabic(optional)</p>           |
| englishSpelling | `String` | <p>Name spelling in english(optional)</p>          |

## **Get all names**

Returns json data about a single user.

-   **URL**

    /api/v1/names/:id

## **Get Name **

Returns json data about a single user.

-   **URL**

    /api/v1/names/:name

-   **Method:**

    `GET`

-   **URL Params**

    **Required:**

    `name=[string]`

-   **Data Params**

    None

-   **Success Response:**

    -   **Code:** 200 <br />
        **Content:** `{ id : 12, name : "מיכאל", origin : "עברית", meaning : "...", arabicSpelling : "...", englishSpelling : "Michael" }`

-   **Error Response:**

    -   **Code:** 404 NOT FOUND <br />
        **Content:** `{ error : "Name doesn't exist" }`
