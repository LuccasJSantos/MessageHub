# MessageHub
This is a library which simplifies the implementation of SAP Fiori's MessagePopover control.

### Constructor
  this.mHub = new MessageHub(view);

### Methods
#### addMessages(settings)
  Adds new messages to the hub.
  
**Available Settings**
- title
    - ***default***: "Message"
- message
    - ***default***: ""
- additionalInfo
    - ***default***: ""
- type
    - ***default***: "Information" or "" if type by any means is not available in the namespace *sap.ui.core.MessageType*.

**Implementation**
  this.mHub.addMessages({
    title: "Error Deleting Files",
    message: "Files could not be deleted.",
    additionalInfo: "The files might be opened by another process.",
    type: "Error"
  });
  
The following code will output:
*Image here*

A message with an "additionalInfo" property can be clicked, the output will be as follows:
*Image Here*

#### openPopover(settings)
  Open the message popover by the provided control.
  
**Available Settings**
- ***openBy***: The object control which opens the popover.
- ***fragmentPath***: The absolute fragment namespace.

**Implementation**
  onOpenMessageHubPress: function (oEvent) {
    this.mHub.openPopover({
      openBy: oEvent.getSource(),
      fragmentPath: "myappp.library.MessageHub.MessageHub"
    });
  }
  
  *myapp*: application root;<br>
  *myapp.library*: library folder, just like the controller, view, etc folders;<br>
  *myapp.library.MessageHub*: MessageHub folder;<br>
  *myapp.library.MessageHub.MessageHub*: xml fragment;
