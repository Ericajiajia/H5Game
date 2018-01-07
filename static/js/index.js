// 配置jsjdk
var shareLink = 'http://weixin.bigtech.cc/iknowhustod/index.html';
shareLink = encodeURI(shareLink);
(function () {
  var sendData = {url: shareLink}
  Ajax('get', 'http://weixin.bigtech.cc/service/jssdk_config', sendData, function(data){
    var data = JSON.parse(data)
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: data.appid, // 必填，公众号的唯一标识
      timestamp: parseInt(data.timestamp), // 必填，生成签名的时间戳
      nonceStr: data.noncestr, // 必填，生成签名的随机串
      signature: data.signature, // 必填，签名，见附录1
      jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    })
    
  }, function(error){
    console.log(error)
  })
  wx.ready(function () {
    setTimeout(function () {
      // body...
      wx.onMenuShareTimeline({
        title: '华科老司机等级测试', // 分享标题
        link: shareLink, // 分享链接
        imgUrl: 'http://weixin.bigtech.cc/iknowhustod/static/picture/share_pic.jpg', // 分享图标
        success: function () {
        },
        cancel: function () { 
        }
      })
      wx.onMenuShareAppMessage({
        title: '华科老司机等级测试', // 分享标题
        desc: '这份华科老司机测试题，答对一半算我输！', // 分享描述
        link: shareLink, // 分享链接
        imgUrl: 'http://weixin.bigtech.cc/iknowhustod/static/picture/share_pic.jpg', // 分享图标
        success: function () { 
        },
        cancel: function () { 
        }
      });
    }, 1000)
  }) 
})();



//进度条实现
(function () {
  var progressInner = $('.progress-inner')[0]
  var progress = 1

  var random = function(min, max){
    return Math.floor(Math.random() * (max - min) + min)
  }
  
  var onprogress = function () {
    var timeout = random(1, 3)
    var j = setInterval(function () {
      if(progress < 95) {
        progress += Math.random() * 5
        progressInner.style.width = progress + '%'
      } else if (progress < 100) {
        if(window.loaded) {
          progress = 100
          progressInner.style.width = '100%'
          // 设置缩略图
        } else {
          progress = progress
          progressInner.style.width = progress + '%'
        }
      } else if(progress >= 100) {
        progressInner.style.width = "100%"
        window.clearInterval(j)
        setTimeout(function () {
          $('.loading-page')[0].style.display = "none"
          $('.container')[0].style.display = "block"
          startAnimation()
        }, 800)
      }
    }, 100)
  }
  // 开始跑进度
  onprogress()
  window.onload = function(){
    imgs.forEach(function (item, index) {
      var img = new Image()
      img.src = item
      img.onload = function () {
        // console.log(img.src)
      }
    })
    window.loaded = true
  }
})()

var imgs = ['./static/picture/question_bigbox@2x.png',
            './static/picture/question_dialog_up@2x.png',
            './static/picture/question_round@2x.png',
            './static/picture/question_bigbox@2x.png',
            './static/picture/home_dog_left@2x.png',
            './static/picture/result_fourcorners@2x.png',
            './static/picture/result_1_picture@2x.png',
            './static/picture/result_2_picture@2x.png',
            './static/picture/result_3_picture@2x.png',
            './static/picture/result_4_picture@2x.png',
            './static/picture/share_pic.jpg']            
var load = ['华','科','老','司','机','.','.','.']
var loadIndex = 0
var loadingprogress = function () {         //加载文字实现
  loadIndex = loadIndex % 8
  $('.loading-word')[0].innerHTML = ''
  for(var i = 0; i <= loadIndex; i++)
  {
    $('.loading-word')[0].innerHTML = $('.loading-word')[0].innerHTML + load[i] 
  }
  loadIndex ++
}
setInterval(loadingprogress,300)


var questions = []
function randomQuestions () {
  var rand
  var qArrStr = ["study", "food", "scene", "allKnow", "funny", "boolean"]
  for (var i = 0; i < 10; i++) {
    var qArr
    var index = 0
    if (i === 1 || i === 2) index = 1
    else if (i === 3 || i === 4) index = 2
    else if (i === 5) index = 3
    else if (i === 7 || i === 6) index = 4
    else if (i === 9 || i === 8) index = 5
    qArr = qaData[qArrStr[index]]
    rand = Math.floor(Math.random() * qArr.length)
    questions[i] = qArr[rand]
    if (i !== 0 && questions[i].true === questions[i-1].true) i--
  }
}

