(self["webpackChunknginxconfig_io"]=self["webpackChunknginxconfig_io"]||[]).push([[859],{9859:(e,o,n)=>{"use strict";n.r(o),n.d(o,{default:()=>V});const r={back:"Précédent",next:"Suivant",enable:"activer",php:"PHP",ssl:"SSL",nginx:"NGINX",http:"HTTP",https:"HTTPS",letsEncrypt:"Let's Encrypt",python:"Python",wordPress:"WordPress",drupal:"Drupal",magento:"Magento",joomla:"Joomla",django:"Django",logging:"Logs",reverseProxy:"Proxy Inverse",reverseProxyLower:"proxy inverse",restrict:"Restreindre",path:"Chemin"};var i=n(4938);const t={title:`${r.nginx}Config`,description:`La manière la plus simple de configurer un serveur ${r.nginx} performant, sécurisé et stable.`,singleColumnMode:"Mode simple colonne",splitColumnMode:"Mode double colonne",perWebsiteConfig:"Configuration par site",addSite:"Ajouter un site",globalConfig:"Configuration globale",setup:"Configurer",configFiles:"Fichiers de configuration"},s={downloadConfig:"Télécharger la configuration",copyBase64:"Copier en Base64"},a={backToTop:"Retour en haut",thisToolIs:"Cet outil est",openSourceOnGitHub:"open-source sur GitHub",underThe:"sous",mit:"licence MIT",license:"!",weWelcomeFeedbackAndContributions:"Nous apprécions les retours et les contributions.",originallyCreatedBy:"Initialement créé par",balintSzekeres:"Bálint Szekeres",maintainedBy:"maintenu par",digitalOcean:"DigitalOcean"},l={enableEncryptedSslConnection:`${r.enable} les connexions ${r.ssl}`,http2:`${r.http}/2`,enableHttp2Connections:`${r.enable} les connexions ${r.http}/2`,http3:`${r.http}/3`,enableHttp3Connections:`${r.enable} les connexions ${r.http}/3`,forceHttps:`Forcer ${r.https}`,hsts:"HSTS",enableStrictTransportSecurity:`${r.enable} Strict Transport Security, exigeant HTTPS`,enableIncludeSubDomains:`${r.enable} la directive includeSubDomains, exigeant une connexion HTTPS pour tous les sous-domaines.`,enablePreload:`${r.enable} la directive de préchargement, indiquant aux navigateurs de toujours utiliser une connexion HTTPS`,certificationType:"Type de certification",customCertificate:"Certificat personnalisé",letsEncryptEmail:`E-mail ${r.letsEncrypt}`,http3IsANonStandardModule:"HTTP/3 isn't a standard NGINX module, check the ",http3NginxQuicReadme:"NGINX QUIC readme",http3OrThe:" or the ",http3CloudflareQuicheProject:"Cloudflare quiche project",http3ForBuildingNginxWithHttp3:" for how to build NGINX with HTTP/3!"},u={byDomain:"par domaine",enableForThisDomain:`${r.enable} pour ce domaine`},c={phpIsDisabled:`${r.php} est désactivé.`,phpCannotBeEnabledWithReverseProxy:`${r.php} ne peut pas être activé en même temps que le ${r.reverseProxyLower}.`,phpCannotBeEnabledWithPython:`${r.php} ne peut pas être activé en même temps que ${r.python}.`,enablePhp:`${r.enable} ${r.php}`,wordPressRules:`Règles ${r.wordPress}`,enableWordPressRules:`${r.enable} les règles spécifiques à ${r.wordPress}`,drupalRules:`Règles ${r.drupal}`,enableDrupalRules:`${r.enable} les règles spécifiques à ${r.drupal}`,magentoRules:`Règles ${r.magento}`,enableMagentoRules:`${r.enable} les règles spécifiques à ${r.magento}`,joomlaRules:`Règles ${r.joomla}`,enableJoomlaRules:`${r.enable} les règles spécifiques à ${r.joomla}`,phpServer:`Serveur ${r.php}`,phpBackupServer:`Serveur de sauvegarde ${r.php}`,tcp:"TCP",hhvmSocket:"Socket HHVM",php5Socket:"Socket 5.x",php70Socket:"Socket 7.0",php71Socket:"Socket 7.1",php72Socket:"Socket 7.2",php73Socket:"Socket 7.3",php74Socket:"Socket 7.4",php80Socket:"Socket 8.0",phpSocket:"Socket PHP",custom:"Custom",disabled:"Désactivé"},p={presets:"Préconfigurations",itLooksLikeYouCustomisedTheConfig:"Il semblerait que vous ayez customisé la configuration de ce domaine. Utiliser une nouvelle préconfiguration peut réinitialiser ou changer certains paramètres que vous avez définis.",frontend:"Frontend",nodeJs:"Node.js",singlePageApplication:"Application monopage"},d={pythonIsDisabled:`${r.python} est désactivé.`,pythonCannotBeEnabledWithReverseProxy:`${r.python} ne peut pas être activé en même temps que le ${r.reverseProxyLower}.`,pythonCannotBeEnabledWithPhp:`${r.python} ne peut pas être activé en même temps que ${r.php}.`,enablePython:`${r.enable} ${r.python}`,djangoRules:`Règles de ${r.django}`,enableDjangoRules:`${r.enable} les règles spécifiques à ${r.django}`},g={reverseProxyIsDisabled:`Le ${r.reverseProxyLower} est désactivé.`,reverseProxyCannotBeEnabledWithPhp:`Le ${r.reverseProxyLower} ne peut pas être activé en même temps que ${r.php}.`,reverseProxyCannotBeEnabledWithPython:`Le ${r.reverseProxyLower} ne peut pas être activé en même temps que ${r.python}.`,enableReverseProxy:`${r.enable} le ${r.reverseProxyLower}`},m={fallbackRouting:"Routes par défaut",fallbackRoutingPhpPath:`Chemin par défaut ${r.php}`,legacyPhpRouting:`Routage ${r.php} legacy`,enableLegacyRouting:`${r.enable} le routage legacy`,routing:"Routage"},b={domain:"Domaine",documentRoot:"Dossier racine",oneOrMoreOtherDomainsAreAlsoNamed:"Un ou plusieurs autres domaines sont aussi nommés",thisWillCauseIssuesWithConfigGeneration:"Cela causera des problèmes lors de la génération de la configuration.",wwwSubdomain:"Sous-domaine www",cdnSubdomain:"Sous-domaine CDN",redirectSubdomains:"Rediriger les sous-domaines",server:"Serveur",listen:"écouter"},v={disableForThisDomain:"désactiver pour ce domaine",responseCode:"Code de réponse"},f="Onion",h={onion:f,onionLocation:`Adresse ${f}`,provideAnOnionLocationToSetOnionLocationHeader:"Fournir une adresse Onion pour définir le header Onion-Location pour votre site.",letsVisitorsKnownOnionServicesIsAvailable:"Indique aux visiteurs qu'une version onion du site est disponible pour les navigateurs Tor.",learnMoreAboutOnionServices:"En apprendre plus sur les services Onion",onionLocationExpectedToEndWithOnion:"Une adresse onion se termine normalement avec `.onion`."},$={https:l,logging:u,php:c,presets:p,python:d,reverseProxy:g,routing:m,server:b,restrict:v,onion:h},C="Mozilla",y="IPv4",S="IPv6",x={sslProfile:`Profil ${r.ssl}`,httpsMustBeEnabledOnOneSite:`${r.https} doit être activé sur au moins un site pour configurer les paramètres ${r.https} globaux.`,portReuse:"Reuseport",enableReuseOfPort:`${r.enable} reuseport to generate a listening socket per worker`,ocspDnsResolvers:"Résolveur DNS OCSP",cloudflareResolver:"Résolveur Cloudflare",googlePublicDns:"Google Public DNS",openDns:"OpenDNS",quad9:"Quad9",verisign:"Verisign",letsEncryptWebroot:`${r.letsEncrypt} dossier racine`,letsEncryptCertRoot:`Dossier du certificat ${r.letsEncrypt}`,mozillaModern:`${C} Moderne`,mozillaIntermediate:`${C} Intermédiaire`,mozillaOld:`${C} Ancien`,ipv4Only:`${y} seulement`,ipv6Only:`${S} seulement`,ipv4AndIpv6:`${y} & ${S}`},P={enableFileNotFoundErrorLogging:`${r.enable} les erreurs de fichiers introuvables lors de la journalisation`,logformat:"log_format",enableCloudflare:"ajouter les en-têtes de requête CloudFlare au format de journal par défaut",cfRay:"CF-Ray",cfConnectingIp:"CF-Connecting-IP",xForwardedFor:"X-Forwarded-For",xForwardedProto:"X-Forwarded-Proto",trueClientIp:"True-Client-IP",cfIpCountry:"CF-IPCountry",cfVisitor:"CF-Visitor",cdnLoop:"CDN-Loop"},T={nginxConfigDirectory:`Dossier de configuration ${r.nginx}`,mb:"MB"},k={gzipCompression:"Compression Gzip",enableGzipCompression:`${r.enable} la compression gzip`,brotliCompression:"Compression Brotli",enableBrotliCompression:`${r.enable} la compression brotli`,brotliIsANonStandardModule:"Brotli isn't a standard NGINX module, check the ",brotliGoogleNgxBrotliProject:"Google ngx_brotli project",brotliForBuildingNginxWithBrotli:" for how to build NGINX with Brotli!",expirationForAssets:"Expiration des assets",expirationForMedia:"Expiration des medias",expirationForSvgs:"Expiration des SVGs",expirationForFonts:"Expiration des fonts",performance:"Performances"},D={pythonServer:`Serveur ${r.python}`,pythonMustBeEnabledOnOneSite:`${r.python} doit être activé sur au moins un site pour configurer les paramètres globaux de ${r.python}.`},R="Legacy X-Forwarded-* headers",w={reverseProxyMustBeEnabledOnOneSite:`Le ${r.reverseProxyLower} doit être activé sur au moins un site pour configurer les paramètres globaux du ${r.reverseProxyLower}.`,seconds:"secondes",passOn:`${R} passed on`,remove:`${R} actively removed`},I={whenUsingWordPressUnsafeEvalIsOftenRequiredToAllowFunctionality:`Lors de l'utilisation de ${r.wordPress}, <code class="slim">script-src 'self' 'unsafe-inline' 'unsafe-eval';</code> est fréquemment exigé par la Politique de Sécurité du Contenu pour assurer le bon fonctionnement du panneau d'administration.`,security:"Sécurité"},O={modularizedStructure:"Structure modulaire",enableModularizedConfigFiles:`${r.enable} les fichiers de configuration modulaires`,symlinkVhost:"Lien symbolique pour vhost",enableSymLinksFrom:`${r.enable} les liens symboliques depuis`,to:"vers",shareConfiguration:"Partager la configuration",resetConfiguration:"Réinitialiser la configuration",resetGlobalConfig:"Réinitialiser la configuration globale",resetAllDomains:"Réinitialiser tous les domaines",removeAllDomains:"Supprimer tous les domaines",resetAllDomainsConfig:"Réinitialiser la configuration de tous les domaines",resetDomainConfig:"Réinitialiser la configuration du domaine",removeDomain:"Supprimer le domaine",yesImSure:"Oui, je suis sûr(e)",noCancel:"Non, annuler",tools:"Outils",resetGlobalConfigBody:"Voulez-vous vraiment réinitialiser toutes les options de configuration globales?",resetAllDomainsConfigBody:"Voulez-vous vraiment réinitialiser les configurations de TOUS les domaines?",removeAllDomainsBody:"Voulez-vous vraiment supprimer les configurations de TOUS les domaines?",areYouSureYouWantToResetAllConfigurationOptionsForThe:"Voulez-vous vraiment réinitialiser toutes les options de configuration pour",domain:"?",areYouSureYouWantToRemoveThe:"Voulez-vous vraiment supprimer",domainConfiguration:"?"},N="Docker",L="Dockerfile",F={docker:N,dockerfile:L,dockerCompose:`${N} Compose`,applyDockerTweaks:`Configurer pour ${N}`,applyDockerTweaksForNginx:`Applique des ajustements pour exécuter ${r.nginx} avec ${N}`,applyDockerTweaksExplainer:`Définit l'utilisateur ${r.nginx} comme <code class="slim">nginx</code> et le pid comme <code class="slim">/var/run/nginx.pid</code>`,includeDockerfile:`Inclure un ${L} pour exécuter ${r.nginx} avec ${N}`,includeDockerCompose:`Inclure un docker-compose pour exécuter ${r.nginx} avec docker-compose`},E={https:x,logging:P,nginx:T,performance:k,python:D,reverseProxy:w,security:I,tools:O,docker:F},z="Certbot",A={commentOutSslDirectivesInConfiguration:`Commentez les directives relatives à ${r.ssl}:`,reloadYourNginxServer:`Relancez le serveur ${r.nginx}:`,obtainSslCertificatesFromLetsEncrypt:`Obtenez les certificats ${r.ssl} de ${r.letsEncrypt} à l'aide de ${z}:`,uncommentSslDirectivesInConfiguration:`Décommentez les directives relatives à ${r.ssl}:`,configureCertbotToReloadNginxOnCertificateRenewal:`Configurez ${z} pour relancer ${r.nginx} lors du renouvellement des certificats:`,certbotDoesNotNeedToBeSetupForYourConfiguration:`Il est inutile de configurer ${z} pour votre configuration ${r.nginx}.`,certbot:z},B={downloadTheGeneratedConfig:"<b>Téléchargez</b> la configuration générée:",andUploadItToYourServers:"et <b>uploadez-la</b> vers le répertoire",directory:"de votre serveur.",or:"ou, ",copyBase64StringOfCompressedConfig:"copiez la configuration compressée et encodée en base64",pasteItInYourServersCommandLineAndExecute:", puis collez-la et exécutez-la en ligne de commande sur votre serveur.",navigateToYourNginxConfigurationDirectoryOnYourServer:`Sur votre serveur, naviguez vers le <b>dossier de configuration</b> de ${r.nginx}:`,createABackupOfYourCurrentNginxConfiguration:`Créez un <b>backup</b> de votre configuration ${r.nginx} actuelle:`,extractTheNewCompressedConfigurationArchiveUsingTar:"<b>Décompressez</b> la nouvelle configuration en utilisant Tar:",download:"Téléchargement"},q={letsGoLive:"C'est en ligne!",reloadNginxToLoadInYourNewConfiguration:`Relancez ${r.nginx} pour charger la nouvelle configuration:`,goLive:"C'est en ligne!"},G={generateDiffieHellmanKeysByRunningThisCommandOnYourServer:"Générez des <b>clefs de Diffie-Hellman</b> en exécutant cette commande sur votre serveur:",createACommonAcmeChallengeDirectoryForLetsEncrypt:`Créez un répertoire commun <b>ACME-challenge</b> (pour <b>${r.letsEncrypt}</b>):`,noAdditionalStepsAreNeededToSetUpSslForNginx:`Aucune étape additionnelle n'est nécessaire pour configurer ${r.ssl} pour ${r.nginx}.`,sslInit:`${r.ssl} init`},H={certbot:A,download:B,goLive:q,ssl:G},M={lookingForAPlaceToDeploy:"👋 Looking for a place to deploy your new configuration?",tryOutDigitalOceansDroplet:"Try out DigitalOcean's LEMP Droplet with NGINX"},j={wantToContributeChanges:"👋 Want to request new features, contribute changes, or translate the tool into a new language?",getInvolvedOnGitHub:"Get involved on GitHub"},W={droplet:M,contribute:j},Y={app:t,setup:s,footer:a,domainSections:$,globalSections:E,setupSections:H,callouts:W},V={common:r,languages:i.default,templates:Y}}}]);