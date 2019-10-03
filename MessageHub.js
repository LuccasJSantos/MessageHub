this.MessageHub = function (oView) {
	"use strict";
	
	/*
		title
		message
		additionalInfo
		type
	*/
	
	var MessageType = sap.ui.core.MessageType;
	var Message = sap.ui.core.message.Message;
	var oMessageManager = sap.ui.getCore().getMessageManager();
	
	function getMessage(obj) {
		return new Message({
	        message: obj.title || "Message",
	        additionalText: obj.message || "",
	        description: obj.additionalInfo || "",
	        type: obj.type || MessageType.Information || ""
	    });
	}
	
	function addMessages(messages) {
		if (typeof messages.length !== "undefined") {
			var aMessages = messages.map(function (elt) {
				return getMessage(elt, this.oView);
			}.bind(this));
			
			aMessages.forEach(function (elt) {
				oMessageManager.addMessages(elt);	
			});
			
			return;
		}
		
		var message = getMessage(messages, this.oView);
		oMessageManager.addMessages(message);
	}
	
	function openPopover(settings) {
		var getPopover = function (path) {
			if (!this.messagePopover) {
				this.messagePopover = sap.ui.xmlfragment(this.oView.getId(), path, this);
				this.oView.addDependent(this.messagePopover);
			}
			return this.messagePopover;
		}.bind(this, settings.fragmentPath);
		
		getPopover().openBy(settings.openBy);
	}
	
	if (typeof oView === "undefined") {
		console.error({
			error: "The constructor parameter is required.",
			solution: "Provide the view as part of the constructor parameter"
		});
		return;
	}
	
	this.oView = oView;
	this.addMessages = addMessages.bind(this);
	this.openPopover = openPopover.bind(this);
	
	oView.setModel(oMessageManager.getMessageModel(), "mHub");
	
	this.setView = function (_oView) {
		this.oView = _oView;
	};
};