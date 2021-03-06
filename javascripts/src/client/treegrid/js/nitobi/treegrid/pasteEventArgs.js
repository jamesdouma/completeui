/*
 * Nitobi Complete UI 1.0
 * Copyright(c) 2008, Nitobi
 * support@nitobi.com
 * 
 * http://www.nitobi.com/license
 */
nitobi.lang.defineNs('nitobi.treegrid');

/**
 * Constructs a PasteEventArgs object.
 * @class When you subscribe to Grid events through the declaration, you
 * can optionally pass information about the event to the function
 * registered to handle it.  You do this by using the eventArgs keyword.
 * @constructor
 * @param {nitobi.treegrid.Grid} source The object which is firing the event. 
 * @private
 */
nitobi.treegrid.PasteEventArgs = function(source)
{
	/**
	 * @private
	 */
	this.grid = source;
	/**
	 * @private
	 */
	this.event = nitobi.html.Event;
}

/**
 * Gets the Grid that fired the event.
 * @type nitobi.treegrid.Grid
 */
nitobi.treegrid.PasteEventArgs.prototype.getSource = function()
{
	return this.grid;
}
/**
 * Gets the native browser Event object that is associated with the event. 
 * This may be null in some case.
 * @type nitobi.html.Event
 */
nitobi.treegrid.PasteEventArgs.prototype.getEvent = function()
{
	return this.event;
}