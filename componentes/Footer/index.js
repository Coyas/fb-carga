const Footer = () => {
	return (
		<footer className="pt-32 px-80 bg-white mt-24" style={{ height: "400px" }}>
			<div class="_95ke">
				<div
					id="pageFooter"
					data-referrer="page_footer"
					data-testid="page_footer"
					// className="flex flex-col"
				>
					<ul class="flex flex-row " data-nocookies="1">
						<li style={{ color: "#737373" }}>Português (Portugal)</li>
						<li>
							<a
								class="_sv4"
								dir="ltr"
								href="https://www.facebook.com/login"
								onclick='require("IntlUtils").setCookieLocale("en_US", "pt_PT", "https:\/\/www.facebook.com\/login", "www_list_selector", 0); return false;'
								title="English (US)"
							>
								English (US)
							</a>
						</li>
						<li>
							<a
								class="_sv4"
								dir="ltr"
								href="https://fr-fr.facebook.com/login"
								onclick='require("IntlUtils").setCookieLocale("fr_FR", "pt_PT", "https:\/\/fr-fr.facebook.com\/login", "www_list_selector", 1); return false;'
								title="French (France)"
							>
								Français (France)
							</a>
						</li>
						<li>
							<a
								class="_sv4"
								dir="ltr"
								href="https://it-it.facebook.com/login"
								onclick='require("IntlUtils").setCookieLocale("it_IT", "pt_PT", "https:\/\/it-it.facebook.com\/login", "www_list_selector", 2); return false;'
								title="Italian"
							>
								Italiano
							</a>
						</li>
						<li>
							<a
								class="_sv4"
								dir="ltr"
								href="https://es-es.facebook.com/login"
								onclick='require("IntlUtils").setCookieLocale("es_ES", "pt_PT", "https:\/\/es-es.facebook.com\/login", "www_list_selector", 3); return false;'
								title="Spanish (Spain)"
							>
								Español (España)
							</a>
						</li>
						<li>
							<a
								class="_sv4"
								dir="ltr"
								href="https://nl-nl.facebook.com/login"
								onclick='require("IntlUtils").setCookieLocale("nl_NL", "pt_PT", "https:\/\/nl-nl.facebook.com\/login", "www_list_selector", 4); return false;'
								title="Dutch"
							>
								Nederlands
							</a>
						</li>
						<li>
							<a
								class="_sv4"
								dir="ltr"
								href="https://de-de.facebook.com/login"
								onclick='require("IntlUtils").setCookieLocale("de_DE", "pt_PT", "https:\/\/de-de.facebook.com\/login", "www_list_selector", 5); return false;'
								title="German"
							>
								Deutsch
							</a>
						</li>
						<li>
							<a
								class="_sv4"
								dir="rtl"
								href="https://ar-ar.facebook.com/login"
								onclick='require("IntlUtils").setCookieLocale("ar_AR", "pt_PT", "https:\/\/ar-ar.facebook.com\/login", "www_list_selector", 6); return false;'
								title="Arabic"
							>
								العربية
							</a>
						</li>
						<li>
							<a
								class="_sv4"
								dir="ltr"
								href="https://hi-in.facebook.com/login"
								onclick='require("IntlUtils").setCookieLocale("hi_IN", "pt_PT", "https:\/\/hi-in.facebook.com\/login", "www_list_selector", 7); return false;'
								title="Hindi"
							>
								हिन्दी
							</a>
						</li>
						<li>
							<a
								class="_sv4"
								dir="ltr"
								href="https://zh-cn.facebook.com/login"
								onclick='require("IntlUtils").setCookieLocale("zh_CN", "pt_PT", "https:\/\/zh-cn.facebook.com\/login", "www_list_selector", 8); return false;'
								title="Simplified Chinese (China)"
							>
								中文(简体)
							</a>
						</li>
						<li>
							<a
								class="_sv4"
								dir="ltr"
								href="https://ja-jp.facebook.com/login"
								onclick='require("IntlUtils").setCookieLocale("ja_JP", "pt_PT", "https:\/\/ja-jp.facebook.com\/login", "www_list_selector", 9); return false;'
								title="Japanese"
							>
								日本語
							</a>
						</li>
						<li>
							<a
								role="button"
								class="border border-gray-400 rounded-sm px-2 py-1 flex items-center w-7 "
								rel="dialog"
								ajaxify="/settings/language/language/?uri=https%3A%2F%2Fja-jp.facebook.com%2Flogin&amp;source=www_list_selector_more"
								href="#"
								title="Mostrar mais idiomas"
							>
								<i class="fas fa-plus"></i>
							</a>
						</li>
					</ul>
					<div
						id="linha"
						style={{
							borderBottom: "1px solid #dddfe2",
							fontSize: "1px",
							height: "8px",
							marginBottom: "8px",
						}}
					></div>
					<div
						id="pageFooterChildren"
						role="contentinfo"
						aria-label="Ligações para o site do Facebook"
						className="p-1"
					>
						<ul class="flex flex-wrap">
							<li>
								<a href="/r.php" title="Regista-te no Facebook">
									Regista-te
								</a>
							</li>
							<li>
								<a href="/login/" title="Inicia sessão no Facebook">
									Iniciar sessão
								</a>
							</li>
							<li>
								<a href="https://messenger.com/" title="Explora o Messenger.">
									Messenger
								</a>
							</li>
							<li>
								<a href="/lite/" title="Facebook Lite para Android">
									Facebook Lite
								</a>
							</li>
							<li>
								<a
									href="https://www.facebook.com/watch/"
									title="Explora os nossos vídeos no Watch."
								>
									{" "}
									Watch{" "}
								</a>
							</li>
							<li>
								<a
									href="/directory/people/"
									title="Explora o nosso diretório de pessoas."
								>
									Pessoas
								</a>
							</li>
							<li>
								<a
									href="/directory/pages/"
									title="Explora o nosso diretório de Páginas."
								>
									Páginas
								</a>
							</li>
							<li>
								<a href="/pages/category/">Categorias de Página</a>
							</li>
							<li>
								<a
									href="/places/"
									title="Descobre locais populares no Facebook."
								>
									Locais
								</a>
							</li>
							<li>
								<a href="/games/" title="Vê os jogos do Facebook.">
									Jogos
								</a>
							</li>
							<li>
								<a
									href="/directory/places/"
									title="Explora o nosso diretório de locais."
								>
									Localizações
								</a>
							</li>
							<li>
								<a
									href="/marketplace/"
									title="Compra e vende no Marketplace do Facebook."
								>
									Marketplace
								</a>
							</li>
							<li>
								<a
									href="https://pay.facebook.com/"
									target="_blank"
									title="Saber mais sobre o Facebook Pay"
								>
									Facebook Pay
								</a>
							</li>
							<li>
								<a
									href="/directory/groups/"
									title="Explora o nosso diretório de grupos."
								>
									Grupos
								</a>
							</li>
							<li>
								<a
									href="/jobs/"
									title="Candidata-te a empregos e contrata no Facebook."
								>
									Empregos
								</a>
							</li>
							<li>
								<a
									href="https://www.oculus.com/"
									target="_blank"
									title="Sabe mais sobre o Oculus"
								>
									Oculus
								</a>
							</li>
							<li>
								<a
									href="https://portal.facebook.com/"
									target="_blank"
									title="Sabe mais sobre o Portal from Facebook"
								>
									Portal
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/"
									title="Visita o Instagram"
									target="_blank"
									rel="noopener nofollow"
									data-lynx-mode="asynclazy"
									data-lynx-uri="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&amp;h=AT0urPAL6rE2TMHLGgIZKzrMaK8ONW4BefREssa5kvLUz3bRHDI1rt5lSTEFhA2IrUa1woCiRlox7yM7iaCkgQ2wmIOB7hDFt2uPLEFCBvOIKs9NAWG-TbiClLco7g8EEaxTkQuMa7akDg"
								>
									Instagram
								</a>
							</li>
							<li>
								<a
									href="/local/lists/245019872666104/"
									title="Explora o nosso diretório de listas locais."
								>
									Listas Locais
								</a>
							</li>
							<li>
								<a
									href="/fundraisers/"
									title="Faz um donativo para causas que mereçam."
								>
									Angariações de fundos
								</a>
							</li>
							<li>
								<a
									href="/biz/directory/"
									title="Explora o nosso diretório de serviços do Facebook."
								>
									Serviços
								</a>
							</li>
							<li>
								<a
									href="/votinginformationcenter/?entry_point=c2l0ZQ%3D%3D"
									title="Ver o Centro de informação sobre eleições"
								>
									Centro de informação sobre eleições
								</a>
							</li>
							<li>
								<a
									href="/facebook"
									accesskey="8"
									title="Lê o nosso blogue, descobre o centro de recursos e encontra oportunidades de emprego."
								>
									Sobre
								</a>
							</li>
							<li>
								<a
									href="/ad_campaign/landing.php?placement=pflo&amp;campaign_id=402047449186&amp;nav_source=unknown&amp;extra_1=auto"
									title="Publicitar no Facebook."
								>
									Criar anúncio
								</a>
							</li>
							<li>
								<a
									href="/pages/create/?ref_type=site_footer"
									title="Cria uma Página."
								>
									Criar Página
								</a>
							</li>
							<li>
								<a
									href="https://developers.facebook.com/?ref=pf"
									title="Desenvolve na nossa plataforma."
								>
									Programadores
								</a>
							</li>
							<li>
								<a
									href="/careers/?ref=pf"
									title="Toma o próximo passo da tua carreira na nossa empresa fantástica."
								>
									Empregos
								</a>
							</li>
							<li>
								<a
									data-nocookies="1"
									href="/privacy/explanation"
									title="Sabe mais sobre a tua privacidade e o Facebook."
								>
									Privacidade
								</a>
							</li>
							<li>
								<a
									href="/policies/cookies/"
									title="Sabe mais sobre cookies e o Facebook."
									data-nocookies="1"
								>
									Cookies
								</a>
							</li>
							<li>
								<a
									class="_41ug"
									data-nocookies="1"
									href="https://www.facebook.com/help/568137493302217"
									title="Sabe mais sobre AdChoices."
								>
									AdChoices<i class="img sp_xdKAmLxz44k sx_184e3c"></i>
								</a>
							</li>
							<li>
								<a
									data-nocookies="1"
									href="/policies?ref=pf"
									accesskey="9"
									title="Revê os nossos termos e as nossas políticas."
								>
									Termos
								</a>
							</li>
							<li>
								<a
									href="/help/?ref=pf"
									accesskey="0"
									title="Visita o nosso Centro de Ajuda."
								>
									Ajuda
								</a>
							</li>
							<li>
								<a
									accesskey="6"
									class="accessible_elem"
									href="/settings"
									title="Vê e edita as tuas definições do Facebook."
								>
									Definições
								</a>
							</li>
							<li>
								<a
									accesskey="7"
									class="accessible_elem"
									href="/allactivity?privacy_source=activity_log_top_menu"
									title="Ver o teu registo de atividade"
								>
									Registo de atividade
								</a>
							</li>
						</ul>
					</div>
					<div class="copyright">
						<div>
							<span> Facebook © 2021</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
