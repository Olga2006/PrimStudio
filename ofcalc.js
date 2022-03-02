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
 var ofresult = document.getElementById("ofresult_style"); 
 var ofresult = document.getElementById("ofresult_room20");
 var ofresult = document.getElementById("ofresult_room17");
 var ofresult = document.getElementById("ofresult_room15");
 var ofresult = document.getElementById("ofresult_room10");
 var ofresult = document.getElementById("ofresult_time1");
 var ofresult = document.getElementById("ofresult_time2");
 var ofresult = document.getElementById("ofresult_time3");
 var ofresult = document.getElementById("ofresult_time4");
 var ofresult = document.getElementById("ofresult_PV");
 var ofresult = document.getElementById("ofresult_3d");
 var ofresult = document.getElementById("ofresult_CD");
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





