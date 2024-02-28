{"payload":{"allShortcutsEnabled":true,"fileTree":{"functions":{"items":[{"name":"_middleware.ts","path":"functions/_middleware.ts","contentType":"file"},{"name":"cfp_login.ts","path":"functions/cfp_login.ts","contentType":"file"},{"name":"constants.ts","path":"functions/constants.ts","contentType":"file"},{"name":"template.ts","path":"functions/template.ts","contentType":"file"},{"name":"utils.ts","path":"functions/utils.ts","contentType":"file"}],"totalCount":5},"":{"items":[{"name":"functions","path":"functions","contentType":"directory"},{"name":"src","path":"src","contentType":"directory"},{"name":"static","path":"static","contentType":"directory"},{"name":".eslintrc.cjs","path":".eslintrc.cjs","contentType":"file"},{"name":".gitignore","path":".gitignore","contentType":"file"},{"name":".npmrc","path":".npmrc","contentType":"file"},{"name":".nvmrc","path":".nvmrc","contentType":"file"},{"name":".prettierrc","path":".prettierrc","contentType":"file"},{"name":"LICENSE","path":"LICENSE","contentType":"file"},{"name":"README.md","path":"README.md","contentType":"file"},{"name":"package-lock.json","path":"package-lock.json","contentType":"file"},{"name":"package.json","path":"package.json","contentType":"file"},{"name":"screenshot.png","path":"screenshot.png","contentType":"file"},{"name":"svelte.config.js","path":"svelte.config.js","contentType":"file"},{"name":"tsconfig.json","path":"tsconfig.json","contentType":"file"}],"totalCount":15}},"fileTreeProcessingTime":4.231262,"foldersToFetch":[],"repo":{"id":764425611,"defaultBranch":"main","name":"cloudflare-pages-auth","ownerLogin":"j2st1n","currentUserCanPush":true,"isFork":true,"isEmpty":false,"createdAt":"2024-02-28T11:40:49.000+08:00","ownerAvatar":"https://avatars.githubusercontent.com/u/12619315?v=4","public":true,"private":false,"isOrgOwned":false},"symbolsExpanded":true,"treeExpanded":true,"refInfo":{"name":"main","listCacheKey":"v0:1709091656.0637481","canEdit":true,"refType":"branch","currentOid":"aa2e62e0a67550da561f8b3c2c7a32f7340222d3"},"path":"functions/cfp_login.ts","currentUser":{"id":12619315,"login":"j2st1n","userEmail":"github.com@3313107.xyz"},"blob":{"rawLines":["import { CFP_COOKIE_MAX_AGE } from './constants';","import { sha256, getCookieKeyValue } from './utils';","","export async function onRequestPost(context: {","  request: Request;","  env: { CFP_PASSWORD?: string };","}): Promise<Response> {","  const { request, env } = context;","  const body = await request.formData();","  const { password, redirect } = Object.fromEntries(body);","  const hashedPassword = await sha256(password.toString());","  const hashedCfpPassword = await sha256(env.CFP_PASSWORD);","  const redirectPath = redirect.toString() || '/';","","  if (hashedPassword === hashedCfpPassword) {","    // Valid password. Redirect to home page and set cookie with auth hash.","    const cookieKeyValue = await getCookieKeyValue(env.CFP_PASSWORD);","","    return new Response('', {","      status: 302,","      headers: {","        'Set-Cookie': `${cookieKeyValue}; Max-Age=${CFP_COOKIE_MAX_AGE}; Path=/; HttpOnly; Secure`,","        'Cache-Control': 'no-cache',","        Location: redirectPath","      }","    });","  } else {","    // Invalid password. Redirect to login page with error.","    return new Response('', {","      status: 302,","      headers: {","        'Cache-Control': 'no-cache',","        Location: `${redirectPath}?error=1`","      }","    });","  }","}"],"stylingDirectives":[[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":9,"end":27,"cssClass":"pl-smi"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":30,"end":34,"cssClass":"pl-k"},{"start":35,"end":48,"cssClass":"pl-s"},{"start":48,"end":49,"cssClass":"pl-kos"}],[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":9,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":17,"end":34,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":37,"end":41,"cssClass":"pl-k"},{"start":42,"end":51,"cssClass":"pl-s"},{"start":51,"end":52,"cssClass":"pl-kos"}],[],[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":12,"cssClass":"pl-k"},{"start":13,"end":21,"cssClass":"pl-k"},{"start":22,"end":35,"cssClass":"pl-en"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":43,"cssClass":"pl-s1"},{"start":45,"end":46,"cssClass":"pl-kos"}],[{"start":2,"end":9,"cssClass":"pl-c1"},{"start":11,"end":18,"cssClass":"pl-smi"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-c1"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":9,"end":21,"cssClass":"pl-c1"},{"start":24,"end":30,"cssClass":"pl-smi"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"},{"start":4,"end":11,"cssClass":"pl-smi"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":20,"cssClass":"pl-smi"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":27,"end":34,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":20,"cssClass":"pl-k"},{"start":21,"end":28,"cssClass":"pl-s1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":37,"cssClass":"pl-en"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":33,"end":39,"cssClass":"pl-smi"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":51,"cssClass":"pl-en"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":52,"end":56,"cssClass":"pl-s1"},{"start":56,"end":57,"cssClass":"pl-kos"},{"start":57,"end":58,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":22,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":30,"cssClass":"pl-k"},{"start":31,"end":37,"cssClass":"pl-en"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":46,"cssClass":"pl-s1"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":55,"cssClass":"pl-en"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":56,"end":57,"cssClass":"pl-kos"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":58,"end":59,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":25,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-c1"},{"start":28,"end":33,"cssClass":"pl-k"},{"start":34,"end":40,"cssClass":"pl-en"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":44,"cssClass":"pl-s1"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":57,"cssClass":"pl-c1"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":58,"end":59,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":20,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":23,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":40,"cssClass":"pl-en"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":43,"end":45,"cssClass":"pl-c1"},{"start":46,"end":49,"cssClass":"pl-s"},{"start":49,"end":50,"cssClass":"pl-kos"}],[],[{"start":2,"end":4,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":20,"cssClass":"pl-s1"},{"start":21,"end":24,"cssClass":"pl-c1"},{"start":25,"end":42,"cssClass":"pl-s1"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":44,"end":45,"cssClass":"pl-kos"}],[{"start":4,"end":75,"cssClass":"pl-c"}],[{"start":4,"end":9,"cssClass":"pl-k"},{"start":10,"end":24,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":27,"end":32,"cssClass":"pl-k"},{"start":33,"end":50,"cssClass":"pl-en"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":54,"cssClass":"pl-s1"},{"start":54,"end":55,"cssClass":"pl-kos"},{"start":55,"end":67,"cssClass":"pl-c1"},{"start":67,"end":68,"cssClass":"pl-kos"},{"start":68,"end":69,"cssClass":"pl-kos"}],[],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":14,"cssClass":"pl-k"},{"start":15,"end":23,"cssClass":"pl-smi"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":26,"cssClass":"pl-s"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":6,"end":12,"cssClass":"pl-c1"},{"start":14,"end":17,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":6,"end":13,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":8,"end":20,"cssClass":"pl-s"},{"start":22,"end":98,"cssClass":"pl-s"},{"start":23,"end":40,"cssClass":"pl-s1"},{"start":23,"end":25,"cssClass":"pl-kos"},{"start":25,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":50,"end":71,"cssClass":"pl-s1"},{"start":50,"end":52,"cssClass":"pl-kos"},{"start":52,"end":70,"cssClass":"pl-smi"},{"start":70,"end":71,"cssClass":"pl-kos"},{"start":98,"end":99,"cssClass":"pl-kos"}],[{"start":8,"end":23,"cssClass":"pl-s"},{"start":25,"end":35,"cssClass":"pl-s"},{"start":35,"end":36,"cssClass":"pl-kos"}],[{"start":8,"end":16,"cssClass":"pl-c1"},{"start":18,"end":30,"cssClass":"pl-s1"}],[{"start":6,"end":7,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":7,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":4,"end":8,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-kos"}],[{"start":4,"end":59,"cssClass":"pl-c"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":14,"cssClass":"pl-k"},{"start":15,"end":23,"cssClass":"pl-smi"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":26,"cssClass":"pl-s"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":6,"end":12,"cssClass":"pl-c1"},{"start":14,"end":17,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":6,"end":13,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":8,"end":23,"cssClass":"pl-s"},{"start":25,"end":35,"cssClass":"pl-s"},{"start":35,"end":36,"cssClass":"pl-kos"}],[{"start":8,"end":16,"cssClass":"pl-c1"},{"start":18,"end":43,"cssClass":"pl-s"},{"start":19,"end":34,"cssClass":"pl-s1"},{"start":19,"end":21,"cssClass":"pl-kos"},{"start":21,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"}],[{"start":6,"end":7,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":7,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}]],"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":null,"configFilePath":null,"networkDependabotPath":"/j2st1n/cloudflare-pages-auth/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":false},"displayName":"cfp_login.ts","displayUrl":"https://github.com/j2st1n/cloudflare-pages-auth/blob/main/functions/cfp_login.ts?raw=true","headerInfo":{"blobSize":"1.19 KB","deleteTooltip":"Delete this file","editTooltip":"Edit this file","deleteInfo":{"deleteTooltip":"Delete this file"},"editInfo":{"editTooltip":"Edit this file"},"ghDesktopPath":"https://desktop.github.com","isGitLfs":false,"gitLfsPath":null,"onBranch":true,"shortPath":"80724e3","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2Fj2st1n%2Fcloudflare-pages-auth%2Fblob%2Fmain%2Ffunctions%2Fcfp_login.ts","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":"37","truncatedSloc":"34"},"mode":"file"},"image":false,"isCodeownersFile":null,"isPlain":false,"isValidLegacyIssueTemplate":false,"issueTemplateHelpUrl":"https://docs.github.com/articles/about-issue-and-pull-request-templates","issueTemplate":null,"discussionTemplate":null,"language":"TypeScript","languageID":378,"large":false,"loggedIn":true,"planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/j2st1n/cloudflare-pages-auth/blob/main/functions/cfp_login.ts","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","releasePath":"/j2st1n/cloudflare-pages-auth/releases/new?marketplace=true","showPublishActionBanner":false},"rawBlobUrl":"https://github.com/j2st1n/cloudflare-pages-auth/raw/main/functions/cfp_login.ts","renderImageOrRaw":false,"richText":null,"renderedFileInfo":null,"shortPath":null,"symbolsEnabled":true,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"repoOwner":"j2st1n","repoName":"cloudflare-pages-auth","showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","actionsOnboardingTip":null},"truncated":false,"viewable":true,"workflowRedirectUrl":null,"symbols":{"timed_out":false,"not_analyzed":false,"symbols":[{"name":"onRequestPost","kind":"function","ident_start":126,"ident_end":139,"extent_start":111,"extent_end":1219,"fully_qualified_name":"onRequestPost","ident_utf16":{"start":{"line_number":3,"utf16_col":22},"end":{"line_number":3,"utf16_col":35}},"extent_utf16":{"start":{"line_number":3,"utf16_col":7},"end":{"line_number":36,"utf16_col":1}}}]}},"copilotInfo":{"documentationUrl":"https://docs.github.com/copilot/overview-of-github-copilot/about-github-copilot-for-individuals","notices":{"codeViewPopover":{"dismissed":false,"dismissPath":"/settings/dismiss-notice/code_view_copilot_popover"}},"userAccess":{"hasSubscriptionEnded":false,"orgHasCFBAccess":false,"userHasCFIAccess":false,"userHasOrgs":false,"userIsOrgAdmin":false,"userIsOrgMember":false,"business":null,"featureRequestInfo":null}},"copilotAccessAllowed":false,"csrf_tokens":{"/j2st1n/cloudflare-pages-auth/branches":{"post":"InkKUFgmmm7qrptpxeYgBv7qJ5sJHKn2RtyZQtAGFrr7jPKOi9viDkrCtBjNYLN07QWpy8NMqP--xNe02UDZPQ"},"/repos/preferences":{"post":"EUWZCWlQQBgxXa2lMBV4YUFZ7n8w_Xum8-OwUisa9pYTADruETVB4ZeegQKiCpPCKr7t_zeyqQ6xT3v245_UMQ"}}},"title":"cloudflare-pages-auth/functions/cfp_login.ts at main · j2st1n/cloudflare-pages-auth"}