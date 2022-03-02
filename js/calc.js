function calc() { 
 var type_style = document.getElementById("type_style"); 
 var room20 = document.getElementById("room20"); 
 var room17 = document.getElementById("room17"); 
 var room15 = document.getElementById("room15");
 var room10 = document.getElementById("room10");
 var time1 = document.getElementById("time1");
 var time2 = document.getElementById("time2");
 var time3 = document.getElementById("time3");
 var time4 = document.getElementById("time4");
 var type_PV = document.getElementById("type_PV"); 
 var type_3d = document.getElementById("type_3d"); 
 var type_CD = document.getElementById("type_CD"); 
 //Result
 var result = document.getElementById("result_style"); 
 var result = document.getElementById("result_room20");
 var result = document.getElementById("result_room17");
 var result = document.getElementById("result_room15");
 var result = document.getElementById("result_room10");
 var result = document.getElementById("result_time1");
 var result = document.getElementById("result_time2");
 var result = document.getElementById("result_time3");
 var result = document.getElementById("result_time4");
 var result = document.getElementById("result_PV");
 var result = document.getElementById("result_3d");
 var result = document.getElementById("result_CD");
 var k_style = 0; 
 var s_room20 = 0; 
 var s_room17 = 0;
 var s_room15 = 0; 
 var s_room10 = 0;
 var t_time1 = 0;
 var t_time2 = 0;
 var t_time3 = 0;
 var t_time4 = 0;
 var k_PV = 0;
 var price_3d = 0;
 var price_CD = 0;
 var price = 0; 
 var time_pro = 0; 
 var priceT = 0;
 k_style += parseInt(type_style.options[type_style.selectedIndex].value); 
 k_PV += parseInt(type_PV.options[type_PV.selectedIndex].value); 
 price_3d += (type_3d.checked == true) ? parseInt(type_3d.value) : 0;
 price_CD += (type_CD.checked == true) ? parseInt(type_CD.value) : 0;
 s_room20 += parseInt(room20.value);
 s_room17 += parseInt(room17.value);
 s_room15 += parseInt(room15.value);
 s_room10 += parseInt(room10.value);
 t_time1 += parseInt(time1.value);
 t_time2 += parseInt(time2.value);
 t_time3 += parseInt(time3.value);
 t_time4 += parseInt(time4.value);
 S_room = s_room20 + s_room17 + s_room15 + s_room10;
 pricePV = S_room * k_PV;
 pricer = (s_room20 * 20) + (s_room17 * 17) + (s_room15 * 15) + (s_room10 * 10);
 price3d = pricer * k_style * price_3d/100;
 priceCD = pricer * k_style * price_CD/100;
 priceT = (t_time1 * 80) + (t_time2 * 80) + (t_time3 * 80) + (t_time4 * 50);
 price = priceCD + price3d + pricePV + priceT;
 time_pro = price/130;
 priceCD = priceCD.toFixed(1);
 price3d = price3d.toFixed(1);
 price = price.toFixed(0);
 time_pro = time_pro.toFixed(0);
 result_S_room.innerHTML = S_room;
 result_PV.innerHTML = pricePV;
 result_3d.innerHTML = price3d;
 result_CD.innerHTML = priceCD;
 result_time3.innerHTML = priceT;
 result_result.innerHTML = price;
 result_time.innerHTML = time_pro;
 } 

 function ofcalc() { 
 var oftype_style = document.getElementById("oftype_style"); 
 var ofroom20 = document.getElementById("ofroom20"); 
 var ofroom17 = document.getElementById("ofroom17"); 
 var ofroom15 = document.getElementById("ofroom15");
 var ofroom10 = document.getElementById("ofroom10");
 var oftime1 = document.getElementById("oftime1");
 var oftime2 = document.getElementById("oftime2");
 var oftime3 = document.getElementById("oftime3");
 var oftime4 = document.getElementById("oftime4");
 var oftype_PV = document.getElementById("oftype_PV"); 
 var oftype_3d = document.getElementById("oftype_3d"); 
 var oftype_CD = document.getElementById("oftype_CD"); 
 //Result
 var result = document.getElementById("ofresult_style"); 
 var result = document.getElementById("ofresult_room20");
 var result = document.getElementById("ofresult_room17");
 var result = document.getElementById("ofresult_room15");
 var result = document.getElementById("ofresult_room10");
 var result = document.getElementById("ofresult_time1");
 var result = document.getElementById("ofresult_time2");
 var result = document.getElementById("ofresult_time3");
 var result = document.getElementById("ofresult_time4");
 var result = document.getElementById("ofresult_PV");
 var result = document.getElementById("ofresult_3d");
 var result = document.getElementById("ofresult_CD");
 var ofk_style = 0; 
 var ofs_room20 = 0; 
 var ofs_room17 = 0;
 var ofs_room15 = 0; 
 var ofs_room10 = 0;
 var oft_time1 = 0;
 var oft_time2 = 0;
 var oft_time3 = 0;
 var oft_time4 = 0;
 var ofk_PV = 0;
 var ofprice_3d = 0;
 var ofprice_CD = 0;
 var ofprice = 0; 
 var oftime_pro = 0; 
 var ofpriceT = 0;
 ofk_style += parseInt(oftype_style.options[oftype_style.selectedIndex].value); 
 ofk_PV += parseInt(oftype_PV.options[oftype_PV.selectedIndex].value); 
 ofprice_3d += (oftype_3d.checked == true) ? parseInt(oftype_3d.value) : 0;
 ofprice_CD += (oftype_CD.checked == true) ? parseInt(oftype_CD.value) : 0;
 ofs_room20 += parseInt(ofroom20.value);
 ofs_room17 += parseInt(ofroom17.value);
 ofs_room15 += parseInt(ofroom15.value);
 ofs_room10 += parseInt(ofroom10.value);
oft_time1 += parseInt(oftime1.value);
 oft_time2 += parseInt(oftime2.value);
 oft_time3 += parseInt(oftime3.value);
 oft_time4 += parseInt(oftime4.value);
 ofS_room = ofs_room20 + ofs_room17 + ofs_room15 + ofs_room10;
 ofpricePV = ofS_room * ofk_PV;
 ofpricer = (ofs_room20 * 20) + (ofs_room17 * 17) + (ofs_room15 * 15) + (ofs_room10 * 10);
 ofprice3d = ofpricer * ofk_style * ofprice_3d/100;
 ofpriceCD = ofpricer * ofk_style * ofprice_CD/100;
 ofpriceT = (oft_time1 * 80) + (oft_time2 * 80) + (oft_time3 * 80) + (oft_time4 * 50);
 ofprice = ofpriceCD + ofprice3d + ofpricePV + ofpriceT;
 oftime_pro = ofprice/130;
 ofpriceCD = ofpriceCD.toFixed(1);
 ofprice3d = ofprice3d.toFixed(1);
 ofprice = ofprice.toFixed(0);
 oftime_pro = oftime_pro.toFixed(0);
 ofresult_S_room.innerHTML = ofS_room;
 ofresult_PV.innerHTML = ofpricePV;
 ofresult_3d.innerHTML = ofprice3d;
 ofresult_CD.innerHTML = ofpriceCD;
 ofresult_time3.innerHTML = ofpriceT;
 ofresult_result.innerHTML = ofprice;
 ofresult_time.innerHTML = oftime_pro;
 } 
 
 
 
 function restcalc() { 
 var resttype_style = document.getElementById("resttype_style"); 
 var restroom20 = document.getElementById("restroom20"); 
 var restroom17 = document.getElementById("restroom17"); 
 var restroom15 = document.getElementById("restroom15");
 var restroom10 = document.getElementById("restroom10");
 var resttime1 = document.getElementById("resttime1");
 var resttime2 = document.getElementById("resttime2");
 var resttime3 = document.getElementById("resttime3");
 var resttime4 = document.getElementById("resttime4");
 var resttype_PV = document.getElementById("resttype_PV"); 
 var resttype_3d = document.getElementById("resttype_3d"); 
 var resttype_CD = document.getElementById("resttype_CD"); 
 //Result
 var result = document.getElementById("restresult_style"); 
 var result = document.getElementById("restresult_room20");
 var result = document.getElementById("restresult_room17");
 var result = document.getElementById("restresult_room15");
 var result = document.getElementById("restresult_room10");
 var result = document.getElementById("restresult_time1");
 var result = document.getElementById("restresult_time2");
 var result = document.getElementById("restresult_time3");
 var result = document.getElementById("restresult_time4");
 var result = document.getElementById("restresult_PV");
 var result = document.getElementById("restresult_3d");
 var result = document.getElementById("restresult_CD");
 var restk_style = 0; 
 var rests_room20 = 0; 
 var rests_room17 = 0;
 var rests_room15 = 0; 
 var rests_room10 = 0;
 var restt_time1 = 0;
 var restt_time2 = 0;
 var restt_time3 = 0;
 var restt_time4 = 0;
 var restk_PV = 0;
 var restprice_3d = 0;
 var restprice_CD = 0;
 var restprice = 0; 
 var resttime_pro = 0; 
 var restpriceT = 0;
restk_style += parseInt(resttype_style.options[resttype_style.selectedIndex].value); 
 restk_PV += parseInt(resttype_PV.options[resttype_PV.selectedIndex].value); 
 restprice_3d += (resttype_3d.checked == true) ? parseInt(resttype_3d.value) : 0;
 restprice_CD += (resttype_CD.checked == true) ? parseInt(resttype_CD.value) : 0;
 rests_room20 += parseInt(restroom20.value);
 rests_room17 += parseInt(restroom17.value);
 rests_room15 += parseInt(restroom15.value);
 rests_room10 += parseInt(restroom10.value);
restt_time1 += parseInt(resttime1.value);
 restt_time2 += parseInt(resttime2.value);
restt_time3 += parseInt(resttime3.value);
 restt_time4 += parseInt(resttime4.value);
 restS_room = rests_room20 + rests_room17 + rests_room15 + rests_room10;
 restpricePV = restS_room * restk_PV;
 restpricer = (rests_room20 * 20) + (rests_room17 * 17) + (rests_room15 * 15) + (rests_room10 * 10);
restprice3d = restpricer * restk_style * restprice_3d/100;
 restpriceCD = restpricer * restk_style * restprice_CD/100;
 restpriceT = (restt_time1 * 80) + (restt_time2 * 80) + (restt_time3 * 80) + (restt_time4 * 50);
 restprice = restpriceCD + restprice3d + restpricePV + restpriceT;
 resttime_pro = restprice/130;
 restpriceCD = restpriceCD.toFixed(1);
 restprice3d = restprice3d.toFixed(1);
 restprice = restprice.toFixed(0);
 resttime_pro = resttime_pro.toFixed(0);
 restresult_S_room.innerHTML = restS_room;
 restresult_PV.innerHTML = restpricePV;
 restresult_3d.innerHTML = restprice3d;
 restresult_CD.innerHTML = restpriceCD;
 restresult_time3.innerHTML = restpriceT;
 restresult_result.innerHTML = restprice;
 restresult_time.innerHTML = resttime_pro;
 } 
 
 
 
 
          function ldcalc() { 

 var ldland = document.getElementById("ldland"); 
 var ldtime1 = document.getElementById("ldtime1");
 var ldtime2 = document.getElementById("ldtime2");
 var ldtime3 = document.getElementById("ldtime3");
 var ldtime4 = document.getElementById("ldtime4");
 var ldtype_3d = document.getElementById("ldtype_3d"); 
 var ldtype_CD = document.getElementById("ldtype_CD"); 
 //Result
 
 var result = document.getElementById("ldresult_land");
 var result = document.getElementById("ldresult_time1");
 var result = document.getElementById("ldresult_time2");
 var result = document.getElementById("ldresult_time3");
 var result = document.getElementById("ldresult_time4");
 var result = document.getElementById("ldresult_3d");
 var result = document.getElementById("ldresult_CD");

 var lds_land = 0; 
 var ldt_time1 = 0;
 var ldt_time2 = 0;
 var ldt_time3 = 0;
 var ldt_time4 = 0;
 var ldprice_3d = 0;
 var ldprice_CD = 0;
 var ldprice = 0; 
 var ldtime_pro = 0; 
 var ldpriceT = 0;
 


 ldprice_3d += (ldtype_3d.checked == true) ? parseInt(ldtype_3d.value) : 0;
ldprice_CD += (ldtype_CD.checked == true) ? parseInt(ldtype_CD.value) : 0;
 lds_land += parseInt(ldland.value);

 ldt_time1 += parseInt(ldtime1.value);
 ldt_time2 += parseInt(ldtime2.value);
 ldt_time3 += parseInt(ldtime3.value);
 ldt_time4 += parseInt(ldtime4.value);
 

 ldpricer = lds_land * 600;
 ldprice3d = lds_land * ldprice_3d;
 ldpriceCD = lds_land  * ldprice_CD;
 ldpriceT = (ldt_time1 * 80) + (ldt_time2 * 80) + (ldt_time3 * 80) + (ldt_time4 * 50);
 ldprice = ldpriceCD + ldprice3d + ldpriceT + ldpricer;
 ldtime_pro = ldprice/130;
 ldpriceCD = ldpriceCD.toFixed(1);
 ldprice3d = ldprice3d.toFixed(1);
 ldprice = ldprice.toFixed(0);
 ldtime_pro = ldtime_pro.toFixed(0);

 ldresult_pricer.innerHTML = ldpricer;
 ldresult_3d.innerHTML = ldprice3d;
 ldresult_CD.innerHTML = ldpriceCD;
 ldresult_time3.innerHTML = ldpriceT;
 ldresult_result.innerHTML = ldprice;
 ldresult_time.innerHTML = ldtime_pro;
 } 


          function ld2calc() { 

 var ld2land = document.getElementById("ld2land"); 
 var ld2time1 = document.getElementById("ld2time1");
 var ld2time2 = document.getElementById("ld2time2");
 var ld2time3 = document.getElementById("ld2time3");
 var ld2time4 = document.getElementById("ld2time4");
 var ld2type_3d = document.getElementById("ld2type_3d"); 
 var ld2type_CD = document.getElementById("ld2type_CD"); 
 //Result
 
 var result = document.getElementById("ld2result_land");
 var result = document.getElementById("ld2result_time1");
 var result = document.getElementById("ld2result_time2");
 var result = document.getElementById("ld2result_time3");
 var result = document.getElementById("ld2result_time4");
 var result = document.getElementById("ld2result_3d");
 var result = document.getElementById("ld2result_CD");

 var ld2s_land = 0; 
 var ld2t_time1 = 0;
 var ld2t_time2 = 0;
 var ld2t_time3 = 0;
 var ld2t_time4 = 0;
 var ld2price_3d = 0;
 var ld2price_CD = 0;
 var ld2price = 0; 
 var ld2time_pro = 0; 
 var ld2priceT = 0;
 


 ld2price_3d += (ld2type_3d.checked == true) ? parseInt(ld2type_3d.value) : 0;
ld2price_CD += (ld2type_CD.checked == true) ? parseInt(ld2type_CD.value) : 0;
 ld2s_land += parseInt(ld2land.value);

 ld2t_time1 += parseInt(ld2time1.value);
 ld2t_time2 += parseInt(ld2time2.value);
 ld2t_time3 += parseInt(ld2time3.value);
 ld2t_time4 += parseInt(ld2time4.value);
 

 ld2pricer = ld2s_land * 600;
 ld2price3d = ld2s_land * ld2price_3d;
 ld2priceCD = ld2s_land  * ld2price_CD;
 ld2priceT = (ld2t_time1 * 80) + (ld2t_time2 * 80) + (ld2t_time3 * 80) + (ld2t_time4 * 50);
 ld2price = ld2priceCD + ld2price3d + ld2priceT + ld2pricer;
 ld2time_pro = ld2price/130;
 ld2priceCD = ld2priceCD.toFixed(1);
 ld2price3d = ld2price3d.toFixed(1);
 ld2price = ld2price.toFixed(0);
 ld2time_pro = ld2time_pro.toFixed(0);

 ld2result_pricer.innerHTML = ld2pricer;
 ld2result_3d.innerHTML = ld2price3d;
 ld2result_CD.innerHTML = ld2priceCD;
 ld2result_time3.innerHTML = ld2priceT;
 ld2result_result.innerHTML = ld2price;
 ld2result_time.innerHTML = ld2time_pro;
 } 

