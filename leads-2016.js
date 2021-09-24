/*  Scripts for /leads/

    What you can find in this file [listed in the order they appear]

		1.) smooth scroll
		2.) workLink focus
		3.) tab scroll
		4.) animations
		5.) work button on scroll
		6.) Marketo validator

 */


/* 1.)
// Smooth scroll/
*/

$('a[href^="#"]').click(function(){
	var that = this;
	$('html, body').animate({
					scrollTop: $( $(that).attr('href') ).offset().top
	}, 400);
	return false;
});


/* 2.)
// Smooth scroll/
*/

$('.workLink').click(function(){
    $('#FirstName').focus();
});


/* 3.)
// Tab scroll /
*/

$('button[data-toggle="tab"]').on("shown.bs.tab", function(e){
	var that = e.target;
	$('html, body').animate({
					scrollTop: $( $(that).attr('data-target') ).offset().top -25
	}, 400);
	return false;
});


/* 4.)
// Animations  /
*/

$('.col-lg-10').delay(1900).queue(function() {
                           $(this).addClass("slideExpandUp");
                           $(this).dequeue();
                       });



$(window).scroll(function() {
		$('#quality').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideUp");
			}
		});
	});

$(window).scroll(function() {
		$('#flexibility').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).delay(500).queue(function() {
                           $(this).addClass("slideUp");
                           $(this).dequeue();
						     });
			}
		});
	});



$(window).scroll(function() {
		$('#roi').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).delay(1000).queue(function() {
                           $(this).addClass("slideUp");
                           $(this).dequeue();
						     });
			}
		});
	});


$(window).scroll(function() {
		$('#icon1').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideRight");
			}
		});
	});

$(window).scroll(function() {
		$('#icon2').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).delay(500).queue(function() {
                           $(this).addClass("bigEntrance");
                           $(this).dequeue();
						     });
			}
		});
	});



$(window).scroll(function() {
		$('#icon3').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).delay(1000).queue(function() {
                           $(this).addClass("slideLeft");
                           $(this).dequeue();
						     });
			}
		});
	});




$(window).scroll(function() {
		$('#browser1').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("bigEntrance");
			}
		});
	});

$(window).scroll(function() {
		$('#browser2').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).delay(1000).queue(function() {
                           $(this).addClass("slideRight");
                           $(this).dequeue();
						     });
			}
		});
	});



$(window).scroll(function() {
		$('#browser3').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).delay(1500).queue(function() {
                           $(this).addClass("slideLeft");
                           $(this).dequeue();
						     });
			}
		});
	});



$(window).scroll(function() {
		$('#whaticons').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+300) {
				$(this).addClass("slideLeft");
			}
		});
	});


	$(window).scroll(function() {
		$('#letstalk').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("bigEntrance");
			}
		});
	});


/* 5.)
// Work button on scroll /
*/



// Only enable if the document has a long scroll bar
// Note the window height + offset
if ( ($(window).height() + 1200) < $(document).height() ) {
    $('#top-link-block').removeClass('hidden').affix({
        // how far to scroll down before link "slides" into view
        offset: {top:1200}
    });
}







/* 6.)
		// marketo validator /
		*/


