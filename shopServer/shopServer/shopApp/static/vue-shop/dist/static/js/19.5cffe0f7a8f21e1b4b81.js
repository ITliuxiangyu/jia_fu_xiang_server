webpackJsonp([19],{AAxG:function(n,e,t){var i=t("zFNd");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("FIqI")("76a130d6",i,!0,{})},GUbA:function(n,e,t){"use strict";function i(n){t("AAxG")}function o(n){t("gdIc")}Object.defineProperty(e,"__esModule",{value:!0});var a=t("SPhl"),l=t("sNOJ"),s=t("8qMz"),r=t("zZCY"),d=t("1a94"),c=t("IfgW"),h=(c.a,Number,Boolean,{name:"x-progress",mixins:[c.a],props:{percent:{type:Number,default:0},showCancel:{type:Boolean,default:!0}},methods:{cancel:function(){this.$emit("on-cancel")}}}),p=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"weui-progress"},[t("div",{staticClass:"weui-progress__bar"},[t("div",{staticClass:"weui-progress__inner-bar",style:{width:n.percent+"%"}})]),n._v(" "),t("a",{directives:[{name:"show",rawName:"v-show",value:n.showCancel,expression:"showCancel"}],staticClass:"weui-progress_opr",attrs:{href:"javascript:;"}},[t("i",{staticClass:"weui-icon-cancel",on:{click:n.cancel}})])])},g=[],u={render:p,staticRenderFns:g},f=u,m=t("vSla"),b=i,x=m(h,f,!1,b,null,null),w=x.exports,k=(String,{name:"box",props:{gap:String}}),_=function(){var n=this,e=n.$createElement;return(n._self._c||e)("div",{style:{margin:n.gap}},[n._t("default")],2)},v=[],C={render:_,staticRenderFns:v},z=C,N=t("vSla"),y=N(k,z,!1,null,null,null),S=y.exports,L=t("QcMK"),K=t("+Jte"),B=function(){return["红包","购物券"]},I=(L.a,d.a,a.a,l.a,s.a,r.a,function(){return["红包","购物券"]}),$={components:{ShopCell:L.a,XHeader:d.a,Tab:a.a,TabItem:l.a,Swiper:s.a,SwiperItem:r.a,XProgress:w,Box:S},data:function(){return{list:[],list2:I(),demo2:"商品",demoDisabled:"A",index:0,redPacketList:[],secondKillList:[]}},created:function(){this.$route.params.secondKillList?this.secondKillList=this.$route.params.secondKillList:this.get_second_kill_list(),this.$nextTick(function(){var n=this.$(window).height(),e=this.$(".vux-header").outerHeight();this.$("#killList_wrap").css({height:n-e+"px",position:"relative",overflow:"scroll"})})},methods:{isChaoshi:function(){},get_second_kill_list:function(){var n=this;Object(K.f)().miaosha_list_fn(function(e){n.secondKillList=[];for(var t=0;t<e.length;t++){var i=e[t],o=new Date(Date.parse(i.startTime)),a=new Date(Date.parse(i.stopTime));"进行中"===Object(K.f)().getStatusByTimes(Object(K.f)().getServerDate(),o,a)&&n.secondKillList.push(i)}})},secondKillReq:function(){var n="";""===n&&(n=new WebSocket("ws://www.dangsh/echo_once/")),n.onopen=function(){n.send("你好 服务器  nihao fuwuqi")},n.onmessage=function(n){}},goDetailKill:function(n){this.$router.push({name:"goods_detail",params:{goodsId:n}})},getImgUrl:function(n){return Object(K.a)(n)}}},T=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"mySecondKill"}},[t("x-header",{attrs:{title:"秒杀列表","right-options":{showMore:!1}},on:{"on-click-more":function(e){n.show=!0}}}),n._v(" "),t("div",{attrs:{id:"killList_wrap"}},n._l(this.secondKillList,function(e,i){return t("div",{key:i,staticClass:"killList_contents",on:{click:function(t){n.goDetailKill(e.goods.goodsid)}}},[t("div",{staticClass:"shopList_img"},[t("img",{attrs:{src:n.getImgUrl(e.goods),alt:""}})]),n._v(" "),t("div",{staticClass:"killList_detail"},[t("div",{staticClass:"killList_desc"},[n._v(n._s(e.goods.goodsname))]),n._v(" "),t("div",{staticClass:"killList_spans"},[t("span",[n._v("小米")]),t("span",[n._v("已抢"+n._s(e.alreadyMiaoShaNumber)+"/"+n._s(e.miaoShaCount)+"件")])]),n._v(" "),t("box",{attrs:{gap:"10px"}},[t("x-progress",{staticStyle:{background:"#ed393d",width:"160px"},attrs:{percent:(e.alreadyMiaoShaNumber-0)/(e.miaoShaCount-0)*100,"show-cancel":!1}})],1),n._v(" "),t("div",{staticClass:"killList_prices"},[n._v("￥"+n._s(e.goods.shop_price)+" "),t("span",{attrs:{id:"sellPrice"}},[n._v("￥"+n._s(e.goods.market_price))]),t("span",{attrs:{id:"goQiang"}},[n._v("去抢购")])])],1)])}))],1)},E=[],D={render:T,staticRenderFns:E},F=D,M=t("vSla"),P=o,j=M($,F,!1,P,"data-v-d28a4a22",null);e.default=j.exports},ewQC:function(n,e,t){e=n.exports=t("UTlt")(!1),e.push([n.i,"\n#killList_wrap[data-v-d28a4a22] {\n  overflow: scroll;\n}\n#mySecondKill .killList_contents[data-v-d28a4a22] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  padding: 6px;\n  background: #ffffff;\n  border-bottom: 1px solid #ebebeb;\n}\n#mySecondKill .killList_img[data-v-d28a4a22] {\n  width: 110px;\n}\n.killpList_img img[data-v-d28a4a22] {\n  width: 100px;\n  height: 100px;\n}\n#mySecondKill .killList_detail[data-v-d28a4a22] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n}\n#mySecondKill .killList_spans span[data-v-d28a4a22] {\n  display: inline-block;\n  background: #f4f4f4;\n  margin: 1px;\n  font-size: 8px;\n  color: #666;\n}\n#mySecondKill .killList_prices[data-v-d28a4a22] {\n  font-size: 16px;\n  color: #ed393d;\n}\n#mySecondKill .killList_desc[data-v-d28a4a22] {\n  font-size: 14px;\n  display: -webkit-box;\n  word-break: break-all;\n  text-overflow: ellipsis;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n}\n#mySecondKill .killList_others[data-v-d28a4a22] {\n  font-size: 10px;\n  color: #666;\n}\n#mySecondKill #sellPrice[data-v-d28a4a22] {\n  text-decoration: line-through;\n  color: #ccc;\n}\n#mySecondKill #goQiang[data-v-d28a4a22] {\n  display: inline-block;\n  padding: 0px 0.5rem;\n  background: #ed393d;\n  margin: 1px;\n  color: #ffffff;\n  float: right;\n  width: 50px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n}\n#mySecondKill .weui-progress__inner-bar[data-v-d28a4a22] {\n  width: 0;\n  height: 100px!important;\n  background-color: #ed393d!important;\n}\n#mySecondKill .weui-progress__bar[data-v-d28a4a22] {\n  background-color: #EBEBEB;\n  height: 10px!important;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n}\n.shopList_img img[data-v-d28a4a22] {\n  width: 80%;\n  height: 100%;\n}\n",""])},gdIc:function(n,e,t){var i=t("ewQC");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("FIqI")("72116ed0",i,!0,{})},zFNd:function(n,e,t){e=n.exports=t("UTlt")(!1),e.push([n.i,"/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content's padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.weui-progress {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.weui-progress__bar {\n  background-color: #EBEBEB;\n  height: 3px;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n}\n.weui-progress__inner-bar {\n  width: 0;\n  height: 100%;\n  background-color: #09BB07;\n}\n.weui-progress__opr {\n  display: block;\n  margin-left: 15px;\n  font-size: 0;\n}\n",""])}});