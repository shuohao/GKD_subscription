import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  deprecatedKeys: [0, 6],
  groups: [
    {
      key: 1,
      name: '活动弹窗',
      desc: '关闭各种活动弹窗信息',
      quickFind: true,
      rules: [
        {
          key: 1,
          name: '一刻相册推广弹窗',
          activityIds: 'com.baidu.netdisk.ui.MainActivity',
          matches:
            '[id="com.baidu.netdisk:id/cl_content"] - [id="com.baidu.netdisk:id/iv_close"]',
          snapshotUrls: ['https://i.gkd.li/i/12642505'],
        },
        {
          key: 2,
          name: 'VIP弹窗',
          activityIds: 'com.baidu.netdisk.business.guide.dialog.lifeproduct.', // LifeV10GuideDialog
          matches:
            '[id="com.baidu.netdisk:id/view_content_bg2"] - [id="com.baidu.netdisk:id/iv_close"]',
          snapshotUrls: ['https://i.gkd.li/i/12923937'],
        },
      ],
    },
    {
      key: 2,
      name: '首页banner广告',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      quickFind: true,
      rules: '[id="com.baidu.netdisk:id/banner_item_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12706544',
    },
    {
      key: 3,
      name: '首页热门广告',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      quickFind: true,
      rules:
        '[id="com.baidu.netdisk:id/vf_content"] + [id="com.baidu.netdisk:id/close"]',
      snapshotUrls: 'https://i.gkd.li/i/12706544',
    },
    {
      key: 4,
      name: '我的页面-限时福利',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      quickFind: true,
      rules: '@TextView + [text="专属福利"]',
      snapshotUrls: 'https://i.gkd.li/i/12706549',
    },
    {
      key: 5,
      name: '相册页面-激活无限空间弹窗',
      quickFind: true,
      activityIds:
        'com.baidu.netdisk.cloudimage.ui.album.AlbumGuideOneImageDialog',
      rules:
        '@ImageView[id="com.baidu.netdisk:id/close_btn"] + ImageView[id="com.baidu.netdisk:id/bg_image"]',
      snapshotUrls: 'https://i.gkd.li/i/12648987',
    },
    {
      key: 7,
      name: '续费横幅提示',
      desc: '关闭续费横幅提示',
      quickFind: true,
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: [
        {
          matches: 'View[desc="续费"] + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12924036',
        },
      ],
    },
    {
      key: 8,
      name: '开启消息通知弹窗',
      desc: '自动点击关闭',
      quickFind: true,
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: 'ImageView[id="com.baidu.netdisk:id/dialog_cancel"]', //单独使用ID会导致误触（例如删除确认https://i.gkd.li/i/13069049）
      snapshotUrls: ['https://i.gkd.li/i/12923936'],
    },
    {
      key: 9,
      name: '评价提示',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="喜欢“百度网盘”吗？"] +n [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/i/14317054',
    },
    {
      key: 10,
      name: '看视频免费享极速下载弹窗',
      desc: '自动点击x按钮',
      quickFind: true,
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules:
        'ViewGroup > [id="com.baidu.netdisk:id/background_image"] +n [id="com.baidu.netdisk:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12783106',
    },
    {
      key: 11,
      quickFind: true,
      name: '幸运券包弹窗',
      desc: '自动点击关闭',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: [
        {
          matches:
            '[id="com.baidu.netdisk:id/tv_title"][text^="恭喜获得"] -3 ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13806852',
        },
      ],
    },
    {
      key: 12,
      name: '局部广告-右下角悬浮卡片',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.baidu.netdisk.ui.MainActivity',
          matches:
            '[vid="float_btn_close"][clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/470eec82-ed99-4f50-beba-2587e525cfdf',
          snapshotUrls: 'https://i.gkd.li/i/14278618',
        },
      ],
    },
  ],
});
