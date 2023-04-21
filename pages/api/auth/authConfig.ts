import { Configuration } from '@azure/msal-browser'

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
    auth: {
        clientId: '96ac3f26-2ea4-46a9-904b-4fa58e9ed2b0',
        authority: 'https://fsraob2cedc.b2clogin.com/fsraob2cedc.onmicrosoft.com/b2c_1_edc_poc',
        redirectUri: '/dashboard',
        postLogoutRedirectUri: '/'
    },
    system: {
        allowNativeBroker: false, // Disables WAM Broker
    }
}

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
    scopes: [ 'User.Read' ]
}

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
    graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me'
}