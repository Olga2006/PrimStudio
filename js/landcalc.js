function landcalcl() { 

 var landland = document.getElementById("landland"); 
 var landtime1 = document.getElementById("landtime1");
 var landtime2 = document.getElementById("landtime2");
 var landtime3 = document.getElementById("landtime3");
 var landtime4 = document.getElementById("landtime4");
 var landtype_3d = document.getElementById("landtype_3d"); 
 var landtype_CD = document.getElementById("landtype_CD"); 
 //Result
 
 var result = document.getElementById("landresult_land");
 var result = document.getElementById("landresult_time1");
 var result = document.getElementById("landresult_time2");
 var result = document.getElementById("landresult_time3");
 var result = document.getElementById("landresult_time4");
 var result = document.getElementById("landresult_3d");
 var result = document.getElementById("landresult_CD");

 var lands_land = 0; 
 var landt_time1 = 0;
 var landt_time2 = 0;
 var landt_time3 = 0;
 var landt_time4 = 0;
 var landprice_3d = 0;
 var landprice_CD = 0;
 var landprice = 0; 
 var landtime_pro = 0; 
 var landpriceT = 0;
 


 landlandprice_3d += (landtype_3d.checked == true) ? parseInt(landtype_3d.value) : 0;
 landprice_CD += (landtype_CD.checked == true) ? parseInt(landtype_CD.value) : 0;
 lands_land += parseInt(landland.value);

 landt_time1 += parseInt(landtime1.value);
 landt_time2 += parseInt(landtime2.value);
 landt_time3 += parseInt(landtime3.value);
 landt_time4 += parseInt(landtime4.value);
 

 landpricer = lands_land * 600;
 landprice3d = lands_land * landprice_3d;
 landpriceCD = lands_land  * landprice_CD;
 landpriceT = (landt_time1 * 80) + (landt_time2 * 80) + (landt_time3 * 80) + (landt_time4 * 50);
 landprice = landpriceCD + landprice3d + landpriceT + landpricer;
 landtime_pro = landprice/130;
 landpriceCD = landpriceCD.toFixed(1);
 landprice3d = landprice3d.toFixed(1);
 landprice = landprice.toFixed(0);
 landtime_pro = landtime_pro.toFixed(0);

 landresult_pricer.innerHTML = landpricer;
 landresult_3d.innerHTML = landprice3d;
 landresult_CD.innerHTML = landpriceCD;
 landresult_time3.innerHTML = landpriceT;
 landresult_result.innerHTML = landprice;
 landresult_time.innerHTML = landtime_pro;
 } 





