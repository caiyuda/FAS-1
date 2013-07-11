window.onload = function()
{
	document.getElementById("up").onclick = clickUp;
	document.getElementById("down").onclick = clickDown;
}

function clickUp()
{
	document.getElementById("first").innerHTML++;
}

function clickDown()
{
	document.getElementById("first").innerHTML--;
}

function judge()
{
	var obj=document.getElementById('file1');
	if(obj.value=="")
	{
	alert('NULL');
	return false;
	}
	var stuff=obj.value.match(/^(.*)(\.)(.{1,8})$/)[3]; 
	if(stuff !="xls" && stuff != "xlsx")
	{
	alert('Please input a .xls or .xlsx file');
	return false;
	}
    else
	{
	alert('upload success!');
	return true; 
	}
}