function of2calc() { 
 var of2type_style = document.getElementById("of2type_style"); 
 var of2room20 = document.getElementById("of2room20"); 
 var of2room17 = document.getElementById("of2room17"); 
 var of2room15 = document.getElementById("of2room15");
 var of2room10 = document.getElementById("of2room10");
 var of2time1 = document.getElementById("of2time1");
 var of2time2 = document.getElementById("of2time2");
 var of2time3 = document.getElementById("of2time3");
 var of2time4 = document.getElementById("of2time4");
 var of2type_PV = document.getElementById("of2type_PV"); 
 var of2type_3d = document.getElementById("of2type_3d"); 
 var of2type_CD = document.getElementById("of2type_CD"); 
 //Result
 var result = document.getElementById("of2result_style"); 
 var result = document.getElementById("of2result_room20");
 var result = document.getElementById("of2result_room17");
 var result = document.getElementById("of2result_room15");
 var result = document.getElementById("of2result_room10");
 var result = document.getElementById("of2result_time1");
 var result = document.getElementById("of2result_time2");
 var result = document.getElementById("of2result_time3");
 var result = document.getElementById("of2result_time4");
 var result = document.getElementById("of2result_PV");
 var result = document.getElementById("of2result_3d");
 var result = document.getElementById("of2result_CD");
 var of2k_style = 0; 
 var of2s_room20 = 0; 
 var of2s_room17 = 0;
 var of2s_room15 = 0; 
 var of2s_room10 = 0;
 var of2t_time1 = 0;
 var of2t_time2 = 0;
 var of2t_time3 = 0;
 var of2t_time4 = 0;
 var of2k_PV = 0;
 var of2price_3d = 0;
 var of2price_CD = 0;
 var of2price = 0; 
 var of2time_pro = 0; 
 var of2priceT = 0;
 of2k_style += parseInt(of2type_style.options[of2type_style.selectedIndex].value); 
 of2k_PV += parseInt(of2type_PV.options[of2type_PV.selectedIndex].value); 
 of2price_3d += (of2type_3d.checked == true) ? parseInt(of2type_3d.value) : 0;
 of2price_CD += (of2type_CD.checked == true) ? parseInt(of2type_CD.value) : 0;
 of2s_room20 += parseInt(of2room20.value);
 of2s_room17 += parseInt(of2room17.value);
 of2s_room15 += parseInt(of2room15.value);
 of2s_room10 += parseInt(of2room10.value);
of2t_time1 += parseInt(of2time1.value);
 of2t_time2 += parseInt(of2time2.value);
 of2t_time3 += parseInt(of2time3.value);
 of2t_time4 += parseInt(of2time4.value);
 of2S_room = of2s_room20 + of2s_room17 + of2s_room15 + of2s_room10;
 of2pricePV = of2S_room * of2k_PV;
 of2pricer = (of2s_room20 * 20) + (of2s_room17 * 17) + (of2s_room15 * 15) + (of2s_room10 * 10);
 of2price3d = of2pricer * of2k_style * of2price_3d/100;
 of2priceCD = of2pricer * of2k_style * of2price_CD/100;
 of2priceT = (of2t_time1 * 80) + (of2t_time2 * 80) + (of2t_time3 * 80) + (of2t_time4 * 50);
 of2price = of2priceCD + of2price3d + of2pricePV + of2priceT;
 of2time_pro = of2price/130;
 of2priceCD = of2priceCD.toFixed(1);
 of2price3d = of2price3d.toFixed(1);
 of2price = of2price.toFixed(0);
 of2time_pro = of2time_pro.toFixed(0);
 of2result_S_room.innerHTML = of2S_room;
 of2result_PV.innerHTML = of2pricePV;
 of2result_3d.innerHTML = of2price3d;
 of2result_CD.innerHTML = of2priceCD;
 of2result_time3.innerHTML = of2priceT;
 of2result_result.innerHTML = of2price;
 of2result_time.innerHTML = of2time_pro;
 } 
 
 
 
  
 function rest2calc() { 
 var rest2type_style = document.getElementById("rest2type_style"); 
 var rest2room20 = document.getElementById("rest2room20"); 
 var rest2room17 = document.getElementById("rest2room17"); 
 var rest2room15 = document.getElementById("rest2room15");
 var rest2room10 = document.getElementById("rest2room10");
 var rest2time1 = document.getElementById("rest2time1");
 var rest2time2 = document.getElementById("rest2time2");
 var rest2time3 = document.getElementById("rest2time3");
 var rest2time4 = document.getElementById("rest2time4");
 var rest2type_PV = document.getElementById("rest2type_PV"); 
 var rest2type_3d = document.getElementById("rest2type_3d"); 
 var rest2type_CD = document.getElementById("rest2type_CD"); 
 //Result
 var result = document.getElementById("rest2result_style"); 
 var result = document.getElementById("rest2result_room20");
 var result = document.getElementById("rest2result_room17");
 var result = document.getElementById("rest2result_room15");
 var result = document.getElementById("rest2result_room10");
 var result = document.getElementById("rest2result_time1");
 var result = document.getElementById("rest2result_time2");
 var result = document.getElementById("rest2result_time3");
 var result = document.getElementById("rest2result_time4");
 var result = document.getElementById("rest2result_PV");
 var result = document.getElementById("rest2result_3d");
 var result = document.getElementById("rest2result_CD");
 var rest2k_style = 0; 
 var rest2s_room20 = 0; 
 var rest2s_room17 = 0;
 var rest2s_room15 = 0; 
 var rest2s_room10 = 0;
 var rest2t_time1 = 0;
 var rest2t_time2 = 0;
 var rest2t_time3 = 0;
 var rest2t_time4 = 0;
 var rest2k_PV = 0;
 var rest2price_3d = 0;
 var rest2price_CD = 0;
 var rest2price = 0; 
 var rest2time_pro = 0; 
 var rest2priceT = 0;
rest2k_style += parseInt(rest2type_style.options[rest2type_style.selectedIndex].value); 
 rest2k_PV += parseInt(rest2type_PV.options[rest2type_PV.selectedIndex].value); 
 rest2price_3d += (rest2type_3d.checked == true) ? parseInt(rest2type_3d.value) : 0;
 rest2price_CD += (rest2type_CD.checked == true) ? parseInt(rest2type_CD.value) : 0;
 rest2s_room20 += parseInt(rest2room20.value);
 rest2s_room17 += parseInt(rest2room17.value);
 rest2s_room15 += parseInt(rest2room15.value);
 rest2s_room10 += parseInt(rest2room10.value);
rest2t_time1 += parseInt(rest2time1.value);
 rest2t_time2 += parseInt(rest2time2.value);
rest2t_time3 += parseInt(rest2time3.value);
 rest2t_time4 += parseInt(rest2time4.value);
 rest2S_room = rest2s_room20 + rest2s_room17 + rest2s_room15 + rest2s_room10;
 rest2pricePV = rest2S_room * rest2k_PV;
 rest2pricer = (rest2s_room20 * 20) + (rest2s_room17 * 17) + (rest2s_room15 * 15) + (rest2s_room10 * 10);
rest2price3d = rest2pricer * rest2k_style * rest2price_3d/100;
 rest2priceCD = rest2pricer * rest2k_style * rest2price_CD/100;
 rest2priceT = (rest2t_time1 * 80) + (rest2t_time2 * 80) + (rest2t_time3 * 80) + (rest2t_time4 * 50);
 rest2price = rest2priceCD + rest2price3d + rest2pricePV + rest2priceT;
 rest2time_pro = rest2price/130;
 rest2priceCD = rest2priceCD.toFixed(1);
 rest2price3d = rest2price3d.toFixed(1);
 rest2price = rest2price.toFixed(0);
 rest2time_pro = rest2time_pro.toFixed(0);
 rest2result_S_room.innerHTML = rest2S_room;
 rest2result_PV.innerHTML = rest2pricePV;
 rest2result_3d.innerHTML = rest2price3d;
 rest2result_CD.innerHTML = rest2priceCD;
 rest2result_time3.innerHTML = rest2priceT;
 rest2result_result.innerHTML = rest2price;
 rest2result_time.innerHTML = rest2time_pro;
 } 
