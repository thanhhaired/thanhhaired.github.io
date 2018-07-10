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
define('DB_NAME', 'cts');

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
define('AUTH_KEY',         'fn+07o-t5pPfEx{4zEZf~M=D2>h!$E8$WA5ywvZZKtLZI3$vRBnuQq0BS[);7s|o');
define('SECURE_AUTH_KEY',  'BjjM.,(#gv-wqX:#B:Io0F$*,,-*AJm^ZsV>B%~pnO4DPCw%jai@5PI3$LjFILjj');
define('LOGGED_IN_KEY',    'vDv^6B$ AD(um)7leU;w:KGK/mwG<(;^m,V_8:I+[^NO3=elXeheXHZX6Iz>m v]');
define('NONCE_KEY',        '7W[@R;k]{k5mpe#{?i.i0[U^:[6cfPShr63C*VTLDig-xq 38<r3O-}lc{T:$D_~');
define('AUTH_SALT',        '|@9gI[|jA2-Z1N*=N!/e!tsayrWWS+;R9I80H=FEDD`}]eCE5>K.z:tAU-Pu+>la');
define('SECURE_AUTH_SALT', 'dlVu_ko<UQmPI<r^+:K~p[R.a$ KuboA=%?:N9?:D2jNv$-!`RuV*ZWlx1;^4+Sk');
define('LOGGED_IN_SALT',   ';_:q&EcHNdGbcLD|s>7t_Af0c =VNsP>=H<hz-)Zj.ScA@TqHS?X@_2IutIXAdHq');
define('NONCE_SALT',       '~ctv&&+S an|I8k[?2dOBU{eo{+uk6tU6,NSNsLmDWA8pJCda~%/R.%c0aXMG`y>');

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
