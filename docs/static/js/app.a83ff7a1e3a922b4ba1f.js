webpackJsonp([1],{NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),r=a("fZjL"),n=a.n(r),s=a("gemB"),o=a.n(s),l={name:"CharacterAspects",data:function(){return{checked:{},aspects:o.a,name:"",age:"",height:"",birthday:{day:"",month:""},aligment:{ethically:"",morally:""},mbti:{energy:"",information:"",decision:"",lifestyle:""}}},computed:{numberOfChecked:function(){var e=0;for(var t in this.checked)this.checked[t]&&e++;return this.name&&++e,this.age&&++e,this.height&&++e,this.birthday.day&&this.birthday.month&&++e,e},numberOfAspects:function(){return n()(this.aspects).length+n()(this.aligment).length+n()(this.mbti).length},progress:function(){return Math.round(this.numberOfChecked/this.numberOfAspects*100)}},methods:{check:function(e){this.checked[e]||this.$set(this.checked,e,!0)},boxCheck:function(e){var t=document.querySelectorAll('input[type="checkbox"].'+e),a=Array.prototype.slice.call(t).some(function(e){return e.checked});this.$set(this.checked,e,a)}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"character-sheet"},[a("div",{staticClass:"progress"},[a("div",{staticClass:"bar",style:{width:e.progress+"%"}},[e._v("\n      "+e._s(e.progress)+"%\n    ")])]),e._v(" "),a("div",{staticClass:"basic-info"},[a("div",{staticClass:"name"},[e._v("Name: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"age"},[e._v("Age: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"age"}],attrs:{type:"text"},domProps:{value:e.age},on:{input:function(t){t.target.composing||(e.age=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"height"},[e._v("Height: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.height,expression:"height"}],attrs:{type:"text"},domProps:{value:e.height},on:{input:function(t){t.target.composing||(e.height=t.target.value)}}}),e._v(" ΟFt / Οm")]),e._v(" "),a("div",{staticClass:"birthday"},[e._v("Birthdate: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.birthday.day,expression:"birthday.day"}],attrs:{type:"text"},domProps:{value:e.birthday.day},on:{input:function(t){t.target.composing||e.$set(e.birthday,"day",t.target.value)}}}),e._v("/"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.birthday.month,expression:"birthday.month"}],attrs:{type:"text"},domProps:{value:e.birthday.month},on:{input:function(t){t.target.composing||e.$set(e.birthday,"month",t.target.value)}}}),e._v(" (DD/MM)")])]),e._v(" "),a("div",{attrs:{id:"new"}},[e._l(e.aspects,function(t,i){return a("div",{staticClass:"aspect"},[a("h2",[e._v(e._s(t.name)+":")]),e._v(" "),"radio"==t.type?a("div",e._l(t.values,function(t,r){return a("div",{staticClass:"choice"},[a("input",{attrs:{name:i,id:i+r,type:"radio"},on:{click:function(t){e.check(i)}}}),e._v(" "),a("label",{attrs:{for:i+r}},[""==t?a("input",{attrs:{type:"text"}}):a("span",[e._v(e._s(t))])])])})):a("div",e._l(t.values,function(t,r){return a("div",{staticClass:"choice"},[a("input",{class:i,attrs:{type:"checkbox",id:i+r},on:{click:function(t){e.boxCheck(i)}}}),e._v(" "),a("label",{attrs:{for:i+r}},[""==t?a("input",{attrs:{type:"text"}}):a("span",[e._v(e._s(t))])])])}))])}),e._v(" "),a("div",{staticClass:"aspect"},[a("h2",[e._v("Alignment:")]),e._v(" "),a("div",[a("h3",[e._v("Ethically")]),e._v(" "),a("div",{staticClass:"choice"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.aligment.ethically,expression:"aligment.ethically"}],attrs:{name:"ethical",id:"eLawful",type:"radio",value:"eLawful"},domProps:{checked:e._q(e.aligment.ethically,"eLawful")},on:{click:function(t){e.check("ethical")},change:function(t){e.$set(e.aligment,"ethically","eLawful")}}}),e._v(" "),e._m(0)]),e._v(" "),a("div",{staticClass:"choice"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.aligment.ethically,expression:"aligment.ethically"}],attrs:{name:"ethical",id:"eNeutral",type:"radio",value:"eNeutral"},domProps:{checked:e._q(e.aligment.ethically,"eNeutral")},on:{click:function(t){e.check("ethical")},change:function(t){e.$set(e.aligment,"ethically","eNeutral")}}}),e._v(" "),e._m(1)]),e._v(" "),a("div",{staticClass:"choice"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.aligment.ethically,expression:"aligment.ethically"}],attrs:{name:"ethical",id:"eChaotic",type:"radio",value:"eChaotic"},domProps:{checked:e._q(e.aligment.ethically,"eChaotic")},on:{click:function(t){e.check("ethical")},change:function(t){e.$set(e.aligment,"ethically","eChaotic")}}}),e._v(" "),e._m(2)]),e._v(" "),a("hr"),e._v(" "),a("h3",[e._v("Morally")]),e._v(" "),a("div",{staticClass:"choice"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.aligment.morally,expression:"aligment.morally"}],attrs:{name:"moral",id:"mGood",type:"radio",value:"mGood"},domProps:{checked:e._q(e.aligment.morally,"mGood")},on:{click:function(t){e.check("morally")},change:function(t){e.$set(e.aligment,"morally","mGood")}}}),e._v(" "),e._m(3)]),e._v(" "),a("div",{staticClass:"choice"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.aligment.morally,expression:"aligment.morally"}],attrs:{name:"moral",id:"mNeutral",type:"radio",value:"mNeutral"},domProps:{checked:e._q(e.aligment.morally,"mNeutral")},on:{click:function(t){e.check("morally")},change:function(t){e.$set(e.aligment,"morally","mNeutral")}}}),e._v(" "),e._m(4)]),e._v(" "),a("div",{staticClass:"choice"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.aligment.morally,expression:"aligment.morally"}],attrs:{name:"moral",id:"mEvil",type:"radio",value:"mEvil"},domProps:{checked:e._q(e.aligment.morally,"mEvil")},on:{click:function(t){e.check("morally")},change:function(t){e.$set(e.aligment,"morally","mEvil")}}}),e._v(" "),e._m(5)])])]),e._v(" "),a("div",{staticClass:"aspect"},[a("h2",[e._v("MBTI type:")]),e._v(" "),a("div",[a("div",{staticClass:"choice"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mbti.energy,expression:"mbti.energy"}],attrs:{name:"ExtraIntro",id:"Extro",type:"radio",value:"extro"},domProps:{checked:e._q(e.mbti.energy,"extro")},on:{click:function(t){e.check("mbtienergy")},change:function(t){e.$set(e.mbti,"energy","extro")}}}),e._v(" "),e._m(6)]),e._v(" "),a("div",{staticClass:"choice"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mbti.energy,expression:"mbti.energy"}],attrs:{name:"ExtraIntro",id:"Intro",type:"radio",value:"intro"},domProps:{checked:e._q(e.mbti.energy,"intro")},on:{click:function(t){e.check("mbtienergy")},change:function(t){e.$set(e.mbti,"energy","intro")}}}),e._v(" "),e._m(7)]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"choice"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mbti.information,expression:"mbti.information"}],attrs:{name:"SensIntu",id:"sens",type:"radio",value:"sens"},domProps:{checked:e._q(e.mbti.information,"sens")},on:{click:function(t){e.check("mbtiinformation")},change:function(t){e.$set(e.mbti,"information","sens")}}}),e._v(" "),e._m(8)]),e._v(" "),a("div",{staticClass:"choice"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mbti.information,expression:"mbti.information"}],attrs:{name:"SensIntu",id:"intu",type:"radio",value:"intu"},domProps:{checked:e._q(e.mbti.information,"intu")},on:{click:function(t){e.check("mbtiinformation")},change:function(t){e.$set(e.mbti,"information","intu")}}}),e._v(" "),e._m(9)]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"choice"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mbti.decision,expression:"mbti.decision"}],attrs:{name:"ThinFeel",id:"thin",type:"radio",value:"thin"},domProps:{checked:e._q(e.mbti.decision,"thin")},on:{click:function(t){e.check("mbtidecision")},change:function(t){e.$set(e.mbti,"decision","thin")}}}),e._v(" "),e._m(10)]),e._v(" "),a("div",{staticClass:"choice"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mbti.decision,expression:"mbti.decision"}],attrs:{name:"ThinFeel",id:"feel",type:"radio",value:"feel"},domProps:{checked:e._q(e.mbti.decision,"feel")},on:{click:function(t){e.check("mbtidecision")},change:function(t){e.$set(e.mbti,"decision","feel")}}}),e._v(" "),e._m(11)]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"choice"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mbti.lifestyle,expression:"mbti.lifestyle"}],attrs:{name:"JudgPerc",id:"judg",type:"radio",value:"judg"},domProps:{checked:e._q(e.mbti.lifestyle,"judg")},on:{click:function(t){e.check("mbtilifestyle")},change:function(t){e.$set(e.mbti,"lifestyle","judg")}}}),e._v(" "),e._m(12)]),e._v(" "),a("div",{staticClass:"choice"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mbti.lifestyle,expression:"mbti.lifestyle"}],attrs:{name:"JudgPerc",id:"perc",type:"radio",value:"oerc"},domProps:{checked:e._q(e.mbti.lifestyle,"oerc")},on:{click:function(t){e.check("mbtilifestyle")},change:function(t){e.$set(e.mbti,"lifestyle","oerc")}}}),e._v(" "),e._m(13)])])])],2)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"eLawful"}},[t("span",[this._v("Lawful")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"eNeutral"}},[t("span",[this._v("Neutral")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"eChaotic"}},[t("span",[this._v("Chaotic")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"mGood"}},[t("span",[this._v("Good")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"mNeutral"}},[t("span",[this._v("Neutral")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"mEvil"}},[t("span",[this._v("Evil")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"Extro"}},[t("span",[this._v("Extraversion")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"Intro"}},[t("span",[this._v("Introversion")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"sens"}},[t("span",[this._v("Sensing")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"intu"}},[t("span",[this._v("iNtuition")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"thin"}},[t("span",[this._v("Thinking")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"feel"}},[t("span",[this._v("Feeling")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"judg"}},[t("span",[this._v("Judging")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"perc"}},[t("span",[this._v("Perception")])])}]};var m={name:"App",components:{CharacterAspects:a("VU/8")(l,c,!1,function(e){a("lvLo")},"data-v-052bad6c",null).exports}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("h1",[this._v("THE ULTIMATE NO-EFFORT CHARACTER SHEET IN CHECKLIST FORM FOR YOUR CONVENIENCE")]),this._v(" "),t("CharacterAspects"),this._v(" "),t("hr"),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",[this._v("\n    Credit goes to "),t("a",{attrs:{href:"http://justsomecynic.tumblr.com/"}},[this._v("SOME CYNIC")]),this._v(" for creating the original "),t("a",{attrs:{href:"http://justsomecynic.tumblr.com/post/126139023289/im-a-very-lazy-person-i-know-my-characters-well"}},[this._v("Ultimate no-effort character sheet for writers")]),this._v(" PDF.\n  ")])}]};var d=a("VU/8")(m,u,!1,function(e){a("aYD4")},null,null).exports;i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:d},template:"<App/>"})},aYD4:function(e,t){},gemB:function(e,t){e.exports={gender:{name:"Gender",type:"radio",values:["Male","Female",""]},posture:{name:"Posture",type:"radio",values:["Upright","Neutral","Slumped"]},languages:{name:"Languages",type:"radio",values:["1-2","3-4","5+"]},"physical-needs":{name:"Physical needs",type:"check-box",values:["Glasses or contacts","Hearing aids","Braces or similar","Crutches or wheelchair",""]},"physical-condition":{name:"Physical conditions",type:"check-box",values:["Lesion","Partial or total paralysis","Blindness","Deafness or muteness","Missing limb or amputation","Grave disease",""]},"mental-condition":{name:"Mental conditions",type:"check-box",values:["Depression","Anxiety","Autism","PTSD or ASD","Psychopathy or Sociopathy","Panic disorder","OCD",""]},residence:{name:"Residence",type:"radio",values:["Dorms or studio apartment","City house","Suburban house","Mansion or manor","Penthouse or yacht","Trailer",""]},housemates:{name:"Housemates",type:"check-box",values:["Family member(s)","Friends(s)","Landlord/lady","None"]},sexuality:{name:"Sexuality",type:"radio",values:["Gay/Lesbian","Straight","Bi/Pansexual","Asexual",""]},"face-shape":{name:"Face shape",type:"radio",values:["Round","Oval","Heart","Square","Long",""]},hairstyle:{name:"Hairstyle",type:"radio",values:["Crew cut/similar","Pixie cut/similar","Bob cut/similar","Should-length","Elbow-length","Hip-length or +",""]},"direct-family":{name:"Directly family",type:"check-box",values:["Mother(s)","Father(s)","Brother(s)","Sister(s)","Son(s)","Daughter(s)",""]},"preferred-drink":{name:"Preferred drink",type:"radio",values:["Water","Alcohol","Nature juice","Coffee or tea","Carbonated drinks"]},"preferred-food":{name:"Preferred food",type:"radio",values:["Sweets","Meats","Fruits","Vegetables","Carbohydrates"]},"mode-of-transport":{name:"Mode or transport",type:"check-box",values:["Public transport","Taxi","Motorcycle or scooter","Bicycle","Car","Hired driver",""]},"status-by-the-start":{name:"Status by the start",type:"radio",values:["Active","Inactive","Deceased","Missing",""]},"status-by-the-end":{name:"Status by the end",type:"radio",values:["Active","Inactive","Deceased","Missing",""]},"hair-texture":{name:"Hair texture",type:"radio",values:["Straigt","Straight-wavy","Wavy","Wavy-curled","Curled","Extra curled","Ultimate curls"]},"social-class":{name:"Social class",type:"radio",values:["Very low","Low","Middle-low","Middle","Middle-high","High","Very high"]},"education-level":{name:"Education level",type:"radio",values:["Less than high school","High school","College","Masters","PhD"]},"preferred-sport":{name:"Preferred sport",type:"radio",values:["Team sport","Water sport","Martial arts","Athletics","Gymnastics","Mind sports","Extreme sports",""]},"self-discipline":{name:"Self-discipline",type:"radio",values:["What is that","Noooooo","When they want to","Decent","Military"]},creative:{name:"Creative",type:"radio",values:["Dull","Conventional","Average","Unconventional","Picasso"]},luck:{name:"Luck",type:"radio",values:["Witchcraft","Steriotypical Irish","Average","Really?","Historically Irish"]},"hair-color":{name:"Hair color",type:"check-box",values:["Black","Dark brown","Brown","Light brown","Blonde","Ginger",""]},"strong point":{name:"Strong point",type:"radio",values:["Brute force","Agility","Stamina","Intelligence","Wisdom","Charm"]},"physical-health":{name:"Physical health",type:"radio",values:["Dying","Could be better","Can't complain","Pretty good","Invincible"]},"usual-outfit":{name:"Usual outfit",type:"radio",values:["Formal","Casual","Lazy","Sport casual","Uniform",""]},"easily-embarrassed":{name:"Easily embarrassed",type:"radio",values:["Shameless","Pretty tolerant","Average","Sensitive","Don't even talk to them"]},grooming:{name:"Grooming",type:"radio",values:["Lazy","Stylishly unkempt","Average","Prettied up","Meticulous"]},"irrational-phobias":{name:"Irrational phobias",type:"check-box",values:["Spiders or critters","Wild animals","Darkness","Touch","Birds","Crowds","The ocean",""]},"body-type":{name:"Body type",type:"radio",values:["Muscular","Athletic","Average","Scrawny","Curvy","Fat/chubby",""]},iq:{name:"IQ",type:"radio",values:["60 or less","61-80","81-100","101-120","Over 120"]},"mental-health":{name:"Mental health",type:"radio",values:["Kill me","Ugh","Can't complain","Hella","I AM TITANIUM"]},pets:{name:"Pets",type:"check-box",values:["Dog(s)","Cat(s)","Bird(s)","Hamster(s)","Turtle(s)",""]},"shows-affection":{name:"Show affection",type:"radio",values:["Doesn't","Rarely","Sometimes","Often","At every chance"]},gestures:{name:"Gestures",type:"radio",values:["Never","Rarely","Sometimes","Often","Wildly"]},"common-fears":{name:"Common fears",type:"check-box",values:["Spiders or critters","Wild animals","Darkness","Death","Untimely death","Ridicule",""]},"skin-tone":{name:"Skin tone",type:"radio",values:["Pale","Fair","Golden","Beige","Bronze","Chocolate","Ebony",""]},perceptiveness:{name:"Perceptiveness",type:"radio",values:["Oblivious","Dull","Average","Sharp","Mind-reader"]},"moral-code":{name:"Moral code",type:"radio",values:["Self-interest","Utilitarianism","Universal law","Religious",""]},"sense-of-humor":{name:"Sense of humor",type:"radio",values:["Constant and relentless","Sassy levels","Pretty normal","Can take a joke but won't say one","Slow, but there","Average. For a cliff face."]},likeability:{name:"Likeability",type:"radio",values:["Non-existent","When they try","Pretty ok","Cool person","God-like"]},"type-of-drunk":{name:"Type of drunk",type:"radio",values:["Happy","Sad","Risk-taker","Angry","Philosophical","Doesn't get drunk","Doesn't drink",""]},vices:{name:"Vices",type:"check-box",values:["Smoking","Drinking","Self-harm","Illicit drugs","Prescription drugs","Murder or tortur",""]},markings:{name:"Markings",type:"check-box",values:["Scar(s)","Tattoo(s)","Piercings(s)","Beauty mark(s)",""]},speech:{name:"Speech",type:"radio",values:["Vulgar","Basic","Avarage","Polite","Educated","Pretentious",""]},inclination:{name:"Inclination",type:"radio",values:["Arts","Science","Mathematics","Humanities",""]},"best-intelligence":{name:"Best intelligent",type:"radio",values:["Nature smart","Music smart","Numbers smart","People smart","Self smart","Picture smart","Language smart","Body smart"]},"most-common-smile":{name:"Most common smile",type:"radio",values:["Sheepish","Happy-go-lucky","Arrogant/smirk","Sadistic","In love","Literally doesn't smile",""]},"theme-color":{name:"Theme color",type:"radio",values:["Black","Brown","Darl blue","Light blue","Dark green","Light green","Yellow","Orange","Red","Pink","Purple","White",""]},"favorite-genre":{name:"Favorite genre",type:"radio",values:["Comedy","Romance","Thriller or horror","Mystery","Science fiction or fantasy","Contemporary","Historical","Literary","Action or adventure","Drama or tragedy",""]},"relationship-status":{name:"Relationship status",type:"radio",values:["Single","In a relationship","It's complicated","Engaged","Married","Divorced","Widowed"]},"deadly-sin":{name:"Deadly sin",type:"radio",values:["Pride","Wrath","Gluttony","Greed","Envy","Sloth","Lust"]},"heavenly-virtue":{name:"Heavenly virtue",type:"radio",values:["Humility","Patience","Temperance","Charity","Kindness","Diligence","Chastity"]},"hogwarts-house":{name:"Hogwarts house",type:"radio",values:["Gryffindor","Ravenclaw","Hufflepuff","Slytherin"]},"favorite-input":{name:"Favorite input",type:"check-box",values:["Novels","Textbooks","Magazines","Newspapers","TV shows","Movies","Sports channels","Documentaries","Radio","Blogs","Music",""]},"favorite-output":{name:"Favorite output",type:"chech-box",values:["Non-fiction","Fiction","Poetry","Songwriting","Drawing or painting","Sculpture","Crafts","Photography","Film or vlogging","Sport","Sleep",""]},"preferred-environment":{name:"Preferred environment",type:"radio",values:["Big city","Small town","Suburbs","Arid desert","Woods or rainforest","Mountains","Open fields","Beach",""]},"criminal-record":{name:"Criminal record",type:"check-box",values:["Underage drinking","Drunk driving","Assault or arson","Manslaughter","Murder or attempted murder","Rape or related","Protest or activism","False accusations","NOTHING THEY CAN PROVE",""]},"social-life":{name:"Social life",type:"radio",values:["Non-existent","Limited","It's there","Active","24/7"]},"preferred-comedy":{name:"Preferred comedy",type:"radio",values:["None","Slapstick","Absurdity","Potentially offensive","Stand-up","Wordplay","Cultured"]}}},lvLo:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.a83ff7a1e3a922b4ba1f.js.map