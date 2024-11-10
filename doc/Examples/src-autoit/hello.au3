;~ C:\Program Files (x86)\AutoIt3

#include <MsgBoxConstants.au3>

; This is my first script
MsgBox($MB_SYSTEMMODAL, "My First Script!", "Hello World!")

;~ Func Example_Func()
;~     Return MsgBox($MB_SYSTEMMODAL, "My Second Script!", "Hello from the functions!")
;~ EndFunc   ;==>Example_Func

;~  Local $hWnd = WinGetHandle("Magnifier ", "")
;~  Local $hWnd = WinGetHandle("[CLASS:Chrome_WidgetWin_1]", "")
;~ WinClose($hWnd)

;~  WinWaitActive("[CLASS:Notepad]", "")


Local $hWnd = WinGetHandle("[CLASS:Notepad]", "")

 ControlSend("[CLASS:Notepad]", "", "[CLASS:RichEditD2DPT; INSTANCE:1]", "This is some text")


;~  Click on control ID 254 in "My Window"

;~ ControlClick("My Window", "", "[ID:254]")