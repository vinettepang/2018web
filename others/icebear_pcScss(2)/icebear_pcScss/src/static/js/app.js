$(function () {
  let loginState = false              //登录状态
    , init = function () {
      //初始化登录注册
      login_init()
      //初始化消息弹窗和个人中心弹窗事件
      mesBoxOrCenterBox_init()
    }
    , login_init = function () {
      
      if (loginState) {             //登陆状态为true 显示头像和消息中心
        $('#logined').show()
        $('#notLogin').hide()
      } else {                      //登陆状态为false 显示登录注册
        $('#logined').hide()
        $('#notLogin').show()
      }

      login()
      register()
      _loginAlertHide()
      _registerAlertHide()
      _BoxHide()
      stopClick()
    }
    , mesBoxOrCenterBox_init = function(){
      //消息弹窗事件
      _messageBoxShow()
      //个人中心弹窗事件
      _centerBoxShow()
    }
    , login = function () {
      $('.login').on('click', function(e){
        e.stopPropagation()

        $('#loginAlert').show()
        $('#registerAlert').hide()
      })
    }
    , register = function () {
      $('.register').on('click', function(e){
        e.stopPropagation()

        $('#loginAlert').hide()
        $('#registerAlert').show()
      })
    }
    , _loginAlertHide = function(){
      $('#loginAlertHide').on('click', function(){
        $('#loginAlert').hide()
      })
    }
    , _registerAlertHide = function(){
      $('#registerAlertHide').on('click', function(){
        $('#registerAlert').hide()
      })
    }
    , stopClick = function(){
      $('.registerAlert').on('click', function(e){
        e.stopPropagation()
      })
      $('.loginAlert').on('click', function(e){
        e.stopPropagation()
      })
      $('.message-box').on('click', function(e){
        e.stopPropagation()
      })
      $('.center-box').on('click', function(e){
        e.stopPropagation()
      })
    } 
    , _messageBoxShow = function(){
      $('#messageBoxShow').on('click', function(e){
        e.stopPropagation()
        $('.message-box').show();
        $('.center-box').hide();
      })
    }
    , _centerBoxShow = function(){
      $('#centerBoxShow').on('click', function(e){
        e.stopPropagation()
        $('.message-box').hide();
        $('.center-box').show();
      })
    }
    , _BoxHide = function(){
      document.onclick = function (e) {
        $('.message-box').hide();
        $('.center-box').hide();
        $('#registerAlert').hide()
        $('#loginAlert').hide()
      };
    }


  init()
})  