(this.webpackJsonpjsx=this.webpackJsonpjsx||[]).push([[0],{26:function(e,a,n){e.exports=n(55)},31:function(e,a,n){},32:function(e,a,n){},33:function(e,a,n){},36:function(e,a,n){},55:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),c=n(4),d=n.n(c),l=(n(31),n(32),n(33),n(9)),i=n(10),r=n(12),m=n(11),s=n(5),u=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"bottom-right",t={position:n,autoClose:8e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0};"error"===a?s.b.error(e,t):"info"===a?s.b.info(e,t):"warning"===a?s.b.warning(e,t):"dark"===a?Object(s.b)(e,t):s.b.success(e,t)},p=s.a,_=(n(8),n(36),function(e){return e.children}),b=n(1),g=n(6),h=n.n(g),f={username:"",password:""},E={username:"",email:"",first_name:"",last_name:"",password:"",password2:"",code:"",is_checked:!1,phone_number:"",city:"",address:""},v=n(13),N=n.n(v),w=function(){return S?JSON.parse(localStorage.getItem("user")):null},S=function(){var e=JSON.parse(localStorage.getItem("user")),a=null===e?new Date:e.expireDate,n=new Date,t=N()(n);return 0===N()(a).diff(t,"days")},y=function(e,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",t=document.getElementById(e),o=document.getElementById(e+"_feedback");a?(t.classList.remove("is-invalid"),o.classList.add("is-invisible"),o.classList.remove("is-visible")):(t.classList.add("is-invalid"),o.classList.add("is-visible"),o.classList.remove("is-invisible"),""!==n&&(o.text="text"))},C=function(e){var a=!1,n=Object(b.a)({},f),t=function(e){e.forEach((function(e){""===n[e]?(a=!1,!1||y(e,!1)):(a=!0,y(e,!0))}))},c=function(e){var a=e.target,t=a.id,o=a.value;n[t]=o};return o.a.createElement(_,null,o.a.createElement(p,null),o.a.createElement("div",{className:"col-md-4 col-sm-8 col-xs-6 mx-auto panel"},o.a.createElement("div",{className:"text-center py-4"},o.a.createElement("h3",{className:"form-title font-weight-bold"},"LOGIN")),o.a.createElement("form",{method:"POST",className:"p-1"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"username"},"Username ",o.a.createElement("span",{className:"require"},"*")),o.a.createElement("input",{type:"username",className:"form-control inputBG",id:"username","aria-describedby":"usernameHelp",placeholder:"Username",onChange:function(e){return c(e)},required:!0}),o.a.createElement("div",{id:"username_feedback",className:"invalid-feedback is-invisible"},"Please username is required.")),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"password"},"Password ",o.a.createElement("span",{className:"require"},"*")),o.a.createElement("input",{type:"password",className:"form-control inputBG",id:"password",placeholder:"Password",onChange:function(e){return c(e)},required:!0}),o.a.createElement("div",{id:"password_feedback",className:"invalid-feedback is-invisible"},"Please password is required.")),o.a.createElement("button",{onClick:function(o){return function(o){!0,o.persist(),o.preventDefault(),t(["username","password"]),a&&h.a.post("".concat("http://51.11.37.127/dj-rest-auth/","login\\"),n).then((function(a){if(200===a.status){var n=Object(b.a)(Object(b.a)({token:a.data.access_token},a.data.user),{},{expireDate:new Date((new Date).getTime()+36e7)});e.submitLogin(n),localStorage.setItem("user",JSON.stringify(n))}})).catch((function(e){!1,u("Unable to log in with provided credentials.","error","top-center")}))}(o)},className:"btn btn-color btn-block rounded-pill my-4"},"LOGIN"),o.a.createElement("div",{className:"mt-3 text-center"},o.a.createElement("p",null,o.a.createElement("a",{href:"#/",className:"link"},"Forget password?"))))))},k=n(3),O=n(14),A=[{name:"Israel",dial_code:"+972",code:"IL"},{name:"Afghanistan",dial_code:"+93",code:"AF"},{name:"Albania",dial_code:"+355",code:"AL"},{name:"Algeria",dial_code:"+213",code:"DZ"},{name:"AmericanSamoa",dial_code:"+1 684",code:"AS"},{name:"Andorra",dial_code:"+376",code:"AD"},{name:"Angola",dial_code:"+244",code:"AO"},{name:"Anguilla",dial_code:"+1 264",code:"AI"},{name:"Antigua and Barbuda",dial_code:"+1268",code:"AG"},{name:"Argentina",dial_code:"+54",code:"AR"},{name:"Armenia",dial_code:"+374",code:"AM"},{name:"Aruba",dial_code:"+297",code:"AW"},{name:"Australia",dial_code:"+61",code:"AU"},{name:"Austria",dial_code:"+43",code:"AT"},{name:"Azerbaijan",dial_code:"+994",code:"AZ"},{name:"Bahamas",dial_code:"+1 242",code:"BS"},{name:"Bahrain",dial_code:"+973",code:"BH"},{name:"Bangladesh",dial_code:"+880",code:"BD"},{name:"Barbados",dial_code:"+1 246",code:"BB"},{name:"Belarus",dial_code:"+375",code:"BY"},{name:"Belgium",dial_code:"+32",code:"BE"},{name:"Belize",dial_code:"+501",code:"BZ"},{name:"Benin",dial_code:"+229",code:"BJ"},{name:"Bermuda",dial_code:"+1 441",code:"BM"},{name:"Bhutan",dial_code:"+975",code:"BT"},{name:"Bosnia and Herzegovina",dial_code:"+387",code:"BA"},{name:"Botswana",dial_code:"+267",code:"BW"},{name:"Brazil",dial_code:"+55",code:"BR"},{name:"British Indian Ocean Territory",dial_code:"+246",code:"IO"},{name:"Bulgaria",dial_code:"+359",code:"BG"},{name:"Burkina Faso",dial_code:"+226",code:"BF"},{name:"Burundi",dial_code:"+257",code:"BI"},{name:"Cambodia",dial_code:"+855",code:"KH"},{name:"Cameroon",dial_code:"+237",code:"CM"},{name:"Canada",dial_code:"+1",code:"CA"},{name:"Cape Verde",dial_code:"+238",code:"CV"},{name:"Cayman Islands",dial_code:"+ 345",code:"KY"},{name:"Central African Republic",dial_code:"+236",code:"CF"},{name:"Chad",dial_code:"+235",code:"TD"},{name:"Chile",dial_code:"+56",code:"CL"},{name:"China",dial_code:"+86",code:"CN"},{name:"Christmas Island",dial_code:"+61",code:"CX"},{name:"Colombia",dial_code:"+57",code:"CO"},{name:"Comoros",dial_code:"+269",code:"KM"},{name:"Congo",dial_code:"+242",code:"CG"},{name:"Cook Islands",dial_code:"+682",code:"CK"},{name:"Costa Rica",dial_code:"+506",code:"CR"},{name:"Croatia",dial_code:"+385",code:"HR"},{name:"Cuba",dial_code:"+53",code:"CU"},{name:"Cyprus",dial_code:"+537",code:"CY"},{name:"Czech Republic",dial_code:"+420",code:"CZ"},{name:"Denmark",dial_code:"+45",code:"DK"},{name:"Djibouti",dial_code:"+253",code:"DJ"},{name:"Dominica",dial_code:"+1 767",code:"DM"},{name:"Dominican Republic",dial_code:"+1 849",code:"DO"},{name:"Ecuador",dial_code:"+593",code:"EC"},{name:"Egypt",dial_code:"+20",code:"EG"},{name:"El Salvador",dial_code:"+503",code:"SV"},{name:"Equatorial Guinea",dial_code:"+240",code:"GQ"},{name:"Eritrea",dial_code:"+291",code:"ER"},{name:"Estonia",dial_code:"+372",code:"EE"},{name:"Ethiopia",dial_code:"+251",code:"ET"},{name:"Faroe Islands",dial_code:"+298",code:"FO"},{name:"Fiji",dial_code:"+679",code:"FJ"},{name:"Finland",dial_code:"+358",code:"FI"},{name:"France",dial_code:"+33",code:"FR"},{name:"French Guiana",dial_code:"+594",code:"GF"},{name:"French Polynesia",dial_code:"+689",code:"PF"},{name:"Gabon",dial_code:"+241",code:"GA"},{name:"Gambia",dial_code:"+220",code:"GM"},{name:"Georgia",dial_code:"+995",code:"GE"},{name:"Germany",dial_code:"+49",code:"DE"},{name:"Ghana",dial_code:"+233",code:"GH"},{name:"Gibraltar",dial_code:"+350",code:"GI"},{name:"Greece",dial_code:"+30",code:"GR"},{name:"Greenland",dial_code:"+299",code:"GL"},{name:"Grenada",dial_code:"+1 473",code:"GD"},{name:"Guadeloupe",dial_code:"+590",code:"GP"},{name:"Guam",dial_code:"+1 671",code:"GU"},{name:"Guatemala",dial_code:"+502",code:"GT"},{name:"Guinea",dial_code:"+224",code:"GN"},{name:"Guinea-Bissau",dial_code:"+245",code:"GW"},{name:"Guyana",dial_code:"+595",code:"GY"},{name:"Haiti",dial_code:"+509",code:"HT"},{name:"Honduras",dial_code:"+504",code:"HN"},{name:"Hungary",dial_code:"+36",code:"HU"},{name:"Iceland",dial_code:"+354",code:"IS"},{name:"India",dial_code:"+91",code:"IN"},{name:"Indonesia",dial_code:"+62",code:"ID"},{name:"Iraq",dial_code:"+964",code:"IQ"},{name:"Ireland",dial_code:"+353",code:"IE"},{name:"Israel",dial_code:"+972",code:"IL"},{name:"Italy",dial_code:"+39",code:"IT"},{name:"Jamaica",dial_code:"+1 876",code:"JM"},{name:"Japan",dial_code:"+81",code:"JP"},{name:"Jordan",dial_code:"+962",code:"JO"},{name:"Kazakhstan",dial_code:"+7 7",code:"KZ"},{name:"Kenya",dial_code:"+254",code:"KE"},{name:"Kiribati",dial_code:"+686",code:"KI"},{name:"Kuwait",dial_code:"+965",code:"KW"},{name:"Kyrgyzstan",dial_code:"+996",code:"KG"},{name:"Latvia",dial_code:"+371",code:"LV"},{name:"Lebanon",dial_code:"+961",code:"LB"},{name:"Lesotho",dial_code:"+266",code:"LS"},{name:"Liberia",dial_code:"+231",code:"LR"},{name:"Liechtenstein",dial_code:"+423",code:"LI"},{name:"Lithuania",dial_code:"+370",code:"LT"},{name:"Luxembourg",dial_code:"+352",code:"LU"},{name:"Madagascar",dial_code:"+261",code:"MG"},{name:"Malawi",dial_code:"+265",code:"MW"},{name:"Malaysia",dial_code:"+60",code:"MY"},{name:"Maldives",dial_code:"+960",code:"MV"},{name:"Mali",dial_code:"+223",code:"ML"},{name:"Malta",dial_code:"+356",code:"MT"},{name:"Marshall Islands",dial_code:"+692",code:"MH"},{name:"Martinique",dial_code:"+596",code:"MQ"},{name:"Mauritania",dial_code:"+222",code:"MR"},{name:"Mauritius",dial_code:"+230",code:"MU"},{name:"Mayotte",dial_code:"+262",code:"YT"},{name:"Mexico",dial_code:"+52",code:"MX"},{name:"Monaco",dial_code:"+377",code:"MC"},{name:"Mongolia",dial_code:"+976",code:"MN"},{name:"Montenegro",dial_code:"+382",code:"ME"},{name:"Montserrat",dial_code:"+1664",code:"MS"},{name:"Morocco",dial_code:"+212",code:"MA"},{name:"Myanmar",dial_code:"+95",code:"MM"},{name:"Namibia",dial_code:"+264",code:"NA"},{name:"Nauru",dial_code:"+674",code:"NR"},{name:"Nepal",dial_code:"+977",code:"NP"},{name:"Netherlands",dial_code:"+31",code:"NL"},{name:"Netherlands Antilles",dial_code:"+599",code:"AN"},{name:"New Caledonia",dial_code:"+687",code:"NC"},{name:"New Zealand",dial_code:"+64",code:"NZ"},{name:"Nicaragua",dial_code:"+505",code:"NI"},{name:"Niger",dial_code:"+227",code:"NE"},{name:"Nigeria",dial_code:"+234",code:"NG"},{name:"Niue",dial_code:"+683",code:"NU"},{name:"Norfolk Island",dial_code:"+672",code:"NF"},{name:"Northern Mariana Islands",dial_code:"+1 670",code:"MP"},{name:"Norway",dial_code:"+47",code:"NO"},{name:"Oman",dial_code:"+968",code:"OM"},{name:"Pakistan",dial_code:"+92",code:"PK"},{name:"Palau",dial_code:"+680",code:"PW"},{name:"Panama",dial_code:"+507",code:"PA"},{name:"Papua New Guinea",dial_code:"+675",code:"PG"},{name:"Paraguay",dial_code:"+595",code:"PY"},{name:"Peru",dial_code:"+51",code:"PE"},{name:"Philippines",dial_code:"+63",code:"PH"},{name:"Poland",dial_code:"+48",code:"PL"},{name:"Portugal",dial_code:"+351",code:"PT"},{name:"Puerto Rico",dial_code:"+1 939",code:"PR"},{name:"Qatar",dial_code:"+974",code:"QA"},{name:"Romania",dial_code:"+40",code:"RO"},{name:"Rwanda",dial_code:"+250",code:"RW"},{name:"Samoa",dial_code:"+685",code:"WS"},{name:"San Marino",dial_code:"+378",code:"SM"},{name:"Saudi Arabia",dial_code:"+966",code:"SA"},{name:"Senegal",dial_code:"+221",code:"SN"},{name:"Serbia",dial_code:"+381",code:"RS"},{name:"Seychelles",dial_code:"+248",code:"SC"},{name:"Sierra Leone",dial_code:"+232",code:"SL"},{name:"Singapore",dial_code:"+65",code:"SG"},{name:"Slovakia",dial_code:"+421",code:"SK"},{name:"Slovenia",dial_code:"+386",code:"SI"},{name:"Solomon Islands",dial_code:"+677",code:"SB"},{name:"South Africa",dial_code:"+27",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",dial_code:"+500",code:"GS"},{name:"Spain",dial_code:"+34",code:"ES"},{name:"Sri Lanka",dial_code:"+94",code:"LK"},{name:"Sudan",dial_code:"+249",code:"SD"},{name:"Suriname",dial_code:"+597",code:"SR"},{name:"Swaziland",dial_code:"+268",code:"SZ"},{name:"Sweden",dial_code:"+46",code:"SE"},{name:"Switzerland",dial_code:"+41",code:"CH"},{name:"Tajikistan",dial_code:"+992",code:"TJ"},{name:"Thailand",dial_code:"+66",code:"TH"},{name:"Togo",dial_code:"+228",code:"TG"},{name:"Tokelau",dial_code:"+690",code:"TK"},{name:"Tonga",dial_code:"+676",code:"TO"},{name:"Trinidad and Tobago",dial_code:"+1 868",code:"TT"},{name:"Tunisia",dial_code:"+216",code:"TN"},{name:"Turkey",dial_code:"+90",code:"TR"},{name:"Turkmenistan",dial_code:"+993",code:"TM"},{name:"Turks and Caicos Islands",dial_code:"+1 649",code:"TC"},{name:"Tuvalu",dial_code:"+688",code:"TV"},{name:"Uganda",dial_code:"+256",code:"UG"},{name:"Ukraine",dial_code:"+380",code:"UA"},{name:"United Arab Emirates",dial_code:"+971",code:"AE"},{name:"United Kingdom",dial_code:"+44",code:"GB"},{name:"United States",dial_code:"+1",code:"US"},{name:"Uruguay",dial_code:"+598",code:"UY"},{name:"Uzbekistan",dial_code:"+998",code:"UZ"},{name:"Vanuatu",dial_code:"+678",code:"VU"},{name:"Wallis and Futuna",dial_code:"+681",code:"WF"},{name:"Yemen",dial_code:"+967",code:"YE"},{name:"Zambia",dial_code:"+260",code:"ZM"},{name:"Zimbabwe",dial_code:"+263",code:"ZW"},{name:"land Islands",dial_code:"",code:"AX"},{name:"Antarctica",dial_code:null,code:"AQ"},{name:"Bolivia, Plurinational State of",dial_code:"+591",code:"BO"},{name:"Brunei Darussalam",dial_code:"+673",code:"BN"},{name:"Cocos (Keeling) Islands",dial_code:"+61",code:"CC"},{name:"Congo, The Democratic Republic of the",dial_code:"+243",code:"CD"},{name:"Cote d'Ivoire",dial_code:"+225",code:"CI"},{name:"Falkland Islands (Malvinas)",dial_code:"+500",code:"FK"},{name:"Guernsey",dial_code:"+44",code:"GG"},{name:"Holy See (Vatican City State)",dial_code:"+379",code:"VA"},{name:"Hong Kong",dial_code:"+852",code:"HK"},{name:"Iran, Islamic Republic of",dial_code:"+98",code:"IR"},{name:"Isle of Man",dial_code:"+44",code:"IM"},{name:"Jersey",dial_code:"+44",code:"JE"},{name:"Korea, Democratic People's Republic of",dial_code:"+850",code:"KP"},{name:"Korea, Republic of",dial_code:"+82",code:"KR"},{name:"Lao People's Democratic Republic",dial_code:"+856",code:"LA"},{name:"Libyan Arab Jamahiriya",dial_code:"+218",code:"LY"},{name:"Macao",dial_code:"+853",code:"MO"},{name:"Macedonia, The Former Yugoslav Republic of",dial_code:"+389",code:"MK"},{name:"Micronesia, Federated States of",dial_code:"+691",code:"FM"},{name:"Moldova, Republic of",dial_code:"+373",code:"MD"},{name:"Mozambique",dial_code:"+258",code:"MZ"},{name:"Palestinian Territory, Occupied",dial_code:"+970",code:"PS"},{name:"Pitcairn",dial_code:"+872",code:"PN"},{name:"R\xe9union",dial_code:"+262",code:"RE"},{name:"Russia",dial_code:"+7",code:"RU"},{name:"Saint Barth\xe9lemy",dial_code:"+590",code:"BL"},{name:"Saint Helena, Ascension and Tristan Da Cunha",dial_code:"+290",code:"SH"},{name:"Saint Kitts and Nevis",dial_code:"+1 869",code:"KN"},{name:"Saint Lucia",dial_code:"+1 758",code:"LC"},{name:"Saint Martin",dial_code:"+590",code:"MF"},{name:"Saint Pierre and Miquelon",dial_code:"+508",code:"PM"},{name:"Saint Vincent and the Grenadines",dial_code:"+1 784",code:"VC"},{name:"Sao Tome and Principe",dial_code:"+239",code:"ST"},{name:"Somalia",dial_code:"+252",code:"SO"},{name:"Svalbard and Jan Mayen",dial_code:"+47",code:"SJ"},{name:"Syrian Arab Republic",dial_code:"+963",code:"SY"},{name:"Taiwan, Province of China",dial_code:"+886",code:"TW"},{name:"Tanzania, United Republic of",dial_code:"+255",code:"TZ"},{name:"Timor-Leste",dial_code:"+670",code:"TL"},{name:"Venezuela, Bolivarian Republic of",dial_code:"+58",code:"VE"},{name:"Viet Nam",dial_code:"+84",code:"VN"},{name:"Virgin Islands, British",dial_code:"+1 284",code:"VG"},{name:"Virgin Islands, U.S.",dial_code:"+1 340",code:"VI"}],L=function(e){var a=Object(t.useState)(Object(b.a)({},E)),n=Object(O.a)(a,2),c=n[0],d=n[1],l=Object(t.useState)(!0),i=Object(O.a)(l,2),r=i[0],m=i[1],s=!1,g=!1,f=function(e){return e.includes("@")&&e.includes(".")},v=function(e,a){return""!==e&&""===a?""!==e&&""===a:""===e&&""!==a&&(""===e&&""!==a)},N=function(e){e.forEach((function(e){""===c[e]?(s=!1,!1===!1&&y(e,!1)):(s=!0,y(e,!0))}))},w=function(e,a){return e===a&&e.length>=6&&a.length>=6},S=A.map((function(e,a){return o.a.createElement("option",{key:a,value:e.dial_code},e.name," : (",e.dial_code,")")}));return o.a.createElement(_,null,o.a.createElement(p,null),o.a.createElement("div",{className:"col-md-9 col-sm-12 col-xs-12 mx-auto panel"},o.a.createElement("div",{className:"text-center pt-3"},o.a.createElement("h3",{className:"form-title font-weight-bold"},"Registration")),o.a.createElement("form",{className:"p-2",method:"POST",autoComplete:"off"},o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("label",{htmlFor:"first_name"},"First Name ",o.a.createElement("span",{className:"require"},"*")),o.a.createElement("input",{type:"text",className:"form-control inputBG",id:"first_name",placeholder:"First Name",name:"first_name",onChange:function(e){return d(Object(b.a)(Object(b.a)({},c),{},Object(k.a)({},e.target.name,e.target.value)))}}),o.a.createElement("div",{id:"first_name_feedback",className:"invalid-feedback is-invisible"},"Please username is required.")),o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("label",{htmlFor:"last_name"},"Last Name ",o.a.createElement("span",{className:"require"},"*")),o.a.createElement("input",{type:"text",className:"form-control inputBG",id:"last_name",placeholder:"Last Name",name:"last_name",onChange:function(e){return d(Object(b.a)(Object(b.a)({},c),{},Object(k.a)({},e.target.name,e.target.value)))}}),o.a.createElement("div",{id:"last_name_feedback",className:"invalid-feedback is-invisible"},"Please username is required."))),o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("label",{htmlFor:"email"},"Email Address ",o.a.createElement("span",{className:"require"},"*")),o.a.createElement("input",{type:"email",className:"form-control inputBG",id:"email",placeholder:"Email Address",name:"email",onChange:function(e){return d(Object(b.a)(Object(b.a)({},c),{},Object(k.a)({},e.target.name,e.target.value)))}}),o.a.createElement("div",{id:"email_feedback",className:"invalid-feedback is-invisible"},"Please username is required.")),o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("label",{htmlFor:"username"},"Username ",o.a.createElement("span",{className:"require"},"*")),o.a.createElement("input",{type:"text",className:"form-control inputBG",id:"username",placeholder:"Username",name:"username",onChange:function(e){return d(Object(b.a)(Object(b.a)({},c),{},Object(k.a)({},e.target.name,e.target.value)))}}),o.a.createElement("div",{id:"username_feedback",className:"invalid-feedback is-invisible"},"Please username is required."))),o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("label",{htmlFor:"password"},"Password ",o.a.createElement("span",{className:"require"},"*")),o.a.createElement("input",{type:"password",className:"form-control inputBG",id:"password",placeholder:"Password",name:"password",onChange:function(e){return d(Object(b.a)(Object(b.a)({},c),{},Object(k.a)({},e.target.name,e.target.value)))}}),o.a.createElement("div",{id:"password_feedback",className:"invalid-feedback is-invisible"},"Please password is required.")),o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("label",{htmlFor:"confirmpassowrd"},"Confirm Password ",o.a.createElement("span",{className:"require"},"*")),o.a.createElement("input",{type:"password",className:"form-control inputBG",id:"password2",placeholder:"Confirm Password",name:"password2",onChange:function(e){return d(Object(b.a)(Object(b.a)({},c),{},Object(k.a)({},e.target.name,e.target.value)))}}),o.a.createElement("div",{id:"password2_feedback",className:"invalid-feedback is-invisible"},"Please confirm password is required."))),o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("label",{htmlFor:"phone_number"},"Phone Number"),o.a.createElement("div",{className:"input-group"},o.a.createElement("select",{id:"code",className:"form-control inputBG",name:"code",onChange:function(e){return d(Object(b.a)(Object(b.a)({},c),{},Object(k.a)({},e.target.name,e.target.value)))}},o.a.createElement("option",{defaultValue:!0},"Code"),S),o.a.createElement("div",{id:"code_feedback",className:"invalid-feedback is-invisible"},"Please code is required."),o.a.createElement("input",{type:"number",className:"form-control inputBG w-25",id:"phone_number",placeholder:"Phone # eg 551396690",name:"phone_number",onChange:function(e){return d(Object(b.a)(Object(b.a)({},c),{},Object(k.a)({},e.target.name,e.target.value)))}}),o.a.createElement("div",{id:"phone_number_feedback",className:"invalid-feedback is-invisible"},"Please phone number is required."))),o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("label",{htmlFor:"city"},"City"),o.a.createElement("select",{id:"city",className:"form-control inputBG",name:"city",onChange:function(e){return d(Object(b.a)(Object(b.a)({},c),{},Object(k.a)({},e.target.name,e.target.value)))}},o.a.createElement("option",{defaultValue:!0},"Choose..."),o.a.createElement("option",null,"Akosombo"),o.a.createElement("option",null,"Aburi"),o.a.createElement("option",null,"Accra"),o.a.createElement("option",null,"Kumasi"),o.a.createElement("option",null,"Koforidua"),o.a.createElement("option",null,"Tamale"),o.a.createElement("option",null,"Hohoe"))),o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("label",{htmlFor:"address"},"Address"),o.a.createElement("input",{type:"text",className:"form-control inputBG",id:"address",placeholder:"Address",name:"address",onChange:function(e){return d(Object(b.a)(Object(b.a)({},c),{},Object(k.a)({},e.target.name,e.target.value)))}}))),o.a.createElement("div",{className:"form-group"},o.a.createElement("div",{className:"form-check"},o.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"is_checked",onChange:function(e){return function(e){e.persist(),g=e.target.checked,m(!e.target.checked)}(e)},required:!0}),o.a.createElement("label",{className:"form-check-label",htmlFor:"gridCheck"},"I agree with the terms and conditions"," ",o.a.createElement("span",{className:"require"},"*")))),o.a.createElement("div",{className:"text-center"},o.a.createElement("button",{disabled:r,type:"submit",onClick:function(a){return function(a){if(!0,a.persist(),a.preventDefault(),console.log(c),N(["first_name","last_name","username","email","password","password2"]),f(c.email)){if(!w(c.password,c.password2))return u("Both password must match and be at least 7 characters","error"),y("password",!1),void y("password2",!1);var n="code"===c.code.toLowerCase()?"":c.code;v(n,c.phone_number)?y("phone_number",!1):(c.phone_number=c.code+c.phone_number,g?u("Please accept our terms and conditions before proceeding!","error"):s&&h.a.post("".concat("http://51.11.37.127/api/","register/"),c).then((function(a){200===a.status&&e.submitRegister(a.data)})).catch((function(e){u("Oops something go wrong! Please check to ensure all required fields are entered","error")})))}else y("password",!1,"Invaild email! Please enter a valid email.")}(a)},className:"btn btn-color rounded-pill px-5 my-4"},"Create Account")))))},F=function(e){return o.a.createElement(_,null,e.isLogin?o.a.createElement(C,{islogin:e.isLogin,submitLogin:e.onLogin}):o.a.createElement(L,{isregister:e.isRegister,submitRegister:e.onRegister}))},G=n(25),B=n.n(G),M=function(e){return o.a.createElement(_,null,o.a.createElement("footer",{className:"text-muted"},o.a.createElement("div",{className:"container"},o.a.createElement("p",{className:"float-right"},o.a.createElement(B.a,{icon:"fas fa-arrow-up",position:{bottom:"0%",right:"0%"},hover:{backgroundColor:"#fc81a0",opacity:"0.95"},margin:"32px"})),o.a.createElement("p",{className:"text-center text-black"},"\xa9 GROUP 8 COMPANY NAME All Reversed Rights."))))},I=Event=function(e){return o.a.createElement(_,null,o.a.createElement("div",{className:"col-md-4"},o.a.createElement("div",{className:"card mb-4 shadow-lg mb-5 rounded"},o.a.createElement("img",{className:"card-img event-img",src:"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F101214770%2F442451758882%2F1%2Foriginal.20200424-082529?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C14%2C1200%2C600&s=44200171cd4ff501a0762e1042830668",alt:"..."}),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",{className:"card-text"},"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),o.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},o.a.createElement("div",{className:"btn-group"},o.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary","data-toggle":"modal","data-target":"#staticBackdrop",onClick:function(){return a={index:e.info,imageUrl:"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F101214770%2F442451758882%2F1%2Foriginal.20200424-082529?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C14%2C1200%2C600&s=44200171cd4ff501a0762e1042830668"},void e.loadInfo(a);var a}},"View"),o.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary"},"Info")),o.a.createElement("small",{className:"text-muted"},"9 mins"))))))},P=function(e){var a=function(a){e.loginNavHandler(a)},n=function(){var a=JSON.parse(localStorage.getItem("user")),n=(document.cookie,{method:"post",url:"".concat("http://51.11.37.127/dj-rest-auth/","logout/"),headers:{Authorization:"Token ".concat(a.token)}});h()(n).then((function(a){200===a.data.status&&(localStorage.removeItem("user"),e.onlogout(!0))})).catch((function(a){localStorage.removeItem("user"),e.onlogout(!0)}))};return o.a.createElement(_,null,o.a.createElement("header",{className:"header fixed-top"},o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark event-color shadow-lg fixed-top"},o.a.createElement("a",{className:"navbar-brand font-weight-bold",href:"#/"},"OctaVents"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav ml-auto"},e.is_auth?o.a.createElement("li",{className:"nav-item dropdown ml-auto"},o.a.createElement("a",{href:"#/",className:"nav-link dropdown-toggle","data-toggle":"dropdown"},null!==e.user?e.user.username:"Welcome"),o.a.createElement("div",{className:"dropdown-menu dropdown-menu-right"},o.a.createElement("a",{href:"#/",className:"dropdown-item"},"Profile"),o.a.createElement("a",{href:"#/",className:"dropdown-item"},"Events"),o.a.createElement("div",{className:"dropdown-divider"}),o.a.createElement("a",{href:"#/",className:"dropdown-item",onClick:n},"Logout"))):o.a.createElement("li",{className:"nav-item",onClick:function(){return a("Login")}},o.a.createElement("button",{className:"btn btn-primary mb-2"},"Login")),e.is_auth?null:o.a.createElement("li",{className:"nav-item"},o.a.createElement("button",{className:"btn btn-outline-info",onClick:function(){return a("Register")}},"Register")))))))},R=function(e){return o.a.createElement(_,null,o.a.createElement("div",{className:"modal fade",id:"staticBackdrop","data-backdrop":"static","data-keyboard":"false",tabIndex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},o.a.createElement("div",{className:"modal-dialog modal-dialog-centered"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header text-center"},o.a.createElement("h5",{className:"modal-title",id:"staticBackdropLabel"},""!==e.title?"Education For Racial Equity : "+(e.title+1):"OctaVents"),o.a.createElement("button",{type:"button",className:"btn event-color rounded-circle ","data-dismiss":"modal","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),o.a.createElement("div",{className:"modal-body mx-1"},e.children)))))},j=function(e){var a=function(e){e.persist(),e.preventDefault(),console.log(e.target.value)};return o.a.createElement(_,null,o.a.createElement("form",{className:"p-1"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"name"},"Your Name"),o.a.createElement("input",{type:"text",className:"form-control inputBG",id:"name",readOnly:!0,onChange:function(e){return a(e)},placeholder:"Your Name",value:null!==e.user?e.user.first_name+" "+e.user.last_name:""})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"email"},"E-mail Address"),o.a.createElement("input",{type:"email",className:"form-control inputBG",id:"email",placeholder:"E-mail Address",readOnly:!0,onChange:function(e){return a(e)},value:null!==e.user?e.user.email:""})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"phonenumber"},"Phone Number"),o.a.createElement("input",{type:"text",className:"form-control inputBG",id:"phone_number",placeholder:"Phone Number"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"ticket"},"Ticket Number"),o.a.createElement("select",{id:"ticket",className:"form-control inputBG"},o.a.createElement("option",{defaultValue:!0},"Select..."),o.a.createElement("option",null,"1"),o.a.createElement("option",null,"2"),o.a.createElement("option",null,"3"),o.a.createElement("option",null,"4"),o.a.createElement("option",null,"5"),o.a.createElement("option",null,"6"),o.a.createElement("option",null,"7"),o.a.createElement("option",null,"8"),o.a.createElement("option",null,"9"),o.a.createElement("option",null,"10"))),o.a.createElement("button",{type:"button",onClick:function(a){return function(a){a.persist(),a.preventDefault(),console.log(e.user)}(a)},className:"btn btn-color btn-block rounded-pill my-4"},"REGISTER NOW")))},T=function(e){Object(r.a)(n,e);var a=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var t=arguments.length,o=new Array(t),c=0;c<t;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).state={title:"Title ",name:"Leslie",bio:"Looking for something to do in Accra? Whether you're a local,\n      new in town or just cruising through we've got loads of great\n      tips and events. You can explore by location, what's popular,\n      our top picks, free stuff... you got this. Ready?",imageUrl:""},e.loadEventInfo=function(a){e.setState(Object(b.a)(Object(b.a)({},e.state),{},{title:a.index,imageUrl:a.imageUrl}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,a=function(e){if(e<=0)return[];if(isNaN(e))return[];for(var a=[],n=0;n<=e;n++)a.push(n);return a}(5).map((function(a,n){return o.a.createElement(I,{key:n,loadInfo:e.loadEventInfo,info:n})}));return o.a.createElement(_,null,o.a.createElement(p,null),o.a.createElement(P,{loginNavHandler:this.props.loginNavHandler,user:this.props.user,is_auth:this.props.isAuthenticated,onlogout:this.props.islogout}),o.a.createElement("main",{role:"main",className:"pt-5 mt-2"},o.a.createElement("section",{className:"jumbotron text-center"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"display-2"},"Events"),o.a.createElement("p",{className:"lead text-muted"},"Looking for something to do in Accra? Whether you're a local, new in town or just cruising through we've got loads of great tips and events. You can explore by location, what's popular, our top picks, free stuff... you got this. Ready?"),o.a.createElement("p",null,o.a.createElement("a",{href:"#",className:"btn btn-primary my-2"},"Main call to action"),o.a.createElement("a",{href:"#",className:"btn btn-secondary my-2"},"Secondary action")))),o.a.createElement("div",{className:"event py-5"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},a)))),o.a.createElement(M,null),o.a.createElement(R,{title:this.state.title},o.a.createElement(j,{user:this.props.user,data:this.state})))}}]),n}(t.Component),x=function(e){Object(r.a)(n,e);var a=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var t=arguments.length,o=new Array(t),c=0;c<t;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).state={isLoginForm:!1,isRegisterForm:!1,isAuthenticated:!1,user:null},e.setSwitchForm=function(a){e.setState({isLoginForm:a})},e.onSubmitLogin=function(a){a&&e.setState({isAuthenticated:!0,isLoginForm:!a,user:w()})},e.onLoginPageHandler=function(a){"login"===a.toLowerCase()?e.setState({isLoginForm:!0}):"register"===a.toLowerCase()?e.setState({isRegisterForm:!0}):e.setState({isLoginForm:!0})},e.onLogout=function(a){a?e.setState({isAuthenticated:!1}):u("Ooop!, Look like you can't log out.","info")},e.onSubmitRegister=function(a){console.log(a),a.is_success&&(u("Registered successfully! Confirm email link has been sent so please check your inbox or spam.","success"),e.setState({isLoginForm:a.is_success}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){S()?this.setState({isAuthenticated:!1}):this.setState({isAuthenticated:!0}),this.setState({user:w()})}},{key:"render",value:function(){var e=this,a=o.a.createElement("div",{className:this.state.isLoginForm?"container mtop mb-3":"container mt-3 mb-3"},o.a.createElement("div",{className:"row mx-1"},o.a.createElement("div",{className:"col-md-9 col-sm-12 col-xs-12 mx-auto text-center py-3"},o.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Switch button form"},o.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.setSwitchForm(!0)}},"LOGIN"),o.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.setSwitchForm(!1)}},"REGISTER"))),o.a.createElement(F,{onLogin:this.onSubmitLogin,onRegister:this.onSubmitRegister,isLogin:this.state.isLoginForm,isRegister:this.state.isRegisterForm})));return o.a.createElement(_,null,o.a.createElement(p,null),this.state.isLoginForm||this.state.isRegisterForm?a:o.a.createElement(T,{loginNavHandler:this.onLoginPageHandler,user:this.state.user,isAuthenticated:this.state.isAuthenticated,islogout:this.onLogout}))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.6cd8ea09.chunk.js.map