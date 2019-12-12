setlocal
SET ANDROID_HOME=D:\app\android_studio
SET JAVA_PATH=D:\Program Files\Java\jdk1.8.0_212\bin
SET ANDROID_SDK_ROOT=D:\app\android_studio\platform-tools\systrace\catapult\devil\devil\android\sdk


SET PATH=%PATH%;%JAVA_PATH%;%ANDROID_SDK_ROOT%

cordova build android
rem cordova build android --release

"D:\Program Files\Java\jdk1.8.0_212\bin\jarsigner" -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore keys.keystore .\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk djerom_key
"D:\app\android_studio\build-tools\29.0.0\zipalign.exe" -f -v 4 .\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk .\platforms\android\app\build\outputs\apk\release\signed.apk

endlocal