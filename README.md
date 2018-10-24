npm install -g ionic@latest
npm install

# 第三步 每次发布时需要反复执行的 生成未签名文件
$ ionic cordova  build android --release --prod 
# 输入密钥库口令 进行签名
$  jarsigner -verbose -keystore ldae.keystore -signedjar ldae_chengdu_app_1.0.apk F:/fuck/ldae_app/platforms/android/build/outputs/apk/android-release-unsigned.apk  LDAE
输入密钥库的密码短语: ldaekey