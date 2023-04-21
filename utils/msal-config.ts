import { Configuration } from '@azure/msal-browser'

export const msalConfig: Configuration = {
    auth: {
        clientId: '96ac3f26-2ea4-46a9-904b-4fa58e9ed2b0',
        authority: 'https://fsraob2cedc.b2clogin.com/fsraob2cedc.onmicrosoft.com/b2c_1_edc_poc',
        redirectUri: '/dashboard'
    }
}