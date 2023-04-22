/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_EDC_POC"
    },
    clientId: "96ac3f26-2ea4-46a9-904b-4fa58e9ed2b0",
    redirectUri: "https://mis3poc.fsrao.ca/dashboard",
    authorities: {
        signUpSignIn: {
            authority: "https://fsraob2cedc.b2clogin.com/fsraob2cedc.onmicrosoft.com/B2C_1_EDC_POC",
        }
    },
    authorityDomain: "https://fsraob2cedc.b2clogin.com"
}