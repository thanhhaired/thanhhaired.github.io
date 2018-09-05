<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'untitled3');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '2<@MF8<OZX_b -[uzXS@k;xwhs:Xx)0VM%4X`OD#-[ C7hnr60/s+t+_fG%3/O^y');
define('SECURE_AUTH_KEY',  'vj#S09w8jQwFl E]=e,U&M8,u*|BnkqYcBxViEBJnbgG =&pd`Him[:e>r=_BFBZ');
define('LOGGED_IN_KEY',    'c<^6mrslHhguNP,Q/z3,y.zZ&?wTS_rO6(`q8bY*%@qwT=@wyB7dgvcX7%p|3eT$');
define('NONCE_KEY',        'ZrBmTbEN|+LCrF|pxWMh7b<@_d=ql9`>Kl/&_7V-bK$;!T6k=t!J9EaDM&j0cO41');
define('AUTH_SALT',        ']`7=&^b?c?AZNICV#;%ix$(|v7LG>J*@HVK9TEHM@z2&r-T5oKrkId<N,TvMS274');
define('SECURE_AUTH_SALT', 'w5b9[7<SEfAyX0 oEF6&LPSVg1@KI7?}hHbf{F&vdk+GLj|bCU+qbg[E#khC&Tcz');
define('LOGGED_IN_SALT',   'OX~Ma-taxnZrzd_G]ZYdcPw.7PAhCoZ|4(5/[HJ ]N-gZ.}f/W5&oPaFkuz<G3Hq');
define('NONCE_SALT',       'uB}})/M]!2Y2FbX5gVo_)>6&AYpjLGBl(7?I,]Qc3M| $H|6gnH2yJPXA7mEhVmO');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
