const data = [
	{
		"name": "Herman Mcgowan",
		"address": "Ap #323-4569 Lacinia. Ave",
		"country": "Peru",
		"phone": "(728) 760-7350",
		"region": "Dōngběi",
		"id": "0"
	},
	{
		"name": "Nigel Atkins",
		"address": "Ap #606-5918 Dictum Street",
		"country": "United Kingdom",
		"phone": "1-733-738-4578",
		"region": "Queensland",
		"id": "1"
	},
	{
		"name": "Peter Valenzuela",
		"address": "Ap #283-1513 Accumsan Rd.",
		"country": "United States",
		"phone": "(583) 204-4363",
		"region": "East Lothian",
		"id": "2"
	},
	{
		"name": "Ria Gates",
		"address": "Ap #424-2649 Lobortis. Road",
		"country": "Vietnam",
		"phone": "(867) 891-8452",
		"region": "Junín",
		"id": "3"
	},
	{
		"name": "Ryder Sosa",
		"address": "234-5900 Diam. St.",
		"country": "Philippines",
		"phone": "1-672-474-8522",
		"region": "East Region",
		"id": "4"
	}
];

const barMenu = document.getElementById('bar-menu');
const tableMenu = document.getElementById('table-menu');
var verificationBarMenu = 0;

function tableMenuOn(number){
    let renderHtml = `
        <td id="name">${data[number].name}</td>
        <td id="address">${data[number].address}</td>
        <td id="region">${data[number].region}</td>
        <td id="phone">${data[number].phone}</td>
        <td class="country" id="country">${data[number].country}</td>
        <td class= "id" id="id">${data[number].id}</td>
        `;
    tableMenu.innerHTML = renderHtml;

}
function barMenuOn(){
    if(verificationBarMenu == 0){
        let renderHtml = `<h3 title="bar-title">Peoples</h3>`;
        for(let i in data){
            renderHtml +=  `
                <button class="list-button" onClick="tableMenuOn(${i})">${data[i].name}</button>
            `;
        }
        barMenu.innerHTML += renderHtml;
    return verificationBarMenu = 1;
    } else {
        barMenu.innerHTML = '';
        return verificationBarMenu = 0;
    }
}
