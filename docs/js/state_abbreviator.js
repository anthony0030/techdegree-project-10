function convertStateRegion(a,e){void 0===e&&(e=a.length>2?"TO_ABBREVIATED":"TO_NAME");var i=[["Alabama","AL"],["Alaska","AK"],["American Samoa","AS"],["Arizona","AZ"],["Arkansas","AR"],["Armed Forces Americas","AA"],["Armed Forces Europe","AE"],["Armed Forces Pacific","AP"],["California","CA"],["Colorado","CO"],["Connecticut","CT"],["Delaware","DE"],["District Of Columbia","DC"],["Florida","FL"],["Georgia","GA"],["Guam","GU"],["Hawaii","HI"],["Idaho","ID"],["Illinois","IL"],["Indiana","IN"],["Iowa","IA"],["Kansas","KS"],["Kentucky","KY"],["Louisiana","LA"],["Maine","ME"],["Marshall Islands","MH"],["Maryland","MD"],["Massachusetts","MA"],["Michigan","MI"],["Minnesota","MN"],["Mississippi","MS"],["Missouri","MO"],["Montana","MT"],["Nebraska","NE"],["Nevada","NV"],["New Hampshire","NH"],["New Jersey","NJ"],["New Mexico","NM"],["New York","NY"],["North Carolina","NC"],["North Dakota","ND"],["Northern Mariana Islands","NP"],["Ohio","OH"],["Oklahoma","OK"],["Oregon","OR"],["Pennsylvania","PA"],["Puerto Rico","PR"],["Rhode Island","RI"],["South Carolina","SC"],["South Dakota","SD"],["Tennessee","TN"],["Texas","TX"],["US Virgin Islands","VI"],["Utah","UT"],["Vermont","VT"],["Virginia","VA"],["Washington","WA"],["West Virginia","WV"],["Wisconsin","WI"],["Wyoming","WY"]],n=[["Alberta","AB"],["British Columbia","BC"],["Manitoba","MB"],["New Brunswick","NB"],["Newfoundland","NF"],["Northwest Territory","NT"],["Nova Scotia","NS"],["Nunavut","NU"],["Ontario","ON"],["Prince Edward Island","PE"],["Quebec","QC"],["Saskatchewan","SK"],["Yukon","YT"]],o=i.concat(n),r;if("TO_ABBREVIATED"===e){for(a=a.replace(/\w\S*/g,function(a){return a.charAt(0).toUpperCase()+a.substr(1).toLowerCase()}),r=0;r<o.length;r++)if(o[r][0]==a)return o[r][1]}else if("TO_NAME"===e)for(a=a.toUpperCase(),r=0;r<o.length;r++)if(o[r][1]==a)return o[r][0]}