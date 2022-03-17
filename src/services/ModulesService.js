import data0 from "../components/JSON/u0.json"
import data1 from "../components/JSON/u1.json"
import data10 from "../components/JSON/u10.json"
import data11 from "../components/JSON/u11.json"
import data12 from "../components/JSON/u12.json"
import data13 from "../components/JSON/u13.json"
import data14 from "../components/JSON/u14.json"
import data15 from "../components/JSON/u15.json"
import data16 from "../components/JSON/u16.json"
import data17 from "../components/JSON/u17.json"
import data18 from "../components/JSON/u18.json"
import data19 from "../components/JSON/u19.json"
import data2 from "../components/JSON/u2.json"
import data3 from "../components/JSON/u3.json"
import data4 from "../components/JSON/u4.json"
import data5 from "../components/JSON/u5.json"
import data6 from "../components/JSON/u6.json"
import data7 from "../components/JSON/u7.json"
import data8 from "../components/JSON/u8.json"
import data9 from "../components/JSON/u9.json"


export function getDataModules() {

	const arrays=[data0, data1,data2, data3, data4, data5, data6,data7, data8,
	data9, data10, data11, data12, data13, data14, data15, data16,
	data17, data18, data19 ]

	const number = (data) => {
		const {name} = data;
		const sep=name.split(" ");
		return `./u${sep[1]}.json`
	}
	
	let authn1=[];
	let authn2=[];
	let authn3=[];
	let authn4=[];
		  
	let authz1=[];
	let authz2=[];
	let authz3=[];
	let authz4=[];
		  
	for(let i in arrays){
		if(arrays[i].provider.content_module==="authz.provider_1"){
			authn1.push(number(arrays[i]))
		}
		if(arrays[i].provider.content_module==="authz.provider_2"){
			authn2.push(number(arrays[i]))   
		}
		if(arrays[i].provider.content_module==="authz.provider_3"){
			authn3.push(number(arrays[i]))
		}
		if(arrays[i].provider.content_module==="authz.provider_4"){
			authn4.push(number(arrays[i]))
		}
	}
		  
	for(let i in arrays){
		if(arrays[i].provider.auth_module==="authn.provider_1"){
			authz1.push(number(arrays[i]))
		}
		if(arrays[i].provider.auth_module==="authn.provider_2"){
			authz2.push(number(arrays[i]))   
		}
		if(arrays[i].provider.auth_module==="authn.provider_3"){
			authz3.push(number(arrays[i]))
		}
		 if(arrays[i].provider.auth_module==="authn.provider_4"){
			authz4.push(number(arrays[i]))	
		}
	}
		
	const dataModules={
		"auth_module":{	
			"authn_provider_1":authz1,
			"authn_provider_2":authz2,
			"authn_provider_3":authz3,
			"authn_provider_4":authz4
		},
		"content_module" :{
			"authz_provider_1":authn1,
			"authz_provider_2":authn2,
			"authz_provider_3":authn3,
			"authz_provider_4":authn4
		},
	};
	
	console.table(dataModules)
	console.log(dataModules)
	return dataModules;
};