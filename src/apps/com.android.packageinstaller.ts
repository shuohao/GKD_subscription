import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.packageinstaller',
  name: '软件包安装程序',
  groups: [
    {
      key: 1,
      name: '功能类-自动安装应用',
      quickFind: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.android.packageinstaller.PackageInstallerActivity',
          matches: '[text="继续安装"]',
          snapshotUrls: 'https://i.gkd.li/i/13206444',
        },
        {
          key: 1,
          activityIds: [
            'com.android.packageinstaller.NewInstallInstalling',
            'com.android.packageinstaller.InstallSuccess',
            'com.android.packageinstaller.oplus.InstallAppProgress', //一加
          ],
          matches: '[text="完成"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14138123', //activityId: com.android.packageinstaller.InstallSuccess
            'https://i.gkd.li/i/13206476',
            'https://i.gkd.li/i/13766420',
            'https://i.gkd.li/i/13962438',
            'https://i.gkd.li/i/14471881', //一加
          ],
        },
      ],
    },
  ],
});
