Game.registerMod("Cookie SPAM", {
	init: () => {
		Game.Notify('Cookie SPAM', 'SPAM is now enabled!', [12,0])
		setInterval(Game.ClickCookie, 0)
	}
})