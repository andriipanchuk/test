/*
 Highcharts JS v7.2.2 (2020-08-24)

 (c) 2016-2019 Highsoft AS
 Authors: Jon Arild Nygard

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/sunburst",["highcharts"],function(t){b(t);b.Highcharts=t;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function t(d,g,b,l){d.hasOwnProperty(g)||(d[g]=l.apply(null,b))}b=b?b._modules:{};t(b,"mixins/draw-point.js",[],function(){var d=function(g){var d=this,b=d.graphic,z=g.animatableAttribs,m=g.onComplete,r=g.css,y=g.renderer;
if(d.shouldDraw())b||(d.graphic=b=y[g.shapeType](g.shapeArgs).add(g.group)),b.css(r).attr(g.attribs).animate(z,g.isNew?!1:void 0,m);else if(b){var w=function(){d.graphic=b=b.destroy();"function"===typeof m&&m()};Object.keys(z).length?b.animate(z,void 0,function(){w()}):w()}};return function(b){(b.attribs=b.attribs||{})["class"]=this.getClassName();d.call(this,b)}});t(b,"mixins/tree-series.js",[b["parts/Globals.js"],b["parts/Utilities.js"]],function(b,g){var d=g.extend,l=g.isArray,z=g.isNumber,m=g.isObject,
r=g.pick,y=b.merge;return{getColor:function(d,h){var g=h.index,m=h.mapOptionsToLevel,w=h.parentColor,l=h.parentColorIndex,E=h.series,F=h.colors,z=h.siblings,v=E.points,B=E.chart.options.chart,D;if(d){v=v[d.i];d=m[d.level]||{};if(m=v&&d.colorByPoint){var f=v.index%(F?F.length:B.colorCount);var k=F&&F[f]}if(!E.chart.styledMode){F=v&&v.options.color;B=d&&d.color;if(D=w)D=(D=d&&d.colorVariation)&&"brightness"===D.key?b.color(w).brighten(g/z*D.to).get():w;D=r(F,B,k,D,E.color)}var u=r(v&&v.options.colorIndex,
d&&d.colorIndex,f,l,h.colorIndex)}return{color:D,colorIndex:u}},getLevelOptions:function(b){var h=null;if(m(b)){h={};var g=z(b.from)?b.from:1;var x=b.levels;var r={};var H=m(b.defaults)?b.defaults:{};l(x)&&(r=x.reduce(function(b,h){if(m(h)&&z(h.level)){var l=y({},h);var r="boolean"===typeof l.levelIsConstant?l.levelIsConstant:H.levelIsConstant;delete l.levelIsConstant;delete l.level;h=h.level+(r?0:g-1);m(b[h])?d(b[h],l):b[h]=l}return b},{}));x=z(b.to)?b.to:1;for(b=0;b<=x;b++)h[b]=y({},H,m(r[b])?r[b]:
{})}return h},setTreeValues:function x(b,g){var h=g.before,m=g.idRoot,l=g.mapIdToNode[m],z=g.points[b.i],y=z&&z.options||{},v=0,B=[];d(b,{levelDynamic:b.level-(("boolean"===typeof g.levelIsConstant?g.levelIsConstant:1)?0:l.level),name:r(z&&z.name,""),visible:m===b.id||("boolean"===typeof g.visible?g.visible:!1)});"function"===typeof h&&(b=h(b,g));b.children.forEach(function(h,f){var k=d({},g);d(k,{index:f,siblings:b.children.length,visible:b.visible});h=x(h,k);B.push(h);h.visible&&(v+=h.val)});b.visible=
0<v||b.visible;h=r(y.value,v);d(b,{children:B,childrenTotal:v,isLeaf:b.visible&&!v,val:h});return b},updateRootId:function(b){if(m(b)){var d=m(b.options)?b.options:{};d=r(b.rootNode,d.rootId,"");m(b.userOptions)&&(b.userOptions.rootId=d);b.rootNode=d}return d}}});t(b,"modules/treemap.src.js",[b["parts/Globals.js"],b["mixins/tree-series.js"],b["mixins/draw-point.js"],b["parts/Utilities.js"]],function(b,g,t,l){var d=l.defined,m=l.extend,r=l.isArray,y=l.isNumber,w=l.isObject,h=l.isString,M=l.objectEach,
x=l.pick;l=b.seriesType;var K=b.seriesTypes,H=b.addEvent,E=b.merge,F=b.error,L=b.noop,v=b.fireEvent,B=g.getColor,D=g.getLevelOptions,f=b.Series,k=b.stableSort,u=b.Color,I=function(a,c,e){e=e||this;M(a,function(n,p){c.call(e,n,p,a)})},G=function(a,c,e){e=e||this;a=c.call(e,a);!1!==a&&G(a,c,e)},C=g.updateRootId;l("treemap","scatter",{allowTraversingTree:!1,animationLimit:250,showInLegend:!1,marker:!1,colorByPoint:!1,dataLabels:{defer:!1,enabled:!0,formatter:function(){var a=this&&this.point?this.point:
{};return h(a.name)?a.name:""},inside:!0,verticalAlign:"middle"},tooltip:{headerFormat:"",pointFormat:"<b>{point.name}</b>: {point.value}<br/>"},ignoreHiddenPoint:!0,layoutAlgorithm:"sliceAndDice",layoutStartingDirection:"vertical",alternateStartingDirection:!1,levelIsConstant:!0,drillUpButton:{position:{align:"right",x:-10,y:10}},traverseUpButton:{position:{align:"right",x:-10,y:10}},borderColor:"#e6e6e6",borderWidth:1,colorKey:"colorValue",opacity:.15,states:{hover:{borderColor:"#999999",brightness:K.heatmap?
0:.1,halo:!1,opacity:.75,shadow:!1}}},{pointArrayMap:["value"],directTouch:!0,optionalAxis:"colorAxis",getSymbol:L,parallelArrays:["x","y","value","colorValue"],colorKey:"colorValue",trackerGroups:["group","dataLabelsGroup"],getListOfParents:function(a,c){a=r(a)?a:[];var e=r(c)?c:[];c=a.reduce(function(a,c,e){c=x(c.parent,"");void 0===a[c]&&(a[c]=[]);a[c].push(e);return a},{"":[]});I(c,function(a,c,b){""!==c&&-1===e.indexOf(c)&&(a.forEach(function(a){b[""].push(a)}),delete b[c])});return c},getTree:function(){var a=
this.data.map(function(a){return a.id});a=this.getListOfParents(this.data,a);this.nodeMap=[];return this.buildNode("",-1,0,a,null)},hasData:function(){return!!this.processedXData.length},init:function(a,c){var e=b.colorMapSeriesMixin;e&&(this.colorAttribs=e.colorAttribs);H(this,"setOptions",function(a){a=a.userOptions;d(a.allowDrillToNode)&&!d(a.allowTraversingTree)&&(a.allowTraversingTree=a.allowDrillToNode,delete a.allowDrillToNode);d(a.drillUpButton)&&!d(a.traverseUpButton)&&(a.traverseUpButton=
a.drillUpButton,delete a.drillUpButton)});f.prototype.init.call(this,a,c);this.options.allowTraversingTree&&H(this,"click",this.onClickDrillToNode)},buildNode:function(a,c,e,b,p){var f=this,n=[],k=f.points[c],d=0,g;(b[a]||[]).forEach(function(c){g=f.buildNode(f.points[c].id,c,e+1,b,a);d=Math.max(g.height+1,d);n.push(g)});c={id:a,i:c,children:n,height:d,level:e,parent:p,visible:!1};f.nodeMap[c.id]=c;k&&(k.node=c);return c},setTreeValues:function(a){var c=this,e=c.options,b=c.nodeMap[c.rootNode];e=
"boolean"===typeof e.levelIsConstant?e.levelIsConstant:!0;var p=0,f=[],q=c.points[a.i];a.children.forEach(function(a){a=c.setTreeValues(a);f.push(a);a.ignore||(p+=a.val)});k(f,function(a,c){return a.sortIndex-c.sortIndex});var d=x(q&&q.options.value,p);q&&(q.value=d);m(a,{children:f,childrenTotal:p,ignore:!(x(q&&q.visible,!0)&&0<d),isLeaf:a.visible&&!p,levelDynamic:a.level-(e?0:b.level),name:x(q&&q.name,""),sortIndex:x(q&&q.sortIndex,-d),val:d});return a},calculateChildrenAreas:function(a,c){var e=
this,b=e.options,f=e.mapOptionsToLevel[a.level+1],N=x(e[f&&f.layoutAlgorithm]&&f.layoutAlgorithm,b.layoutAlgorithm),q=b.alternateStartingDirection,d=[];a=a.children.filter(function(a){return!a.ignore});f&&f.layoutStartingDirection&&(c.direction="vertical"===f.layoutStartingDirection?0:1);d=e[N](c,a);a.forEach(function(a,b){b=d[b];a.values=E(b,{val:a.childrenTotal,direction:q?1-c.direction:c.direction});a.pointValues=E(b,{x:b.x/e.axisRatio,width:b.width/e.axisRatio});a.children.length&&e.calculateChildrenAreas(a,
a.values)})},setPointValues:function(){var a=this,c=a.xAxis,e=a.yAxis;a.points.forEach(function(b){var f=b.node,n=f.pointValues,d=0;a.chart.styledMode||(d=(a.pointAttribs(b)["stroke-width"]||0)%2/2);if(n&&f.visible){f=Math.round(c.translate(n.x,0,0,0,1))-d;var k=Math.round(c.translate(n.x+n.width,0,0,0,1))-d;var g=Math.round(e.translate(n.y,0,0,0,1))-d;n=Math.round(e.translate(n.y+n.height,0,0,0,1))-d;b.shapeArgs={x:Math.min(f,k),y:Math.min(g,n),width:Math.abs(k-f),height:Math.abs(n-g)};b.plotX=b.shapeArgs.x+
b.shapeArgs.width/2;b.plotY=b.shapeArgs.y+b.shapeArgs.height/2}else delete b.plotX,delete b.plotY})},setColorRecursive:function(a,c,e,b,f){var p=this,n=p&&p.chart;n=n&&n.options&&n.options.colors;if(a){var d=B(a,{colors:n,index:b,mapOptionsToLevel:p.mapOptionsToLevel,parentColor:c,parentColorIndex:e,series:p,siblings:f});if(c=p.points[a.i])c.color=d.color,c.colorIndex=d.colorIndex;(a.children||[]).forEach(function(c,e){p.setColorRecursive(c,d.color,d.colorIndex,e,a.children.length)})}},algorithmGroup:function(a,
c,e,b){this.height=a;this.width=c;this.plot=b;this.startDirection=this.direction=e;this.lH=this.nH=this.lW=this.nW=this.total=0;this.elArr=[];this.lP={total:0,lH:0,nH:0,lW:0,nW:0,nR:0,lR:0,aspectRatio:function(a,c){return Math.max(a/c,c/a)}};this.addElement=function(a){this.lP.total=this.elArr[this.elArr.length-1];this.total+=a;0===this.direction?(this.lW=this.nW,this.lP.lH=this.lP.total/this.lW,this.lP.lR=this.lP.aspectRatio(this.lW,this.lP.lH),this.nW=this.total/this.height,this.lP.nH=this.lP.total/
this.nW,this.lP.nR=this.lP.aspectRatio(this.nW,this.lP.nH)):(this.lH=this.nH,this.lP.lW=this.lP.total/this.lH,this.lP.lR=this.lP.aspectRatio(this.lP.lW,this.lH),this.nH=this.total/this.width,this.lP.nW=this.lP.total/this.nH,this.lP.nR=this.lP.aspectRatio(this.lP.nW,this.nH));this.elArr.push(a)};this.reset=function(){this.lW=this.nW=0;this.elArr=[];this.total=0}},algorithmCalcPoints:function(a,c,e,f){var p,n,d,k,g=e.lW,u=e.lH,h=e.plot,C=0,m=e.elArr.length-1;if(c)g=e.nW,u=e.nH;else var J=e.elArr[e.elArr.length-
1];e.elArr.forEach(function(a){if(c||C<m)0===e.direction?(p=h.x,n=h.y,d=g,k=a/d):(p=h.x,n=h.y,k=u,d=a/k),f.push({x:p,y:n,width:d,height:b.correctFloat(k)}),0===e.direction?h.y+=k:h.x+=d;C+=1});e.reset();0===e.direction?e.width-=g:e.height-=u;h.y=h.parent.y+(h.parent.height-e.height);h.x=h.parent.x+(h.parent.width-e.width);a&&(e.direction=1-e.direction);c||e.addElement(J)},algorithmLowAspectRatio:function(a,c,e){var b=[],f=this,d,k={x:c.x,y:c.y,parent:c},g=0,h=e.length-1,u=new this.algorithmGroup(c.height,
c.width,c.direction,k);e.forEach(function(e){d=e.val/c.val*c.height*c.width;u.addElement(d);u.lP.nR>u.lP.lR&&f.algorithmCalcPoints(a,!1,u,b,k);g===h&&f.algorithmCalcPoints(a,!0,u,b,k);g+=1});return b},algorithmFill:function(a,c,e){var b=[],f,d=c.direction,k=c.x,g=c.y,h=c.width,u=c.height,C,m,l,J;e.forEach(function(e){f=e.val/c.val*c.height*c.width;C=k;m=g;0===d?(J=u,l=f/J,h-=l,k+=l):(l=h,J=f/l,u-=J,g+=J);b.push({x:C,y:m,width:l,height:J});a&&(d=1-d)});return b},strip:function(a,c){return this.algorithmLowAspectRatio(!1,
a,c)},squarified:function(a,c){return this.algorithmLowAspectRatio(!0,a,c)},sliceAndDice:function(a,c){return this.algorithmFill(!0,a,c)},stripes:function(a,c){return this.algorithmFill(!1,a,c)},translate:function(){var a=this,c=a.options,e=C(a);f.prototype.translate.call(a);var b=a.tree=a.getTree();var d=a.nodeMap[e];a.renderTraverseUpButton(e);a.mapOptionsToLevel=D({from:d.level+1,levels:c.levels,to:b.height,defaults:{levelIsConstant:a.options.levelIsConstant,colorByPoint:c.colorByPoint}});""===
e||d&&d.children.length||(a.setRootNode("",!1),e=a.rootNode,d=a.nodeMap[e]);G(a.nodeMap[a.rootNode],function(c){var e=!1,b=c.parent;c.visible=!0;if(b||""===b)e=a.nodeMap[b];return e});G(a.nodeMap[a.rootNode].children,function(a){var c=!1;a.forEach(function(a){a.visible=!0;a.children.length&&(c=(c||[]).concat(a.children))});return c});a.setTreeValues(b);a.axisRatio=a.xAxis.len/a.yAxis.len;a.nodeMap[""].pointValues=e={x:0,y:0,width:100,height:100};a.nodeMap[""].values=e=E(e,{width:e.width*a.axisRatio,
direction:"vertical"===c.layoutStartingDirection?0:1,val:b.val});a.calculateChildrenAreas(b,e);a.colorAxis||c.colorByPoint||a.setColorRecursive(a.tree);c.allowTraversingTree&&(c=d.pointValues,a.xAxis.setExtremes(c.x,c.x+c.width,!1),a.yAxis.setExtremes(c.y,c.y+c.height,!1),a.xAxis.setScale(),a.yAxis.setScale());a.setPointValues()},drawDataLabels:function(){var a=this,c=a.mapOptionsToLevel,e,b;a.points.filter(function(a){return a.node.visible}).forEach(function(f){b=c[f.node.level];e={style:{}};f.node.isLeaf||
(e.enabled=!1);b&&b.dataLabels&&(e=E(e,b.dataLabels),a._hasPointLabels=!0);f.shapeArgs&&(e.style.width=f.shapeArgs.width,f.dataLabel&&f.dataLabel.css({width:f.shapeArgs.width+"px"}));f.dlOptions=E(e,f.options.dataLabels)});f.prototype.drawDataLabels.call(this)},alignDataLabel:function(a,c,b){var e=b.style;!d(e.textOverflow)&&c.text&&c.getBBox().width>c.text.textWidth&&c.css({textOverflow:"ellipsis",width:e.width+="px"});K.column.prototype.alignDataLabel.apply(this,arguments);a.dataLabel&&a.dataLabel.attr({zIndex:(a.node.zIndex||
0)+1})},pointAttribs:function(a,c){var b=w(this.mapOptionsToLevel)?this.mapOptionsToLevel:{},f=a&&b[a.node.level]||{};b=this.options;var d=c&&b.states[c]||{},k=a&&a.getClassName()||"";a={stroke:a&&a.borderColor||f.borderColor||d.borderColor||b.borderColor,"stroke-width":x(a&&a.borderWidth,f.borderWidth,d.borderWidth,b.borderWidth),dashstyle:a&&a.borderDashStyle||f.borderDashStyle||d.borderDashStyle||b.borderDashStyle,fill:a&&a.color||this.color};-1!==k.indexOf("highcharts-above-level")?(a.fill="none",
a["stroke-width"]=0):-1!==k.indexOf("highcharts-internal-node-interactive")?(c=x(d.opacity,b.opacity),a.fill=u(a.fill).setOpacity(c).get(),a.cursor="pointer"):-1!==k.indexOf("highcharts-internal-node")?a.fill="none":c&&(a.fill=u(a.fill).brighten(d.brightness).get());return a},drawPoints:function(){var a=this,c=a.chart,b=c.renderer,f=c.styledMode,d=a.options,k=f?{}:d.shadow,g=d.borderRadius,h=c.pointCount<d.animationLimit,u=d.allowTraversingTree;a.points.forEach(function(c){var e=c.node.levelDynamic,
n={},p={},C={},l="level-group-"+e,I=!!c.graphic,G=h&&I,r=c.shapeArgs;c.shouldDraw()&&(g&&(p.r=g),E(!0,G?n:p,I?r:{},f?{}:a.pointAttribs(c,c.selected&&"select")),a.colorAttribs&&f&&m(C,a.colorAttribs(c)),a[l]||(a[l]=b.g(l).attr({zIndex:1E3-e}).add(a.group),a[l].survive=!0));c.draw({animatableAttribs:n,attribs:p,css:C,group:a[l],renderer:b,shadow:k,shapeArgs:r,shapeType:"rect"});u&&c.graphic&&(c.drillId=d.interactByLeaf?a.drillToByLeaf(c):a.drillToByGroup(c))})},onClickDrillToNode:function(a){var c=
(a=a.point)&&a.drillId;h(c)&&(a.setState(""),this.setRootNode(c,!0,{trigger:"click"}))},drillToByGroup:function(a){var c=!1;1!==a.node.level-this.nodeMap[this.rootNode].level||a.node.isLeaf||(c=a.id);return c},drillToByLeaf:function(a){var c=!1;if(a.node.parent!==this.rootNode&&a.node.isLeaf)for(a=a.node;!c;)a=this.nodeMap[a.parent],a.parent===this.rootNode&&(c=a.id);return c},drillUp:function(){var a=this.nodeMap[this.rootNode];a&&h(a.parent)&&this.setRootNode(a.parent,!0,{trigger:"traverseUpButton"})},
drillToNode:function(a,c){F("WARNING: treemap.drillToNode has been renamed to treemap.setRootNode, and will be removed in the next major version.");this.setRootNode(a,c)},setRootNode:function(a,c,b){a=m({newRootId:a,previousRootId:this.rootNode,redraw:x(c,!0),series:this},b);v(this,"setRootNode",a,function(a){var c=a.series;c.idPreviousRoot=a.previousRootId;c.rootNode=a.newRootId;c.isDirty=!0;a.redraw&&c.chart.redraw()})},renderTraverseUpButton:function(a){var c=this,b=c.options.traverseUpButton,
f=x(b.text,c.nodeMap[a].name,"< Back");if(""===a)c.drillUpButton&&(c.drillUpButton=c.drillUpButton.destroy());else if(this.drillUpButton)this.drillUpButton.placed=!1,this.drillUpButton.attr({text:f}).align();else{var d=(a=b.theme)&&a.states;this.drillUpButton=this.chart.renderer.button(f,null,null,function(){c.drillUp()},a,d&&d.hover,d&&d.select).addClass("highcharts-drillup-button").attr({align:b.position.align,zIndex:7}).add().align(b.position,!1,b.relativeTo||"plotBox")}},buildKDTree:L,drawLegendSymbol:b.LegendSymbolMixin.drawRectangle,
getExtremes:function(){f.prototype.getExtremes.call(this,this.colorValueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;f.prototype.getExtremes.call(this)},getExtremesFromAll:!0,bindAxes:function(){var a={endOnTick:!1,gridLineWidth:0,lineWidth:0,min:0,dataMin:0,minPadding:0,max:100,dataMax:100,maxPadding:0,startOnTick:!1,title:null,tickPositions:[]};f.prototype.bindAxes.call(this);m(this.yAxis.options,a);m(this.xAxis.options,a)},setState:function(a){this.options.inactiveOtherPoints=!0;
f.prototype.setState.call(this,a,!1);this.options.inactiveOtherPoints=!1},utils:{recursive:G}},{draw:t,setVisible:K.pie.prototype.pointClass.prototype.setVisible,getClassName:function(){var a=b.Point.prototype.getClassName.call(this),c=this.series,f=c.options;this.node.level<=c.nodeMap[c.rootNode].level?a+=" highcharts-above-level":this.node.isLeaf||x(f.interactByLeaf,!f.allowTraversingTree)?this.node.isLeaf||(a+=" highcharts-internal-node"):a+=" highcharts-internal-node-interactive";return a},isValid:function(){return this.id||
y(this.value)},setState:function(a){b.Point.prototype.setState.call(this,a);this.graphic&&this.graphic.attr({zIndex:"hover"===a?1:0})},shouldDraw:function(){return y(this.plotY)&&null!==this.y}})});t(b,"modules/sunburst.src.js",[b["parts/Globals.js"],b["parts/Utilities.js"],b["mixins/draw-point.js"],b["mixins/tree-series.js"]],function(b,g,t,l){var d=g.extend,m=g.isNumber,r=g.isObject,y=g.isString;g=b.CenteredSeriesMixin;var w=b.Series,h=g.getCenter,M=l.getColor,x=l.getLevelOptions,K=g.getStartAndEndRadians,
H=b.merge,E=180/Math.PI;g=b.seriesType;var F=l.setTreeValues,L=l.updateRootId,v=function(b,d){var f=[];if(m(b)&&m(d)&&b<=d)for(;b<=d;b++)f.push(b);return f},B=function(b,d){d=r(d)?d:{};var f=0,g;if(r(b)){var k=H({},b);b=m(d.from)?d.from:0;var h=m(d.to)?d.to:0;var a=v(b,h);b=Object.keys(k).filter(function(b){return-1===a.indexOf(+b)});var c=g=m(d.diffRadius)?d.diffRadius:0;a.forEach(function(a){a=k[a];var b=a.levelSize.unit,e=a.levelSize.value;"weight"===b?f+=e:"percentage"===b?(a.levelSize={unit:"pixels",
value:e/100*c},g-=a.levelSize.value):"pixels"===b&&(g-=e)});a.forEach(function(a){var b=k[a];"weight"===b.levelSize.unit&&(b=b.levelSize.value,k[a].levelSize={unit:"pixels",value:b/f*g})});b.forEach(function(a){k[a].levelSize={value:0,unit:"pixels"}})}return k},D=function(b,d){var f=d.mapIdToNode[b.parent],g=d.series,k=g.chart,h=g.points[b.i];f=M(b,{colors:g.options.colors||k&&k.options.colors,colorIndex:g.colorIndex,index:d.index,mapOptionsToLevel:d.mapOptionsToLevel,parentColor:f&&f.color,parentColorIndex:f&&
f.colorIndex,series:d.series,siblings:d.siblings});b.color=f.color;b.colorIndex=f.colorIndex;h&&(h.color=b.color,h.colorIndex=b.colorIndex,b.sliced=b.id!==d.idRoot?h.sliced:!1);return b};g("sunburst","treemap",{center:["50%","50%"],colorByPoint:!1,opacity:1,dataLabels:{allowOverlap:!0,defer:!0,rotationMode:"auto",style:{textOverflow:"ellipsis"}},rootId:void 0,levelIsConstant:!0,levelSize:{value:1,unit:"weight"},slicedOffset:10},{drawDataLabels:b.noop,drawPoints:function(){var b=this,g=b.mapOptionsToLevel,
h=b.shapeRoot,l=b.group,x=b.hasRendered,C=b.rootNode,a=b.idPreviousRoot,c=b.nodeMap,e=c[a],n=e&&e.shapeArgs;e=b.points;var p=b.startAndEndRadians,v=b.chart,q=v&&v.options&&v.options.chart||{},z="boolean"===typeof q.animation?q.animation:!0,t=b.center[3]/2,D=b.chart.renderer,y=!1,B=!1;if(q=!!(z&&x&&C!==a&&b.dataLabelsGroup)){b.dataLabelsGroup.attr({opacity:0});var F=function(){y=!0;b.dataLabelsGroup&&b.dataLabelsGroup.animate({opacity:1,visibility:"visible"})}}e.forEach(function(e){var f=e.node,k=
g[f.level];var u=e.shapeExisting||{};var q=f.shapeArgs||{},I=!(!f.visible||!f.shapeArgs);if(x&&z){var G={};var y={end:q.end,start:q.start,innerR:q.innerR,r:q.r,x:q.x,y:q.y};I?!e.graphic&&n&&(G=C===e.id?{start:p.start,end:p.end}:n.end<=q.start?{start:p.end,end:p.end}:{start:p.start,end:p.start},G.innerR=G.r=t):e.graphic&&(a===e.id?y={innerR:t,r:t}:h&&(y=h.end<=u.start?{innerR:t,r:t,start:p.end,end:p.end}:{innerR:t,r:t,start:p.start,end:p.start}));u=G}else y=q,u={};G=[q.plotX,q.plotY];if(!e.node.isLeaf)if(C===
e.id){var A=c[C];A=A.parent}else A=e.id;d(e,{shapeExisting:q,tooltipPos:G,drillId:A,name:""+(e.name||e.id||e.index),plotX:q.plotX,plotY:q.plotY,value:f.val,isNull:!I});A=e.options;f=r(q)?q:{};A=r(A)?A.dataLabels:{};k=r(k)?k.dataLabels:{};k=H({style:{}},k,A);var w;A=k.rotationMode;m(k.rotation)||("auto"===A&&(1>e.innerArcLength&&e.outerArcLength>f.radius?w=0:A=1<e.innerArcLength&&e.outerArcLength>1.5*f.radius?"parallel":"perpendicular"),"auto"!==A&&(w=f.end-(f.end-f.start)/2),k.style.width="parallel"===
A?Math.min(2.5*f.radius,(e.outerArcLength+e.innerArcLength)/2):f.radius,"perpendicular"===A&&e.series.chart.renderer.fontMetrics(k.style.fontSize).h>e.outerArcLength&&(k.style.width=1),k.style.width=Math.max(k.style.width-2*(k.padding||0),1),w=w*E%180,"parallel"===A&&(w-=90),90<w?w-=180:-90>w&&(w+=180),k.rotation=w);0===k.rotation&&(k.rotation=.001);e.dlOptions=k;if(!B&&I){B=!0;var N=F}e.draw({animatableAttribs:y,attribs:d(u,!v.styledMode&&b.pointAttribs(e,e.selected&&"select")),onComplete:N,group:l,
renderer:D,shapeType:"arc",shapeArgs:q})});q&&B?(b.hasRendered=!1,b.options.dataLabels.defer=!0,w.prototype.drawDataLabels.call(b),b.hasRendered=!0,y&&F()):w.prototype.drawDataLabels.call(b)},pointAttribs:b.seriesTypes.column.prototype.pointAttribs,layoutAlgorithm:function(b,d,g){var f=b.start,k=b.end-f,h=b.val,a=b.x,c=b.y,e=g&&r(g.levelSize)&&m(g.levelSize.value)?g.levelSize.value:0,l=b.r,p=l+e,u=g&&m(g.slicedOffset)?g.slicedOffset:0;return(d||[]).reduce(function(b,d){var g=1/h*d.val*k,n=f+g/2,m=
a+Math.cos(n)*u;n=c+Math.sin(n)*u;d={x:d.sliced?m:a,y:d.sliced?n:c,innerR:l,r:p,radius:e,start:f,end:f+g};b.push(d);f=d.end;return b},[])},setShapeArgs:function(b,d,g){var f=[],k=g[b.level+1];b=b.children.filter(function(b){return b.visible});f=this.layoutAlgorithm(d,b,k);b.forEach(function(b,a){a=f[a];var c=a.start+(a.end-a.start)/2,e=a.innerR+(a.r-a.innerR)/2,d=a.end-a.start;e=0===a.innerR&&6.28<d?{x:a.x,y:a.y}:{x:a.x+Math.cos(c)*e,y:a.y+Math.sin(c)*e};var k=b.val?b.childrenTotal>b.val?b.childrenTotal:
b.val:b.childrenTotal;this.points[b.i]&&(this.points[b.i].innerArcLength=d*a.innerR,this.points[b.i].outerArcLength=d*a.r);b.shapeArgs=H(a,{plotX:e.x,plotY:e.y+4*Math.abs(Math.cos(c))});b.values=H(a,{val:k});b.children.length&&this.setShapeArgs(b,b.values,g)},this)},translate:function(){var d=this,g=d.options,l=d.center=h.call(d),m=d.startAndEndRadians=K(g.startAngle,g.endAngle),r=l[3]/2,v=l[2]/2-r,a=L(d),c=d.nodeMap,e=c&&c[a],n={};d.shapeRoot=e&&e.shapeArgs;w.prototype.translate.call(d);var p=d.tree=
d.getTree();d.renderTraverseUpButton(a);c=d.nodeMap;e=c[a];var t=y(e.parent)?e.parent:"";var q=c[t];t=x({from:0<e.level?e.level:1,levels:d.options.levels,to:p.height,defaults:{colorByPoint:g.colorByPoint,dataLabels:g.dataLabels,levelIsConstant:g.levelIsConstant,levelSize:g.levelSize,slicedOffset:g.slicedOffset}});t=B(t,{diffRadius:v,from:0<e.level?e.level:1,to:p.height});F(p,{before:D,idRoot:a,levelIsConstant:g.levelIsConstant,mapOptionsToLevel:t,mapIdToNode:c,points:d.points,series:d});g=c[""].shapeArgs=
{end:m.end,r:r,start:m.start,val:e.val,x:l[0],y:l[1]};this.setShapeArgs(q,g,t);d.mapOptionsToLevel=t;d.data.forEach(function(a){n[a.id]&&b.error(31,!1,d.chart);n[a.id]=!0});n={}},animate:function(b){var d=this.chart,f=[d.plotWidth/2,d.plotHeight/2],g=d.plotLeft,h=d.plotTop;d=this.group;b?(b={translateX:f[0]+g,translateY:f[1]+h,scaleX:.001,scaleY:.001,rotation:10,opacity:.01},d.attr(b)):(b={translateX:g,translateY:h,scaleX:1,scaleY:1,rotation:0,opacity:1},d.animate(b,this.options.animation),this.animate=
null)},utils:{calculateLevelSizes:B,range:v}},{draw:t,shouldDraw:function(){return!this.isNull},isValid:function(){return!0}})});t(b,"masters/modules/sunburst.src.js",[],function(){})});
//# sourceMappingURL=sunburst.js.map