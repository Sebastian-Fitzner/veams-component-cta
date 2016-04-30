/**
 * Represents a button with global event emission.
 *
 * @module CTA
 * @version v1.1.1
 *
 * @author Andy Gutsche
 */

import Helpers from '../../utils/helpers';
import App from '../../app';
import AppModule from '../_global/module';
const $ = App.$;

class CTA extends AppModule {
	/**
	 * Constructor for our class
	 *
	 * @see module.js
	 *
	 * @param {obj} obj - Object which is passed to our class
	 * @param {obj.el} obj - element which will be saved in this.el
	 * @param {obj.options} obj - options which will be passed in as JSON object
	 */
	constructor(obj) {

		let options = {
			activeClass: 'is-active',
			closeLabel: false,
			ctaContent: '[data-js-atom="cta-content"]',
			globalEvent: false,
			openLabel: false
		};

		super(obj, options);
		App.registerModule && App.registerModule(CTA.info);
	}

	/**
	 * Get module information
	 */
	static get info() {
		return {
			name: 'CTA',
			version: '1.1.1'
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

		if (!this.options.globalEvent) {
			console.warn('CTA: this.options.globalEvent not set - seems to be my day off :)');

			return;
		}

		this.$ctaContent = $(this.options.ctaContent, this.$el);
		super.initialize();

		if (this.$el.is('.' + this.options.activeClass)) {
			this.active = true;
		}
	}

	/**
	 * Bind events
	 *
	 * Listen to open and close events
	 */
	bindEvents() {
		let onClick = this.onClick.bind(this);

		// Local events
		this.$el.on(App.clickHandler, onClick);
	}

	/**
	 * Close method
	 *
	 * Remove the active class, set label and trigger global event
	 *
	 * @public
	 */
	close() {

		if (this.options.closeLabel) {
			this.$ctaContent.text(this.options.closeLabel);
		}

		this.$el.removeClass(this.options.activeClass);
		this.active = false;

		this.triggerGlobalEvent();
	}

	/**
	 * Open method
	 *
	 * Add the active class, set label and trigger global event
	 *
	 * @public
	 */
	open() {

		if (this.options.openLabel) {
			this.$ctaContent.text(this.options.openLabel);
		}

		this.$el.addClass(this.options.activeClass);
		this.active = true;

		this.triggerGlobalEvent();
	}


	/**
	 * Global event trigger method
	 *
	 * Trigger global event
	 */
	triggerGlobalEvent() {

		App.Vent.trigger(this.options.globalEvent, {
			el: this.el,
			isActive: this.active,
			options: this.options
		});
	}

	/**
	 * Click event method
	 *
	 * Handles click
	 *
	 * @param {event} e - event object
	 */
	onClick(e) {
		e.preventDefault();

		if (this.active) {
			this.close();
		}
		else {
			this.open();
		}
	}
}

export default CTA;