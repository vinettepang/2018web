'use strict';
/*;(function($, window, document,undefined) {
})(jQuery, window, document);*/
let miniProgramCode = 'https://icebear.me/Public/Home/images/index/code_baixiong.png';
function Tools() {
  this.userAgent = function () {
      let Sys = {};
      let ua = navigator.userAgent.toLowerCase();
      let s;
      (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
      (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
      (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
      (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
      (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

      //以下进行测试
      if (Sys.ie) console.log('IE: ' + Sys.ie);
      if (Sys.firefox) console.log('Firefox: ' + Sys.firefox);
      if (Sys.chrome) console.log('Chrome: ' + Sys.chrome);
      if (Sys.opera) console.log('Opera: ' + Sys.opera);
      if (Sys.safari) console.log('Safari: ' + Sys.safari);
  }
  this.navScoll = function (target) {
    //点击滚动
    $('body').on('click', target+' li', function(e) {
      let that = $(this);
      var scrollHeight = $(that.data('ref')).offset().top - 88;
      $("html, body").animate({scrollTop: scrollHeight + "px"}, function() {
        that.parent().siblings().removeClass('active');
        that.parent().addClass('active');
      });
    });
    //滚动定位
    $(window).scroll(function(e){
      e.stopPropagation();
      $(target).find('li').each(function(i){
        var a = $($(this).data('ref')).offset().top,
        b = $($(this).data('ref')).outerHeight(),
        c =$(window).scrollTop() + 88;
        if (c >= a && c <= a+b) {
          var obj = 'li[data-ref="'+$(this).data('ref')+'"]';
          $(target).find('li').siblings().removeClass('active');
          $(target).find(obj).addClass('active');
          //console.log("在这 "+$(this).data('ref'));
        }
     })
     //  $(target).find('li a').each(function(i){
     //    var a = $($(this).attr('href')).offset().top,
     //    b = $($(this).attr('href')).outerHeight(),
     //    c =$(window).scrollTop() + 88;
     //    if (c >= a && c <= a+b) {
     //      var obj = 'a[href="'+$(this).attr('href')+'"]';
     //      $('.nav-scroll li').siblings().removeClass('active');
     //      $('.nav-scroll li').find(obj).parent().addClass('active');
     //      //console.log("在这 "+$(this).attr('href'));
     //    }
     // })
    });
  }

  this.showHideTab = function () {
    let btnClass = '.v-show-tab-btn a'; //btn
    let boxClass = '.v-show-tab-box'; //box
    let targetClass = '.v-show-tab-panel .v-show-target';  //触发target
    $('body').on('click', btnClass, function(event) {
      event.preventDefault();
      let that = $(this);
      let index = that.index(); //索引
      let box = that.parents(boxClass); //当前box
      let box_s = box.hasClass('v_show'); //当前box添加标记
      let target_s = box.find(targetClass).eq(index).is(':hidden'); //当前触发target状态
      let text = null;
      that.data('text') != null ? ( text = that.data('text')) :'';
      if (box_s) {
          if (target_s) {
            $.each(box.find(btnClass), function(index, val) {
                let text = $(val).data('text');
                $(val).html('查看'+text);
            });
            box.find(btnClass).eq(index).html('收起'+text);
            box.find(targetClass).siblings().fadeOut().eq(index).fadeIn();
          }else{
            that.html('查看'+text);
            box.find(targetClass).eq(index).slideUp();
            box.removeClass('v_show');
          }
      }else{
          that.html('收起'+text);
          box.find(targetClass).eq(index).slideDown();
          box.addClass('v_show');
      }
    });
  }

  this.showHide = function (c,t) {
    let btn = '.v-show-btn';
    let target = '.v-show-target';
    let box = '.v-show-box';
    let multiBtn = '.v-multishow-btn';
   $('body').on('click', btn, function(e) {
    console.log(e);
      let _this = $(this);
      e.stopPropagation();
      let multi_target = _this.data('target'); 
      let multi_target_status = $(multi_target).is(':hidden');
      let p_obj = _this.parents(box);
      let status = p_obj.hasClass('v_show');
      let text = null;
      _this.data('text') != null ? ( text = _this.data('text')) :'';
      if (status) {
          if (multi_target_status) {
            p_obj.find(target).fadeOut();
            $(multi_target).slideDown();
          }else{
            p_obj.removeClass('v_show');
            $(multi_target).slideUp();
          }
          _this.data('text', _this.html()).html(text);
      }else{
          _this.data('text', _this.html()).html(text);
          $(multi_target).slideDown();
          p_obj.addClass('v_show');
      }
    });
  }

  this.readMore = function (opt) {
    console.log('readMore');
    //内置
    let boxClass = '.v-readmore-box';
    $.each($(boxClass), function(index, val) {
       console.log(index, val);
       console.log($(val).outerHeight());
    });
    console.log($(boxClass).length);
    if ($(boxClass).length > 0) {
        let infoHeight = $(boxClass).height();  //内容块高度
        
        this.default = {
          'overHeight' : '200' //超过的高度
        };

        this.options = $.extend({}, this.default, opt);
        let defHeight = this.options.overHeight;  //默认高度
        console.log(infoHeight,defHeight);
        // 如果高度超出
        if (infoHeight > defHeight) {

          $(boxClass).css('height', defHeight + 'px'); // 设置默认高度,隐藏超出部分
          $(boxClass).after('<div class="v-readmore"><a href="javascript:;" class="v-readmore-btn">查看更多&#xe61c;</a></div>');
          
          //$(".v-readmore").html('<a href="javascript:;" class="v-readmore-btn">查看更多&#xe61c;</a>');//加按钮
          // 点击按钮
          $('body').on('click', '.v-readmore-btn', function(e) {
            e.stopPropagation();
             let curHeight = $(this).parent().prev(boxClass).height();
              if (curHeight == defHeight) {
                $(this).parent().prev(boxClass).animate({height:infoHeight});
                $('.v-readmore').html('<a href="javascript:;" class="v-readmore-btn">收起更多&#xe61b;</a>')
              } else{
                $(this).parent().prev(boxClass).animate({height:defHeight});
                $('.v-readmore').html('<a href="javascript:;" class="v-readmore-btn">查看更多&#xe61c;</a>');
              };
          });
        } 
    }
  }

  this.btnPopup = function () {
    // body...
  }

  this.popup = function (opt) {

    this.default = {
      'height' : '300', //高度
      'width' : '300', //宽度
      'overlay':true,//背景遮罩
    };
    this.options = $.extend({}, this.default, opt);  

    let $img =null;
    let $box = $("<div>").addClass("v-popup-box"); //弹窗插件容器
    let $layer = $("<div>").addClass("v_layer");//遮罩层
    let $popBox = $('<div>').addClass('v-popup').css({'height':  this.options.height,'width': this.options.width});//弹窗盒子
    let $titleBox = $('<div>').addClass('pop-head');//弹窗顶部区域
    let $mainBox = $('<div>').addClass('pop-main');//弹窗内容主体区
    let $clsBtn = $('<a>').addClass("cls").html('<i>x</i>');//弹窗关闭按钮
    let options = this.options;
    let $content = $('<p>').html(this.options.content);//弹窗内容
    let popId = creatPopId();//弹窗索引

    typeof (this.options.imgSrc) === 'string' ? ($img = $('<img>').attr('src', this.options.imgSrc),$img = $('<p class="img">').append($img), $mainBox.append($img)):'';
    
    if (this.options.position == 'absolute') {
      let client_top = this.options.popupTarget[0].clientHeight;
      let client_left = this.options.popupTarget[0].clientHeight;
      $popBox.css({
        'position': 'absolute',
        'top':this.options.height/2 ,
        //'top': client_top + this.options.height/2 ,
        'left': 0
      });
    }

    function init() {
      creatDom(options);
      bind()
    }

    init();

    function creatDom(opt) {
      $popBox.append(
          $titleBox.append($clsBtn)
      ).append($mainBox.append($content));

      if (opt.overlay) { $box.attr('id', popId).append($layer).append($popBox); }
      else{ $box.attr('id', popId).append($popBox); }

      if (typeof(opt.popupTarget) == 'object') {
        //opt.popupTarget.wrap('<div style="position:relative"></div>').after($box).fadeIn();
        opt.popupTarget.after($box).fadeIn();
      }else{
        $('body').append($box).fadeIn();
      }
     // $('body').append($box).fadeIn();
    }

    //点击关闭按钮
    function bind(){
      $clsBtn.click(doClose);
      $popBox.click(function(e) {
        e.stopPropagation();
      });
    }

    //关闭按钮事件
    function doClose(){
      $("#" + popId).fadeOut('400', function() {$(this).remove(); });
      console.log('doClose');
      $(window).unbind("keydown");
    }
    
    //重生popId,防止id重复
    function creatPopId(){
      var i = "pop_" + (new Date()).getTime()+parseInt(Math.random()*100000);//弹窗索引
      if($("#" + i).length > 0){ return creatPopId(); }else{ return i; }
    }
    $(document).bind('click',function(e){ 
      e.stopPropagation();
      doClose();
    }); 
  }

  this.clickPopup = function () {
    let that = this;
    let btn = '.group_popup';
    $('body').on('click', btn, function(e) {
      e.stopPropagation();
      let left=$(this).position().left;
      let top=$(this).position().top;
      let target=$(this);
      that.popup({
        'imgSrc': miniProgramCode,
        'content':'微信扫码，使用白熊求职小程序查看','overlay':false,'position':'absolute','top':top,'left':left,'popupTarget':target});
    });
  }

  this.stopPropagation = function (e) {
    if (e.stopPropagation) 
    e.stopPropagation(); 
    else 
    e.cancelBubble = true; 
  }

  this._init = function () {
    //console.log('zheli');
    //this.readMore();
    this.showHide();
    this.showHideTab(); //切换显示隐藏
    this.userAgent(); //检测用户浏览器信息
    this.clickPopup();//购买popup
  }
}
  $(document).ready(function(){
  let _tools = new Tools();
  _tools._init();
})
