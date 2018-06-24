# Instagram Api notes

## Create a new client

要使用 instagram api 的時候，必須先到 https://www.instagram.com/developer/ 申請一個 client 來取得 access token

申請好之後要利用剛剛得到的 client_id，以及註冊時的 redirect_uri:

https://api.instagram.com/oauth/authorize/?client_id={client_id}&redirect_uri={redirect_uri}&response_type=token

假如是使用 Client-Side 來開啟 URL，此時可能會遇到 OAuth Forbidden 的問題:

```js
{ "code": 403, "error_type": "OAuthForbiddenException", "error_message": "Implicit authentication is disabled" }
```

必須去管理 client 的地方把 implicit OAuth disable

Disable implicit OAuth:
Disable the Client-Side (Implicit) OAuth flow for web apps. If you check this option, Instagram will better protect your application by only allowing authorization requests that use the Server-Side (Explicit) OAuth flow. The Server-Side flow is considered more secure. See the Authentication documentation for details.

![client-oauth](https://github.com/sean1093/learning-note/blob/develop/img/instagram/client-oauth.JPG "client-oauth")



user info:
https://api.instagram.com/v1/users/self/?access_token={ACCESS-TOKEN}

https://api.instagram.com/v1/users/self/media/recent/?access_token={ACCESS-TOKEN}


https://api.instagram.com/v1/locations/{location-id}?access_token=ACCESS-TOKEN






