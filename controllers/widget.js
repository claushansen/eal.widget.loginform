var args = arguments[0] || {};

/*
 * Override message if set on alloy markup like:
 * <Widget src="eal.widget.loginform" message="my custom message">
 */
if(args.message){
	$.login_mgs.text = args.message;
}

/*
 * Override hint text on username textfield if set on alloy markup like:
 * <Widget src="eal.widget.loginform" user_hint="Your username">
 */
if(args.user_hint){
	$.tf_username.hintText = args.user_hint;
}

/*
 * Override text on login button if set on alloy markup like:
 * <Widget src="eal.widget.loginform" login_btn_text="Log me in">
 */
if(args.login_btn_text){
	$.btn_login.title = args.login_btn_text;
}

/*
 * Override text on login button if set on alloy markup like:
 * <Widget src="eal.widget.loginform" cancel_btn_text="No way!">
 */
if(args.cancel_btn_text){
	$.btn_cancel.title = args.cancel_btn_text;
}

