function set_text(k){
	console.log(k);
	document.getElementById('set_rupess').value=k;
	str=`<p>YOUR DONATION WILL HELP FOR THE EDUCATION OF ${k/1000} CHILD FOR ${2*(k/1000)} MONTHS
			</p>`
						
						console.log(str);
  

document.getElementById('sets').innerHTML=str
}


	

