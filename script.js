function check()
		{
			var x;
			x=document.getElementById('in_kg').value;
			if(isNaN(x)||x<=0){
				window.alert("Enter a number greater than zero")
			}
			else{
				var num;
				num = x*1000;
			document.getElementById('in_g').value = num;
			num = x*2.2046;
			document.getElementById('in_p').value = num;
			num = x*1000000
			document.getElementById('in_mg').value = num;
			num = x*0.0011023;
			document.getElementById('in_ton').value = num;
			num = x*35.274;
			document.getElementById('in_o').value = num;
			}
		}
 function check1()
        {
            var a;
            a=document.getElementById('in_g').value;
            if(isNaN(a)||a<=0){
                window.alert("Enter a number greater than zero")
            }
            else{
                var num;
                num = a/1000;
            document.getElementById('in_kg').value = num;
            num = a/453.59237;
            document.getElementById('in_p').value = num;
            num = a*1000;
            document.getElementById('in_mg').value = num;
            num = a/907184.74;
            document.getElementById('in_ton').value = num;
            num = a/28.3495;
            document.getElementById('in_o').value = num;
            }
        }
function check2()
        {
            var a;
            a=document.getElementById('in_p').value;
            if(isNaN(a)||a<=0){
                window.alert("Enter a number greater than zero")
            }
            else{
                var num;
                num = a*0.45359237;
            document.getElementById('in_kg').value = num;
            num = a*453.592;
            document.getElementById('in_g').value = num;
            num = a*453592;
            document.getElementById('in_mg').value = num;
            num = a*0.0005;
            document.getElementById('in_ton').value = num;
            num = a*16;
            document.getElementById('in_o').value = num;
            }
        }
function check3()
        {
            var a;
            a=document.getElementById('in_mg').value;
            if(isNaN(a)||a<=0){
                window.alert("Enter a number greater than zero")
            }
            else{
                var num;
                num = a/1000000;
            document.getElementById('in_kg').value = num;
            num = a*0.001;
            document.getElementById('in_g').value = num;
            num = a*0.0000022046;
            document.getElementById('in_p').value = num;
            num = a/907184740;
            document.getElementById('in_ton').value = num;
            num = a*0.000035274;
            document.getElementById('in_o').value = num;
            }
        }
function check4()
        {
            var a;
            a=document.getElementById('in_ton').value;
            if(isNaN(a)||a<=0){
                window.alert("Enter a number greater than zero")
            }
            else{
                var num;
                num = a*907.185;
            document.getElementById('in_kg').value = num;
            num = a*907185;
            document.getElementById('in_g').value = num;
            num = a*907184740;
            document.getElementById('in_mg').value = num;
            num = a*2000;
            document.getElementById('in_p').value = num;
            num = a*32000;
            document.getElementById('in_o').value = num;
            }
        }
function check5()
        {
            var a;
            a=document.getElementById('in_o').value;
            if(isNaN(a)||a<=0){
                window.alert("Enter a number greater than zero")
            }
            else{
                var num;
                num = a*0.0283495;
            document.getElementById('in_kg').value = num;
            num = a*28.3495;
            document.getElementById('in_g').value = num;
            num = a*28349.5;
            document.getElementById('in_mg').value = num;
            num = a*0.0625;
            document.getElementById('in_p').value = num;
            num = a/32000;
            document.getElementById('in_ton').value = num;
            }
        }