//数组
//Array
//var arr=new Array();
//var arr=new Array(1,2,3,4,5);
//var arr=new Array();
//javascript当中的Array数组，不需要指定长度，直接用，多少都有
//for (var i=0;i<5;i++) {
//	arr[i]=i;
//}
//arr[100]=0;
//alert(arr.length);

//var arr=new Array(5,6,8,7,2,9,1,3,4);
//for (var i=0;i<arr.length-1;i++) {
//	for (var j=0;j<arr.length-i-1;j++) {
//		if(arr[j]>arr[j+1]){
//			var temp=arr[j];
//			arr[j]=arr[j+1];
//			arr[j+1]=temp;
//		}
//	}
//}
//alert(arr);


//对象document
//文档对象document，它代表了整个html
//整个html文档我们看成一个对象，document就是这个对象的引用。
//document.write(arr);

//var a=new Array("aaa","bbb","ccc");
//array默认元素用“，”分割，你可以使用join把它替换掉
//var myVar1=a.join("");
//document.write(myVar1);

//javascript中new Array(size);
//var a=new Array("1");
//a[0]=1;

//两个数组
//var arr=new Array(3);
//arr[0]="a";
//arr[1]="c";
//arr[2]="d";
//var arr1=new Array(3);
//arr1[0]=1;
//arr1[1]=2;
//arr1[2]=3;

//concat把两个数组拼接到一起
//document.write(arr.concat(arr1).concat(arr));

//String类
var str=new String("asdfASDF");
var str1=new String("0123");
//用大号字来显示big();
//用小号字来显示small();
//用粗体来显示bold();
//用斜体来显示italics();
//可以混合使用上述方法


//charAt(index) 返回index下标对应的字符
//indexOf(searchString,startPosition) 
//从startPosition开始找searchString，返回脚标，如果没找到返回-1。
//concat可以用于连接两个字符串
//replace(str1,str2)找到第一个str1序列替换为str2序列
//replaceAll
//split分割，第一个参数是用什么分割，第二个参数是取分割后的前几段
//substring，获取子串，从start开始到end结束[start,end)
//toUpperCase();返回大写的字符串
//toLowerCase();返回小写的字符串
//document.write(str.toLowerCase());

//日期类型
//Date()
//构造方法无参数，构造出对象以后，显示的就是当前时间
//getDate返回一个月中的某一天（1~31）
//getDay返回一周中的某一天(0~6)
//getMonth返回一年中的某个月(0~11)
//getFullYear返回年
//getHours返回小时数(0~23)
//getMinutes返回分钟数（0~59）
//getSeconds返回秒数(0~59)

//var date=new Date();
//document.write(date.getSeconds());
//function getStr(num){
//	if(num<10){
//		return "0"+num;
//	}else{
//		return num;
//	}
//}
//自动变化
//function startTime(){
//	var date=new Date();
//	var txt=document.getElementById("txt");
//	if(txt!=null){
//		txt.innerHTML=getStr(date.getHours())+":"+getStr(date.getMinutes())+":"+getStr(date.getSeconds());
//	}else{
//		//alert("null");
//	}
//	
//	setTimeout("startTime()",500);
//}

//500毫秒之后执行startTime方法
//setTimeout("startTime()",500);
//startTime();


function replaceAll(str,str1,str2){
	for(;;){
		var index=str.indexOf(str1,0);
		if(index==-1){
			break;
		}else{
			str=str.replace(str1,str2);
		}
	}
	return str;
}

var str="123456123789123987";

alert(replaceAll(str,"123","abc"));
