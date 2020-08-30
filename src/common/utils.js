
export function getQueryVariable(variable, url) {
	let href = url || document.location.href
	let temp = href.split('?')[1] || href;
	let pram = new URLSearchParams('?'+temp);
	return pram.get(variable)
}

export function getAuthCode(url) {
	let href = url || `https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2021001181667619&scope=auth_user&redirect_uri=${document.URL.split('?')[0]}`
	// console.log(6666, encodeURIComponent(href))
    window.open(href, "_self");
}