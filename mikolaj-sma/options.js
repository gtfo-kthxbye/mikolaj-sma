let save = document.getElementById('save');
let piggyList = document.getElementById('piggyList');
let piggyBanks = []

chrome.storage.local.get('piggyBanks', function(data) {
    for (let item of data.piggyBanks) {
      let li = document.createElement("li");
	  li.classList.add("list-group-item");
	  let a = document.createElement("a");
	  a.href = item;
	  a.target = "_blank";
	  a.text = item;
	  li.appendChild(a);
	  piggyList.appendChild(li);
    }	
});


chrome.storage.local.get('singleAmount', function(data) {
	if(data.singleAmount != undefined) {document.getElementById('singleAmount').value = data.singleAmount;}
});

save.onclick = function(element) {
	var singleAmount = document.getElementById('singleAmount').value;
	chrome.storage.local.set({singleAmount: singleAmount}, function() {
		alert("💾 Zapisano zmiany")
	});	
};