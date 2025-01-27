import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.taobao.etao',
  name: '一淘',
  deprecatedKeys: [1],
  groups: [
    {
      key: 2,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: [
            'com.taobao.etao.app.home.view.NewHomeActivity',
            'com.taobao.etao.app.homev4.HomeV4Activity',
          ],
          matches:
            'LinearLayout[childCount=2] > @RelativeLayout[clickable=true][childCount=1] > ImageView[childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/12739581',
            'https://i.gkd.li/i/13670025',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '请求打开系统通知提示信息',
      desc: '自动点击提示信息的x按钮',
      rules: [
        {
          activityIds: ['com.taobao.sns.app.message.MessageActivity'],
          matches:
            '[text^="打开消息通知"] + [text="去开启"] + ImageView[clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/12684278'],
        },
        {
          activityIds: ['com.taobao.etao.mine.MetaXMineActivity'],
          matches:
            '[text^="打开消息通知"] + FrameLayout > [text="去开启"] < FrameLayout + ImageView[clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/12684351'],
        },
      ],
    },
  ],
});