randomQuestions()
var CURRENT_Q // 当前题目指针
var GOAL // 所得分数
var TIME
var interval

var endPage = [
  {
    summary: '马路杀手',
    detail: ['你已经迷失在华科的迷宫里', '年轻人多读点书再上路吧']
  },
  {
    summary: '进击的骑手',
    detail: ['骑行过上百次绝望坡', '见证了你后座上的爱']
  },
  {
    summary: '校车荣誉驾驶员',
    detail: ['在东西两岸来回穿梭', '制霸华科只有一步之遥']
  },
  {
    summary: '神级老司鸡',
    detail: ['华科的道路已经容纳不下你', '前往更广阔的天地去吧']
  }
]


var startAnimation = function () {
    $(".homeTitle span img")[0].style.display = "block"
    $(".homeTitle span img")[0].className = "homeWord animated bounceInLeft"
    $(".homeTitle span img")[1].style.display = "block"
    $(".homeTitle span img")[1].className = "homeCar animated bounceInRight"
    setTimeout(function () {
        $(".home-dog")[0].style.display = "block"
        $(".home-dog div")[0].className = "home-dog-left animated tada"
        $(".home-dog div")[1].className = "home-dog-right animated bounce"
    },1100)
    setTimeout(function () {  
        $(".home-button")[0].style.display = "block"
        $(".home-bottom")[0].style.display = "block"
        $(".home-button img")[0].className = "animated jello infinite"
        $(".home-bottom")[0].className = "home-bottom animated jello"  },1800)
}



var startQuestion = function () {
  CURRENT_Q = 0 // 当前题目指针
  GOAL = 0 // 所得分数
  TIME = 30
  // 倒计时初始化
  $('.count-down')[0].className = 'count-down animated jello'
  // 狗狗初始化
  $('.sideDog')[0].style.cssText = 'animation-duration: 6s;'
                                  +'-webkit-animation-duration: 6s;'
  countDown()
  // 面板初始化 
  $('.bigBox0')[0].style.display = "block"
  $('.drop-goal span')[0].innerHTML = GOAL
  $('.rank-page')[0].style.display = "none"
  $(".container")[0].style.display="none"
  $('.audio')[0].play()
  $(".questionPage")[0].style.display="block"
  interval = setInterval(countDown, 1000)
  nextQ()
}

// 绑定点击答案监听器
$('.answers')[0].addEventListener('click', checkAnwser)
function checkAnwser (e) {
    if (e.target.nodeName === 'LI' || e.target.nodeName === 'UL' || e.target.className === 'answers') return
    var a = e.target.parentNode.dataset.a // 取得预存的答案值
    if(a === questions[CURRENT_Q].true) { // 与正确答案进行比较
      GOAL++  // 答对加一分
    }
    e.target.parentNode.className = 'active'
    if (CURRENT_Q !== 9){
      CURRENT_Q++
      setTimeout(nextQ, 200)
    }
    else {
      _czc.push(["_trackEvent",'结果页', '用时', null, TIME]);
      showResult()
    }// 跳转结果页，计算总分等
}

// 下一道题
var nextQ = function () {
    // 这里我就没改了，自己对着上面的思路改改
    $('.pageNumber span')[0].innerHTML = CURRENT_Q + 1
    $(".dialogUp p")[0].innerHTML = questions[CURRENT_Q].problem
    $(".answers ul li:nth-child(1) div")[0].innerHTML = questions[CURRENT_Q].ans1
    $(".answers ul li:nth-child(1)")[0].dataset.a = questions[CURRENT_Q].ans1
    $(".answers ul li:nth-child(2) div")[0].innerHTML = questions[CURRENT_Q].ans2
    $(".answers ul li:nth-child(2)")[0].dataset.a = questions[CURRENT_Q].ans2
    // 去掉上一题的颜色
    var activeEl = $(".answers .active")[0]
    activeEl && (activeEl.className = "")
    if (!questions[CURRENT_Q].ans3)
    {
      $(".answers ul li:nth-child(3)")[0].style.opacity = "0"
    } else {
      $(".answers ul li:nth-child(3)")[0].style.opacity = "1"
      $(".answers ul li:nth-child(3) span")[0].className = "answer3"
      $(".answers ul li:nth-child(3) div")[0].innerHTML = questions[CURRENT_Q].ans3
      $(".answers ul li:nth-child(3)")[0].dataset.a = questions[CURRENT_Q].ans3
    }
}


