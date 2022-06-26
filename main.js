var names_of_people = [];
    
function submit()
{
    names_of_people.push(document.getElementById("name1").value);
	console.log(document.getElementById("name1").value);    
    console.log(names_of_people);
    console.log(names_of_people.length);
	document.getElementById("display_name").innerHTML=names_of_people.toString();
   }



function show()
{
	console.log(names_of_people);
	document.getElementById("p1").innerHTML=names_of_people.join("<br>").toString();
	document.getElementById("sort_button").style.display="block";
	
}


function sorting()
	{
		names_of_people.sort();
		console.log(names_of_people);		
		document.getElementById("sorted").innerHTML=names_of_people.join("<br>").toString();
		}


function searching()
{
	var found=0;
	for(var j=0; j<names_of_people.length; j++)
		{
			if(document.getElementById("s1").value==names_of_people[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}
