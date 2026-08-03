# Executive Summary: Snowie Merchant Center Integration

## Executive assessment

Snowie's Merchant Center performance can be viewed through the authenticated Google session, but it is not yet ready to serve as an automated or complete reporting source. Browser access confirmed that the correct `snowie.com` account recorded organic product-listing activity in June 2026. However, API access remains blocked by Google Cloud developer-registration requirements, May contains effectively no reportable Merchant Center activity, and Merchant Center has no connected conversion source for purchase or revenue reporting.

Merchant Center should therefore be treated as a supplemental source for free-listing impressions, clicks, CTR, and product visibility. It cannot currently replace Google Search Console for website search performance or WooCommerce/GA4 for orders and revenue.

## Confirmed account structure

- Snowie manager account: `5076283066`
- `snowie.com` Merchant Center account: `5751880017`
- `snowieathome.com` Merchant Center account: `9617565`
- Authenticated user used for validation: `fulfillment@allinadvertising.com`

The account structure caused initial ambiguity because the manager and both child accounts use the Snowie Shaved Ice name. The manager account opens an account-management view rather than a merchant performance dashboard. Performance for the SEO report must come from child account `5751880017`, which is tied to `snowie.com`.

## Performance data recovered

| Metric | May 1-31, 2026 | June 1-30, 2026 |
|---|---:|---:|
| Organic product clicks | 0 | 65 |
| Organic product impressions | Fewer than 20 | 3,042 |
| Organic product CTR | 0.0% | 2.14% |
| Paid product traffic | 0 | 0 |

All recorded June product traffic was organic, meaning it came from free product listings rather than Merchant Center-linked advertising.

The leading products by June organic clicks were Traditional Flavor Concentrate (11), Natural Powder Concentrate (8), Preservative & Citric Acid Kit (7), Cube 8 Flavor Station (5), and Original Powder Concentrate (4).

## Issues encountered

### 1. API access is not operational

The OAuth authorization flow succeeded with the Merchant Center content scope, but authenticated Merchant API requests were rejected because Google Cloud project `884654513759` (`ckd-metal-works-smtp`) is not registered as a Merchant Center API developer project. Possession of an OAuth client-secret file is not sufficient by itself; the project must also be registered against an eligible Merchant Center manager account.

### 2. Developer registration requires the correct manager context

Google's `developerRegistration:registerGcp` step requires a Merchant Center account ID and developer email. The correct Snowie manager ID was not evident from the original account switcher because multiple businesses and duplicate Snowie account names were present. Browser inspection established `5076283066` as the Snowie manager, but it is a Snowie-specific manager containing two Snowie stores, not a confirmed agency-wide master account for every client.

### 3. OAuth credentials are not a reusable reporting integration

The supplied JSON files are OAuth client credentials, not permanent access tokens. A production integration still needs a securely stored refresh token, an approved OAuth consent flow, explicit account access, token refresh handling, and failure monitoring. No reusable token was saved during testing.

### 4. Browser access works but is manual

The authenticated Chrome session allowed the correct account and date ranges to be selected and the data to be read. This proves access, but browser extraction depends on an existing login and Merchant Center's changing interface. It is not a dependable scheduled data pipeline and should not be the long-term implementation.

### 5. May has effectively no Merchant Center performance history

For May 2026, Merchant Center displays zero clicks and suppresses the impression count as fewer than 20. June is the first month with meaningful recorded activity. The interface does not explain whether this is due to feed activation, free-listing eligibility, account configuration, or reporting availability, so the cause cannot be stated as fact without additional diagnostics.

### 6. Revenue and conversion reporting are unavailable

Merchant Center explicitly reports that no conversion source is connected. As a result, it cannot provide purchases, conversion rate, order value, or revenue for the selected period. The WooCommerce organic revenue and order figures must remain the source for commercial outcomes until GA4 or another supported conversion source is correctly linked and validated.

### 7. Merchant Center organic traffic is narrower than SEO traffic

Merchant Center's organic metric represents clicks on free product listings on Google. It does not represent all Google organic sessions, landing pages, rankings, or search-result clicks. These figures should not be compared directly with Google Search Console clicks or WooCommerce's organic order attribution as if they measured the same population.

### 8. Product metadata limits segmentation quality

Merchant Center classified all 65 June clicks under an unknown brand. It also attributed 19 clicks to an unknown first-level product category. This weakens brand and category reporting and indicates that feed attributes need review before those breakdowns are used for executive decisions.

## Reporting implications

- Add Merchant Center as a separate "Organic Shopping" section, not as a replacement for the report's overall organic-search KPIs.
- Report May as "no meaningful Merchant Center activity recorded" rather than presenting a misleading month-over-month percentage increase from zero.
- Use June as the baseline month: 3,042 impressions, 65 clicks, and 2.14% CTR.
- Keep revenue attribution sourced from WooCommerce until Merchant Center conversion tracking is connected and reconciled.
- Label every Merchant Center chart as free product-listing performance so readers do not confuse it with total SEO traffic.

## Required next steps

1. Register Google Cloud project `884654513759` against the appropriate Merchant Center manager account using an authorized developer email.
2. Complete a production OAuth flow and store the refresh token securely outside the repository.
3. Validate Merchant API access to child account `5751880017` and automate monthly performance queries.
4. Connect and verify an approved conversion source if Merchant Center revenue reporting is required.
5. Investigate why May has no meaningful activity and document the feed or program activation date.
6. Correct missing brand and Google product category attributes in the product feed.
7. Reconcile one complete month across Merchant Center, Google Search Console, GA4, and WooCommerce before publishing automated cross-source conclusions.

## Bottom line

The June Merchant Center data is usable as a limited organic-shopping baseline, but the integration is not complete. The main blockers are developer registration, persistent OAuth setup, absent conversion tracking, incomplete historical coverage, and weak product metadata. Until those items are resolved, Merchant Center performance should be incorporated manually and presented with clear scope limitations.