$('.home-button img')[0].addEventListener('click', startQuestion)

 $('.button-wrapper img')[2].addEventListener('click',function () {'偷看答案'    //偷看答案
  _czc.push(["_trackEvent",'结果页按钮', '点击', '偷看答案']);
  window.history.pushState(null, null, '/iKonw华科——扫码关注')
  $('.questionPage')[0].style.display = "none"
  $('.iKnow-page')[0].style.display = "block"
  window.onpopstate = function () {
    $('.questionPage')[0].style.display = "block"
    $('.iKnow-page')[0].style.display = "none"
  }
})

$('.share-page')[0].addEventListener('click',function () {              //分享狗的触发事件
  $('.share-page')[0].style.display = "none"
})

$('.button-wrapper img')[1].addEventListener('click',function () {      //分享页面
  _czc.push(["_trackEvent",'结果页按钮', '点击', '分享好友']);
  $('.share-page')[0].style.display = "block"
})

$('.button-wrapper img')[0].addEventListener('click',function () {     //再战一次
  _czc.push(["_trackEvent",'结果页按钮', '点击', '再战一次']);
  clearInterval(interval)
  randomQuestions()
  $('.audio')[0].currentTime = 0
  // startQuestion()
  $('.container')[0].style.display = 'block'
  $('.questionPage')[0].style.display = 'none'
})

// 切换音乐
$('.cd-control')[0].addEventListener('click', function () {
  if($('.audio')[0].paused) {
    $('.audio')[0].play()
    $('.cd-control')[0].className = 'cd-control play'
  }
  else {
    $('.audio')[0].pause()
    $('.cd-control')[0].className = 'cd-control'
  }
})
function showResult () {
  // 站长统计
  if (GOAL < 4) rank = 1
  else if (GOAL < 7) rank = 2
  else if (GOAL < 9) rank = 3
  else rank = 4
  _czc.push(['_trackEvent', '结果页', '得分', '' + GOAL + ' ' + rank])
  $('.drop-card')[0].style.backgroundImage = 'url(./static/picture/result_' + rank +'_picture@2x.png)'
  $('.drop-summary')[0].innerHTML = endPage[rank-1].summary
  $('.drop-detail-one')[0].innerHTML = endPage[rank-1].detail[0]
  $('.drop-detail-two')[0].innerHTML = endPage[rank-1].detail[1]
  $('.bigBox0')[0].style.display = "none"
  $('.drop-goal span')[0].innerHTML = GOAL
  $('.rank-page')[0].style.display = "block"
  var title
  if(GOAL < 7) {
    title = "在老司机测试中只答对了"+GOAL+"题，再也不敢自称华科老司机了。"
  }
  else if (GOAL < 9) {
    title = "在老司机测试中答对了"+GOAL+"题，离华科老司机只有一步之遥了。"
  }
  else {
    title = "在老司机测试中答对了"+GOAL+"题，华科老司机独孤求败。"
  }
  document.title = title
  wx.onMenuShareTimeline({
    title: title, // 分享标题
    link: shareLink, // 分享链接
    imgUrl: 'http://weixin.bigtech.cc/iknowhustod/static/picture/share_pic.jpg', // 分享图标
    success: function () { 
    },
    cancel: function () { 
    }
  })
  wx.onMenuShareAppMessage({
    title: title, // 分享标题
    desc: '这份华科老司机测试题，答对一半算我输！', // 分享描述
    link: shareLink, // 分享链接
    imgUrl: 'http://weixin.bigtech.cc/iknowhustod/static/picture/share_pic.jpg', // 分享图标
    success: function () { 
    },
    cancel: function () { 
    }
  });
  // if(/ip(hone|od|ad)/i.test(navigator.userAgent)) {
  //   var iframe = document.createElement('iframe')
  //   iframe.src = '../static/picture/share_pic.jpg'
  //   iframe.style.display = "none"
  //   iframe.onload = function () {
  //     setTimeout(function () {
  //       iframe.remove()
  //     },9)
  //   }
  //   document.body.appendChild(iframe)
  // }
}

function countDown () {
  var time = TIME < 10 ? '0' + TIME : TIME
  $('.count-down span')[0].innerHTML = time
  TIME --
  if (TIME === 0) {
    showResult()
  }
  if (TIME < 10) {
    $('.count-down')[0].className = 'count-down animated bounce infinite'
    $('.sideDog')[0].style.cssText = 'animation-duration: 1s;'
                                  +'-webkit-animation-duration: 1s;'
  }
}
