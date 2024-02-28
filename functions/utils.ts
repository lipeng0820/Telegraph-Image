{"payload":{"allShortcutsEnabled":true,"fileTree":{"functions":{"items":[{"name":"_middleware.ts","path":"functions/_middleware.ts","contentType":"file"},{"name":"cfp_login.ts","path":"functions/cfp_login.ts","contentType":"file"},{"name":"constants.ts","path":"functions/constants.ts","contentType":"file"},{"name":"template.ts","path":"functions/template.ts","contentType":"file"},{"name":"utils.ts","path":"functions/utils.ts","contentType":"file"}],"totalCount":5},"":{"items":[{"name":"functions","path":"functions","contentType":"directory"},{"name":"src","path":"src","contentType":"directory"},{"name":"static","path":"static","contentType":"directory"},{"name":".eslintrc.cjs","path":".eslintrc.cjs","contentType":"file"},{"name":".gitignore","path":".gitignore","contentType":"file"},{"name":".npmrc","path":".npmrc","contentType":"file"},{"name":".nvmrc","path":".nvmrc","contentType":"file"},{"name":".prettierrc","path":".prettierrc","contentType":"file"},{"name":"LICENSE","path":"LICENSE","contentType":"file"},{"name":"README.md","path":"README.md","contentType":"file"},{"name":"package-lock.json","path":"package-lock.json","contentType":"file"},{"name":"package.json","path":"package.json","contentType":"file"},{"name":"screenshot.png","path":"screenshot.png","contentType":"file"},{"name":"svelte.config.js","path":"svelte.config.js","contentType":"file"},{"name":"tsconfig.json","path":"tsconfig.json","contentType":"file"}],"totalCount":15}},"fileTreeProcessingTime":4.233004,"foldersToFetch":[],"repo":{"id":764425611,"defaultBranch":"main","name":"cloudflare-pages-auth","ownerLogin":"j2st1n","currentUserCanPush":true,"isFork":true,"isEmpty":false,"createdAt":"2024-02-28T11:40:49.000+08:00","ownerAvatar":"https://avatars.githubusercontent.com/u/12619315?v=4","public":true,"private":false,"isOrgOwned":false},"symbolsExpanded":true,"treeExpanded":true,"refInfo":{"name":"main","listCacheKey":"v0:1709091656.0637481","canEdit":true,"refType":"branch","currentOid":"aa2e62e0a67550da561f8b3c2c7a32f7340222d3"},"path":"functions/utils.ts","currentUser":{"id":12619315,"login":"j2st1n","userEmail":"github.com@3313107.xyz"},"blob":{"rawLines":["import { CFP_COOKIE_KEY } from './constants';","","export async function sha256(str: string): Promise<string> {","  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));","  return Array.prototype.map","    .call(new Uint8Array(buf), (x) => ('00' + x.toString(16)).slice(-2))","    .join('');","}","","export async function getCookieKeyValue(password?: string): Promise<string> {","  const hash = await sha256(password);","  return `${CFP_COOKIE_KEY}=${hash}`;","}"],"stylingDirectives":[[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":9,"end":23,"cssClass":"pl-smi"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":26,"end":30,"cssClass":"pl-k"},{"start":31,"end":44,"cssClass":"pl-s"},{"start":44,"end":45,"cssClass":"pl-kos"}],[],[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":12,"cssClass":"pl-k"},{"start":13,"end":21,"cssClass":"pl-k"},{"start":22,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":32,"cssClass":"pl-s1"},{"start":34,"end":40,"cssClass":"pl-smi"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":43,"end":50,"cssClass":"pl-smi"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":57,"cssClass":"pl-smi"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":59,"end":60,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":19,"cssClass":"pl-k"},{"start":20,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":33,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":40,"cssClass":"pl-en"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":50,"cssClass":"pl-s"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":52,"end":55,"cssClass":"pl-k"},{"start":56,"end":67,"cssClass":"pl-smi"},{"start":67,"end":68,"cssClass":"pl-kos"},{"start":68,"end":69,"cssClass":"pl-kos"},{"start":69,"end":70,"cssClass":"pl-kos"},{"start":70,"end":76,"cssClass":"pl-en"},{"start":76,"end":77,"cssClass":"pl-kos"},{"start":77,"end":80,"cssClass":"pl-s1"},{"start":80,"end":81,"cssClass":"pl-kos"},{"start":81,"end":82,"cssClass":"pl-kos"},{"start":82,"end":83,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":14,"cssClass":"pl-smi"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":24,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":28,"cssClass":"pl-c1"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":9,"cssClass":"pl-en"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":13,"cssClass":"pl-k"},{"start":14,"end":24,"cssClass":"pl-smi"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":28,"cssClass":"pl-s1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":35,"end":37,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":43,"cssClass":"pl-s"},{"start":44,"end":45,"cssClass":"pl-c1"},{"start":46,"end":47,"cssClass":"pl-s1"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":48,"end":56,"cssClass":"pl-en"},{"start":56,"end":57,"cssClass":"pl-kos"},{"start":57,"end":59,"cssClass":"pl-c1"},{"start":59,"end":60,"cssClass":"pl-kos"},{"start":60,"end":61,"cssClass":"pl-kos"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":62,"end":67,"cssClass":"pl-en"},{"start":67,"end":68,"cssClass":"pl-kos"},{"start":68,"end":69,"cssClass":"pl-c1"},{"start":69,"end":70,"cssClass":"pl-c1"},{"start":70,"end":71,"cssClass":"pl-kos"},{"start":71,"end":72,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":9,"cssClass":"pl-en"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":12,"cssClass":"pl-s"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":12,"cssClass":"pl-k"},{"start":13,"end":21,"cssClass":"pl-k"},{"start":22,"end":39,"cssClass":"pl-en"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":48,"cssClass":"pl-s1"},{"start":51,"end":57,"cssClass":"pl-smi"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":60,"end":67,"cssClass":"pl-smi"},{"start":67,"end":68,"cssClass":"pl-kos"},{"start":68,"end":74,"cssClass":"pl-smi"},{"start":74,"end":75,"cssClass":"pl-kos"},{"start":76,"end":77,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":20,"cssClass":"pl-k"},{"start":21,"end":27,"cssClass":"pl-en"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":36,"cssClass":"pl-s"},{"start":10,"end":27,"cssClass":"pl-s1"},{"start":10,"end":12,"cssClass":"pl-kos"},{"start":12,"end":26,"cssClass":"pl-smi"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":28,"end":35,"cssClass":"pl-s1"},{"start":28,"end":30,"cssClass":"pl-kos"},{"start":30,"end":34,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}]],"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":null,"configFilePath":null,"networkDependabotPath":"/j2st1n/cloudflare-pages-auth/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":false},"displayName":"utils.ts","displayUrl":"https://github.com/j2st1n/cloudflare-pages-auth/blob/main/functions/utils.ts?raw=true","headerInfo":{"blobSize":"469 Bytes","deleteTooltip":"Delete this file","editTooltip":"Edit this file","deleteInfo":{"deleteTooltip":"Delete this file"},"editInfo":{"editTooltip":"Edit this file"},"ghDesktopPath":"https://desktop.github.com","isGitLfs":false,"gitLfsPath":null,"onBranch":true,"shortPath":"d82bab7","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2Fj2st1n%2Fcloudflare-pages-auth%2Fblob%2Fmain%2Ffunctions%2Futils.ts","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":"13","truncatedSloc":"11"},"mode":"file"},"image":false,"isCodeownersFile":null,"isPlain":false,"isValidLegacyIssueTemplate":false,"issueTemplateHelpUrl":"https://docs.github.com/articles/about-issue-and-pull-request-templates","issueTemplate":null,"discussionTemplate":null,"language":"TypeScript","languageID":378,"large":false,"loggedIn":true,"planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/j2st1n/cloudflare-pages-auth/blob/main/functions/utils.ts","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","releasePath":"/j2st1n/cloudflare-pages-auth/releases/new?marketplace=true","showPublishActionBanner":false},"rawBlobUrl":"https://github.com/j2st1n/cloudflare-pages-auth/raw/main/functions/utils.ts","renderImageOrRaw":false,"richText":null,"renderedFileInfo":null,"shortPath":null,"symbolsEnabled":true,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"repoOwner":"j2st1n","repoName":"cloudflare-pages-auth","showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","actionsOnboardingTip":null},"truncated":false,"viewable":true,"workflowRedirectUrl":null,"symbols":{"timed_out":false,"not_analyzed":false,"symbols":[{"name":"sha256","kind":"function","ident_start":69,"ident_end":75,"extent_start":54,"extent_end":310,"fully_qualified_name":"sha256","ident_utf16":{"start":{"line_number":2,"utf16_col":22},"end":{"line_number":2,"utf16_col":28}},"extent_utf16":{"start":{"line_number":2,"utf16_col":7},"end":{"line_number":7,"utf16_col":1}}},{"name":"getCookieKeyValue","kind":"function","ident_start":334,"ident_end":351,"extent_start":319,"extent_end":468,"fully_qualified_name":"getCookieKeyValue","ident_utf16":{"start":{"line_number":9,"utf16_col":22},"end":{"line_number":9,"utf16_col":39}},"extent_utf16":{"start":{"line_number":9,"utf16_col":7},"end":{"line_number":12,"utf16_col":1}}}]}},"copilotInfo":{"documentationUrl":"https://docs.github.com/copilot/overview-of-github-copilot/about-github-copilot-for-individuals","notices":{"codeViewPopover":{"dismissed":false,"dismissPath":"/settings/dismiss-notice/code_view_copilot_popover"}},"userAccess":{"hasSubscriptionEnded":false,"orgHasCFBAccess":false,"userHasCFIAccess":false,"userHasOrgs":false,"userIsOrgAdmin":false,"userIsOrgMember":false,"business":null,"featureRequestInfo":null}},"copilotAccessAllowed":false,"csrf_tokens":{"/j2st1n/cloudflare-pages-auth/branches":{"post":"1kZ5K6oryp5D_PVbhj3EWoUdlh4Blx_0_VIasnRmn6gPs4H1eday_uOQ2iqOu1colvIYTsvHHv0FSlREfSBQLw"},"/repos/preferences":{"post":"20XxPi5-WrpmtQzeI9wFMBGVg0vy7SR0-ESthWH-TPXZAFLZVhtbQ8B2IHmxw-6TenKAy_Wi9ty66GYhqXtuUg"}}},"title":"cloudflare-pages-auth/functions/utils.ts at main · j2st1n/cloudflare-pages-auth"}