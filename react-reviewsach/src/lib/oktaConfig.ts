export const oktaConfig = {
    clentId:'0oaag8i04g5TrDWqg5d7',
    issuer:'https://dev-16097358.okta.com/oauth2/default',
    redirectUri:'http://localhost:3000/login/callback',
    scopes:['openid','profile','email'],
    pkce: true,
    disableHttpCheck: true,
}