var marketo = function () {

	// added from function defined on landing page at: http://info.buyerzone.com/InboundRegistrationPage.html
    function mktoGetForm () {
        // get id of marketo form
        var curForm = $('form.lpeRegForm').attr('id');
        return document.getElementsByName(curForm);
    }

    var profiling = {
        isEnabled: false,
        numberOfProfilingFields: 3,
        alwaysShowFields: [ 'mktDummyEntry']
    };


    /* Copyright (c) 2006-2007, Marketo, Inc. All rights reserved. */
    var Mkto = {
        kv: [],
        kvUrl: null,
        kvReferrer: null,
        pageSubmitted: false
    };

    Mkto.parseUrlParams = function (url) {
        var query;
        var q = url.indexOf('?');
        if (q > - 1) {
            query = url.substr(q + 1);
            var pairs = query.split("&");
            for (var i = 0; i < pairs.length; i ++) {
                var kvArray = pairs[i].split("=");
                Mkto.kv[kvArray[0]] = kvArray[1];
            }
        }
        return Mkto.kv;
    }

    Mkto.getValue = function (key, kv) {
        if (typeof Mkto.kv[key] == 'string') {
            return decodeURIComponent(Mkto.kv[key].replace(/\+/g, ' '));
        } else {
            return "not found";
        }
    }

    Mkto.getReferrerParam = function (key) {
        return Mkto.getValue(key, Mkto.kvReferrer);
    }

    Mkto.getUrlParam = function (key) {
        return Mkto.getValue(key, Mkto.kvUrl);
    }

    Mkto.formSubmit = function (elt) {
        for (var i = 0; i < elt.elements.length; i ++) {
            Mkto.clearError(elt.elements[i]);
        }
        var submitButton = null;
        var allowSubmit = true;

        // if there's Google recaptcha validation check to see if there's a response
        var recaptcha = document.getElementById('g-recaptcha-response');
        if (recaptcha) {
            allowSubmit = recaptcha.value !== "";
            recaptcha.parentNode.parentNode.nextElementSibling.style.display = recaptcha.value !== "" ? 'none' : 'block';
            document.querySelector('.g-recaptcha').firstChild.firstChild.firstChild.style.border = recaptcha.value !== "" ? 'none' : '4px solid #FA593A';
        }

        for (var i = 0; i < elt.elements.length; i ++) {
            var fld = elt.elements[i];
            if (! Mkto.validateField(fld)) {
                allowSubmit = false;
            }
            if (fld.name == "cr") {
                fld.value = Mkto.getUrlParam("cr");
            }
            if (fld.name == "kw") {
                fld.value = Mkto.getUrlParam("kw");
            }
            if (fld.name == "searchstr") {
                fld.value = Mkto.getReferrerParam("q");
            }
            if (fld.name == "submitButton") {
                submitButton = fld;
            }
            if (fld.type == 'checkbox') {
                var hidden = null;

                // Try and find existing hidden input field that we might have created
                // on an earlier trip through formSubmit.
                var related = document.getElementsByName(fld.name);
                for (var j = 0; j < related.length; j ++) {
                    if (related[j].type == 'hidden') {
                        hidden = related[j];
                        break;
                    }
                }

                if (fld.checked) {
                    // If the field is checked, remove any lingering hidden field that
                    // may have been created on a past form post which was aborted (perhaps
                    // due to validation failure, etc).
                    if (hidden) {
                        hidden.parentNode.removeChild(hidden);
                    }
                }
                // Else, create hidden input field with value 0 for the unchecked checkbox as
                // unchecked checkboxes are not sent in form POST.
                else if (! hidden) {
                    try {
                        // This form of createElement only works on IE and is needed to get the
                        // NAME attribute to stick as IE can't set name attr with setAttribute.
                        hidden = document.createElement("<input type='hidden' name='" + fld.name + "' value='0'>");
                    }
                    catch (e) {
                        // This createElement is for regular DOM implementations.
                        hidden = document.createElement("input");
                        hidden.setAttribute('type', 'hidden');
                        hidden.setAttribute('name', fld.name);
                        hidden.setAttribute('value', 0);
                    }
                    elt.appendChild(hidden);
                }
            }
        }
        if (allowSubmit) {
            if (! Mkto.pageSubmitted) {
                Mkto.pageSubmitted = true;
                elt.submit();
                if (submitButton != null) {
                    submitButton.disabled = true;
                    if (submitButton.value != 'Descargar') {
                        submitButton.value = "Please Wait";
                    }
                }
            } else {
                allowSubmit = false;
            }
        }
        return allowSubmit;
    }

    Mkto.validateField = function (fld) {
        var valid = true;
        var msg = null;
        var required = (fld.className.indexOf('mktFReq') != - 1);
        if (typeof fieldValidate == 'function') {
            valid = fieldValidate(fld);
        }
        if (valid == 'skip') {
            valid = true;
        } else {
            var label = null;
            try {
                label = fld.parentNode.parentNode.getElementsByTagName('label')[0].innerHTML;
            } catch (e) {
            }
            if (valid === true) {
                if (required) {
                    if ((fld.tagName.toUpperCase() == 'INPUT') || (fld.tagName.toUpperCase() == 'TEXTAREA')) {
                        // #1222 Remove white spaces before checking for length.
                        if (fld.value.replace(/^\s+/g, "").length == 0) {
                            msg = "Required";
                            try {
                                msg = getRequiredFieldMessage(fld, label);
                            } catch (e) {
                            }
                            Mkto.setError(fld, msg);
                            valid = false;
                        }
                    } else if (fld.tagName.toUpperCase() == 'SELECT') {
                        if (fld.selectedIndex == 0) {
                            msg = "Please select a value for this field";
                            try {
                                msg = getRequiredFieldMessage(fld, label);
                            } catch (e) {
                            }
                            Mkto.setError(fld, msg);
                            valid = false;
                        }
                    }
                }
            }
            if (valid && required && (fld.className.indexOf('mktFormEmail') != - 1)) {
                var emailValid = /^[a-zA-Z0-9_!&=`~#%'\/\$\^\|\+\?\{\}-]+(\.[a-zA-Z0-9_!&=`~#%'\/\$\^\|\+\?\{\}-]+)*@[a-zA-Z0-9]([a-zA-Z0-9_-])*(\.[a-zA-Z0-9][a-zA-Z0-9_-]*)+$/;
                if (! emailValid.test(fld.value)) {
                    msg = "Please enter a valid email address";
                    try {
                        msg = getEmailInvalidMessage(fld, label);
                    } catch (e) {
                    }
                    Mkto.setError(fld, msg);
                    valid = false;
                }
            }
            if (valid && required && (fld.className.indexOf('mktFormPhone') != - 1)) {
                var phoneValidChars = /^[0-9()+. \t-]+$/;

                var digCount = 0;
                var digits = "0123456789";
                for (var ix = 0; ix < fld.value.length; ix ++) {
                    if (digits.indexOf(fld.value.charAt(ix)) != - 1) {
                        digCount ++;
                    }
                }

                if (! phoneValidChars.test(fld.value) || (digCount < 8) || (digCount > 15)) {
                    msg = "Please enter a valid telephone number";
                    try {
                        msg = getTelephoneInvalidMessage(fld, label);
                    } catch (e) {
                    }
                    Mkto.setError(fld, msg);
                    valid = false;
                }
            }
        }
        return valid;
    }

    Mkto.getMessage = function (fld) {
        var msgContainer = fld.nextSibling;
        while (msgContainer && msgContainer.nodeType != 1) {
            msgContainer = msgContainer.nextSibling;
        }
        return msgContainer;
    }

    Mkto.addListener = function (elt, eventName, handler) {
        if (window.addEventListener) {
            elt.addEventListener(eventName, handler, false);
        } else if (window.attachEvent) {
            elt.attachEvent("on" + eventName, handler);
        }
    }

    Mkto.clearError = function (fld) {
        var loc = fld.parentNode.className.indexOf(" mktError");
        if (loc != - 1) {
            fld.parentNode.className = fld.parentNode.className.substr(0, loc);
            fld.parentNode.parentNode.title = "";
            var msgContainer = Mkto.getMessage(fld);
            msgContainer.innerHTML = "";
        }
    }

    Mkto.clearOnClick = function (e) {
        var fld = this;
        if (fld == window) {
            fld = e.srcElement;
        }
        Mkto.clearError(fld);
    }

    Mkto.setError = function (fld, message) {
        fld.parentNode.className += " mktError";
        fld.parentNode.parentNode.title = message;
        var msgContainer = Mkto.getMessage(fld);
        msgContainer.innerHTML = message;
//	  msgContainer.style.left = (fld.parentNode.offsetWidth + 10) + "px";
        Mkto.addListener(fld, 'focus', Mkto.clearOnClick);

		// set or replace a timeout to scroll
		if (window.scroller) {
			clearTimeout(window.scroller);
			console.log('clear timeout');
		}
		window.scroller = setTimeout(function(){
			$('html, body').stop().animate({
				scrollTop: $('span.mktError').eq(0).position().top - 60
			}, 400);
			console.log('set timeout');
		}, 50);

    }

    Mkto.formReset = function (elt) {
        for (var i = 0; i < elt.elements.length; i ++) {
            Mkto.clearError(elt.elements[i]);
        }
        elt.reset();
        return true;
    }

    Mkto.doesOptionMatchValue = function (optionValue, leadValue) {
        var match = false;
        if (leadValue === false) {
            if ((optionValue.toLowerCase() == "no") || (optionValue == "0") || (optionValue.toLowerCase() == "false")) {
                match = true;
            }
        } else if (leadValue === true) {
            if ((optionValue.toLowerCase() == "yes") || (optionValue == "1") || (optionValue.toLowerCase() == "true")) {
                match = true;
            }
        } else if (optionValue == leadValue) {
            match = true;
        }
        return match;
    }

    Mkto.preFillForm = function () {
        var theForm = mktoGetForm();
        if ((theForm) && (typeof mktoPreFillFields != 'undefined') && (mktoPreFillFields)) {
            for (var fld in mktoPreFillFields) {
                if ((mktoPreFillFields[fld] !== null) && theForm[fld] && typeof theForm[fld] == 'object') {
                    var ff = theForm[fld];
                    if (ff.mktoX) {
                        ff.mktoX.prefilled = true;
                    }
                    if ((ff.type == 'text') || (ff.type == 'textarea')) {
                        if (! ff.value) {
                            ff.value = mktoPreFillFields[fld];
                        }
                    } else if (ff.type == 'select-one') {
                        ff.mktoX.prefilled = false;  // it's only prefilled if we find a matching value
                        var required = (ff.className.indexOf('mktFReq') != - 1);
                        if ((ff.selectedIndex == 0) && (! ff.multiple)) {
                            for (var ix = 0; ix < ff.options.length; ix ++) {
                                if (Mkto.doesOptionMatchValue(ff.options[ix].value, mktoPreFillFields[fld])) {
                                    ff.selectedIndex = ix;
                                    if (ff.mktoX) {
                                        if ((ix != 0) || (! required)) {
                                            ff.mktoX.prefilled = true;
                                        }
                                    }
                                    break;
                                }
                            }

                            if (ff.mktoX.prefilled == false) { // have lead data but it does not match the select values
                                // replace the select list with a text box
                                var parentNode = ff.parentNode;
                                var textBox = null;
                                var classes = "mktFormText mktFormString";
                                if (required) {
                                    classes += " mktFReq";
                                }
                                try {
                                    // This form of createElement only works on IE and is needed to get the
                                    // NAME attribute to stick as IE can't set name attr with setAttribute.
                                    textBox = document.createElement("<input type='text' name='" + ff.name + "' value='" + mktoPreFillFields[fld] + "'class='" + classes + "'>");
                                }
                                catch (e) {
                                    // This createElement is for regular DOM implementations.
                                    textBox = document.createElement("input");
                                    textBox.setAttribute('type', 'text');
                                    textBox.setAttribute('name', ff.name);
                                    textBox.setAttribute('value', mktoPreFillFields[fld]);
                                    textBox.setAttribute('class', classes);
                                }
                                if (textBox.name == ff.name) {
                                    textBox.mktoX = {};
                                    textBox.mktoX.prefilled = true;
                                    parentNode.removeChild(ff);
                                    parentNode.appendChild(textBox);
                                }
                            }

                        }
                    } else if (ff.type == 'checkbox') {
                        if (mktoPreFillFields[fld]) {
                            ff.setAttribute("checked", "checked");
                        } else {
                            ff.removeAttribute("checked");
                        }
                    } else if (! ff.type && ff.length) {
                        // radio buttons
                        var ff = theForm[fld];
                        // all entries are either filled or unfilled
                        var radioFilled = false;
                        for (var ix = 0; ix < ff.length; ix ++) {
                            ff[ix].mktoX.prefilled = false;  // it's only prefilled if we find a matching value
                        }
                        for (var ix = 0; ix < ff.length; ix ++) {
                            var preValue = mktoPreFillFields[fld];
                            if (preValue === true) {
                                preValue = 'Yes';
                            } else if (preValue === false) {
                                preValue = "No";
                            }
                            if (ff[ix].value == preValue) {
                                ff[ix].setAttribute("checked", "checked");
                                radioFilled = true;
                                break;
                            }
                        }
                        if (radioFilled) {
                            for (var ix = 0; ix < ff.length; ix ++) {
                                ff[ix].mktoX.prefilled = true;
                            }
                        }
                    }
                }
            }
        }
    }

    Mkto.initForm = function () {
        var theForm = mktoGetForm();
        for (var ix = 0; ix < theForm.length; ix ++) {
            if (theForm[ix].name == "submitButton") {
                break;
            }
            theForm[ix].mktoX = {prefilled: false};
        }
    }
    Mkto.processProfiling = function () {
        var theForm = mktoGetForm();
        if (profiling.isEnabled) {
            var maxShownFields = profiling.numberOfProfilingFields;
            var shownFields = 0;
            var fieldsToRemove = [];
            var lastFieldName = "";
            for (var ix = 0; ix < theForm.length; ix ++) {
                var ff = theForm[ix];
                if (ff.type == "hidden") {
                    continue;
                }
                if (ff.type == "radio" && ff.name == lastFieldName) {
                    continue; // count whole set of radio buttons as one control
                }
                if (ff.name == "submitButton") {
                    break;
                }
                if (ff.name == "resetButton") {
                    break;
                }
                var required = (ff.className.indexOf('mktFReq') != - 1);
                // bork 9112 MktLPFormTmplWidget->getHtml() appends '[]' to field name
                // for field type of "select-multiple". That makes inconsistency with original
                // field name when checking for alwaysShowFields.
                var fieldNameWithoutDeco = Mkto.getFieldNameWithoutDeco(ff);
                if (profiling.alwaysShowFields.indexOf(fieldNameWithoutDeco) == - 1) {
                    if (ff.mktoX.prefilled) {
                        Mkto.hideField(ff);
                        fieldsToRemove.push(ff);
                    } else if (shownFields < maxShownFields) {
                        shownFields ++;
                    } else {
                        Mkto.hideField(ff);
                        fieldsToRemove.push(ff);
                    }
                }
                lastFieldName = ff.name;
            }
            for (var ix = fieldsToRemove.length; ix > 0; ix --) {
                var field = fieldsToRemove[ix - 1];
                field.parentNode.removeChild(field);
            }
        }
    }
    /**
     * remove field name deco for multiple select field. mulit-select fieldName is appended
     * '[]' to its original field name.
     * @param {Object} from field object
     * @return {String} original field name
     */
    Mkto.getFieldNameWithoutDeco = function (ff) {
        var retVal = ff.name;
        if (ff.type && (ff.type == 'select-multiple')) {
            if (ff.name.indexOf('[]') != - 1) {
                retVal = ff.name.slice(0, ff.name.indexOf('[]'));
            }
        }
        return  retVal;
    };

    Mkto.hideField = function (field) {
        var elt = field;
        while (elt.parentNode && elt.tagName.toLowerCase() != "li") {
            elt = elt.parentNode;
        }
        if (elt.tagName.toLowerCase() == "li") {
            elt.style.display = "none"; // hide the whole li
        }
    }

    if (! Array.prototype.indexOf) {
        Array.prototype.indexOf = function (item, startIndex) {
            var len = this.length;
            if (startIndex == null)
                startIndex = 0;
            else if (startIndex < 0) {
                startIndex += len;
                if (startIndex < 0)
                    startIndex = 0;
            }
            for (var i = startIndex; i < len; i ++) {
                var val = this[i] || this.charAt && this.charAt(i);
                if (val == item)
                    return i;
            }
            return - 1;
        };
    }

    Mkto.init = function () {
        try {
            Mkto.initForm();
            Mkto.preFillForm();
            Mkto.processProfiling();
        } catch (e) {
        }
        Mkto.kvUrl = Mkto.parseUrlParams(window.location.search);
        Mkto.kvReferrer = Mkto.parseUrlParams(document.referrer);
    }

    Mkto.init();

    window.formSubmit = function (elt) {
        return Mkto.formSubmit(elt);
    }
    window.formReset = function (elt) {
        return Mkto.formReset(elt);
    }
    window.validateMktoFld = function (elt) {
        return Mkto.validateField(elt);
    }
    function fieldValidate (field) {
        return true;
    }

    function getRequiredFieldMessage (domElement, label) {
        return "Required";
    }

    function getTelephoneInvalidMessage (domElement, label) {
        return "Please enter a valid telephone number";
    }

    function getEmailInvalidMessage (domElement, label) {
        return "Please enter a valid email address";
    }
};

/* init marketo functionality when document is ready */
$(marketo)
/**
 * Created by Dylan Williams
 * Date: 7/7/14
 */

//checks for presence of hidden field value
//for catching spam bots before sending form data off to marketo
//will eventually <i>probably</i> send possible spam to audit url
$('.lpeRegForm').submit(function(e){
    e.preventDefault();
    filter(this);
});

window.filter=function filter(form)
{
    var thisForm=$(form);
    var filterVal=$(thisForm).find('.sbfContainer .sbf').val();//spam bot filter value
    if(filterVal!=='')
    {
        //fail quietly or send to spam auditor
        auditFormSubmit(form);
        alert('A hidden filter field has been set to:\n'+filterVal
            +'\nPlease remove input from the hidden field labelled "sbf" to submit this form.');
        return false;
    }
    else
    {
        var sbfContainer=$(thisForm).find('.sbfContainer').remove();//pop the spamfilter container into a local var, get it out of the form so it doesn't send an empty filter value to marketo
        var res=formSubmit(thisForm[0]);//try and submit the form, without the filter field :)
        if(!res)//form submission did not happen
        {
            $(thisForm).append(sbfContainer);//put the spam filter container back into the form
        }
        return res;
    }
}
function auditFormSubmit(form)
{
    //form.action=audit post url;//changes the form url to the audit url
    //formSubmit(form);//send through regular validation process with new url to submit to
}
