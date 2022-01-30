# bank-api-nodejs

## Name Object

| Property        | Type      | Description                                        | Visible on Request |
| --------------- | --------- | -------------------------------------------------- | ------------------ |
| \_id            | `String`  | <p>Unique id </p>                                  | False              |
| name            | `String`  | <p>Name (unique to prevent duplicates)</p>         | True               |
| origin          | `String`  | <p>Ethnic/Lingual origin of the name(required)</p> | True               |
| meaning         | `String`  | <p>Meaning of the name(optional)</p>               | True               |
| meaningKeywords | `Array`   | <p>utility data structure for searching</p>        | False              |
| genderMale      | `Boolean` | <p>Is this a male name(optional)</p>               | True               |
| genderFemale    | `Boolean` | <p>Is this a female name(optional)</p>             | True               |
| arabicSpelling  | `String`  | <p>Name spelling in arabic(optional)</p>           | True               |
| englishSpelling | `String`  | <p>Name spelling in english(optional)</p>          | True               |

## **Get all names**

Returns json data about a single user.

-   **URL**

    /api/v1/names/

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