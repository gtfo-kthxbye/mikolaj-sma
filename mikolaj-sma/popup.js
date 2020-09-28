var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-179044184-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

let killTheDragon = document.getElementById('killTheDragon');
let getAllLinks = document.getElementById('getAllLinks');
let linksDownloader = document.getElementById('linksDownloader');

var piggyBanks = [];
chrome.storage.local.get('piggyBanks', function(data) {
		if(data.piggyBanks != undefined) {piggyBanks = data.piggyBanks;}
});

chrome.storage.local.get('name', function(data) {
	if(data.name != undefined) {document.getElementById('name').value = data.name;}
});

chrome.storage.local.get('description', function(data) {
	if(data.description != undefined) {document.getElementById('description').value = data.description;}
});

chrome.storage.local.get('sex', function(data) {
	if(data.sex != undefined) {document.getElementById('sex').value = data.sex;}
});

var minimalDonation = 2;
chrome.storage.local.get('singleAmount', function(data) {
		if(data.singleAmount != undefined) {minimalDonation = data.singleAmount;}
});

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {	
	let url = tabs[0].url;	
	if (url.includes('siepomaga.pl/platnosc/success')){
		linksDownloader.style.display = "block";
	}
});

var f = ['🐲', '⚔', '🐲', '⚔']; 
var animate = false;
function loop() { 
if(animate){
	document.getElementById('killTheDragon').innerHTML = f[Math.floor((Date.now()/100)%f.length)]; 
	setTimeout(loop, 150);	
}
}	

var makeDonation = async function(name, desc, amount, sex){
	await new Promise(r => setTimeout(r, 1000));
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {	
	chrome.tabs.executeScript(
		tabs[0].id, {code: "var f = ['🐲', '⚔', '🐲', '⚔']; function loop() { location.hash = f[Math.floor((Date.now()/100)%f.length)]; setTimeout(loop, 150);}loop();	"}
		);		
	
	chrome.tabs.executeScript(
		tabs[0].id, {code: 'document.getElementsByClassName("amount-button other")[0].click();'}
		);	

	chrome.tabs.executeScript(
		tabs[0].id, {code: 'document.getElementById("payment_signature").value = "' + name + '";'}
		);
	chrome.tabs.executeScript(
		tabs[0].id, {code: 'document.getElementById("payment_comment_text").value = "' + desc + '";'}
		);
		
	chrome.tabs.executeScript(
		tabs[0].id, {code: 'document.getElementById("other_amount").value = ' + amount + ';'}
		);
	chrome.tabs.executeScript(
		tabs[0].id, {code: 'document.getElementById("payment_amount").value = ' + amount + ';'}
		);		
	
	var sexChangeCode;
	if(sex === "male"){
		sexChangeCode = 'document.getElementById("payment_sex_m").checked = true;'
	}
	else {
		sexChangeCode = 'document.getElementById("payment_sex_k").checked = true;'
	}
	
	chrome.tabs.executeScript(
		tabs[0].id, {code: sexChangeCode});
	

	chrome.tabs.executeScript(
		tabs[0].id, {code: 'document.getElementById("add_to_cart").click();'}
		);
	
	});
}

var disableInput = function(){
	document.getElementById('name').disabled = true;
	document.getElementById('description').disabled = true;
	document.getElementById('amount').disabled = true;
	document.getElementById('sex').disabled = true;
	document.getElementById('killTheDragon').disabled = true;
}

var enableInput = function(){
	document.getElementById('name').disabled = false;
	document.getElementById('description').disabled = false;
	document.getElementById('amount').disabled = false;
	document.getElementById('sex').disabled = false;	
	document.getElementById('killTheDragon').disabled = false;
}

getAllLinks.onclick = function(element){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {	
	chrome.tabs.executeScript(
		tabs[0].id, {code: "{document.getElementById('flash_messages').style = 'text-align: center; padding: 10px';let s = document.createElement('p');s.innerHTML = '🔗 Linki do wszytkich Twoich wplat. Możesz je skopiować i wkleić na grupie jeśli wpłata pochodzi z licytacji.';document.getElementById('flash_messages').append(s);for (let element of document.getElementsByClassName('to-payment')){let a = document.createElement('a');let br = document.createElement('br');a.href = element.children[0].href;a.text = element.children[0].href;document.getElementById('flash_messages').append(a);document.getElementById('flash_messages').append(br);}}"}
		);	
	
	});			
}

killTheDragon.onclick = async function(element) {
	disableInput()
	animate = true;
	loop();
	var name = document.getElementById('name').value;
	var description = document.getElementById('description').value;
	var amount = parseInt(document.getElementById('amount').value, 10)
	var sex = document.getElementById('sex').value;	 

	chrome.storage.local.set({name: name}, function() {});	
	chrome.storage.local.set({description: description}, function() {});	
	chrome.storage.local.set({sex: sex}, function() {});	
	
	let i;
	debugger;

	if(amount%minimalDonation > 0){
		amount += (minimalDonation - amount%minimalDonation)
		document.getElementById('amount').value = amount;
	}
	var singleAmount = (amount/piggyBanks.length).toFixed(2)
	var stopIndex = piggyBanks.length;
		
	if (singleAmount < minimalDonation){
		stopIndex = amount/minimalDonation;
		singleAmount = minimalDonation;
	}
	
	for (i = 0; i < stopIndex; i++) {
	  chrome.tabs.update({ url: piggyBanks[i] }, function(){makeDonation(name, description, singleAmount, sex)})
	  await new Promise(r => setTimeout(r, 2000));
	}	
	animate = false;
	document.getElementById('killTheDragon').innerHTML = "Pokonuj SMokA ⚔🐉";
	var alertText = '';
	if(sex === "male"){
		alertText = "Dzielny ⚔ wojowniku, pokonałeś 🔥🐲🔥 SMokA. Teraz 💰 grosza daj Mikusiowi, sakiewką potrząśnij i opłać koszyk darowizn!!!";
	}	
	else{
		alertText = "Dzielna ⚔ wojowniczko, pokonałaś 🔥🐲🔥 SMokA. Teraz 💰 grosza daj Mikusiowi, sakiewką potrząśnij i opłać koszyk darowizn!!!";
	}		
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {	
	chrome.tabs.executeScript(
		tabs[0].id, {code: 'alert("' + alertText +'")'}
		);	
	
	});		
	enableInput();

};