function h2calc() { 
 var h2type_style = document.getElementById("h2type_style"); 
 var h2room20 = document.getElementById("h2room20"); 
 var h2room17 = document.getElementById("h2room17"); 
 var h2room15 = document.getElementById("h2room15");
 var h2room10 = document.getElementById("h2room10");
 var h2time1 = document.getElementById("h2time1");
 var h2time2 = document.getElementById("h2time2");
 var h2time3 = document.getElementById("h2time3");
 var h2time4 = document.getElementById("h2time4");
 var h2type_PV = document.getElementById("h2type_PV"); 
 var h2type_3d = document.getElementById("h2type_3d"); 
 var h2type_CD = document.getElementById("h2type_CD"); 
 //Result
 var result = document.getElementById("h2result_style"); 
 var result = document.getElementById("h2result_room20");
 var result = document.getElementById("h2result_room17");
 var result = document.getElementById("h2result_room15");
 var result = document.getElementById("h2result_room10");
 var result = document.getElementById("h2result_time1");
 var result = document.getElementById("h2result_time2");
 var result = document.getElementById("h2result_time3");
 var result = document.getElementById("h2result_time4");
 var result = document.getElementById("h2result_PV");
 var result = document.getElementById("h2result_3d");
 var result = document.getElementById("h2result_CD");
 var h2k_style = 0; 
 var h2s_room20 = 0; 
 var h2s_room17 = 0;
 var h2s_room15 = 0; 
 var h2s_room10 = 0;
 var h2t_time1 = 0;
 var h2t_time2 = 0;
 var h2t_time3 = 0;
 var h2t_time4 = 0;
 var h2k_PV = 0;
 var h2price_3d = 0;
 var h2price_CD = 0;
 var h2price = 0; 
 var h2time_pro = 0; 
 var h2priceT = 0;
 h2k_style += parseInt(h2type_style.options[h2type_style.selectedIndex].value); 
 h2k_PV += parseInt(h2type_PV.options[h2type_PV.selectedIndex].value); 
 h2price_3d += (h2type_3d.checked == true) ? parseInt(h2type_3d.value) : 0;
 h2price_CD += (h2type_CD.checked == true) ? parseInt(h2type_CD.value) : 0;
 h2s_room20 += parseInt(h2room20.value);
 h2s_room17 += parseInt(h2room17.value);
 h2s_room15 += parseInt(h2room15.value);
 h2s_room10 += parseInt(h2room10.value);
 h2t_time1 += parseInt(h2time1.value);
 h2t_time2 += parseInt(h2time2.value);
 h2t_time3 += parseInt(h2time3.value);
 h2t_time4 += parseInt(h2time4.value);
 h2S_room = h2s_room20 + h2s_room17 + h2s_room15 + h2s_room10;
 h2pricePV = h2S_room * h2k_PV;
 h2pricer = (h2s_room20 * 20) + (h2s_room17 * 17) + (h2s_room15 * 15) + (h2s_room10 * 10);
 h2price3d = h2pricer * h2k_style * h2price_3d/100;
 h2priceCD = h2pricer * h2k_style * h2price_CD/100;
 h2priceT = (h2t_time1 * 80) + (h2t_time2 * 80) + (h2t_time3 * 80) + (h2t_time4 * 50);
 h2price = h2priceCD + h2price3d + h2pricePV + h2priceT;
 h2time_pro = h2price/130;
 h2priceCD = h2priceCD.toFixed(1);
 h2price3d = h2price3d.toFixed(1);
 h2price = h2price.toFixed(0);
 h2time_pro = h2time_pro.toFixed(0);
 h2result_S_room.innerHTML = h2S_room;
 h2result_PV.innerHTML = h2pricePV;
 h2result_3d.innerHTML = h2price3d;
 h2result_CD.innerHTML = h2priceCD;
 h2result_time3.innerHTML = h2priceT;
 h2result_result.innerHTML = h2price;
 h2result_time.innerHTML = h2time_pro;
 } 
