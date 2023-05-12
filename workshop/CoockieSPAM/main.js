Game.registerMod("Cookie SPAM", {
	init: () => {
		let locSentence = 'SPAM is now enabled!'
		switch(locId) {
			case 'CS' : locSentence = 'SPAM je nyní povolen!'; break
			case 'DE' : locSentence = 'SPAM ist jetzt aktiviert!'; break
			case 'EN' : locSentence = 'SPAM is now enabled!'; break
			case 'ES' : locSentence = '¡SPAM ahora está habilitado!'; break
			case 'FR' : locSentence = 'Le SPAM est maintenant activé !'; break
			case 'IT' : locSentence = 'Lo SPAM è ora abilitato!'; break
			case 'JA' : locSentence = 'スパムが有効になりました。'; break
			case 'KO' : locSentence = '이제 스팸이 활성화되었습니다!'; break
			case 'NL' : locSentence = 'SPAM is nu ingeschakeld!'; break
			case 'PL' : locSentence = 'SPAM jest już włączony!'; break
			case 'PT-BR' : locSentence = 'O SPAM agora está ativado!'; break
			case 'RU' : locSentence = 'СПАМ теперь включен!'; break
			case 'ZH-CN' : locSentence = '垃圾邮件现已启用！'; break
			default : locSentence = 'SPAM is now enabled!'
		}
		Game.Notify('Cookie SPAM (1.003)', locSentence, [12,0])
		setInterval(Game.ClickCookie, 0)
	}
})
