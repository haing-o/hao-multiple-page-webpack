export default {
  commonNum: 3
}

var bottomTemplate = `<div class="index_footer">
<div class="footer_tab">
    <ul class="footer_tab_container">
        <li class="footer_tab_list">
            <div target="_blank" class="footer_tab_title">首页/</div>
            <a href="../Home/Index.html" target="_blank" class="footer_tab_wrap">首页</a>
            <a href="../Schedule/Schedule.html" target="_blank" class="footer_tab_wrap">赛程</a>
            <a href="../Live/Live.html" target="_blank" class="footer_tab_wrap">直播</a>
            <a href="../Author/Author.html" target="_blank" class="footer_tab_wrap">主播</a>
        </li>
        <div>
            <li class="footer_tab_list">
                <div class="footer_tab_title">个人信息 /</div>
                <a :href="token!='' ? '../Member/AccountManage.html':'../Member/Login.html?index=0'"
                    target="_blank" class="footer_tab_wrap">账号管理</a>
                <a :href="token!='' ? '../Member/AssetRecord.html':'../Member/Login.html?index=0'"
                    target="_blank" class="footer_tab_wrap">资产纪录</a>
                <a :href="token!='' ? '../Member/ShieldList.html':'../Member/Login.html?index=0'"
                    target="_blank" class="footer_tab_wrap">屏蔽名单</a>
            </li>
            <li class="footer_tab_list">
                <div class="footer_tab_title">订阅片柜/</div>
                <a :href="token!='' ? '../Member/MySubscription.html':'../Member/Login.html?index=0'"
                    target="_blank" class="footer_tab_wrap">我的关注</a>
                <a :href="token!='' ? '../Member/MyCollection.html':'../Member/Login.html?index=0'"
                    target="_blank" class="footer_tab_wrap">我的收藏</a>
                <a :href="token!='' ? '../Member/ViewRecord.html':'../Member/Login.html?index=0'"
                    target="_blank" class="footer_tab_wrap">观看纪录</a>
            </li>
            <li class="footer_tab_list">
                <div class="footer_tab_title">主播设置/</div>
                <a href="../AppDownloadPage/NewComerCourse.html"
                    target="_blank" class="footer_tab_wrap">新手主播在路上</a>
                <a href="../AppDownloadPage/LiveCourse.html"
                    target="_blank" class="footer_tab_wrap">567直播教程</a>
            </li>
        </div>
    </ul>
</div>
<div class="footer_about">
    <div class="footer_about_info">
        <a>567直播版权所有©567b.com</a><span>｜</span>
        <a>关于我们</a><span>｜</span>
        <a href="../Member/agreement.html?type=1" target="_blank">用户服务协议</a><span>｜</span>
        <a href="../Member/agreement.html?type=2" target="_blank">隐私政策</a><span>｜</span>
        <a href="../Member/agreement.html?type=3" target="_blank">直播条款</a><span>｜</span>
        <a>官方邮箱 official@567b.com</a><span>｜</span>
    </div>
    <div class="footer_about_live">567直播,直播吧,CCTV5在线直播,NBA直播,NBA直播吧,足球直播</div>
    <div class="footer_about_introduce">
        567直播是一家致力於推廣賽事直播與視頻，您在使用我们的服务时，必须遵守所有适用当地国家法律和国际法律。特别声明：本站所有直播均来自互联网，本站不从事任何经营业务，仅为体育爱好者提供免费赛事。</div>
</div>
</div>
<div class="footer_about">
    <div class="footer_about_info">
        <a>567直播版权所有©567b.com</a><span>｜</span>
        <a>关于我们</a><span>｜</span>
        <a href="../Member/agreement.html?type=1" target="_blank">用户服务协议</a><span>｜</span>
        <a href="../Member/agreement.html?type=2" target="_blank">隐私政策</a><span>｜</span>
        <a href="../Member/agreement.html?type=3" target="_blank">直播条款</a><span>｜</span>
        <a>官方邮箱 official@567b.com</a><span>｜</span>
    </div>
    <div class="footer_about_live">567直播,直播吧,CCTV5在线直播,NBA直播,NBA直播吧,足球直播</div>
    <div class="footer_about_introduce">
        567直播是一家致力於推廣賽事直播與視頻，您在使用我们的服务时，必须遵守所有适用当地国家法律和国际法律。特别声明：本站所有直播均来自互联网，本站不从事任何经营业务，仅为体育爱好者提供免费赛事。</div>
</div>
</div>
<div class="footer_about">
    <div class="footer_about_info">
        <a>567直播版权所有©567b.com</a><span>｜</span>
        <a>关于我们</a><span>｜</span>
        <a href="../Member/agreement.html?type=1" target="_blank">用户服务协议</a><span>｜</span>
        <a href="../Member/agreement.html?type=2" target="_blank">隐私政策</a><span>｜</span>
        <a href="../Member/agreement.html?type=3" target="_blank">直播条款</a><span>｜</span>
        <a>官方邮箱 official@567b.com</a><span>｜</span>
    </div>
    <div class="footer_about_live">567直播,直播吧,CCTV5在线直播,NBA直播,NBA直播吧,足球直播</div>
    <div class="footer_about_introduce">
        567直播是一家致力於推廣賽事直播與視頻，您在使用我们的服务时，必须遵守所有适用当地国家法律和国际法律。特别声明：本站所有直播均来自互联网，本站不从事任何经营业务，仅为体育爱好者提供免费赛事。</div>
</div>
</div>
<div class="footer_about">
    <div class="footer_about_info">
        <a>567直播版权所有©567b.com</a><span>｜</span>
        <a>关于我们</a><span>｜</span>
        <a href="../Member/agreement.html?type=1" target="_blank">用户服务协议</a><span>｜</span>
        <a href="../Member/agreement.html?type=2" target="_blank">隐私政策</a><span>｜</span>
        <a href="../Member/agreement.html?type=3" target="_blank">直播条款</a><span>｜</span>
        <a>官方邮箱 official@567b.com</a><span>｜</span>
    </div>
    <div class="footer_about_live">567直播,直播吧,CCTV5在线直播,NBA直播,NBA直播吧,足球直播</div>
    <div class="footer_about_introduce">
        567直播是一家致力於推廣賽事直播與視頻，您在使用我们的服务时，必须遵守所有适用当地国家法律和国际法律。特别声明：本站所有直播均来自互联网，本站不从事任何经营业务，仅为体育爱好者提供免费赛事。</div>
</div>
</div>
<div class="footer_about">
    <div class="footer_about_info">
        <a>567直播版权所有©567b.com</a><span>｜</span>
        <a>关于我们</a><span>｜</span>
        <a href="../Member/agreement.html?type=1" target="_blank">用户服务协议</a><span>｜</span>
        <a href="../Member/agreement.html?type=2" target="_blank">隐私政策</a><span>｜</span>
        <a href="../Member/agreement.html?type=3" target="_blank">直播条款</a><span>｜</span>
        <a>官方邮箱 official@567b.com</a><span>｜</span>
    </div>
    <div class="footer_about_live">567直播,直播吧,CCTV5在线直播,NBA直播,NBA直播吧,足球直播</div>
    <div class="footer_about_introduce">
        567直播是一家致力於推廣賽事直播與視頻，您在使用我们的服务时，必须遵守所有适用当地国家法律和国际法律。特别声明：本站所有直播均来自互联网，本站不从事任何经营业务，仅为体育爱好者提供免费赛事。</div>
</div>
</div>
`;

