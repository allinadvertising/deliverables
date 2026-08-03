# Executive Summary: Snowie Google Ads Data Integration

## Executive assessment

We confirmed that All In Advertising has an accessible Google Ads manager account and an approved developer token with Basic Access. We also proved that the supplied OAuth client can obtain the Google Ads authorization scope. However, we were unable to assemble all required credentials into one reusable API session, so no Snowie campaign or performance data was returned.

The integration is not blocked by a lack of Google Ads access alone. It is blocked by a combination of incompatible existing credentials, an unrecoverable one-time OAuth result, repeated Google identity verification, an ad-blocker conflict in the Google Ads interface, and the absence of a confirmed Snowie Ads customer ID.

## Access confirmed

- Google Ads manager account: All In Advertising MCC
- Manager customer ID: `6781391727`
- Authenticated user: `fulfillment@allinadvertising.com`
- Developer-token status: available with Basic Access
- OAuth client project: `ckd-metal-works-smtp`
- Google Cloud project number: `884654513759`
- Required OAuth scope: `https://www.googleapis.com/auth/adwords`

These confirmations establish that a production integration should be possible once the credential and verification issues are resolved.

## Constraints encountered

### 1. The existing token is for Search Console, not Google Ads

The existing refresh token successfully generated a new access token, but its only granted scope was:

`https://www.googleapis.com/auth/webmasters.readonly`

When that token was used against the Google Ads `customers:listAccessibleCustomers` endpoint, Google returned HTTP `403` with `Request had insufficient authentication scopes.` OAuth scopes cannot be added to an existing refresh token. A separate authorization grant using the `adwords` scope is required.

### 2. OAuth credentials and OAuth tokens are different assets

The supplied desktop-client JSON contains a client ID and client secret, but it does not itself authorize access to an Ads account. It must be combined with a user-approved authorization code and exchanged for an access token and refresh token. The original GSC-named JSON contained a reusable token, but for the wrong Google service.

### 3. Google Ads requires a separate developer token

OAuth authorization is only one part of Google Ads API authentication. Every API request also requires a Google Ads developer token. Calls made through a manager account additionally require the manager ID in the `login-customer-id` header.

The API Center confirmed that the All In Advertising MCC has a developer token with Basic Access, but the token value remained masked and could not be captured for the API request.

### 4. The Google Ads interface was blocked by an ad blocker

Google Ads displayed a persistent "Turn off ad blockers" dialog in the API Center. The page remained readable, but the overlay prevented the "View token" control from revealing the developer-token value. Programmatic clicks, including a forced click, did not change the masked display.

This left the developer token visible as an available credential but unavailable for use in the test request.

### 5. The successful Ads OAuth grant was intentionally ephemeral

A fresh OAuth flow using the correct `adwords` scope completed successfully and returned a refresh token. The initial validation did not persist that token because the goal was to test authorization without leaving new credentials on disk. Once the test process ended, that one-time result was no longer recoverable.

This proved that the OAuth client and user access can authorize Google Ads, but it did not produce a reusable integration credential.

### 6. Reauthorization triggered additional Google identity checks

A second OAuth flow was started so that a dedicated Google Ads token could be stored securely outside the repository. Google required another identity-verification step for `fulfillment@allinadvertising.com`.

The first challenge requested a Google Authenticator code. A later attempt reported too many failed attempts and switched to a phone-prompt challenge. The callback process eventually timed out before the second authorization completed, so no persistent Ads token file was created.

### 7. The OAuth application's identity is confusing

The Google consent screen identifies Cloud project `ckd-metal-works-smtp` as "Fluent SMTP." Although the OAuth client technically supports the Ads scope, that application name does not match the reporting use case. This creates unnecessary user concern during consent and may complicate internal governance or future OAuth verification.

A dedicated Google Cloud project and OAuth consent application named for the reporting integration would be clearer and easier to maintain.

### 8. Snowie's Google Ads customer ID was not confirmed

The authenticated account chooser exposed the All In Advertising MCC and multiple directly accessible accounts. Snowie was not identified as a named directly accessible account during the test. It may be a child account under the MCC, but the API could not list the MCC hierarchy because authentication was incomplete.

Without the Snowie customer ID, a final Google Ads Query Language request cannot reliably target Snowie's campaigns.

### 9. No Google Ads performance data was returned

Because the test never had all four required values at the same time, no impressions, clicks, cost, conversions, conversion value, campaign names, or Shopping/PMax performance were retrieved. The required values are:

1. An access token with the `adwords` scope
2. A reusable refresh token for that scope
3. The Google Ads developer token
4. The Snowie customer ID, with MCC `6781391727` as the login customer

## Reporting implications

- Google Ads data should not be added to the Snowie report as confirmed performance until the API query succeeds and the account identity is verified.
- Merchant Center's "paid traffic: 0" should not be interpreted as proof that Snowie had no Google Ads activity. Merchant Center product traffic and total Google Ads campaign performance are different datasets.
- WooCommerce UTM attribution may provide paid-order context, but it cannot replace authoritative Ads spend, click, campaign, and conversion data.
- Any future automated report should retain source labels so Google Ads, Merchant Center, GSC, GA4, and WooCommerce metrics are not blended as equivalent measures.

## Required next steps

1. Disable or allowlist the ad blocker for `ads.google.com` and retrieve the MCC developer token from the API Center.
2. Create a dedicated Google Ads OAuth client with a reporting-specific application name.
3. Complete one `adwords`-scoped OAuth flow and securely retain its refresh token outside the repository.
4. Call `customers:listAccessibleCustomers` with both the OAuth access token and developer token.
5. Query the customer-client hierarchy under MCC `6781391727` to identify Snowie's customer ID.
6. Run a minimal read-only account query to confirm account name, currency, and time zone.
7. Pull May and June 2026 campaign metrics and reconcile conversions against GA4 and WooCommerce before publication.
8. Add token-refresh handling, secret storage, request logging, and error monitoring before scheduling recurring report pulls.

## Bottom line

The test established that the organization has the core Google Ads access needed for an integration, but the credentials were fragmented across separate workflows. The existing token was scoped only for Search Console, the Ads-scoped token was not retained, the developer token could not be revealed because of the Ads interface blocker, and Snowie's customer ID remained unconfirmed. No Ads performance figures should be reported until a single read-only API session successfully combines those credentials and targets the verified Snowie account.
