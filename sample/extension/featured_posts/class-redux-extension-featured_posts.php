<?php
/**
 * Redux Featured Posts Extension Class
 * Short description.
 *
 * @package Redux Extentions
 * @class   Redux_Extension_Featured_Posts
 * @version 1.0.0
 *
 * There is no free support for extension development.  This example is 'as is'.  If you need assitance,
 * please consider a Premium Support purchase: https://redux.io/extension/premium-support
 *
 * Please be sure to replce ALL instances of "Featured Posts" and "Featured_Posts" with the name of your actual
 * extension.  Please also change the file name so the 'my-extension' portion is also the name of your extension.
 * Please use dashes and not underscores in the filename.  Please use underscores instead of dashes in the classname.
 *
 * Thanks!  :)
 */

defined( 'ABSPATH' ) || exit;

// Don't duplicate me!
if ( ! class_exists( 'Redux_Extension_Featured_Posts', false ) ) {

	/**
	 * Class Redux_Extension_Featured_Posts
	 */
	class Redux_Extension_Featured_Posts extends Redux_Extension_Abstract {
		/**
		 * Set extension version.
		 *
		 * @var string
		 */
		public static $version = '1.0.0';

		/**
		 * Set the name of the field.  Ideally, this will also be your extension's name.
		 * Please use underscores and NOT dashes.
		 *
		 * @var string
		 */
		private $field_name = 'my_field';

		/**
		 * Set the friendly name of the extension.  This is for display purposes.  No underscores or dashes are required.
		 *
		 * @var string
		 */
		private $extension_name = 'Featured Posts';

		/**
		 * Set the minumum required version of Redux here (optional).
		 *
		 * Leave blank to require no minimum version.  This allows you to specify a minimum required version of
		 * Redux in the event you do not want to support older versions.
		 *
		 * @var string
		 */
		private $minimum_redux_version = '4.0.0';

		/**
		 * Redux_Extension_Featured_Posts constructor.
		 *
		 * @param object $parent ReduxFramework pointer.
		 */
		public function __construct( $parent ) {
			parent::__construct( $parent, __FILE__ );

			if ( is_admin() && ! $this->is_minimum_version( $this->minimum_redux_version, self::$version, $this->extension_name ) ) {
				return;
			}

			$this->add_field( 'my_field' );
		}
	}
}
