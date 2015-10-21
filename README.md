# eal.widget.loginform
Titanium alloy login widget i made for project

###Way to use:

* copy or clone the widget into our appcelerator project app/widgets folder. If you don't already have one then create it.
* add it to dependensies in your app/config.json
* Create the Alloy widget markup in your view
```
<Window class="container">
	<Widget src="eal.widget.loginform" id="loginbox"></Widget>
</Window>
```
##Override default text
By adding attributes to the widgets alloy markup you can override the default text easely

Possible atributes are:
* message="my custom message"
* user_hint="Your username"
* login_btn_text="Log me in"
* cancel_btn_text="No way!"

Example markup with alle attributes set
```
<Window class="container">
	<Widget src="eal.widget.loginform" id="loginbox" message="my custom message" user_hint="Your username" login_btn_text="Log me in" cancel_btn_text="No way!"></Widget>
</Window>
```


