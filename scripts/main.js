/**
 * Created by Piotr Walczyszyn (@pwalczyszyn)
 *
 * User: pwalczys
 * Date: 2/16/12
 * Time: 9:20 AM
 */

require.config({
    paths:{
        jquery:'libs/jquery/jquery-1.7.1',
        underscore:'libs/underscore/underscore-loader',
        Backbone:'libs/backbone/backbone-loader',
        BackStack:'libs/backstack/backstack',
        order:'libs/require/order-1.0.5',
        text:'libs/require/text-1.0.6',
        domReady:'libs/require/domReady-1.0.0'
    }
});

require(['order!jquery', 'order!app'],
    function ($, app) {

        app.init();

    });