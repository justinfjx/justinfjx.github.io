var posts=["articles/20220127155456.html","articles/20220504134846.html","articles/20220129085456.html","articles/20250526131427.html","articles/20250428074518.html","articles/20220207091408.html","articles/20220624050047.html","articles/20220129084215.html","articles/20240224122505.html","articles/20220129164049.html","articles/20220129120819.html","articles/20220118085431.html","articles/20220728165315.html","articles/20220221220000.html","articles/20220127153402.html","articles/20220223220000.html","articles/20220225170000.html","articles/20220224132828.html","articles/20231002061040.html","articles/20220218220000.html","articles/20240205075713.html","articles/20220313121353.html","articles/20220728133124.html","articles/20220224224500.html","articles/20211225070726.html","articles/20220113113210.html","articles/20220330081206.html","articles/20220313174500.html","articles/20220126080243.html","articles/20231002060758.html","articles/20220219220000.html","articles/20220220220000.html","articles/20220209080431.html","articles/20220130143422.html","articles/20220214220000.html","articles/20220216220000.html","articles/20220217220000.html","articles/20220209220000.html","articles/20220210220000.html","articles/20220211220000.html","articles/20220212220000.html","articles/20220213220000.html","articles/20220206061653.html","articles/20220207143544.html","articles/20220206061609.html","articles/20220207161400.html","articles/20220713162407.html","articles/20220207170853.html","articles/20240213113941.html","articles/20220127160145.html","articles/20240224121007.html","articles/20220129093812.html","articles/20240205091415.html","articles/20240224124604.html","articles/20220113110556.html","articles/20220121120216.html","articles/20211231062327.html","articles/20220806134515.html","articles/20220222220000.html","articles/20220623124037.html","articles/20231002061047.html","articles/20240221154552.html","articles/20211220155212.html","articles/20211227121848.html","articles/20250519132715.html","articles/20220215220000.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"prompt教程","link":"https://iflux.art/ai/aigc/prompt","avatar":"https://iflux.art/favicon.ico/","descr":"提示词工程知识库"},{"name":"deepwiki","link":"https://deepwiki.com/","avatar":"https://deepwiki.com/apple-icon.png?a4f658907db0ab87","descr":"直接问仓库"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","tag":"前端"},{"name":"iFluxArt","link":"https://iflux.art/","avatar":"https://iflux.art/favicon.ico/","siteshot":"https://raw.githubusercontent.com/justinfjx/images/main/hexo/202504291609252.png","descr":"斐启智境·流韵新生","tag":"链接"},{"name":"河山的技术存档","link":"https://wrm244.gxist.cn","avatar":"https://wrm244.gxist.cn/svg/logo_round.svg","descr":"你好! 我是河山👋","siteshot":"https://raw.githubusercontent.com/justinfjx/images/main/hexo/202505262255290.png","tag":"博客主题蛮好看的！"},{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"GitHub","link":"https://www.github.com","avatar":"https://github.githubassets.com/favicons/favicon.svg","descr":"Build and ship software on a single, collaborative platform"},{"name":"Twikoo","link":"https://twikoo.js.org","avatar":"https://twikoo.js.org/twikoo-logo-mini.png","descr":"一个简洁、安全、免费的静态网站评论系统"},{"name":"netlify","link":"https://www.netlify.com","avatar":"https://www.netlify.com/favicon/icon.svg","descr":"Scale & Ship Faster with a Composable Web Architecture"},{"name":"MongoDB","link":"https://www.mongodb.com","avatar":"https://www.mongodb.com/assets/images/global/favicon.ico","descr":"The World’s Leading Modern Database"},{"name":"开往","link":"https://www.travellings.cn","avatar":"https://www.travellings.cn/assets/travelling-light.png","descr":"友链接力！"},{"name":"51la","link":"https://v6.51.la","avatar":"https://v6.51.la/favicon.ico","descr":"网站数据统计平台"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };