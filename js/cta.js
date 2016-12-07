/**
 * Represents a button with custom click handlers.
 *
 * @module CTA
 * @version v2.1.0
 *
 * @author Sebastian Fitzner
 * @author Andy Gutsche
 */

/**
 * Requirements
 */
import App from 'app';
import AppModule from 'app-module';
const $ = App.$;

class CTA extends AppModule {
	/**
	 * Constructor for our class
	 *
	 * @see module.js
	 *
	 * @param {Object} obj - Object which is passed to our class
	 * @param {Object} obj.el - element which will be saved in this.el
	 * @param {Object} obj.options - options which will be passed in as JSON object
	 */
	constructor(obj) {
		let options = {
			activeClass: 'is-active',
			clickHandler: 'click',
			globalEvent: 'cta:click'
		};

		super(obj, options);
		App.registerModule && App.registerModule(CTA.info, this.el);
	}

	/**
	 * Get module information
	 */
	static get info() {
		return {
			name: 'CTA',
			version: '2.1.0',
			vc: true,
			mod: false // set to true if source was modified in project
		};
	}

	/**
	 * Get and set the active state.
	 *
	 * @param {boolean} state - active state
	 */
	get active() {
		return this._active;
	}

	set active(state) {
		this._active = state;
	}

	/**
	 * Initialize the view and merge options
	 *
	 */
	initialize() {
		if (this.$el.is('.' + this.options.activeClass)) {
			this.active = true;
		}

		super.initialize();
	}

	/**
	 * Bind events
	 *
	 * Listen to open and close events
	 */
	bindEvents() {
		let fnOnClick = this.onClick.bind(this);

		// Local events
		this.$el.on(this.options.clickHandler, fnOnClick);
	}

	/**
	 * Close method
	 *
	 * Remove the active class, set label and trigger global event
	 *
	 * @public
	 */
	close() {
		this.$el.removeClass(this.options.activeClass);
		this.active = false;
	}

	/**
	 * Open method
	 *
	 * Add the active class, set label and trigger global event
	 *
	 * @public
	 */
	open() {
		this.$el.addClass(this.options.activeClass);
		this.active = true;
	}

	/**
	 * Click event method
	 *
	 * This method should be overriden when you want to use the button view
	 * @see button-init.js
	 *
	 * @param {event} e - event object
	 */
	onClick(e) {
		e.preventDefault();

		if (typeof this.clickHandler === 'function') {
			if (this.active) {
				this.close();
			}
			else {
				this.open();
			}

			this.clickHandler.apply(this, arguments);
		} else {
			console.log('You need to inherit from ' + this + ' and override the onClick method or pass a function to ' + this + '.clickHandler !');
		}
	}

	/**
	 * Click handler
	 *
	 * This method is public and can be overridden by
	 * other instances to support a generic button module
	 */
	clickHandler() {
		App.Vent.trigger(this.options.globalEvent, {
			el: this.el,
			isActive: this.active,
			options: this.options
		});
	}
}

export default CTA;