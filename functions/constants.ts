{"payload":{"allShortcutsEnabled":true,"fileTree":{"functions":{"items":[{"name":"_middleware.ts","path":"functions/_middleware.ts","contentType":"file"},{"name":"cfp_login.ts","path":"functions/cfp_login.ts","contentType":"file"},{"name":"constants.ts","path":"functions/constants.ts","contentType":"file"},{"name":"template.ts","path":"functions/template.ts","contentType":"file"},{"name":"utils.ts","path":"functions/utils.ts","contentType":"file"}],"totalCount":5},"":{"items":[{"name":"functions","path":"functions","contentType":"directory"},{"name":"src","path":"src","contentType":"directory"},{"name":"static","path":"static","contentType":"directory"},{"name":".eslintrc.cjs","path":".eslintrc.cjs","contentType":"file"},{"name":".gitignore","path":".gitignore","contentType":"file"},{"name":".npmrc","path":".npmrc","contentType":"file"},{"name":".nvmrc","path":".nvmrc","contentType":"file"},{"name":".prettierrc","path":".prettierrc","contentType":"file"},{"name":"LICENSE","path":"LICENSE","contentType":"file"},{"name":"README.md","path":"README.md","contentType":"file"},{"name":"package-lock.json","path":"package-lock.json","contentType":"file"},{"name":"package.json","path":"package.json","contentType":"file"},{"name":"screenshot.png","path":"screenshot.png","contentType":"file"},{"name":"svelte.config.js","path":"svelte.config.js","contentType":"file"},{"name":"tsconfig.json","path":"tsconfig.json","contentType":"file"}],"totalCount":15}},"fileTreeProcessingTime":5.272008,"foldersToFetch":[],"repo":{"id":764425611,"defaultBranch":"main","name":"cloudflare-pages-auth","ownerLogin":"j2st1n","currentUserCanPush":true,"isFork":true,"isEmpty":false,"createdAt":"2024-02-28T11:40:49.000+08:00","ownerAvatar":"https://avatars.githubusercontent.com/u/12619315?v=4","public":true,"private":false,"isOrgOwned":false},"symbolsExpanded":true,"treeExpanded":true,"refInfo":{"name":"main","listCacheKey":"v0:1709091656.0637481","canEdit":true,"refType":"branch","currentOid":"aa2e62e0a67550da561f8b3c2c7a32f7340222d3"},"path":"functions/constants.ts","currentUser":{"id":12619315,"login":"j2st1n","userEmail":"github.com@3313107.xyz"},"blob":{"rawLines":["/**"," * Key for the auth cookie."," */","export const CFP_COOKIE_KEY = 'CFP-Auth-Key';","","/**"," * Max age of the auth cookie in seconds."," * Default: 1 week."," */","export const CFP_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;","","/**"," * Paths that don't require authentication."," * The /cfp_login path must be included."," */","export const CFP_ALLOWED_PATHS = ['/cfp_login'];"],"stylingDirectives":[[{"start":0,"end":3,"cssClass":"pl-c"}],[{"start":0,"end":27,"cssClass":"pl-c"}],[{"start":0,"end":3,"cssClass":"pl-c"}],[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":12,"cssClass":"pl-k"},{"start":13,"end":27,"cssClass":"pl-smi"},{"start":28,"end":29,"cssClass":"pl-c1"},{"start":30,"end":44,"cssClass":"pl-s"},{"start":44,"end":45,"cssClass":"pl-kos"}],[],[{"start":0,"end":3,"cssClass":"pl-c"}],[{"start":0,"end":41,"cssClass":"pl-c"}],[{"start":0,"end":19,"cssClass":"pl-c"}],[{"start":0,"end":3,"cssClass":"pl-c"}],[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":12,"cssClass":"pl-k"},{"start":13,"end":31,"cssClass":"pl-smi"},{"start":32,"end":33,"cssClass":"pl-c1"},{"start":34,"end":36,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-c1"},{"start":39,"end":41,"cssClass":"pl-c1"},{"start":42,"end":43,"cssClass":"pl-c1"},{"start":44,"end":46,"cssClass":"pl-c1"},{"start":47,"end":48,"cssClass":"pl-c1"},{"start":49,"end":50,"cssClass":"pl-c1"},{"start":50,"end":51,"cssClass":"pl-kos"}],[],[{"start":0,"end":3,"cssClass":"pl-c"}],[{"start":0,"end":43,"cssClass":"pl-c"}],[{"start":0,"end":40,"cssClass":"pl-c"}],[{"start":0,"end":3,"cssClass":"pl-c"}],[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":12,"cssClass":"pl-k"},{"start":13,"end":30,"cssClass":"pl-smi"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":46,"cssClass":"pl-s"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":48,"cssClass":"pl-kos"}]],"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":null,"configFilePath":null,"networkDependabotPath":"/j2st1n/cloudflare-pages-auth/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":false},"displayName":"constants.ts","displayUrl":"https://github.com/j2st1n/cloudflare-pages-auth/blob/main/functions/constants.ts?raw=true","headerInfo":{"blobSize":"348 Bytes","deleteTooltip":"Delete this file","editTooltip":"Edit this file","deleteInfo":{"deleteTooltip":"Delete this file"},"editInfo":{"editTooltip":"Edit this file"},"ghDesktopPath":"https://desktop.github.com","isGitLfs":false,"gitLfsPath":null,"onBranch":true,"shortPath":"d29828c","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2Fj2st1n%2Fcloudflare-pages-auth%2Fblob%2Fmain%2Ffunctions%2Fconstants.ts","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":"16","truncatedSloc":"14"},"mode":"file"},"image":false,"isCodeownersFile":null,"isPlain":false,"isValidLegacyIssueTemplate":false,"issueTemplateHelpUrl":"https://docs.github.com/articles/about-issue-and-pull-request-templates","issueTemplate":null,"discussionTemplate":null,"language":"TypeScript","languageID":378,"large":false,"loggedIn":true,"planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/j2st1n/cloudflare-pages-auth/blob/main/functions/constants.ts","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","releasePath":"/j2st1n/cloudflare-pages-auth/releases/new?marketplace=true","showPublishActionBanner":false},"rawBlobUrl":"https://github.com/j2st1n/cloudflare-pages-auth/raw/main/functions/constants.ts","renderImageOrRaw":false,"richText":null,"renderedFileInfo":null,"shortPath":null,"symbolsEnabled":true,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"repoOwner":"j2st1n","repoName":"cloudflare-pages-auth","showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","actionsOnboardingTip":null},"truncated":false,"viewable":true,"workflowRedirectUrl":null,"symbols":{"timed_out":false,"not_analyzed":false,"symbols":[]}},"copilotInfo":{"documentationUrl":"https://docs.github.com/copilot/overview-of-github-copilot/about-github-copilot-for-individuals","notices":{"codeViewPopover":{"dismissed":false,"dismissPath":"/settings/dismiss-notice/code_view_copilot_popover"}},"userAccess":{"hasSubscriptionEnded":false,"orgHasCFBAccess":false,"userHasCFIAccess":false,"userHasOrgs":false,"userIsOrgAdmin":false,"userIsOrgMember":false,"business":null,"featureRequestInfo":null}},"copilotAccessAllowed":false,"csrf_tokens":{"/j2st1n/cloudflare-pages-auth/branches":{"post":"-Xa4XjJ5UcTUJ8-nlSZiEd83V81zqZm0CHDZ28zkGKsgg0CA4YQppHRL4NadoPFjzNjZnbn5mL3waJctxaLXLA"},"/repos/preferences":{"post":"hpTpTEt4JcUlUstlJg3MIXgmhIzHj67XFLOPRLNkbJyE0UqrMx0kPIOR58K0EieCE8GHDMDAfH9WH0Tge-FOOw"}}},"title":"cloudflare-pages-auth/functions/constants.ts at main · j2st1n/cloudflare-pages-auth"}