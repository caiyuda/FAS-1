var flush2 = null;
var timer = null;
var id = 1;
window.onload = function()
{
    flush2 = setInterval(reload,2000);
	
	
	 timer= setInterval(clock,50);
	
}

function reload()
	{
		var oTest = document.getElementById("jscode");
		var code1=document.createElement("id");
        code1.src="http://hq.sinajs.cn/list=s_sh000001";
        code1.id= id;
        code1.charset="gb2312";
        oTest.appendChild(code1);
		id++;
		flush();
    }

function flush()
{
	var elements=hq_str_s_sh000001.split(",");
	var table = document.getElementById("t"); 
	var td = table.getElementsByTagName("td");
	var len = td.length;
	var k = 1;
	for(i=1;i<len;i += 2)
	{
		if(k == 3)
		{
			if(elements[k] < 0)
			{
				td[i].innerHTML = " <font color=\"#00ff00\"><strong>"+elements[k]+"</strong></font>";
			}
			else
			{
				td[i].innerHTML = " <font color=\"#ff0000\"><strong>"+elements[k]+"</strong></font>";
			}
			k++;
		}
		else
		{
			td[i].innerHTML = "<strong>"+elements[k]+"</strong>";
			k++;
		}
	} 
	

	
}

function clock()
	  {
	  var t=new Date();
	  document.getElementById("clock").value=t
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
	return true; 
}